import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Strip from '../Components/Strip'
import Whychooseus from '../Components/Whychooseus'
import Programs from '../Components/Programs'
import Features from '../Components/Features'
import TrustedSection from '../Components/TrustedSection'
import Questions from '../Components/Questions'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute</title>
        <meta
          name="description"
          content="Looking for the best IIT-JEE & NEET coaching in Patna? Team Excellent Career Institute turns Bihar's talent into doctors and engineers with expert mentoring and smart classes. Enroll for Class 6-10 foundations, JEE, and NEET success."
        />
        <meta
          name="keywords"
          content="IIT-JEE coaching in Patna, NEET coaching in Patna, best coaching for JEE in Bihar, medical entrance preparation, Team Excellent Career Institute, Patna coaching center, Class 6 to 10 foundation"
        />
        <meta property="og:title" content="IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute" />
        <meta property="og:description" content="Turning Bihar's Talent into IITians & Doctors. Join Team Excellent for the best JEE & NEET preparation in Patna." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in" />
        <meta property="og:image" content="/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute" />
        <meta name="twitter:description" content="Join Team Excellent for JEE, NEET, and school foundation success in Patna." />
        <meta name="twitter:image" content="/logo192.png" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "description": "Premier IIT-JEE and NEET coaching institute in Patna, Bihar, specializing in competitive exam preparation and school foundations.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "100"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What courses are offered at Team Excellent Career Institute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute offers coaching for IIT-JEE, NEET, and Foundation courses for Class 6 to Class 10 students, focusing on strong concept building and competitive exam preparation."
                }
              },
              {
                "@type": "Question",
                "name": "Are doubt classes available for students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Regular doubt-clearing classes are conducted where students can ask questions and get detailed explanations from faculty members. These sessions help students strengthen concepts and improve confidence."
                }
              },
              {
                "@type": "Question",
                "name": "What are smart classes and how do they help students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Smart classes use digital learning tools, visual explanations, and interactive teaching methods to make complex topics easier to understand. This improves student engagement and helps in better concept retention."
                }
              },
              {
                "@type": "Question",
                "name": "Can Bihar Board students prepare for JEE and NEET?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Bihar Board students can successfully prepare for JEE and NEET. The syllabus of these competitive exams is largely based on NCERT, which makes it suitable for Bihar Board students as well."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <Carousel />
      <Strip />
      <TrustedSection />
      <Programs />
      <Whychooseus />
      <Features />
      <Testimonials />
      <Questions className="mb-10" />
      <Footer />
    </>
  )
}
