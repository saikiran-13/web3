let Web3 = require('web3')
//Providing the ganache rpc server url inside HttpProvider to interact with local blockchain 
//3 providers HttpProvider,IpcProvider,Websocketprovider
//providers contains lot of details like credentials,events,agents,connected,headers,timeouts

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
// console.log(web3.eth.accounts);
web3.eth.getBalance("0x97852040B966DbaDE9C12D1E98f9736ABa800110").then((balance)=>console.log(balance))//This will give the balance in wei
web3.eth.getBalance("0x97852040B966DbaDE9C12D1E98f9736ABa800110").then((balance)=>console.log(web3.utils.fromWei(balance,"ether")))//converts from wei to ether
web3.eth.sendTransaction({//Here we are sending the transcation to the network and private key not needed bydefault it uses account associated with web3 provider
    from:"0x77A17cd571c55B12218b914f273Bb142773f6e89",
    to:"0x97852040B966DbaDE9C12D1E98f9736ABa800110",
    value:web3.utils.toWei("0.5","ether"),
    gas:21000
}).on('receipt',console.log)

// const transaction = {
//     from:"0x77A17cd571c55B12218b914f273Bb142773f6e89",
//     to:"0x97852040B966DbaDE9C12D1E98f9736ABa800110",
//     value:web3.utils.toWei("1","ether"),
//     gas:500000
//     // gasPrice: web3.utils.toWei('10', 'gwei')
// }
// const account = web3.eth.accounts.privateKeyToAccount("0x58bfe616803be347319fdbaf08ecb7f1bb388cba7c22a9734b2db8037ab184f2");

// web3.eth.signTransaction(transaction,account.privateKey).then((signedTx) => {
//     web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
//         if (!error) {
//           console.log("🎉 The hash of your transaction is: ",hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
//         } else {
//           console.log("❗Something went wrong while submitting your transaction:", error)
//         }}
//     )});
web3.eth.getTransactionCount("0x97852040B966DbaDE9C12D1E98f9736ABa800110").then(console.log)// This provides the nonce
// web3.eth.getTransactionReceipt("0xb7dd2abb1690ca8d5dcdb4bfcda5b5bd66526f1ebf1c41da68b2c0d90cba26a9").then(console.log);//Takes transaction hash as parameter
// console.log(web3)
