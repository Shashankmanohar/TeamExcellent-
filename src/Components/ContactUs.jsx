import React, { useState } from "react";
import Contactimage from "../assets/Contactimage.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, message } = formData;

    const whatsappNumber = "919942000371";
    const text = `Hello, I am ${name}. My mobile number is ${mobile}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full h-auto bg-white mt-20">
      {/* ================= Hero Section ================= */}
      <div className="pt-16 flex flex-col lg:flex-row items-center justify-center px-6">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={Contactimage}
            alt="Contact Us"
            className="w-[95%] lg:w-[85%] h-auto"
            loading="lazy"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-full lg:w-[90%] text-center lg:text-left">
            <h1 className="text-[11vw] text-[#472265] sm:text-5xl lg:text-[4vw] font-bold leading-snug">
              Guiding You Beyond the Classroom –{" "}
              <span className="text-[#b72e2f]">Contact Us.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We would love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* ================= Map Section ================= */}
      <div className="w-full max-w-5xl mx-auto flex justify-center items-center mt-10 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.0497092879885!2d85.1745586266339!3d25.603191956602565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59b5551402f9%3A0xe2541514fd06ba5a!2sTeam%20Excellent-%20Top%20%26%20Best%20Coaching%20in%20Patna%20for%20Class%2011th%2C%2012th%2C%20IIT%20JEE%20%26%20NEET!5e1!3m2!1sen!2sin!4v1755712045191!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="rounded-xl shadow-md border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* ================= Address & Contact Section ================= */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 px-6">
        {/* Address */}
        <div className=" p-6 ">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#081646] mb-4">
            Our Address
          </h2>
          <div className="flex items-start gap-3 py-2">
            <MapPin className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-lg leading-snug">
              New Kunj Colony, Saketpuri, Patna, Bihar 800016, India
            </p>
          </div>
          <div className="flex items-start gap-3 py-2">
            <Phone className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-lg leading-snug">
              +91 9942000371, +91 9942000372
            </p>
          </div>
          <div className="flex items-start gap-3 py-2">
            <Mail className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-lg leading-snug">
              <a
                href="mailto:teamexcellentpatna@gmail.com"
                className="hover:underline"
              >
                teamexcellentpatna@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-start gap-3 py-2">
            <Clock className="w-5 h-5 text-[#8424bd] mt-0.5" />
            <p className="text-gray-600 text-lg leading-snug">
              Mon – Sat: 8:00 AM – 8:00 PM <br /> Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#081646] mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
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

            {/* Submit */}
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

export default ContactUs;
