// frontend/src/lib/api.jsx
import axios from "axios";

// ✅ Axios instance
const api = axios.create({
  baseURL: "https://team-excellent-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor → attach token if exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor → handle 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin-login"; 
    }
    return Promise.reject(error);
  }
);

//
// ---------------- AUTH API ----------------
//
export const authAPI = {
  login: (credentials) => api.post("/admin/loginAdmin", credentials),
  createAdmin: (adminData) => api.post("/admin/registerAdmin", adminData),
};

//
// ---------------- MARKS API ----------------
//
export const marksAPI = {
  create: (data) => api.post("/marks/addMarks", data),
  getAll: () => api.get("/marks/getAllMarks"),
  getOne: (data) => api.post("/marks/getStudentMarks", data),
  update: (id, data) => api.put(`/marks/updateMarks/${id}`, data),
  delete: (id) => api.delete(`/marks/deleteMarks/${id}`),
};

export default api;
