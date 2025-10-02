import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import * as XLSX from "xlsx"; 
import { authAPI, marksAPI } from "../lib/api";
import TeamExcellent from "../assets/TeamExcellent.webp";
import { useNavigate } from "react-router-dom"; 
import toast, { Toaster } from "react-hot-toast"; 

// ----------------- UI Components -----------------
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-[#902ce8] text-white cursor-pointer rounded disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input
    className="w-full border border-[#d1d5db] px-3 py-2 rounded focus:outline-none focus:ring focus:ring-[#902ce8]"
    {...props}
  />
);

const Label = ({ children, ...props }) => (
  <label className="block text-sm font-medium mb-1" {...props}>
    {children}
  </label>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow rounded-lg p-6 ${className}`}>{children}</div>
);

// ----------------- Main Component -----------------
const AdminMarks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [marks, setMarks] = useState([]);
  const [editingMark, setEditingMark] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ On mount, check localStorage for token
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Load marks when logged in
  useEffect(() => {
    if (isLoggedIn) {
      loadMarks();
    }
  }, [isLoggedIn]);

  const loadMarks = async () => {
    try {
      setIsLoading(true);
      const response = await marksAPI.getAll();
      setMarks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error loading marks:", error);
      toast.error("Failed to load marks");
      setMarks([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await authAPI.login(loginForm);
      localStorage.setItem("adminToken", response.data.token);
      setIsLoggedIn(true);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setMarks([]);
    setEditingMark(null);
    toast.success("Logged out successfully");
  };

  const handleSubmitMark = async (formData) => {
    try {
      setIsLoading(true);
      if (editingMark) {
        const response = await marksAPI.update(editingMark._id, formData);
        setMarks((prev) =>
          prev.map((m) =>
            m._id === editingMark._id ? response.data.updatedMarks : m
          )
        );
        setEditingMark(null);
        toast.success("Marks updated successfully");
      } else {
        await marksAPI.create(formData);
        await loadMarks(); // ✅ reload marks so fresh data is shown immediately
        toast.success("Marks added successfully");
      }
    } catch (error) {
      console.error("Error submitting marks:", error);
      toast.error(error.response?.data?.message || "Failed to submit marks");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMark = async (id) => {
    try {
      setIsLoading(true);
      await marksAPI.delete(id);
      setMarks((prev) => prev.filter((m) => m._id !== id));
      toast.success("Marks deleted successfully");
    } catch (error) {
      console.error("Error deleting marks:", error);
      toast.error(error.response?.data?.message || "Failed to delete marks");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Export to Excel
  const handleExportToExcel = () => {
    if (!marks.length) {
      toast.error("No data available to export");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(marks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Marks");
    XLSX.writeFile(workbook, "MarksData.xlsx");
    toast.success("Data exported successfully!");
  };

  // ----------------- Login Screen -----------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
        <Card>
          <form onSubmit={handleLogin} className="space-y-4 w-70 lg:w-100">
            <div className="flex flex-col items-center justify-center">
              <img
                src={TeamExcellent}
                alt="Logo"
                className=" md:w-65 lg:w-90"
              />
            </div>
            <h2 className="text-xl font-bold text-center">Admin Login</h2>
            <div>
              <Input
                type="email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Input
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </Card>
      </div>
    );
  }

  // ----------------- Dashboard -----------------
  return (
    <div className="min-h-screen bg-[#f3f4f6] mt-30 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard - Marks</h1>
        <div className="flex gap-2">
          <Button onClick={() => navigate(-1)}>⬅ Back</Button>
          <Button onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4 inline" />
            Logout
          </Button>
        </div>
      </div>

      {/* ✅ Summary Card */}
      <Card className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Total Students: {marks.length}
          </h2>
          <Button onClick={handleExportToExcel}>Export to Excel</Button>
        </div>
      </Card>

      {/* Marks Form */}
      <Card>
        <MarksForm
          onSubmit={handleSubmitMark}
          editingMark={editingMark}
          onCancel={() => setEditingMark(null)}
        />
      </Card>

      {/* Marks List */}
      <div className="mt-6">
        <MarksList
          marks={marks}
          onEdit={setEditingMark}
          onDelete={handleDeleteMark}
        />
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

// ----------------- Marks Form -----------------
const MarksForm = ({ onSubmit, editingMark, onCancel }) => {
  const [formData, setFormData] = useState(
    editingMark || {
      studentName: "",
      schoolName: "",
      fatherName: "",
      dateofBirth: "",
      contactNumber: "",
      physics: "",
      chemistry: "",
      maths: "",
      biology: "",
      aptitude: "",
      total: "",
    }
  );

  useEffect(() => {
    if (editingMark) {
      setFormData(editingMark);
    }
  }, [editingMark]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      const physics = parseInt(updated.physics || 0);
      const chemistry = parseInt(updated.chemistry || 0);
      const maths = parseInt(updated.maths || 0);
      const biology = parseInt(updated.biology || 0);
      const aptitude = parseInt(updated.aptitude || 0);

      updated.total = physics + chemistry + maths + biology + aptitude;

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      studentName: "",
      schoolName: "",
      fatherName: "",
      dateofBirth: "",
      contactNumber: "",
      physics: "",
      chemistry: "",
      maths: "",
      biology: "",
      aptitude: "",
      total: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4"
    >
      <div>
        <Input
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          placeholder="Enter full name"
        />
      </div>
      <div>
        <Input
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
          placeholder="Enter school name"
        />
      </div>
      <div>
        <Input
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
          placeholder="Enter father's name"
        />
      </div>
      <div>
        <Input
          type="date"
          name="dateofBirth"
          value={formData.dateofBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          placeholder="Enter contact number"
        />
      </div>
      <div>
        <Input
          type="number"
          name="physics"
          value={formData.physics}
          onChange={handleChange}
          required
          placeholder="Enter marks in Physics"
          min="0"
          max="10"
        />
      </div>
      <div>
        <Input
          type="number"
          name="chemistry"
          value={formData.chemistry}
          onChange={handleChange}
          required
          placeholder="Enter marks in Chemistry"
          min="0"
          max="10"
        />
      </div>
      <div>
        <Input
          type="number"
          name="maths"
          value={formData.maths}
          onChange={handleChange}
          required
          placeholder="Enter marks in Maths"
          min="0"
          max="10"
        />
      </div>
      <div>
        <Input
          type="number"
          name="biology"
          value={formData.biology}
          onChange={handleChange}
          required
          placeholder="Enter marks in Biology"
          min="0"
          max="10"
        />
      </div>
      <div>
        <Input
          type="number"
          name="aptitude"
          value={formData.aptitude}
          onChange={handleChange}
          required
          placeholder="Enter marks in Aptitude"
          min="0"
          max="10"
        />
      </div>
      <div>
        <Label>Total</Label>
        <Input type="number" name="total" value={formData.total} readOnly />
      </div>
      <div className="flex gap-2 col-span-full">
        <Button type="submit">{editingMark ? "Update" : "Add"} Marks</Button>
        {editingMark && (
          <Button
            type="button"
            onClick={onCancel}
            className="bg-[#6b7280] hover:bg-[#4b5563]"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

// ----------------- Marks List -----------------
const ITEMS_PER_PAGE = 10;

const MarksList = ({ marks = [], onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(marks) || marks.length === 0) {
    return <p className="text-[#6b7280]">No marks found</p>;
  }

  const totalPages = Math.ceil(marks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMarks = marks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  };

  return (
    <div className="space-y-4">
      {currentMarks.map((mark) => (
        <Card key={mark._id}>
          <div>
            <p>
              <strong>{mark.studentName}</strong> ({mark.contactNumber})
            </p>
            <p>School: {mark.schoolName}</p>
            <p>Father: {mark.fatherName}</p>
            <p>DOB: {formatDate(mark.dateofBirth)}</p>
            <p>
              Physics: {mark.physics}, Chemistry: {mark.chemistry}, Maths:{" "}
              {mark.maths}, Biology: {mark.biology}, Aptitude: {mark.aptitude}
            </p>
            <p>
              <strong>Total: {mark.total}</strong>
            </p>
            <p>🎓 Scholarship: {mark.scholarshipPercent}%</p>
          </div>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => onEdit(mark)}>Edit</Button>
            <Button
              onClick={() => onDelete(mark._id)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#6b7280] hover:bg-[#4b5563]"
        >
          Prev
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AdminMarks;
