require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture strike rival night smile hockey private furnace giant'; 
let testAccounts = [
"0x5defd07503738db032fc7f1084b31307a05d948ab88b54f127a87fee6d425246",
"0x81e7f3d6d60872c9869518224d8b48c321d965e214247f8c26baa059b0685b69",
"0xc5c02f850431361867b0689b52df75220ddc0ee2497318e5698f6d5bbbbf04d2",
"0x181b89d1b6bdb18b1e0aaa3f87e00f3d5361bbe8f0035918e03f436388c279ee",
"0x9311faaa813aebd8b4f4970aafde1cd5a12635eded06984b12533d64403024fe",
"0xd4603046d6450f9afd1415dc427c122f7a86de24bcd7fbe23069900bfade777e",
"0x1e79be508946eaf3bdba4e218ee4084a71c14a532c257bbde22ede24f1f3036f",
"0xe55765984f4c970e4d63070795524282bcb39d4b4b0c706db9d986184bd9aef9",
"0x8b3d27efa53fedd7ac06a982bad63c890e677dc2b55426e55a08fcfc25e6a1fa",
"0xccd075df8628f79f8c38a5ab3cadbdcf317bfcddee24daff3ddf2ce71571e004"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


