import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Contact Us | Team Excellent Coaching Institute Patna</title>
        <meta 
          name="description" 
          content="Get in touch with Team Excellent Coaching Institute, Patna. Contact us for admissions, JEE & NEET coaching, or foundation courses (Class 6–10). Visit our center, call, or send us a WhatsApp message." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="Team Excellent contact, Team Excellent, coaching institute Patna address, Team Excellent phone number, JEE coaching contact, NEET coaching Patna, foundation course contact, best coaching in Bihar" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta property="og:description" content="Reach Team Excellent Coaching Institute, Patna for admissions, JEE/NEET queries, or foundation course details. Call, email, or visit us today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/contact" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta name="twitter:description" content="Get in touch with Team Excellent Coaching Patna for admission queries, coaching details, and more." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>

      {/* ✅ Page Content */}
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  )
}
