<<<<<<< HEAD
import React from 'react'
import { Helmet as Head } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
=======
import React, { useState } from "react";
import Contactimage from "../assets/Contactimage.jpg";
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
>>>>>>> 8e0210198906109f720b859f12d4a6fe9ed6fb9b

export default function Contact() {
  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Contact Us | Team Excellent Coaching Institute Patna</title>
        <meta 
          name="description" 
          content="Get in touch with Team Excellent Coaching Institute, Patna. Contact us for admissions, JEE & NEET coaching details, or foundation courses (Class 6–10). Visit our center or reach us via WhatsApp, phone, or email." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="Team Excellent contact, coaching institute Patna address, Team Excellent phone number, JEE coaching contact, NEET coaching Patna, foundation course contact, best coaching in Bihar" 
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta property="og:description" content="Reach Team Excellent Coaching Institute, Patna for admissions, JEE/NEET queries, or foundation course details. Call, email, or visit us today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellent.com/contact" />
        <meta property="og:image" content="/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta name="twitter:description" content="Get in touch with Team Excellent Coaching Patna for admission queries, coaching details, and more." />
        <meta name="twitter:image" content="/logo192.png" />
      </Head>

      {/* ✅ Page Content */}
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  )
}
