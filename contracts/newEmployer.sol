// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract  newEmployer{

address public owner;
mapping (address=>bool) public employees;

//a constructor to initialize variables
constructor() public {
    owner = msg.sender;
}

modifier onlyOwner(){
    require(owner == msg.sender,"Only owner can perform this action");
    _;
}

//Function to get all the employees of a new organization, onboard
function registerNewEmployee(address employeeAddress) public onlyOwner{
    
    require(!employees[employeeAddress],"Already registered");
    employees[employeeAddress] = true;
}
}