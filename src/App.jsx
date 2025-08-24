import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Admission from './Pages/Admission'
import Contact from './Pages/Contact'
import Jee from './Pages/Jee'
import Class6to10 from './Pages/Class6to10'
import Neet from './Pages/Neet'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/programs/jee" element={<Jee/>} />
        <Route path="/programs/class-6-to-10" element={ <Class6to10/>} />
        <Route path="/programs/neet" element={<Neet/>} />


        {/* Other Routes */}
        <Route path="/student-portal" element={<ProgramPage title="Student Portal" />} />
        <Route path="/library" element={<ProgramPage title="Library" />} />
        <Route path="/resources" element={<ProgramPage title="Resources" />} />
        <Route path="/contact" element={<Contact />} />
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
