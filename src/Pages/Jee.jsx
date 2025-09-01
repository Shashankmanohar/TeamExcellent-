import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import JeeContent from '../Components/JeeContent'

export default function Jee() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>JEE Coaching | Team Excellent Institute</title>
        <meta 
          name="description" 
          content="Join Team Excellent for the best JEE coaching with expert IIT faculty, personalized mentoring, and proven results. Specialized programs for JEE Main & Advanced." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="JEE coaching Patna, Team Excellent, IIT JEE preparation, best JEE institute, JEE Main coaching, JEE Advanced coaching, Team Excellent JEE, top IIT coaching, engineering entrance coaching Bihar" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="JEE Coaching | Team Excellent Institute" />
        <meta property="og:description" content="Crack JEE with Team Excellent’s expert faculty and structured courses for JEE Main & Advanced." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/jee" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Coaching | Team Excellent Institute" />
        <meta name="twitter:description" content="Enroll at Team Excellent for JEE Main & Advanced coaching with IIT faculty." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>

      {/* ✅ Page Content */}
      <Navbar />
      <JeeContent />
      <Footer />
    </>
  )
}
