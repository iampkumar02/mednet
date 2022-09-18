var HDWalletProvider = require('@truffle/hdwallet-provider');
var mnemonic = "Mnemonic";

module.exports = {
  contracts_build_directory:"./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    rinkeby:{
      provider: function() { 
        return new HDWalletProvider(mnemonic, InfuraAPI);
       },
       network_id: 4,
       gas: 4500000,
       gasPrice: 10000000000
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
