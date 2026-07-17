import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Loader2 } from 'lucide-react'

// Helper HOC to wrap lazy-loaded components with Suspense
const withSuspense = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};

// Page components loaded lazily to improve initial load performance
const Home = withSuspense(lazy(() => import('./Pages/Home')))
const About = withSuspense(lazy(() => import('./Pages/About')))
const Admission = withSuspense(lazy(() => import('./Pages/Admission')))
const Contact = withSuspense(lazy(() => import('./Pages/Contact')))
const Jee = withSuspense(lazy(() => import('./Pages/Jee')))
const Class6to10 = withSuspense(lazy(() => import('./Pages/Class6to10')))
const Neet = withSuspense(lazy(() => import('./Pages/Neet')))
const Blogs = withSuspense(lazy(() => import('./Pages/Blogs')))
const BlogDetail = withSuspense(lazy(() => import('./Pages/BlogDetail')))
const AdminBlogs = withSuspense(lazy(() => import('./Pages/AdminBlogs')))
const AdminDashboard = withSuspense(lazy(() => import('./Pages/AdminDashboard')))
const AdminEnrollments = withSuspense(lazy(() => import('./Pages/AdminEnrollments')))
const AdminReviews = withSuspense(lazy(() => import('./Pages/AdminReviews')))
const AdminCareers = withSuspense(lazy(() => import('./Pages/AdminCareers')))
const AdminCounseling = withSuspense(lazy(() => import('./Pages/AdminCounseling')))
const Careers = withSuspense(lazy(() => import('./Pages/Careers')))
const CareerDetail = withSuspense(lazy(() => import('./Pages/CareerDetail')))
const BlogEditor = withSuspense(lazy(() => import('./Components/BlogEditor')))
const RankPredictor = withSuspense(lazy(() => import('./Pages/RankPredictor')))
const CollegePredictor = withSuspense(lazy(() => import('./Pages/CollegePredictor')))
const Student = withSuspense(lazy(() => import('./Pages/Student')))
const AdminLogin = withSuspense(lazy(() => import('./Pages/AdminLogin')))
const Result = withSuspense(lazy(() => import('./Pages/Result')))
const PrivacyPolicy = withSuspense(lazy(() => import('./Pages/PrivacyPolicy')))
const TermsOfService = withSuspense(lazy(() => import('./Pages/TermsOfService')))

import WhatsAppButton from './Components/WhatsAppButton'

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-10 h-10 animate-spin text-[#522871]" />
      <span className="text-gray-500 font-medium animate-pulse">Loading...</span>
    </div>
  )
}

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
      <Helmet>
        <title>Team Excellent - Best Coaching in Patna for JEE, NEET & Foundations</title>
        <meta property="og:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/Favicon.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/jee-coaching-in-patna" element={<Jee />} />
        <Route path="/programs/class-6-to-10" element={<Class6to10 />} />
        <Route path="/neet-coaching-in-patna" element={<Neet />} />

        {/* Blog Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:permalink" element={<BlogDetail />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/enrollments" element={<AdminEnrollments />} />
        <Route path="/admin/counseling" element={<AdminCounseling />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/careers" element={<AdminCareers />} />
        <Route path="/admin/blogs/new" element={<BlogEditor />} />
        <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />

        {/* Other Routes */}
        <Route path="/rank-predictor" element={<RankPredictor />} />
        <Route path="/college-predictor" element={<CollegePredictor />} />
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
