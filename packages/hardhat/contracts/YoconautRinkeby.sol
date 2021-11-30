pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

/*
 Made by @blind_nabler with scaffold-eth
 Fork this project on github!
*/

contract YoconautRinkeby is ERC721  {

  address public constant receiver = 0xc9EC8Ad5e1e118D9E8e736DEd68E12d96fba283b;
  uint256 public price = 30 ether;

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Yoconaut", "YOCONAUT") {
  }

  function claim() public payable returns (uint256) {
      (bool success,) = receiver.call{value:price}("");
      require( success, "could not send");
      _tokenIds.increment();
      uint256 id = _tokenIds.current();
      _mint(msg.sender, id);
      return id;
  }

  function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
          if (_i == 0) {
              return "0";
          }
          uint j = _i;
          uint len;
          while (j != 0) {
              len++;
              j /= 10;
          }
          bytes memory bstr = new bytes(len);
          uint k = len;
          while (_i != 0) {
              k = k-1;
              uint8 temp = (48 + uint8(_i - _i / 10 * 10));
              bytes1 b1 = bytes1(temp);
              bstr[k] = b1;
              _i /= 10;
          }
          return string(bstr);
   }


  function tokenURI(uint256 tokenId) public view override returns (string memory) {
      require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
      require(tokenId <= 400, 'Invalid tokenID');
      string memory base = _baseURI();
      return string(abi.encodePacked(base, '/', uint2str(tokenId), ".json"));
}
  function contractURI() public view returns (string memory) {
      return "https://bonez.mypinata.cloud/ipfs/QmUnTbsdUoPttRBMSrrDDogYtSBi3uWeT6khwh2nsJw8Dx";
  }

}
