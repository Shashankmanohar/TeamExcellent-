import { useState } from "react";
import { marksAPI } from "../lib/api";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import toast from "react-hot-toast";
import logo from "../assets/TeamExcellent.webp";

const StudentMarks = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    contactNumber: "",
    dateofBirth: "",
  });
  const [marks, setMarks] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await marksAPI.getOne(formData);
      setMarks(res.data);
      toast.success("Marks loaded successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Marks not found ❌");
      setMarks(null);
    } finally {
      setLoading(false);
    }
  };

  const getPercentage = (obtained, total) =>
    ((obtained / total) * 100).toFixed(2);

  const getGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 75) return "A";
    if (percentage >= 60) return "B";
    if (percentage >= 45) return "C";
    if (percentage >= 33) return "D";
    return "F";
  };

  // 📌 Export Whole Marksheet to PDF
  const exportToPDF = () => {
    const input = document.getElementById("marksheet");
    if (!input) {
      toast.error("Marksheet not found!");
      return;
    }

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

        pdf.save(`${marks.studentName}_Class-${marks.className}_Marksheet.pdf`);
        toast.success("PDF downloaded!");
      })
      .catch((err) => {
        console.error("PDF Export Error:", err);
        toast.error("Failed to export PDF ❌");
      });
  };

  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="min-h-screen flex pb-10 flex-col items-center"
    >
      {/* Premium Header Banner */}
      <div className="w-full text-center py-16 px-4 bg-gradient-to-r from-[#5B2D7C] via-[#6B21A8] to-[#3F1D5B] shadow-inner relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Scholarship Examination <span className="text-purple-200 font-light hidden md:inline">|</span> <span className="block md:inline mt-2 md:mt-0 text-purple-100">Check Your Results</span>
          </h1>
          <p className="text-purple-100/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-sm">
            Enter your details below to securely view your performance marks and scholarship eligibility status.
          </p>
        </div>
      </div>

      {/* Premium Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 rounded-3xl p-8 md:p-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10 mx-4 relative z-20"
      >
        <div className="col-span-full flex flex-col items-center mb-4">
          <img src={logo} alt="Team Excellent Career Institute scholarship check logo" className="h-20 w-auto mb-4 drop-shadow-sm transition-transform hover:scale-105 duration-300" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 tracking-wide">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-transparent transition-all shadow-sm hover:border-purple-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 tracking-wide">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            required
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-transparent transition-all shadow-sm hover:border-purple-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 tracking-wide">Date of Birth</label>
          <input
            type="date"
            name="dateofBirth"
            value={formData.dateofBirth}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-transparent transition-all shadow-sm hover:border-purple-300"
          />
        </div>

        <div className="col-span-full mt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#4A2466] hover:to-[#6E1C9F] text-white py-4 rounded-xl font-extrabold text-lg transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(91,45,124,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(91,45,124,0.6)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                View Results <i className="fa-solid fa-arrow-right ml-1"></i>
              </>
            )}
          </button>
        </div>
      </form>

      {/* 🎯 Marksheet Display */}
      {marks && (
        <div
          id="marksheet"
          className="bg-white shadow-lg rounded-xl mt-8 w-full max-w-3xl p-6 mx-4"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Team Excellent Career Institute Marksheet Official Logo" className="h-20 mb-2" />
            <h2 className="text-xl font-bold text-center underline">
              Scholarship Examination Report
            </h2>
          </div>

          {/* 🧑‍🎓 Student Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-sm">
            <p><strong>Name:</strong> {marks.studentName}</p>
            <p><strong>Class:</strong> {marks.className}</p>
            <p><strong>School:</strong> {marks.schoolName}</p>
            <p><strong>Father:</strong> {marks.fatherName}</p>
            <p><strong>DOB:</strong> {new Date(marks.dateofBirth).toLocaleDateString("en-GB")}</p>
            <p><strong>Contact:</strong> {marks.contactNumber}</p>
            {/* 📌 Class Added */}
            <p><strong>Class:</strong> {marks.className}</p>
          </div>

          {/* 📚 Subject-wise Table */}
          <table className="w-full border text-center text-sm mb-6">
            <thead style={{ backgroundColor: "#F3F4F6" }}>
              <tr>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Marks Obtained</th>
                <th className="border p-2">Total Marks</th>
                <th className="border p-2">Percentage</th>
                <th className="border p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Physics", obtained: marks.physics },
                { name: "Chemistry", obtained: marks.chemistry },
                { name: "Maths", obtained: marks.maths },
                { name: "Biology", obtained: marks.biology },
                { name: "Aptitude", obtained: marks.aptitude },
              ].map((subj, i) => {
                const percentage = getPercentage(subj.obtained, 10);
                const grade = getGrade(percentage);
                return (
                  <tr key={i}>
                    <td className="border p-2">{subj.name}</td>
                    <td className="border p-2">{subj.obtained}</td>
                    <td className="border p-2">10</td>
                    <td className="border p-2">{percentage}%</td>
                    <td className="border p-2">{grade}</td>
                  </tr>
                );
              })}
              <tr className="font-bold" style={{ backgroundColor: "#FAFAFA" }}>
                <td className="border p-2">Total</td>
                <td className="border p-2">{marks.total}</td>
                <td className="border p-2">50</td>
                <td className="border p-2">{getPercentage(marks.total, 50)}%</td>
                <td className="border p-2">{getGrade(getPercentage(marks.total, 50))}</td>
              </tr>
            </tbody>
          </table>

          {/* 🏆 Scholarship Message */}
          <div className="rounded-lg p-4" style={{ backgroundColor: "#FAFAFA", border: "1px solid #E5E7EB" }}>
            {marks.scholarshipPercent > 0 ? (
              <p style={{ color: "#15803D", fontWeight: "500" }}>
                🎉 Congratulations, <strong>{marks.studentName}</strong>!
                You have secured a <strong>{marks.scholarshipPercent}% scholarship</strong>.
              </p>
            ) : (
              <p style={{ color: "#CA8A04", fontWeight: "500" }}>
                Dear <strong>{marks.studentName}</strong>, you did not qualify for a scholarship.
                Keep working hard 💪
              </p>
            )}
          </div>

          <p className="text-xs italic mt-4">
            This is a system-generated marksheet.
          </p>

          {/* 📞 Contact Details */}
          <div
            className="mt-6 text-center text-sm border-t pt-4"
            style={{ color: "#4B5563" }}
          >
            <p>📞 Contact: +91 9942000371 | +91 9942000372</p>
            <p>
              🌐 Website:
              <a
                href="https://teamexcellentcareerinstitute.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#9333EA" }}
              >
                www.teamexcellentcareerinstitute.in
              </a>
            </p>
            <p>Email: teamexcellentpatna@gmail.com</p>
            <p>Address: Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India</p>
          </div>
        </div>
      )}

      {/* 📄 Download Button */}
      {marks && (
        <button
          onClick={exportToPDF}
          className="mt-4 text-white px-6 py-2 rounded-lg font-semibold transition"
          style={{ backgroundColor: "#16A34A" }}
        >
          Download Marksheet (PDF)
        </button>
      )}


    </div>
  );
};

export default StudentMarks;
