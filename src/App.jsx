import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import Admission from './Pages/Admission'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/programs/class-8" element={<ProgramPage title="Class 8 Foundation" />} />
        <Route path="/programs/class-9" element={<ProgramPage title="Class 9 Foundation" />} />
        <Route path="/programs/class-10" element={<ProgramPage title="Class 10 Foundation" />} />
        <Route path="/programs/class-11" element={<ProgramPage title="Class 11 Foundation" />} />
        <Route path="/programs/class-12" element={<ProgramPage title="Class 12 Foundation" />} />
        <Route path="/programs/jee-foundation" element={<ProgramPage title="JEE Foundation" />} />
        <Route path="/programs/jee-mains" element={<ProgramPage title="JEE Mains" />} />
        <Route path="/programs/jee-advanced" element={<ProgramPage title="JEE Advanced" />} />
        <Route path="/programs/neet-foundation" element={<ProgramPage title="NEET Foundation" />} />
        <Route path="/programs/neet" element={<ProgramPage title="NEET" />} />

        {/* Other Routes */}
        <Route path="/success-stories" element={<ProgramPage title="Success Stories" />} />
        <Route path="/student-portal" element={<ProgramPage title="Student Portal" />} />
        <Route path="/library" element={<ProgramPage title="Library" />} />
        <Route path="/resources" element={<ProgramPage title="Resources" />} />
        <Route path="/contact" element={<ProgramPage title="Contact Us" />} />
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
