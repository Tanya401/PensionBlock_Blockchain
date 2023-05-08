// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract user{
 
struct userDetails{
     uint256 aadharNo;
    string  name;
    address userAddress;
    uint256 age;
    uint256 balance;
}

 mapping(address=>userDetails) public mp;

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
}


