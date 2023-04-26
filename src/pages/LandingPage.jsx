import React from 'react'
import Image from 'next/image'

// Component Imports
import LandingNavbar from '../components/LandingNavbar'
import LandingInfoBar from '../components/LandingInfoBar'
import Footer from '../components/Footer'

// Asset Imports




function LandingPage() {
  return (
    <div className='flex flex-col h-screen'>
      <LandingNavbar />
      <div className='flex flex-1 w-full bg-gray-300'>
        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold mb-5 text-center'>Welcome to BandMates!</h1>
          <p className='text-xl'>
            A place for musicians to connect, share and collaborate on their musical endeavors.
            Wheter you're looking for people to jam or need a place to share ideas with your band members BandMates has you covered.
            With constantly improving tools and resources you can take your music from idea to finished product in no times.
            Sign up for free and find what you need to take your music to the next level.
          </p>
        </div>
        <div className='flex-1'>
          <Image
            src='/landing_page_band.jpg'
            alt='band'
            width={72}
            height={72}
            className='w-full h-96 object-cover object-right'
          />
        </div>
      </div>
      <LandingInfoBar />
      <Footer />
    </div>
  )
}

export default LandingPage