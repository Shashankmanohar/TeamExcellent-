import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
  const effectiveDate = "April 30, 2026"

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Team Excellent Career Institute</title>
        <meta name="description" content="Privacy Policy of Team Excellent Career Institute. We are committed to protecting your privacy and ensuring transparency in how we handle your personal information." />
      </Helmet>

      <Navbar />
      
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-[#5B2D7C] py-12 px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-purple-100 font-medium">Effective Date: {effectiveDate}</p>
            </div>

            <div className="p-8 md:p-12 prose prose-purple max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">
                Welcome to Team Excellent Career Institute (“we,” “our,” or “us”). We are committed to protecting your privacy and ensuring transparency in how we handle your personal information.
              </p>

              <div className="my-10 border-t border-gray-100"></div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Information We Collect
                </h2>
                <p className="mb-4">We may collect the following types of information:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3">a) Personal Information</h3>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>Full Name</li>
                      <li>Phone Number</li>
                      <li>Email Address</li>
                      <li>Address</li>
                      <li>Date of Birth</li>
                      <li>Academic details (class, stream, exam goals)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3">b) Technical Data</h3>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Pages visited on our website</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">c) Payment Information</h3>
                  <p className="text-sm">Course fees and transaction details (processed via secure third-party payment gateways).</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  How We Use Your Information
                </h2>
                <p>We use your data to:</p>
                <ul className="space-y-2 mt-4 list-disc list-inside">
                  <li>Provide and manage course enrollments</li>
                  <li>Communicate updates, test schedules, and results</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional or marketing messages (only if consent is given)</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Sharing of Information
                </h2>
                <p>We do not sell your personal data. We may share information with:</p>
                <ul className="space-y-2 mt-4 list-disc list-inside">
                  <li>Payment gateway providers</li>
                  <li>CRM or software tools used for student management</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or loss. Our website uses secure protocols to ensure data integrity.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                  Cookies & Tracking
                </h2>
                <p>
                  Our website may use cookies to enhance user experience and analyze website traffic. You can control cookies through your browser settings. These cookies help us understand how you interact with our content.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                  Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="space-y-2 mt-4 list-disc list-inside">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at: <a href="mailto:teamexcellentpatna@gmail.com" className="text-purple-600 font-bold hover:underline">teamexcellentpatna@gmail.com</a>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                  Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">8</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with an updated effective date.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-6 flex items-center">
                  <span className="bg-purple-100 text-[#5B2D7C] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">9</span>
                  Contact Us
                </h2>
                <div className="bg-gradient-to-br from-[#5B2D7C] to-[#472265] p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-6">Team Excellent Career Institute</h3>
                  <div className="space-y-5 text-purple-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center">
                        <MapPin className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-purple-200 mb-1">Address</p>
                        <p className="font-medium">Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center">
                        <Mail className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-purple-200 mb-1">Email Address</p>
                        <a href="mailto:teamexcellentpatna@gmail.com" className="font-medium hover:text-white transition-colors border-b border-purple-400 border-opacity-30 pb-0.5">teamexcellentpatna@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center">
                        <Phone className="text-white w-5 h-5" />
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
