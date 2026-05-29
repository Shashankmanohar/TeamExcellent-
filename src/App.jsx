import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Home from './Pages/Home'
import About from './Pages/About'
import Admission from './Pages/Admission'
import Contact from './Pages/Contact'
import Jee from './Pages/Jee'
import Class6to10 from './Pages/Class6to10'
import Neet from './Pages/Neet'
import Blogs from './Pages/Blogs'
import BlogDetail from './Pages/BlogDetail'
import AdminBlogs from './Pages/AdminBlogs'
import AdminEnrollments from './Pages/AdminEnrollments';
import AdminReviews from './Pages/AdminReviews';
import AdminCareers from './Pages/AdminCareers';
import Careers from './Pages/Careers';
import CareerDetail from './Pages/CareerDetail';
import WhatsAppButton from './Components/WhatsAppButton';
import BlogEditor from './Components/BlogEditor'

// ✅ ScrollToTop Component
import { useEffect } from 'react'

import Student from './Pages/Student'
import AdminLogin from './Pages/AdminLogin'
import Result from './Pages/Result'
import PopupCard from './Components/PopupCard'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/TermsOfService'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    // 👉 change "instant" to "smooth" if you want smooth scrolling
  }, [pathname])

  return null
}

import toast from 'react-hot-toast'

function AuthHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = () => {
      toast.error('Session expired. Please login again.')
      navigate('/admin-login')
    }

    window.addEventListener('forceLogout', handleLogout)
    return () => window.removeEventListener('forceLogout', handleLogout)
  }, [navigate])

  return null
}

export default function App() {
  return (
    <Router>
      <AuthHandler />
      <ScrollToTop /> {/* ✅ ensures scroll resets on route change */}
      <PopupCard />
      <Helmet>
        <title>Team Excellent - Best Coaching in Patna for JEE, NEET & Foundations</title>
        <meta property="og:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/public/Favicon.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/programs/jee" element={<Jee />} />
        <Route path="/programs/class-6-to-10" element={<Class6to10 />} />
        <Route path="/programs/neet" element={<Neet />} />

        {/* Blog & Career Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:permalink" element={<BlogDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />

        {/* Admin Routes */}
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/enrollments" element={<AdminEnrollments />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/careers" element={<AdminCareers />} />
        <Route path="/admin/blogs/new" element={<BlogEditor />} />
        <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />

        {/* Other Routes */}
        <Route path="/student-portal" element={<Student />} />
        <Route path="/result" element={<Result />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<ProgramPage title="404 Not Found" />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  )
}

function ProgramPage({ title }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
        <p className="text-lg text-center">{title} details coming soon...</p>
      </div>
    </div>
  )
}
