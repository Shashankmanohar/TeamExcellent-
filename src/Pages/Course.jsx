import React from 'react'

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "Computer Science",
      description: "Comprehensive computer science program covering programming, algorithms, and software development.",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      id: 2,
      title: "Business Administration",
      description: "Learn business fundamentals, management principles, and entrepreneurial skills.",
      duration: "3 Years",
      level: "Bachelor's Degree"
    },
    {
      id: 3,
      title: "Engineering",
      description: "Various engineering disciplines including mechanical, electrical, and civil engineering.",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      id: 4,
      title: "Medical Sciences",
      description: "Pre-medical courses preparing students for medical school and healthcare careers.",
      duration: "2 Years",
      level: "Pre-Professional"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Courses</h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our comprehensive range of educational programs designed to prepare you for 
          successful careers in various fields.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced professionals and industry experts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="text-lg font-semibold mb-2">Modern Curriculum</h3>
              <p className="text-gray-600">Updated curriculum aligned with industry standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="text-lg font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">Comprehensive career guidance and placement assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

