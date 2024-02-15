//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract coffee{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is going to receive funds

    constructor(){
        owner = payable(msg.sender);
    }

    function buyCoffee(string calldata name, string calldata message) external payable{
        require(msg.value > 0, "Please pay more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns (Memo[] memory){
        return memos;
    }
}
