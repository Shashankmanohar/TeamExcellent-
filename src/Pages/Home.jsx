import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Strip from '../Components/Strip'
import Whychooseus from '../Components/Whychooseus'
import Features from '../Components/Features'
import Questions from '../Components/Questions'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Team Excellent | Best Coaching for JEE, NEET & Foundations</title>
        <meta 
          name="description" 
          content="Team Excellent is a premier coaching institute for JEE, NEET, and school foundations (Class 6–10). Experienced faculty, modern facilities, and personal mentoring for success." 
        />
        <meta 
          name="keywords" 
          content="Team Excellent, coaching in Patna, JEE coaching, NEET coaching, Class 6 to 10 foundation, best coaching institute, IIT JEE preparation, medical entrance coaching, Bihar coaching center" 
        />
        <meta property="og:title" content="Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta property="og:description" content="Achieve academic excellence with Team Excellent. Coaching for JEE, NEET, and school-level foundations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in" />
        <meta property="og:image" content="/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta name="twitter:description" content="Join Team Excellent for JEE, NEET, and school foundation success." />
        <meta name="twitter:image" content="/logo192.png" />
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <Carousel />
      <Strip />
      <Whychooseus />
      <Features />
      <Questions className="mb-10" />
      <Footer />
    </>
  )
}
