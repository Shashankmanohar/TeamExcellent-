import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AdmissionProcess from '../Components/AdmissionProcess'

export default function Admission() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Admission Process | Team Excellent Coaching Institute</title>
        <meta
          name="description"
          content="Explore the admission process at Team Excellent Coaching Institute for JEE, NEET, and school-level foundations (Class 6–10). Join us to excel with expert guidance and proven results."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Team Excellent admission, Team Excellent, JEE coaching admission, NEET coaching admission, foundation courses admission, Patna coaching enrollment, how to join Team Excellent, IIT JEE admission process, medical coaching admission Bihar"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Admission Process | Team Excellent Coaching" />
        <meta property="og:description" content="Step into success with Team Excellent. Learn about our admission process for JEE, NEET, and school foundations (Class 6–10)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/admission" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/admission" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admission Process | Team Excellent Coaching" />
        <meta name="twitter:description" content="Know how to enroll at Team Excellent for JEE, NEET, and foundation courses." />
        {/* WebPage & FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Admission Process | Team Excellent Coaching Institute",
            "description": "Explore the admission process at Team Excellent Coaching Institute for JEE, NEET, and school-level foundations (Class 6–10).",
            "url": "https://teamexcellentcareerinstitute.in/admission"
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
                "name": "Admission Process",
                "item": "https://teamexcellentcareerinstitute.in/admission"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <AdmissionProcess />
      </main>
      <Footer />
    </>
  )
}
