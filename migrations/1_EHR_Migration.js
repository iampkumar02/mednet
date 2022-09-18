const EMR = artifacts.require("EMR");

module.exports = function(deployer,network,accounts){
    deployer.deploy(EMR,{from:accounts[0]});
}