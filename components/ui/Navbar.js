import { useWeb3 } from "@components/providers"
import Link from "next/link"
import Button from "./Button"
import { useAccount } from "@components/web3/hooks/useAccount"
export default function Navbar() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3()
  const {account}  = useAccount()
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/EHR"><a className="font-medium mr-8 text-gray-500 hover:text-gray-900">EHR</a></ Link>
              <Link href="#"><a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a></ Link>
              <Link href="/Hospitals"><a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Hospitals</a></ Link>
              <Link href="/Patients"><a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Patients</a></ Link>
            </div>
            <div>
            { isLoading ?
                <Button
                disabled={true}
                  onClick={connect}>
                    Loading...
                </Button > :
                isWeb3Loaded ?
                account ?
                <Button className="cursor-default">
                    Hi there
                </Button> :
                <Button
                  onClick={connect}>
                    Connect
                </Button> : 
                <Button
                  onClick={() => window.open("https://metamask.io/download.html","_blank")}>
                  Install Metamask
                </Button>
              }
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}