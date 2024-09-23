import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

AxiosInstance.interceptors.response.use(
    (config) => {
        // Assuming the token is stored in localStorage or a cookie
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers['Authorization'] = `Bearer ${token || ""}`;
        }

        return config;
    },
    (error)=>{
        if (error.response && error.response.status === 401) {
            console.log('call the refresh token api here')
            console.log(error)
            // Handle 401 error, e.g., redirect to login or refresh token
          }
          return Promise.reject(error)
    }
)