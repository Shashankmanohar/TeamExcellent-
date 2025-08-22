import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TeamExcellent from "../assets/TeamExellent.webp";

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
          <i className="fa-solid fa-envelope text-[10px]"></i>
          teamexcellentpatna@gmail.com
        </p>

        <p className="flex items-center gap-1">
          <i className="fa-solid fa-phone text-[10px]"></i>
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
            className="w-20 sm:w-24 md:w-32 lg:w-36 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm lg:text-base text-[#0B0B45] font-semibold">
          <NavItem to="/" label="HOME" />
          <NavItem to="/about" label="ABOUT" />
          <Dropdown
            label="PROGRAMS"
            items={[
              { to: "/programs/jee", label: "JEE" },
              { to: "/programs/neet", label: "NEET" },
              { to: "/programs/class-6-to-10", label: "Class 6 to 10" },
            ]}
          />
          <NavItem to="/success-stories" label="SUCCESS" />
          <Dropdown
            label="STUDENT ZONE"
            items={[
              { to: "/student-portal", label: "Student Portal" },
              { to: "/library", label: "Library" },
              { to: "/resources", label: "Resources" },
            ]}
          />
          <NavItem to="/admission" label="ADMISSION" />
          <NavItem to="/contact" label="CONTACT" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-8 h-8 bg-[#613087] rounded-md text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-2 text-[#0B0B45] min-h-screen overflow-y-auto">
          <NavItem to="/" label="HOME" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/about" label="ABOUT" mobile onClick={() => setIsOpen(false)} />
          <DropdownMobile
            label="PROGRAMS"
            items={[
              { to: "/programs/jee", label: "JEE" },
              { to: "/programs/neet", label: "NEET" },
              { to: "/programs/class-6-to-10", label: "Class 6 to 10" },
            ]}
          />
          <NavItem to="/success-stories" label="SUCCESS" mobile onClick={() => setIsOpen(false)} />
          <DropdownMobile
            label="STUDENT ZONE"
            items={[
              { to: "/student-portal", label: "Student Portal" },
              { to: "/library", label: "Library" },
              { to: "/resources", label: "Resources" },
            ]}
          />
          <NavItem to="/admission" label="ADMISSION" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/contact" label="CONTACT" mobile onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}

/* Nav Item */
function NavItem({ to, label, mobile, onClick }) {
  const linkClass = `${
    mobile
      ? "block w-full text-center py-1 text-sm font-medium sm:text-base"
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
            <Link to={item.to} className="block px-3 py-1 hover:bg-gray-100">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/* Mobile Dropdown */
function DropdownMobile({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-center text-sm font-semibold sm:text-base hover:text-[#0077b6]"
      >
        {label} {open ? "▴" : "▾"}
      </button>
      {open && (
        <div className="flex flex-col items-center space-y-0.5">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block px-2 py-1 text-xs sm:text-sm hover:text-[#0077b6] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
