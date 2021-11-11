require("@nomiclabs/hardhat-waffle");
const pid = "f20ef078eb0547c798f9c5e10b7e72e8"
const privatekey="761e3e02bdea96ccbf046a16221ab08f50d6a4a0219c9d47af0553b3c49268de"
module.exports={
    defaultNetwork:"hardhat",
    networks:{
        hardhat:{
        	chainId:1337
        },
        mainnet:{
        	url:`https://mainnet.infura.io/v3/${pid}`,
        	accounts:[privatekey]
        },
        
    },
    solidity:"0.8.4",
};
