import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Why Choose <span className="text-[#5B2D7CFF]">Team Excellent ?</span>
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Team Excellent, dedicated to guiding bright minds towards excellence in competitive examinations.
          </p>

          {/* Flex layout for features */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <FeatureCard
                icon={
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </>
                }
                title="Expert Faculty"
                description="Learn from experienced educators with proven track records in JEE & NEET coaching."
              />
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <FeatureCard
                icon={
                  <>
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                  </>
                }
                title="Focused Approach"
                description="Tailored curriculum designed specifically for IIT-JEE, NEET, and Foundation preparation."
              />
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <FeatureCard
                icon={
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </>
                }
                title="Small Batches"
                description="Personalized attention with limited students per batch for better learning outcomes."
              />
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <FeatureCard
                icon={
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </>
                }
                title="Proven Results"
                description="Track record of successful selections in top engineering and medical colleges."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Programs
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <ProgramCard title="Foundation Classes" subtitle="Class 8-12" color="from-blue-500 to-blue-600" />
            </div>
            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <ProgramCard title="JEE Foundation" subtitle="Engineering Prep" color="from-green-500 to-green-600" />
            </div>
            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <ProgramCard title="JEE Mains" subtitle="Advanced Level" color="from-purple-500 to-purple-600" />
            </div>
            <div className="w-full sm:w-[48%] lg:w-[23%]">
              <ProgramCard title="NEET" subtitle="Medical Prep" color="from-red-500 to-red-600" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who have achieved their dreams with Team Excellent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 h-full">
      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function ProgramCard({ title, subtitle, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white p-6 rounded-lg text-center h-full`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{subtitle}</p>
    </div>
  )
}
