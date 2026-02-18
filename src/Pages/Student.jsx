import React from 'react'
import Navbar from '../Components/Navbar'
import StudentMarks from '../Components/StudentMarks'

import { Helmet } from 'react-helmet-async'

export default function Student() {
  return (
    <>
      <Helmet>
        <title>Student Portal | Team Excellent Career Institute</title>
        <meta name="description" content="Access student performance marks, test results, and academic progress at Team Excellent Career Institute's Student Portal." />
      </Helmet>
      <Navbar />
      <StudentMarks />
    </>
  )
}
