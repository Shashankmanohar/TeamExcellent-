import React from 'react'

export default function Admission() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Admission Information</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Admission Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Completed application form with all required documents</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">High school diploma or equivalent qualification</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Academic transcripts from previous institutions</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Letters of recommendation (2-3 required)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Personal statement or essay</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Entrance examination (if applicable)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Application Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 1: Application</h3>
              <p className="text-gray-700 mb-4">
                Complete the online application form with accurate personal and academic information.
                Ensure all required documents are prepared and ready for submission.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 2: Document Submission</h3>
              <p className="text-gray-700 mb-4">
                Submit all required documents including transcripts, certificates, and letters of recommendation.
                Documents can be uploaded online or submitted in person.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 3: Review</h3>
              <p className="text-gray-700 mb-4">
                Our admissions committee will review your application and supporting documents.
                This process typically takes 2-4 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 4: Interview</h3>
              <p className="text-gray-700 mb-4">
                Shortlisted candidates will be invited for an interview (in-person or virtual).
                This helps us better understand your goals and motivation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Important Dates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800">Fall Semester</h3>
              <p className="text-gray-600">Application Deadline: July 15</p>
              <p className="text-gray-600">Classes Begin: September 1</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800">Spring Semester</h3>
              <p className="text-gray-600">Application Deadline: December 15</p>
              <p className="text-gray-600">Classes Begin: February 1</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Apply Now
            </button>
            <p className="text-gray-600 mt-4">
              For more information, contact us at <span className="text-blue-600">teamexellentpatna@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

