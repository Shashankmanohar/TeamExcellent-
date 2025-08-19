import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import Admission from './Pages/Admission'
import Contact from './Pages/Contact'
import Class8 from './Pages/Class8'
import Class9 from './Pages/Class9'
import Class10 from './Pages/Class10'
import Class11 from './Pages/Class11'
import Class12 from './Pages/Class12'
import JeeFoundation from './Pages/JeeFoundation'
import JeeMains from './Pages/JeeMains'
import JeeAdvance from './Pages/JeeAdvance'
import NeetFoundation from './Pages/NeetFoundation'
import Neet from './Pages/Neet'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/admission" element={<Admission />} />

        {/* Program Routes */}
        <Route path="/programs/class-8" element={ <Class8 />} />
        <Route path="/programs/class-9" element={<Class9 />} />
        <Route path="/programs/class-10" element={<Class10 />} />
        <Route path="/programs/class-11" element={<Class11 />} />
        <Route path="/programs/class-12" element={<Class12 />} />
        <Route path="/programs/jee-foundation" element={<JeeFoundation/>} />
        <Route path="/programs/jee-mains" element={<JeeMains />} />
        <Route path="/programs/jee-advanced" element={<JeeAdvance/>} />
        <Route path="/programs/neet-foundation" element={<NeetFoundation />} />
        <Route path="/programs/neet" element={ <Neet/>} />


        {/* Other Routes */}
        <Route path="/success-stories" element={<ProgramPage title="Success Stories" />} />
        <Route path="/student-portal" element={<ProgramPage title="Student Portal" />} />
        <Route path="/library" element={<ProgramPage title="Library" />} />
        <Route path="/resources" element={<ProgramPage title="Resources" />} />
        <Route path="/contact" element={<Contact />} />
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
