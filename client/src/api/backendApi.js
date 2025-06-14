// src/api/backendApi.js
import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5001/api'
    : `${process.env.REACT_APP_API_URL}/api`;

export const backendAPI = axios.create({
  baseURL,
});
