import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Banner from '@/components/Banner'
import HowItWorks from '@/components/HowItWorks'
import DreamCompany from '@/components/DreamCompany'
import Categories from '@/components/Categories'
import AddedJobs from '@/components/AddedJobs'
import Feedback from '@/components/Feedback'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>JobNow</title>
      </Head>
      <div className="bg-white text-black">
        <NavBar />
        <Banner />
        <HowItWorks />
        <DreamCompany />
        <Categories />
        <AddedJobs />
        <Feedback />
        <Footer />
      </div>
    </>
  )
}
