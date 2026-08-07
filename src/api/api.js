import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// 🔐 Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 Handle token expiry / unauthorized (ADMIN ONLY)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const currentPath = window.location.pathname;

    // 🔥 Only logout if user is on admin pages
    if (
      (status === 401 || status === 403) &&
      currentPath.startsWith("/admin")
    ) {
      localStorage.removeItem("token");

      // Avoid infinite redirect
      if (!currentPath.includes("/admin/login")) {
        alert("Session expired. Please login again.");
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
