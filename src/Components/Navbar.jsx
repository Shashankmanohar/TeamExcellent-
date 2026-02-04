import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TeamExcellent from "../assets/TeamExcellent.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Contact Bar */}
      <div
        className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center 
        bg-gradient-to-r from-[#5B2D7C] to-[#3F1D5B] text-white 
        text-center sm:text-left py-1 px-2 sm:space-x-6 space-y-0.5 sm:space-y-0 
        text-[10px] sm:text-xs lg:text-sm"
      >
        <p className="flex items-center gap-1">
          <i className="fa-solid fa-envelope mt-1 text-[10px]"></i>
          teamexcellentpatna@gmail.com
        </p>

        <p className="flex items-center gap-1">
          <i className="fa-solid fa-phone mt-1 text-[10px]"></i>
          +91 9942000371
        </p>
      </div>

      {/* Logo + Navigation */}
      <nav className="w-full flex items-center justify-between lg:justify-around px-3 py-2 bg-white shadow">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={TeamExcellent}
            alt="Team Excellent Logo"
            className="w-66 sm:w-70 md:w-70 lg:w-80 object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm lg:text-base text-[#0B0B45] font-semibold">
          <NavItem to="/" label="HOME" />
          <NavItem to="/about" label="ABOUT" />
          <NavItem to="/blogs" label="BLOG" />
          <Dropdown
            label="PROGRAMS"
            items={[
              { to: "/programs/jee", label: "JEE" },
              { to: "/programs/neet", label: "NEET" },
              { to: "/programs/class-6-to-10", label: "Class 6 to 10" },
            ]}
          />
          <NavItem to="/student-portal" label="STUDENT ZONE" />
          <NavItem to="/admission" label="ADMISSION" />
          <NavItem to="/contact" label="CONTACT" />

          {/* Admin Login Button */}
          <li>
            <Link
              to="/admin-login"
              className="ml-4 px-4 py-1.5 rounded-md bg-[#5B2D7C] text-white hover:bg-[#3F1D5B] transition-colors"
            >
              Admin Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-9 h-9 bg-[#613087] rounded-md text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[104px] left-0 w-full bg-white shadow-xl 
                       flex flex-col items-center py-6 space-y-4 
                       text-[#0B0B45] min-h-[calc(100vh-64px)] z-40"
          >
            <NavItem to="/" label="HOME" mobile onClick={() => setIsOpen(false)} />
            <NavItem to="/about" label="ABOUT" mobile onClick={() => setIsOpen(false)} />
            <NavItem to="/blogs" label="BLOG" mobile onClick={() => setIsOpen(false)} />
            <DropdownMobile
              label="PROGRAMS"
              items={[
                { to: "/programs/jee", label: "JEE" },
                { to: "/programs/neet", label: "NEET" },
                { to: "/programs/class-6-to-10", label: "Class 6 to 10" },
              ]}
              onClose={() => setIsOpen(false)}
            />
            <NavItem
              to="/student-portal"
              label="STUDENT ZONE"
              mobile
              onClick={() => setIsOpen(false)}
            />
            <NavItem to="/admission" label="ADMISSION" mobile onClick={() => setIsOpen(false)} />
            <NavItem to="/contact" label="CONTACT" mobile onClick={() => setIsOpen(false)} />

            {/* Divider */}
            <div className="w-4/5 border-t border-gray-200 my-3"></div>

            {/* Mobile Admin Login Button */}
            <Link
              to="/admin-login"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-xl bg-[#5B2D7C] text-white font-medium 
                         hover:bg-[#3F1D5B] transition-colors shadow-md"
            >
              Admin Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Nav Item */
function NavItem({ to, label, mobile, onClick }) {
  const linkClass = `${mobile
    ? "block w-full text-center py-2 text-sm font-semibold sm:text-base"
    : ""
    } hover:text-[#0077b6] transition-colors`;

  if (mobile) {
    return (
      <Link to={to} onClick={onClick} className={linkClass}>
        {label}
      </Link>
    );
  }

  return (
    <li>
      <Link to={to} className="hover:text-[#0077b6] transition-colors">
        {label}
      </Link>
    </li>
  );
}

/* Desktop Dropdown */
function Dropdown({ label, items }) {
  return (
    <li className="relative group">
      <span className="hover:text-[#0077b6] cursor-pointer inline-block py-1">
        {label} ▾
      </span>
      <ul
        className="absolute left-0 top-full min-w-[180px] bg-white border border-gray-200 shadow-lg rounded-md 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-sm"
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="block px-3 py-2 hover:bg-gray-100">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/* Mobile Dropdown */
function DropdownMobile({ label, items, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-center items-center gap-1 
                   text-sm font-semibold sm:text-base hover:text-[#0077b6]"
      >
        {label} {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center space-y-1 mt-2"
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={onClose}
                className="block w-4/5 px-3 py-2 rounded-md text-sm sm:text-base 
                           hover:bg-gray-100 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
