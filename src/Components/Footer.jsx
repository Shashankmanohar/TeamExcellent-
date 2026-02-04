import React from "react";
import { Link } from "react-router-dom";
import TeamExcellent from "../assets/TeamExcellent2.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5B2D7C] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="text-center md:text-left">
          <img
            src={TeamExcellent}
            alt="Team Excellent Logo"
            className="w-40 md:w-48 mx-auto rounded md:mx-0"
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
            <li><Link to="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
            <li><Link to="/programs/class-8" className="hover:text-gray-300 transition-colors">Programs</Link></li>
            <li><Link to="/courses" className="hover:text-gray-300 transition-colors">Courses</Link></li>
          </ul>
        </div>

        {/* Student Zone */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Student Zone</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/student-portal" className="hover:text-gray-300 transition-colors">Student Portal</Link></li>
            <li><Link to="/library" className="hover:text-gray-300 transition-colors">Library</Link></li>
            <li><Link to="/resources" className="hover:text-gray-300 transition-colors">Resources</Link></li>
            <li><Link to="/admission" className="hover:text-gray-300 transition-colors">Admission</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <address className="not-italic text-sm">
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i> teamexcellentpatna@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <i className="fa-solid fa-phone"></i> +91 9942000371, +91 9942000372
            </p>
          </address>
          <div className="flex space-x-4 mt-4 text-lg justify-center md:justify-start">
            <a
              href="https://www.facebook.com/share/1JTxznYnFg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/team.excellent.patna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/teamexcellentpatna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com/@teamexcellentpatna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-gray-300 transition-colors"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Team Excellent. All rights reserved.</p>
        <p className="text-xs mt-1">
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
