import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://online-learning-platform-backend.onrender.com', 
});

export default axiosInstance;
