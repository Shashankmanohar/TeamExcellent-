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

        {/* ContactPage & LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us | Team Excellent Coaching Institute Patna",
            "description": "Get in touch with Team Excellent Coaching Institute, Patna. Contact us for admissions, JEE & NEET coaching, or foundation courses (Class 6–10).",
            "url": "https://teamexcellentcareerinstitute.in/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Team Excellent Career Institute",
              "image": "https://teamexcellentcareerinstitute.in/logo192.png",
              "url": "https://teamexcellentcareerinstitute.in",
              "telephone": "+91-9942000371",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 08:00-20:00",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.6032",
                "longitude": "85.1746"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9942000371",
                "contactType": "admissions desk",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://teamexcellentcareerinstitute.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://teamexcellentcareerinstitute.in/contact"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
