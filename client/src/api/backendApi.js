// src/api/backendApi.js
import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'http://localhost:5001/api', // Your local Node.js backend
});
