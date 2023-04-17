const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyWeb3 = createAlchemyWeb3("https://eth-mainnet.g.alchemy.com/v2/32Cx_GFT9f4y5CV6hNeyj2O2p6KRYBfQ");
const PRIVATE_KEY = "1d796391b2ff49a72323670cc57e1e6ae51b3f3da914175971ef8be155b0a0b4";
const account = alchemyWeb3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

const transaction = {
    from: "0xCCc74E6B6D26bdf9d4cc544ae66652836D1199b1",
    to: "0xD12DB9d34809C75cb61D725f95882ea388044171",
    value: alchemyWeb3.utils.toWei('0.02', 'ether')
};

alchemyWeb3.eth.sendTransaction(transaction)
.on('transactionHash', function(hash){
    console.log("Transaction Hash", hash);
})
.on('receipt', console.log)
.on('error', console.error);
