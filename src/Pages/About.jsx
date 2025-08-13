import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Team Excellent</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Team Excellent is a premier educational institution based in Patna, dedicated to providing 
            quality education and fostering academic excellence. Our mission is to empower students 
            with knowledge, skills, and values that prepare them for successful careers and meaningful lives.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With years of experience in education, we have helped countless students achieve their 
            academic goals and realize their potential. Our team of experienced educators and 
            professionals are committed to delivering the highest standards of education.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, high-quality education that empowers students to succeed 
                in their chosen fields and contribute positively to society.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading educational institution in Patna, recognized for excellence 
                in teaching, innovation, and student success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
