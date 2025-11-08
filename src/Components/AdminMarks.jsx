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

  const [search, setSearch] = useState(""); // ✅ ADDED FOR SEARCH

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn) loadMarks();
  }, [isLoggedIn]);

  const loadMarks = async () => {
    try {
      setIsLoading(true);
      const response = await marksAPI.getAll();

      let data = Array.isArray(response.data) ? response.data : [];

      data = data.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return b._id.localeCompare(a._id);
      });

      setMarks(data);
    } catch (error) {
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
          prev.map((m) => (m._id === editingMark._id ? response.data : m))
        );
        setEditingMark(null);
        toast.success("Marks updated successfully");
      } else {
        await marksAPI.create(formData);
        await loadMarks();
        toast.success("Marks added successfully");
      }
    } catch {
      toast.error("Failed to submit marks");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMark = async (id) => {
    try {
      setIsLoading(true);
      await marksAPI.delete(id);
      setMarks((prev) => prev.filter((m) => m._id !== id));
      toast.success("Record deleted");
    } catch {
      toast.error("Failed to delete");
    } finally {
      setIsLoading(false);
    }
  };

  const recentMarks = marks.slice(0, 2); // ✅ UNCHANGED

  const handleExportToExcel = () => {
    if (!marks.length) return toast.error("No data to export");

    const worksheet = XLSX.utils.json_to_sheet(marks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Marks");
    XLSX.writeFile(workbook, "MarksData.xlsx");
    toast.success("Exported successfully");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
        <Card>
          <form onSubmit={handleLogin} className="space-y-4 w-70 lg:w-100">
            <div className="flex flex-col items-center justify-center">
              <img src={TeamExcellent} alt="Logo" className=" md:w-65 lg:w-90" />
            </div>
            <h2 className="text-xl font-bold text-center">Admin Login</h2>
            <Input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              placeholder="Email"
            />
            <Input
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
              required
              placeholder="Password"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] mt-30 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard - Marks</h1>
        <div className="flex gap-2">
          <Button onClick={() => navigate(-1)}>⬅ Back</Button>
          <Button onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4 inline" /> Logout
          </Button>
        </div>
      </div>

      <Card className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Total Students: {marks.length}</h2>
        <Button onClick={handleExportToExcel}>Export to Excel</Button>
      </Card>

      <Card>
        <MarksForm
          onSubmit={handleSubmitMark}
          editingMark={editingMark}
          onCancel={() => setEditingMark(null)}
        />
      </Card>

      <Card className="mb-6 mt-6">
        <h2 className="text-lg font-semibold mb-3">Recently Added Students</h2>

        {recentMarks.length ? (
          recentMarks.map((r) => (
            <div key={r._id} className="border-b py-3 text-sm">
              <p><strong>Name:</strong> {r.studentName}</p>
              <p><strong>Class:</strong> {r.className}</p>
              <p><strong>School:</strong> {r.schoolName}</p>
              <p><strong>Father's Name:</strong> {r.fatherName}</p>
              <p><strong>Contact:</strong> {r.contactNumber}</p>
              <p><strong>Date of Birth:</strong> {new Date(r.dateofBirth).toLocaleDateString()}</p>
              <p className="mt-2"><strong>Marks</strong></p>
              <p>Physics: {r.physics}, Chemistry: {r.chemistry}, Maths: {r.maths}, Biology: {r.biology}, Aptitude: {r.aptitude}</p>
              <p className="mt-1"><strong>Total:</strong> {r.total}</p>
              {r.scholarshipPercent && (
                <p><strong>Scholarship:</strong> {r.scholarshipPercent}%</p>
              )}
            </div>
          ))
        ) : (
          <p>No recent entries</p>
        )}
      </Card>

      {/* ✅ SEARCH UI ADDED HERE */}
      <Card className="mb-6 mt-6">
        <Label>Search by Contact Number</Label>
        <Input
          type="text"
          placeholder="Enter contact number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Card>

      <div className="mt-6">
        <MarksList
          marks={marks.filter((m) =>
            m.contactNumber?.toString().includes(search.trim())
          )}
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
      className: "",
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
    if (editingMark) setFormData(editingMark);
  }, [editingMark]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      updated.total =
        Number(updated.physics || 0) +
        Number(updated.chemistry || 0) +
        Number(updated.maths || 0) +
        Number(updated.biology || 0) +
        Number(updated.aptitude || 0);
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      studentName: "",
      className: "",
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
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4">
      <Input name="studentName" value={formData.studentName} onChange={handleChange} required placeholder="Full Name" />
      <Input name="className" value={formData.className} onChange={handleChange} required placeholder="Class" />
      <Input name="schoolName" value={formData.schoolName} onChange={handleChange} required placeholder="School Name" />
      <Input name="fatherName" value={formData.fatherName} onChange={handleChange} required placeholder="Father's Name" />
      <Input type="date" name="dateofBirth" value={formData.dateofBirth} onChange={handleChange} required />
      <Input name="contactNumber" value={formData.contactNumber} onChange={handleChange} required placeholder="Contact Number" />

      <Input type="number" name="physics" value={formData.physics} onChange={handleChange} required placeholder="Physics" min="0" max="10" />
      <Input type="number" name="chemistry" value={formData.chemistry} onChange={handleChange} required placeholder="Chemistry" min="0" max="10" />
      <Input type="number" name="maths" value={formData.maths} onChange={handleChange} required placeholder="Maths" min="0" max="10" />
      <Input type="number" name="biology" value={formData.biology} onChange={handleChange} required placeholder="Biology" min="0" max="10" />
      <Input type="number" name="aptitude" value={formData.aptitude} onChange={handleChange} required placeholder="Aptitude" min="0" max="10" />

      <div>
        <Label>Total</Label>
        <Input type="number" name="total" value={formData.total} readOnly />
      </div>

      <div className="flex gap-2 col-span-full">
        <Button type="submit">{editingMark ? "Update" : "Add"} Marks</Button>
        {editingMark && (
          <Button type="button" onClick={onCancel} className="bg-[#6b7280] hover:bg-[#4b5563]">
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
  const currentMarks = marks.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
            <p><strong>{mark.studentName}</strong> ({mark.contactNumber})</p>
            <p>Class: {mark.className}</p>
            <p>School: {mark.schoolName}</p>
            <p>Father: {mark.fatherName}</p>
            <p>DOB: {formatDate(mark.dateofBirth)}</p>
            <p>
              Physics: {mark.physics}, Chemistry: {mark.chemistry}, Maths: {mark.maths}, Biology: {mark.biology}, Aptitude: {mark.aptitude}
            </p>
            <p><strong>Total: {mark.total}</strong></p>
            <p>Scholarship: {mark.scholarshipPercent}%</p>
          </div>

          <div className="flex gap-2 mt-2">
            <Button onClick={() => onEdit(mark)}>Edit</Button>
            <Button
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this record?")) onDelete(mark._id);
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}

      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="bg-[#6b7280]">
          Prev
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default AdminMarks;
