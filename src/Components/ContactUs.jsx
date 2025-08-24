import React, { useState } from "react";
import Contactimage from "../assets/Contactimage.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
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

    const whatsappNumber = "918540814729";
    const text = `Hello, I am ${name}. My mobile number is ${mobile}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full h-auto bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
