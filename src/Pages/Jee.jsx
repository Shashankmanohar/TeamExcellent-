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
        <title>Best JEE Coaching in Patna | IIT JEE Main & Advanced - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for the best JEE coaching in Patna? Team Excellent Career Institute offers top IIT-JEE (Mains & Advanced) coaching with expert IITian faculty, regular test series, and personalized mentoring." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="jee coaching in patna, iit coaching in patna, best iit coaching in patna, best coaching for jee in patna, best institute for iit in patna, top 10 coaching institute in patna for iit, top 10 iit jee coaching in patna, top institute in patna for iit jee, iit jee coaching in patna, Team Excellent, Team Excellent Patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Best JEE Coaching in Patna | IIT JEE Main & Advanced - Team Excellent" />
        <meta property="og:description" content="Enroll in the best JEE coaching in Patna at Team Excellent. Get top-class preparation for JEE Main & Advanced from expert IITian faculty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/jee-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/jee-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best JEE Coaching in Patna | IIT JEE Prep" />
        <meta name="twitter:description" content="Crack JEE Main & Advanced with Patna's leading JEE coaching institute. Expert faculty and personal mentorship." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
        
        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "IIT-JEE (Main & Advanced) Coaching Program",
            "description": "Comprehensive JEE coaching program for aspirants covering physics, chemistry, and mathematics with regular tests, performance tracking, and expert mentoring by IITian faculty.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "510"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <JeeContent />
      </main>
      <Footer />
    </>
  )
}
