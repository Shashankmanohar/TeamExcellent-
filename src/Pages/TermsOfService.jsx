import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function TermsOfService() {
  const effectiveDate = "April 30, 2026"

  return (
    <>
      <Helmet>
        <title>Terms of Service | Team Excellent Career Institute</title>
        <meta name="description" content="Terms of Service for Team Excellent Career Institute. By accessing our website or enrolling in our courses, you agree to these terms." />
      </Helmet>

      <Navbar />
      
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-[#5B2D7C] py-12 px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-purple-100 font-medium">Effective Date: {effectiveDate}</p>
            </div>

            <div className="p-8 md:p-12 prose prose-purple max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg text-center font-medium italic">
                Welcome to Team Excellent Career Institute. By accessing our website or enrolling in our courses, you agree to the following terms and conditions.
              </p>

              <div className="my-10 border-t border-gray-100"></div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Services
                </h2>
                <p>
                  We provide coaching services for competitive exams such as IIT-JEE, NEET, and foundation courses (Class 6-10). Our services include classroom teaching, study materials, test series, and personalized guidance.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  User Responsibilities
                </h2>
                <p>You agree to:</p>
                <ul className="space-y-3 mt-4 list-disc list-inside">
                  <li>Provide accurate and complete information during registration.</li>
                  <li>Maintain discipline and follow institute rules during offline and online sessions.</li>
                  <li>Not misuse website content, study materials, or services for any unauthorized purposes.</li>
                  <li>Respect the intellectual property rights of the institute.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Course Enrollment & Fees
                </h2>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <ul className="space-y-3 list-none">
                    <li className="flex gap-3">
                      <i className="fa-solid fa-check text-[#5B2D7C] mt-1"></i>
                      <span>Enrollment is confirmed only after full or partial fee payment as per the agreed schedule.</span>
                    </li>
                    <li className="flex gap-3">
                      <i className="fa-solid fa-check text-[#5B2D7C] mt-1"></i>
                      <span>Fees once paid are generally <strong>non-refundable</strong> unless specifically stated otherwise in writing.</span>
                    </li>
                    <li className="flex gap-3">
                      <i className="fa-solid fa-check text-[#5B2D7C] mt-1"></i>
                      <span>Any discounts, scholarships, or concessions are subject to institute policies and verification.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  Intellectual Property
                </h2>
                <p>
                  All content including study materials, videos, lecture notes, graphics, and website design is owned by <strong>Team Excellent Career Institute</strong>. 
                  You may not copy, distribute, reproduce, or sell any part of this content without explicit written permission.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                  Attendance & Performance
                </h2>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Regular attendance is required for all courses to ensure learning continuity.</li>
                  <li>Performance reports are based on internal assessments and mock tests.</li>
                  <li>While we provide the best resources, we <strong>do not guarantee</strong> specific exam results as they depend on student effort.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                  Limitation of Liability
                </h2>
                <p>We are not responsible for:</p>
                <ul className="space-y-3 mt-4 list-disc list-inside">
                  <li>Student performance in external/competitive exams.</li>
                  <li>Technical issues on third-party platforms used for delivery.</li>
                  <li>Any indirect, incidental, or consequential damages arising from the use of our services.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                  Termination
                </h2>
                <p>
                  We reserve the right to suspend or terminate access to our services if:
                </p>
                <ul className="space-y-3 mt-4 list-disc list-inside">
                  <li>Institute rules or discipline guidelines are violated.</li>
                  <li>Any form of misconduct occurs.</li>
                  <li>Fees are unpaid as per the agreed timeline.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">8</span>
                  Privacy
                </h2>
                <p>
                  Your use of our services is also governed by our <strong>Privacy Policy</strong>, which explains how we collect and use your data.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">9</span>
                  Changes to Terms
                </h2>
                <p>
                  We may update these Terms at any time. Continued use of our website or services following any changes constitutes acceptance of those updated terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">10</span>
                  Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in <strong>Patna, Bihar</strong>.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-6 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">11</span>
                  Contact
                </h2>
                <div className="bg-gradient-to-br from-[#5B2D7C] to-[#472265] p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-6">Team Excellent Career Institute</h3>
                  <div className="space-y-5 text-purple-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <i className="fa-solid fa-location-dot text-white text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-purple-200 mb-1">Address</p>
                        <p className="font-medium">New Kunj Colony, Saketpuri, Patna, Bihar 800016, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <i className="fa-solid fa-envelope text-white text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-purple-200 mb-1">Email Address</p>
                        <a href="mailto:teamexcellentpatna@gmail.com" className="font-medium hover:text-white transition-colors border-b border-purple-400 border-opacity-30 pb-0.5">teamexcellentpatna@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <i className="fa-solid fa-phone text-white text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-purple-200 mb-1">Phone Number</p>
                        <p className="font-medium">+91 9942000371, +91 9942000372</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
