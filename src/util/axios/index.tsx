// axiosInstance.js
import { Alert } from '@mui/material';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      <Alert severity="error">axiosInstance respones 에러</Alert>
    } else if (error.request) {
      <Alert severity="error">axiosInstance request 에러</Alert>
    } else {
      <Alert severity="error">axiosInstance 무슨 에러</Alert>
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;