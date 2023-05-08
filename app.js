const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0x1550e1e4650f61325C9d9d613d6bb17eeA06F28b";
const contractAbi = [
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_aadharNo",
				"type": "uint256"
			}
		],
		"name": "setUserDetails",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "employer",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aadharNo",
				"type": "uint256"
			}
		],
		"name": "getUserDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "mp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "aadharNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const pensionSystemContract = new web3.eth.Contract(contractAbi, contractAddress);


async function register() {
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	const aadharNo = document.getElementById("aadharNo").value;
  
	const accounts = await web3.eth.getAccounts();
	const sender = accounts[0];
  
	try{
	const result = await pensionSystemContract.methods.setUserDetails(age, name,aadharNo).send({ from: sender });
	console.log(result);
	alert('Yay!! User Registered')
	}
	catch(eror){
		alert("User exists on this address, please contact the admin!!")
	}
  }


  async function showBalance() {
	const accounts = await web3.eth.getAccounts();
	const userAddress = accounts[0];
  
	const aadharNo = document.getElementById("aadharNo1").value;
  
	try {
	  const userDetails = await pensionSystemContract.methods.getUserDetails(aadharNo).call({ from: userAddress });
  
	  const name = userDetails[0];
	  const age = userDetails[1];
	  const balance = userDetails[2];
  
	  // display user details in the UI
	  const message = `Name: ${name}\nAge: ${age}\nBalance: ${balance} wei`;
	  alert(message);
	} catch (error) {
	  // user not found
	  alert("User not registered");
	}
  }
  
  

//  async function withdraw() {
  
//     const amount = document.getElementById("amount").value;
    
//     const accounts = await web3.eth.getAccounts();
//     const sender = accounts[0];
//   try{
//     const result =  await pensionSystemContract.methods.withdraw(amount).send({from: sender});
//     console.log(result);
//   } catch(error){
// 	alert("User not eligible");
//   }
//  }


async function withdraw() {
	const amountInWei = document.getElementById("amount").value;
	const amountInEther = web3.utils.fromWei(amountInWei, 'ether');
  
	const accounts = await web3.eth.getAccounts();
	const sender = accounts[0];
	
	try {
	  const result =  await pensionSystemContract.methods.withdraw(amountInWei).send({from: sender});
	  console.log(result);
	} catch(error) {
	  alert("User not eligible");
	}
  }
  
