import Image from "next/image";
import BaseLayout from "@components/Layout/BaseLayout";
import { useWeb3 } from "@components/providers";
import detectEthereumProvider from "@metamask/detect-provider";

const NETWORK_ID = 5777

const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const loadContract = ( web3) => {
const Artifact = require('@public/contracts/EMR.json')
  let contract = null
  contract = new web3.eth.Contract(
    Artifact.abi,
    Artifact.networks[NETWORK_ID].address
  )

  return contract
}
const dcontract=loadContract(web3);

export default function HospitalsPage() {
  const getHospitals = async () => await dcontract.methods.getHospitalsAddress();
  const Hospitals = getHospitals();
  console.log(Hospitals)
  return (
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        {/* console.log(Hospitals); */}
        { Hospitals.map((Hospital) =>{
        const Data=async ()=>await dcontract.methods.getHospitalData(Hospital).call();
          <div
            key={Data[3]}
            className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full">
            <div className="flex h-full">
                <Image
                  className="object-cover"
                  src={Hospital.coverImage}
                  layout="fixed"
                  width="200"
                  height="230"
                />
              </div>
              <div className="p-8">
                <div
                  className="block mt-1 text-lg leading-tight font-medium text-black">
                  {Data[0]}
                </div>
                <p
                  className="mt-2 text-gray-500">
                  {Data[1]}
                </p>
              </div>
            </div>
          </div>
})}
      </section>
    )
  }

  HospitalsPage.Layout = BaseLayout