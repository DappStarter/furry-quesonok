require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strike rival noise hospital hover kitten slot ghost'; 
let testAccounts = [
"0xd237e4e2565f0c486fe4ed2f64fdf565ea350abfb012d4ffbf2740f788bcf300",
"0xab50c04a83e8092b511f69b31e08cb9ccc58b8f75d1a1d02f764eae885822ce8",
"0xb042cace3937603da73171627a546dca588b6227ae11ad1f5fc587171c28fa05",
"0x7305fd0919159e1350edd88fae95e5420af684fa7eee37ddb1cc2c7df758a626",
"0x8d468433659e4f9a04413dc2b8a1811faa16081008d73b953f1758c89d137426",
"0x08ff343a17def35e28144b19e966e9bae94ed6ccc076dd73a2f0bf28ace4c6f0",
"0x010d595e8b378f3085ef93c976d8b10ba4d3177ad50eedbe4864c3f3934230cb",
"0x31e6abdefd8f1584fbae7e4d094669199830b61c0bcf8470c9fdf8e87e0d9e4d",
"0x704cd1c450c8a4635fdcc9d80aac38e189b9ad94459ba0b41b70370787cd02df",
"0x41a0554e1dfe99953e4e492594df81371fedc9636e83a8d663b685804d8340c4"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
