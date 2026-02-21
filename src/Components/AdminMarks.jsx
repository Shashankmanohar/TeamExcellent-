import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import * as XLSX from "xlsx";
import { authAPI, marksAPI } from "../lib/api";
import TeamExcellent from "../assets/TeamExcellent.webp";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// ----------------- UI Components -----------------
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-[#902ce8] text-white rounded disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = (props) => (
  <input
    className="w-full border border-[#d1d5db] px-3 py-2 rounded focus:outline-none focus:ring focus:ring-[#902ce8]"
    {...props}
  />
);

const Label = ({ children }) => (
  <label className="block text-sm font-medium mb-1">{children}</label>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow rounded-lg p-6 ${className}`}>{children}</div>
);

// ----------------- Main Component -----------------
const AdminMarks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [marks, setMarks] = useState([]);
  const [editingMark, setEditingMark] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) loadMarks();
  }, [isLoggedIn]);

  const loadMarks = async () => {
    try {
      setIsLoading(true);
      const response = await marksAPI.getAll();
      const data = Array.isArray(response.data) ? response.data : [];
      setMarks(
        data.sort((a, b) =>
          a.createdAt && b.createdAt
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : b._id.localeCompare(a._id)
        )
      );
    } catch {
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
      const { data } = await authAPI.login(loginForm);
      if (data?.token) {
        localStorage.setItem("adminToken", data.token);
        setIsLoggedIn(true);
        toast.success("Login successful!");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Invalid credentials";
      toast.error(msg);
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
        toast.success("Marks updated");
      } else {
        await marksAPI.create(formData);
        await loadMarks();
        toast.success("Marks added");
      }
    } catch {
      toast.error("Failed to submit");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMark = async (id) => {
    if (!window.confirm("Delete this record?")) return;
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

  const handleExportToExcel = () => {
    if (!marks.length) return toast.error("No data to export");
    const worksheet = XLSX.utils.json_to_sheet(marks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Marks");
    XLSX.writeFile(workbook, "MarksData.xlsx");
    toast.success("Exported successfully");
  };

  const recentMarks = marks.slice(0, 2);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
        <Card>
          <form onSubmit={handleLogin} className="space-y-4 w-70 lg:w-100">
            <div className="flex justify-center">
              <img src={TeamExcellent} alt="Team Excellent Career Institute Admin Portal Logo" className="w-40 md:w-56" />
            </div>
            <h2 className="text-xl font-bold text-center">Admin Login</h2>
            <Input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((p) => ({ ...p, email: e.target.value }))
              }
              required
              placeholder="Email"
            />
            <Input
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((p) => ({ ...p, password: e.target.value }))
              }
              required
              placeholder="Password"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

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

      {/* Navigation Menu */}
      <Card className="mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/admin-login')}
            className="px-4 py-2 bg-[#902ce8] text-white rounded font-semibold"
          >
            📊 Marks Management
          </button>
          <button
            onClick={() => navigate('/admin/blogs')}
            className="px-4 py-2 bg-white border-2 border-[#902ce8] text-[#902ce8] rounded font-semibold hover:bg-[#902ce8] hover:text-white transition-colors"
          >
            📝 Blog Management
          </button>
          <button
            onClick={() => navigate('/admin/enrollments')}
            className="px-4 py-2 bg-white border-2 border-[#902ce8] text-[#902ce8] rounded font-semibold hover:bg-[#902ce8] hover:text-white transition-colors"
          >
            🎓 Student Enrollments
          </button>
        </div>
      </Card>

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

      <Card className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Recently Added Students</h2>
        {recentMarks.length ? (
          recentMarks.map((r) => (
            <div key={r._id} className="border-b py-3 text-sm">
              <p><strong>Name:</strong> {r.studentName}</p>
              <p><strong>Class:</strong> {r.className}</p>
              <p><strong>School:</strong> {r.schoolName}</p>
              <p><strong>Father:</strong> {r.fatherName}</p>
              <p><strong>Contact:</strong> {r.contactNumber}</p>
              <p><strong>DOB:</strong> {new Date(r.dateofBirth).toLocaleDateString()}</p>
              <p><strong>Total:</strong> {r.total}</p>
              {r.scholarshipPercent && (
                <p><strong>Scholarship:</strong> {r.scholarshipPercent}%</p>
              )}
            </div>
          ))
        ) : (
          <p>No recent entries</p>
        )}
      </Card>

      <Card className="mt-6">
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
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4"
    >
      {[
        "studentName",
        "className",
        "schoolName",
        "fatherName",
        "contactNumber",
      ].map((field) => (
        <Input
          key={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          required
          placeholder={field.replace(/([A-Z])/g, " $1")}
        />
      ))}
      <Input
        type="Date"
        name="dateofBirth"
        value={formData.dateofBirth}
        onChange={handleChange}
        required
        placeholder="Date of Birth (DD-MM-YYYY)"
      />
      {["physics", "chemistry", "maths", "biology", "aptitude"].map((subj) => (
        <Input
          key={subj}
          type="number"
          name={subj}
          value={formData[subj]}
          onChange={handleChange}
          required
          placeholder={subj[0].toUpperCase() + subj.slice(1)}
          min="0"
          max="10"
        />
      ))}
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
            className="bg-gray-500 hover:bg-gray-600"
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

  if (!marks.length) return <p className="text-gray-500">No marks found</p>;

  const totalPages = Math.ceil(marks.length / ITEMS_PER_PAGE);
  const currentMarks = marks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatDate = (dateStr) => {
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
              Physics: {mark.physics}, Chemistry: {mark.chemistry}, Maths: {mark.maths},
              Biology: {mark.biology}, Aptitude: {mark.aptitude}
            </p>
            <p><strong>Total: {mark.total}</strong></p>
            {mark.scholarshipPercent && (
              <p>Scholarship: {mark.scholarshipPercent}%</p>
            )}
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

      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-500"
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
