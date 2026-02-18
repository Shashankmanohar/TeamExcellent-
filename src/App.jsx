import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
import BlogEditor from './Components/BlogEditor'

// ✅ ScrollToTop Component
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Student from './Pages/Student'
import AdminLogin from './Pages/AdminLogin'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/programs/jee" element={<Jee />} />
        <Route path="/programs/class-6-to-10" element={<Class6to10 />} />
        <Route path="/programs/neet" element={<Neet />} />

        {/* Blog Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:permalink" element={<BlogDetail />} />

        {/* Admin Blog Routes */}
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/blogs/new" element={<BlogEditor />} />
        <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />

        {/* Other Routes */}
        <Route path="/student-portal" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<ProgramPage title="404 Not Found" />} />
      </Routes>
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
