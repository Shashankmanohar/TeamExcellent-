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
      className="min-h-screen flex mt-30 flex-col items-center"
    >
      {/* Header Banner */}
      <div
        style={{ backgroundColor: "#6B21A8" }}
        className="w-full text-center py-10 px-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Scholarship Examination – Check Your Results
        </h1>
        <p style={{ color: "#E9D5FF" }} className="mt-2">
          Enter your details below to view your marks and scholarship eligibility.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mx-4"
      >
        <div className="col-span-full flex justify-center mb-2">
          <img src={logo} alt="Team Excellent Career Institute Logo" className="h-16 w-auto" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full border"
            style={{
              borderColor: "#D1D5DB",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full border"
            style={{
              borderColor: "#D1D5DB",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateofBirth"
            value={formData.dateofBirth}
            onChange={handleChange}
            required
            className="w-full border"
            style={{
              borderColor: "#D1D5DB",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="col-span-full text-white py-3 rounded-lg font-semibold transition"
          style={{ backgroundColor: "#9333EA" }}
        >
          {loading ? "Checking..." : "Get Marks"}
        </button>
      </form>

      {/* 🎯 Marksheet Display */}
      {marks && (
        <div
          id="marksheet"
          className="bg-white shadow-lg rounded-xl mt-8 w-full max-w-3xl p-6 mx-4"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Team Excellent Career Institute Marksheet Logo" className="h-20 mb-2" />
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
            <p>Address: New Kunj Colony, Saketpuri, Patna, Bihar 800016, India</p>
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
