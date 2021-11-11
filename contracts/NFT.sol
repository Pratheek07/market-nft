//licence 

pragma solidity ^0.8.4;

import "@openzepplin/contracts/token/ERC721/ERC.sol";
import "@openzepplin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzepplin/contracts/token/utils/Counters.sol";

contract NFT is ERC721URIStorage{
	using Counters for Counters.Counter;
	Counters.Counter private _tokenid;
	address contractaddress;
	
	constructor(address marketplaceAddress) ERC721("Metaverse Tokens","METT"){
		contractaddress = marketplaceAddress;
		
	}
	
	function createToken(string memory tokenURI) public returns(uint){
		_tokenid.increment();
		uint256 newitemid = _tokenid.current();
		_mint(msg.sender,newitemid);
		_setTokenURI(newitemid,tokenURI);
		setApprovalForAll(contractaddress , true);
		return newitemid;
	}
}
