// api.jsx
import axios from "axios";

const isDevelopment =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const API_BASE_URL = isDevelopment
  ? "http://localhost:5000/api"
  : "https://team-excellent-backend.vercel.app/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      window.dispatchEvent(new Event("forceLogout")); 
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post("/admin/loginAdmin", credentials),
  createAdmin: (adminData) => api.post("/admin/registerAdmin", adminData),
};

export const marksAPI = {
  create: (data) => api.post("/marks/addMarks", data),
  getAll: () => api.get("/marks/getAllMarks"),
  getOne: (data) => api.post("/marks/getStudentMarks", data),
  update: (id, data) => api.put(`/marks/updateMarks/${id}`, data),
  delete: (id) => api.delete(`/marks/deleteMarks/${id}`),
};

export default api;
