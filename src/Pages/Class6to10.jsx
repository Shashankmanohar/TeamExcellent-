import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Class6to10Content from "../Components/Class6to10Content";

export default function Class6to10() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Foundation Courses (Class 6–10) | Team Excellent Institute</title>
        <meta
          name="description"
          content="Team Excellent offers foundation courses for Class 6 to 10 students, focusing on building strong concepts in Math, Science, and logical reasoning to prepare for JEE, NEET, and Olympiads."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="foundation courses Patna, Team Excellent, Class 6 coaching, Class 7 coaching, Class 8 coaching, Class 9 coaching, Class 10 coaching, early IIT JEE preparation, early NEET preparation, school foundation program, Olympiad coaching Bihar"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Foundation Courses (Class 6–10) | Team Excellent Institute"
        />
        <meta
          property="og:description"
          content="Strong foundations for Class 6 to 10 with expert faculty and personalized mentoring. Preparing students early for JEE, NEET, and Olympiads."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://teamexcellentcareerinstitute.in/class6to10"
        />
        <meta
          property="og:image"
          content="https://teamexcellentcareerinstitute.in/logo192.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Foundation Courses (Class 6–10) | Team Excellent Institute"
        />
        <meta
          name="twitter:description"
          content="Enroll in Team Excellent’s foundation courses for Class 6 to 10 to build strong concepts for future success in JEE & NEET."
        />
        <meta
          name="twitter:image"
          content="https://teamexcellentcareerinstitute.in/logo192.png"
        />
      </Helmet>

      {/* ✅ Page Content */}
      <Navbar />
      <Class6to10Content />
      <Footer />
    </>
  );
}
