import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const defaultAxiosInstance = axios.create({
  baseURL,
});

const axiosPrivate = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

export default defaultAxiosInstance;
export { axiosPrivate };