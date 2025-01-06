import axios from "axios";

const axiosInstance = axios.create({
   baseURL: 'https://api.themoviedb.org/3'
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