import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamExcellent from "../assets/TeamExcellent2.webp";
import toast from "react-hot-toast";
import { submitEnrollment } from "../lib/enrollmentApi";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const [enquiryData, setEnquiryData] = useState({
    fullName: "",
    mobileNumber: "",
    course: "",
    city: "Patna"
  });
  const [submitting, setSubmitting] = useState(false);

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(enquiryData.mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      setSubmitting(true);
      await submitEnrollment(enquiryData);
      toast.success("Enquiry submitted successfully!");
      setEnquiryData({
        fullName: "",
        mobileNumber: "",
        course: "",
        city: "Patna"
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);
      toast.error(error.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#5B2D7C] text-white pt-10 pb-6">
      {/* Quick Enquiry Form Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12 mb-10 border-b border-white/10">
        <div className="bg-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Have Any Questions?</h3>
            <p className="text-white/95 text-sm md:text-base">
              Fill out this quick enquiry form, and our career counselors will call you back to help you select the right batch and course.
            </p>
          </div>
          
          <form onSubmit={handleEnquirySubmit} className="w-full lg:w-auto flex-grow max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <input
              type="text"
              name="fullName"
              aria-label="Your Name"
              value={enquiryData.fullName}
              onChange={handleEnquiryChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm outline-none"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              aria-label="Mobile Number"
              value={enquiryData.mobileNumber}
              onChange={handleEnquiryChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm outline-none"
              required
            />
            <div className="relative w-full">
              <select
                name="course"
                aria-label="Select Course"
                value={enquiryData.course}
                onChange={handleEnquiryChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm cursor-pointer appearance-none outline-none"
                required
              >
                <option value="" className="text-gray-800" disabled>Select Course</option>
                <option value="JEE Main/Advanced" className="text-gray-800">JEE Preparation</option>
                <option value="NEET UG Medical" className="text-gray-800">NEET Preparation</option>
                <option value="School Foundation Class 6-10" className="text-gray-800">School Foundation</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              aria-label="Submit Form"
              className="w-full px-6 py-3 bg-white text-[#5B2D7C] hover:bg-white/90 active:bg-gray-100 font-bold rounded-xl transition-all shadow-md active:scale-[0.98] duration-200 text-sm whitespace-nowrap flex items-center justify-center min-h-[46px]"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#5B2D7C]"></span>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="text-center md:text-left">
          <img
            src={TeamExcellent}
            alt="Team Excellent Career Institute Logo - Patna's Premier Coaching"
            className="w-40 md:w-48 mx-auto rounded md:mx-0"
            width="192"
            height="42"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-3 text-sm">
            Empowering Students for Success through quality education and guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
            <li><Link to="/admission" className="hover:text-gray-300 transition-colors">Admission Process</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-300 transition-colors">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Programs & Tools */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Programs & Tools</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/jee-coaching-in-patna" className="hover:text-gray-300 transition-colors">JEE Coaching</Link></li>
            <li><Link to="/neet-coaching-in-patna" className="hover:text-gray-300 transition-colors">NEET Coaching</Link></li>
            <li><Link to="/programs/class-6-to-10" className="hover:text-gray-300 transition-colors">Class 6-10 Foundation</Link></li>
            <li><Link to="/rank-predictor" className="hover:text-gray-300 transition-colors">Rank Predictor</Link></li>
            <li><Link to="/college-predictor" className="hover:text-gray-300 transition-colors">College Predictor</Link></li>
            <li><Link to="/student-portal" className="hover:text-gray-300 transition-colors">Student Portal</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <address className="not-italic text-sm">
            <p className="flex items-start gap-2 mb-2">
              <MapPin className="w-5 h-5 shrink-0 text-purple-300 mt-0.5" /> Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-300" /> teamexcellentpatna@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4 text-purple-300" /> +91 9942000371, +91 9942000372
            </p>
          </address>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/share/1JTxznYnFg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/team.excellent.patna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/teamexcellentpatna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@teamexcellentpatna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-gray-300 transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Team Excellent. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-xs text-gray-300">
          <Link to="/privacy-policy" className="hover:text-white transition-colors underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors underline">Terms of Service</Link>
        </div>
        <p className="text-xs mt-2">
          Designed with ❤️ by{" "}
          <a
            href="https://www.webfloratechnologies.com/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webflora Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
