import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'

export default function About() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>About Us | Team Excellent Coaching Institute</title>
        <meta 
          name="description" 
          content="Learn about Team Excellent, a leading coaching institute for JEE, NEET, and Class 6–10 foundations. Guided by expert faculty and led by Founder & Director Albert Newwel, IIT-BHU (M.Tech)." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="About Team Excellent,Team Excellent, JEE coaching Patna, NEET coaching Patna, foundation courses class 6 to 10, IIT-JEE preparation, medical coaching Bihar, best coaching institute in Patna, Albert Newwel IIT-BHU" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta property="og:description" content="Know more about Team Excellent and its mission to guide students towards success in JEE, NEET, and foundations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/about" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta name="twitter:description" content="Discover Team Excellent, led by IIT-BHU alumnus Albert Newwel, offering JEE, NEET, and foundation coaching with excellence." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>

      {/* ✅ Page Content */}
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  )
}
