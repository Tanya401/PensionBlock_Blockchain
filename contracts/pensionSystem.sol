// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract PensionSystem{

 address payable public employer;

 struct userDetails{
     uint256 aadharNo;
    string  name;
    address userAddress;
    uint256 age;
    uint256 balance;
}

   uint256 totalUsers = 0;

  receive () external payable {}

 constructor() {
    //  employer = payable(msg.sender);
 }

 mapping(address=>userDetails) public mp;


 function deposit() public payable {

 }
  mapping (address=>uint256) private aadharToAddress;

function setUserDetails(uint _age,string memory _name,uint256 _aadharNo) payable public {
      
       require(aadharToAddress[msg.sender] == 0, "User exists on this account, please contact the admin");
     
      mp[msg.sender].aadharNo = _aadharNo;
      mp[msg.sender].name = _name;
      mp[msg.sender].age = _age;
      mp[msg.sender].userAddress = msg.sender;
      mp[msg.sender].balance = msg.value;

      aadharToAddress[msg.sender] = _aadharNo;
 }



function getUserDetails(uint256 _aadharNo) public view returns (string memory, uint256,uint256) {
    require(mp[msg.sender].aadharNo == _aadharNo, "Invalid Aadhar Number");

    return (mp[msg.sender].name, mp[msg.sender].age,mp[msg.sender].balance);
}



   modifier limitAmount(uint256 amount) {
    require(amount <= 20 ether, "Amount cannot be more than 20 ether");
    _;
}

function withdraw(uint256 amount) public limitAmount(amount){
         require(mp[msg.sender].age >=60,"User not eligible for pension");
          require(amount>0,"You have entered an invalid amount");
          payable(msg.sender).transfer(amount);
          mp[msg.sender].balance += amount;
      } 
}
