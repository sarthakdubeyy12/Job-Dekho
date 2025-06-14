// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5001/api' // local backend
      : `${process.env.REACT_APP_API_URL}/api`, // deployed backend
  withCredentials: false,
});

export default API;
