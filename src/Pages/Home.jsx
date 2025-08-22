import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Whychooseus from '../Components/Whychooseus'
import Footer from '../Components/Footer'
import Questions from '../Components/Questions'
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Whychooseus/>
      <Questions className='mb-10'/>
      <Footer />
    </>
  )
}
