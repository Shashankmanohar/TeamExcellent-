import React, { useState } from "react";
import Contactimage from "../Assets/Contactimage.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, message } = formData;

    // WhatsApp number (with country code, no spaces or dashes)
    const whatsappNumber = "918540814729"; 

    // Text to send
    const text = `Hello, I am ${name}. My mobile number is ${mobile}. Message: ${message}`;

    // WhatsApp API link
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full h-auto bg-white mt-21">
      {/* ================= Hero Section ================= */}
      <div className="py-12 flex flex-col lg:flex-row items-center justify-center px-6">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={Contactimage}
            alt="Contact Us"
            className="w-[95%] lg:w-[85%] h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-full lg:w-[90%] text-center lg:text-left">
            <h1 className="text-[11vw] text-[#8424bd] sm:text-5xl lg:text-[4vw] font-bold leading-snug">
              Guiding You Beyond the Classroom –{" "}
              <span className="text-[#e03535]">Contact Us.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We would love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* ================= Address & Contact Section ================= */}
      <div className="w-full flex flex-col lg:flex-row items-start mt-8">
        {/* Address */}
        <div className="w-full lg:w-1/2 max-w-xl mx-auto pl-10 lg:pl-30 pt-22">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#081646] mb-4">
            Our Address
          </h2>
          <div className="flex items-start gap-2 py-2">
            <MapPin className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-md leading-snug">
              New Kunj Colony, Saketpuri, Patna, Bihar 800016, India
            </p>
          </div>
          <div className="flex items-start gap-2 py-2">
            <Phone className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-md leading-snug">
              +91 9942000371, +91 9942000372
            </p>
          </div>
          <div className="flex items-start gap-2 py-2">
            <Mail className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-md leading-snug">
              <a
                href="mailto:teamexcellentpatna@gmail.com"
                className="hover:underline"
              >
                teamexcellentpatna@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-start gap-2 py-2">
            <Clock className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-md leading-snug">
              Mon – Sat: 8:00 AM – 8:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* ================= Contact Form Section ================= */}
        <div className="w-full lg:w-1/2 max-w-xl mx-auto px-6 py-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#081646] mb-4">
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-2xl shadow-md w-full space-y-3"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8424bd] outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8424bd] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8424bd] outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8424bd] text-white font-semibold py-2 rounded-lg hover:bg-[#6c1e9d] transition-all"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;
