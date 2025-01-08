import axios from "axios";

const axiosInstance = axios.create({
   baseURL: import.meta.env.REACT_APP_API_BASE_URL
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors more gracefully here
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance; 