import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TeamExcellent from "../assets/TeamExellent.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* Top Contact Bar */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-evenly items-center bg-[#5B2D7C] text-white text-center sm:text-left py-10 md:py-6 lg:py-2">
        <p className="text-3xl lg:text-lg px-2">
          <i className="fa-solid fa-envelope"></i> teamexcellentpatna@gmail.com
        </p>
        <p className="text-3xl lg:text-lg px-2">
          <i className="fa-solid fa-phone"></i> +91 9942000371
        </p>
      </div>

      {/* Logo + Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={TeamExcellent}
            alt="Team Excellent Logo"
            className="w-45 md:w-30 pl-9 lg:w-35"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 text-base text-[#0B0B45]">
          <NavItem to="/" label="HOME" />
          <NavItem to="/about" label="ABOUT" />
          <Dropdown
            label="PROGRAMS"
            items={[
              { to: "/programs/class-8", label: "Class 8 Foundation" },
              { to: "/programs/class-9", label: "Class 9 Foundation" },
              { to: "/programs/class-10", label: "Class 10 Foundation" },
              { to: "/programs/class-11", label: "Class 11 Foundation" },
              { to: "/programs/class-12", label: "Class 12 Foundation" },
              { to: "/programs/jee-foundation", label: "JEE Foundation" },
              { to: "/programs/jee-mains", label: "JEE Mains" },
              { to: "/programs/jee-advanced", label: "JEE Advanced" },
              { to: "/programs/neet-foundation", label: "NEET Foundation" },
              { to: "/programs/neet", label: "NEET" },
            ]}
          />
          <NavItem to="/success-stories" label="SUCCESS" />
          <NavItem to="/courses" label="COURSES" />
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
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={70} /> : <Menu size={70} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md flex flex-col items-center py-10 space-y-10 text-4xl text-[#0B0B45] min-h-screen">
          <NavItem to="/" label="HOME" mobile />
          <NavItem to="/about" label="ABOUT" mobile />
          <DropdownMobile
            label="PROGRAMS"
            items={[
              { to: "/programs/class-8", label: "Class 8 Foundation" },
              { to: "/programs/class-9", label: "Class 9 Foundation" },
              { to: "/programs/class-10", label: "Class 10 Foundation" },
              { to: "/programs/class-11", label: "Class 11 Foundation" },
              { to: "/programs/class-12", label: "Class 12 Foundation" },
              { to: "/programs/jee-foundation", label: "JEE Foundation" },
              { to: "/programs/jee-mains", label: "JEE Mains" },
              { to: "/programs/jee-advanced", label: "JEE Advanced" },
              { to: "/programs/neet-foundation", label: "NEET Foundation" },
              { to: "/programs/neet", label: "NEET" },
            ]}
          />
          <NavItem to="/success-stories" label="VD SUCCESS" mobile />
          <NavItem to="/courses" label="COURSES" mobile />
          <DropdownMobile
            label="STUDENT ZONE"
            items={[
              { to: "/student-portal", label: "Student Portal" },
              { to: "/library", label: "Library" },
              { to: "/resources", label: "Resources" },
            ]}
          />
          <NavItem to="/admission" label="ADMISSION" mobile />
          <NavItem to="/contact" label="CONTACT" mobile />
        </div>
      )}
    </div>
  );
}

/* Nav Item */
function NavItem({ to, label, mobile }) {
  const linkClass = `${
    mobile ? "block w-full text-center py-8 text-4xl" : ""
  } hover:text-[#0077b6] `;

  if (mobile) {
    return (
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    );
  }

  return (
    <li>
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    </li>
  );
}

/* Desktop Dropdown */
function Dropdown({ label, items }) {
  return (
    <li className="relative group">
      <span className="hover:text-[#0077b6] cursor-pointer inline-block py-2">
        {label} ▾
      </span>
      <ul className="absolute left-0 top-full min-w-[220px] bg-white border border-gray-200 shadow-lg rounded-md 
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                     transition-all duration-200 ease-in-out z-50">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="block px-4 py-2 hover:bg-gray-100">
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
        className="w-full text-center py-8 text-4xl hover:text-[#0077b6] font-bold"
      >
        {label} {open ? "▴" : "▾"}
      </button>
      {open && (
        <div className="flex flex-col items-center space-y-5">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block px-4 py-4 text-3xl hover:text-[#0077b6] font-bold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
