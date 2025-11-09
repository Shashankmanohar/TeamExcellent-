import axios from "axios";

// ✅ Get API URL - use local backend in development, production in production
const isDevelopment =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const API_BASE_URL = isDevelopment
  ? "http://localhost:5000/api" // Local backend
  : "https://team-excellent-backend.vercel.app/api"; // Production backend

// ✅ Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
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
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("API Request Error:", error.request);
    } else {
      console.error("API Error:", error.message);
    }

    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      // Don't redirect on login page - let the error be handled by the component
      if (!window.location.pathname.includes("/admin-login")) {
        window.location.href = "/admin-login";
      }
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
