import React from 'react'
import { Helmet as Head } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AdmissionProcess from '../Components/AdmissionProcess'

export default function Admission() {
  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Admission Process | Team Excellent Coaching Institute</title>
        <meta 
          name="description" 
          content="Explore the admission process at Team Excellent Coaching Institute for JEE, NEET, and school-level foundations (Class 6–10). Join us to excel with expert guidance and proven results." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="Team Excellent admission, JEE coaching admission, NEET coaching admission, foundation courses admission, Patna coaching enrollment, how to join Team Excellent, IIT JEE admission process, medical coaching admission Bihar" 
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Admission Process | Team Excellent Coaching" />
        <meta property="og:description" content="Step into success with Team Excellent. Learn about our admission process for JEE, NEET, and school foundations (Class 6–10)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/admission" />
        <meta property="og:image" content="/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admission Process | Team Excellent Coaching" />
        <meta name="twitter:description" content="Know how to enroll at Team Excellent for JEE, NEET, and foundation courses." />
        <meta name="twitter:image" content="/logo192.png" />
      </Head>

      {/* ✅ Page Content */}
      <Navbar />
      <AdmissionProcess />
      <Footer />
    </>
  )
}
