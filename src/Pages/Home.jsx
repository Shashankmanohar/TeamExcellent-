import { useState, useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchApprovedReviews } from '../lib/reviewApi'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Strip from '../Components/Strip'

// Lazy load below-the-fold components
const WhyChooseSection = lazy(() => import('../Components/WhyChooseSection'))
const Programs = lazy(() => import('../Components/Programs'))
const Features = lazy(() => import('../Components/Features'))
const TrustedSection = lazy(() => import('../Components/TrustedSection'))
const Questions = lazy(() => import('../Components/Questions'))
const Testimonials = lazy(() => import('../Components/Testimonials'))
const Footer = lazy(() => import('../Components/Footer'))

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
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["EducationalOrganization", "School"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "image": "https://teamexcellentcareerinstitute.in/logo192.png",
            "description": "Team Excellent Career Institute is a coaching institute in Patna Bihar providing IIT-JEE, NEET, and foundation preparation programs for students aiming for engineering and medical entrance exams.",
            "telephone": "+91-9942000371",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.5941",
              "longitude": "85.1376"
            },
            "areaServed": {
              "@type": "City",
              "name": "Patna"
            },
            "priceRange": "₹₹",
            "openingHours": "Mo-Sa 08:00-20:00",
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.linkedin.com/company/teamexcellentpatna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9942000371",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "knowsAbout": [
              "IIT JEE Coaching",
              "NEET Coaching",
              "Foundation Courses",
              "Medical Entrance Preparation",
              "Engineering Entrance Preparation",
              "JEE Advanced",
              "JEE Main",
              "NEET Preparation",
              "Class 6 to 10 Foundation"
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
                "name": "Is personal attention given to each student?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The institute maintains focused batch sizes so that every student receives individual attention, mentoring, and academic guidance."
                }
              },
              {
                "@type": "Question",
                "name": "Do you conduct regular tests series?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Regular tests, mock exams, and performance analysis are conducted to track student progress and improve exam readiness."
                }
              },
              {
                "@type": "Question",
                "name": "Can beginners join JEE or NEET coaching?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Students without prior competitive exam experience can join. The institute provides foundation-level teaching and step-by-step guidance for beginners."
                }
              },
              {
                "@type": "Question",
                "name": "How can students take admission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students can visit the institute, contact the admission team, or fill out the enquiry form on the official website for admission details."
                }
              },
              {
                "@type": "Question",
                "name": "Can Bihar Board students prepare for JEE and NEET?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Bihar Board students can successfully prepare for JEE and NEET. The syllabus of these competitive exams is largely based on NCERT, which makes it suitable for Bihar Board students as well. With proper guidance, regular practice, and concept-based learning, many Bihar Board students achieve excellent results in competitive exams."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <main id="main-content">
        <Hero />
        <Strip />
        <Suspense fallback={<div className="h-20 bg-slate-50 animate-pulse rounded-2xl m-4" />}>
          <TrustedSection />
          <Programs />
          <WhyChooseSection />
          <Features />
          <Testimonials />
          <Questions className="mb-10" />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </>
  )
}
