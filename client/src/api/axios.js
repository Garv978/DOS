import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ correct usage
  withCredentials: true, // 🔥 needed for cookies
});

export default API;