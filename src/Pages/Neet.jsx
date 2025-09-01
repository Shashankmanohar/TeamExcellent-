import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NeetContent from '../Components/NeetContent'

export default function Neet() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>NEET Coaching | Team Excellent Institute</title>
        <meta 
          name="description" 
          content="Crack NEET with Team Excellent’s expert faculty, personalized mentoring, and result-oriented courses. Join the best medical coaching for NEET preparation in Patna." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="NEET coaching Patna, Team Excellent, medical entrance coaching Bihar, best NEET institute, NEET preparation, NEET UG coaching, biology coaching Patna, Team Excellent NEET, top medical coaching Bihar" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="NEET Coaching | Team Excellent Institute" />
        <meta property="og:description" content="Achieve your dream medical seat with Team Excellent’s NEET coaching, led by expert faculty and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/neet" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEET Coaching | Team Excellent Institute" />
        <meta name="twitter:description" content="Best NEET coaching in Patna for medical aspirants. Join Team Excellent for success in NEET UG." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>

      {/* ✅ Page Content */}
      <Navbar />
      <NeetContent />
      <Footer />
    </>
  )
}
