import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchApprovedReviews } from '../lib/reviewApi'
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
  const [reviews, setReviews] = useState([])
  const [aggregate, setAggregate] = useState({ ratingValue: "4.9", ratingCount: "120" })

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchApprovedReviews()
        if (data.success && data.reviews.length > 0) {
          setReviews(data.reviews.slice(0, 5)) // Take top 5 for schema
          const avg = data.reviews.reduce((acc, curr) => acc + curr.rating, 0) / data.reviews.length
          setAggregate({
            ratingValue: avg.toFixed(1),
            ratingCount: data.reviews.length.toString()
          })
        }
      } catch (error) {
        console.error("Schema fetch error:", error)
      }
    }
    getReviews()
  }, [])

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
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in",
              "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
              "description": "Team Excellent Career Institute is a Patna-based coaching institute providing JEE, NEET, and foundation courses for students aiming for competitive exams.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/share/1JTxznYnFg/",
                "https://www.instagram.com/team.excellent.patna",
                "https://www.linkedin.com/company/teamexcellentpatna",
                "https://www.youtube.com/@teamexcellentpatna"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": aggregate.ratingValue,
                "ratingCount": aggregate.ratingCount
              },
              "review": reviews.map(r => ({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": r.name
                },
                "datePublished": new Date(r.createdAt).toISOString().split('T')[0],
                "reviewBody": r.review,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": r.rating.toString(),
                  "bestRating": "5"
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Team Excellent Career Institute",
              "image": "https://teamexcellentcareerinstitute.in/logo192.png",
              "url": "https://teamexcellentcareerinstitute.in/",
              "telephone": "+91-9942000371",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "addressCountry": "India"
              },
              "areaServed": "Patna",
              "priceRange": "₹₹",
              "description": "Coaching institute in Patna offering JEE, NEET, and foundation courses with experienced faculty and structured learning programs."
            }
          ])}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Team Excellent Career Institute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute is a coaching institute in Patna that provides preparation for JEE, NEET, and foundation-level competitive exams."
                }
              },
              {
                "@type": "Question",
                "name": "Which courses are offered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The institute offers JEE, NEET, and foundation courses for students preparing for competitive exams."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the institute located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute is located in Patna, Bihar, India."
                }
              },
              {
                "@type": "Question",
                "name": "Are doubt classes available for students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Regular doubt-clearing classes are conducted where students can ask questions and get detailed explanations from faculty members."
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
