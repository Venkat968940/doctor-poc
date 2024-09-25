import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Install with `npm install jwt-decode`

// Axios instance setup
export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to check if the token is expired
const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true; // If token cannot be decoded, treat as expired
  }
};

// Axios request interceptor
AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken"); // Or however you store your token

    if (token && isTokenExpired(token)) {
      // Create a cancel token to cancel the request if token is expired
      const cancelTokenSource = axios.CancelToken.source();
      config.cancelToken = cancelTokenSource.token;

      // Cancel the request
      cancelTokenSource.cancel("Token expired. Request canceled.");

      // Optionally: remove expired token from localStorage
      localStorage.removeItem("accessToken");

      // Optionally: redirect to login page
      window.location.href = "/sign-in";
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor (optional)
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.error("Request canceled due to token expiration:", error.message);
    } else {
      console.error("Error in response:", error);
    }
    return Promise.reject(error);
  }
);

