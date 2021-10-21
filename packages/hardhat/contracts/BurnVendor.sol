pragma solidity ^0.5.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
interface TOKEN {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function burn(uint256 value) external;
}

contract BurnVendor {

  TOKEN public akitaToken;

  uint256 constant public tokensPerEth = 1495540000;

  uint256 constant public burnMultiplier = 10;

  address payable constant public withdrawAddress = 0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1;

  address constant public burnAddress = 0xdEad000000000000000000000000000000000000;

  constructor(address akitaAddress) public {
    akitaToken = TOKEN(akitaAddress);
  }

  function() external payable {
    buy();
  }

  event Buy(address who, uint256 amount, uint256 burn);

  function buy() public payable {

    uint256 amountOfTokensToBuy = msg.value * tokensPerEth;

    uint256 amountOfTokensToBurn = amountOfTokensToBuy * burnMultiplier;

    akitaToken.transferFrom(withdrawAddress, burnAddress, amountOfTokensToBurn);

    akitaToken.transferFrom(withdrawAddress, msg.sender, amountOfTokensToBuy);

    withdrawAddress.transfer(msg.value);

    emit Buy(msg.sender, amountOfTokensToBuy, amountOfTokensToBurn);

  }

}