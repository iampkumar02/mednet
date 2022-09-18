
import Hero from "@components/ui/Hero"
import HospitalList from "@components/ui/HospitalList"
import BaseLayout from "@components/layout/BaseLayout"
import {getAllHospitals} from "@content/fetcher"

export default function Home({Hospitals}) {
  return (
    <>
      <Hero />
      <HospitalList
        Hospitals={Hospitals}
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllHospitals()
  return {
    props: {
      Hospitals: data
    }
  }
}

Home.Layout = BaseLayout