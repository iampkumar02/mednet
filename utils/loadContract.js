const NETWORK_ID = 5777
const Web3 = require('web3');
// import { useWeb3 } from '@components/providers';
const detectProvider = require('@metamask/detect-provider');

const provider = (async () => {await detectProvider.detectEthereumProvider()})();
const web3= new Web3(provider)
 const loadContract = ( web3) => {
  const Artifact = require('../public/contracts/EMR.json')
    let contract = null

    contract = new web3.eth.Contract(
      Artifact.abi,
      Artifact.networks[NETWORK_ID].address
    )

  return contract
}
const dcontract=loadContract(web3);
// console.log(dcontract);
// export default dcontract;
console.log(dcontract.methods.getHospitalsAddress().call());
