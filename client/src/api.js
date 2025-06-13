// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Use relative URL since we have proxy configured
  withCredentials: false, // Set to false since we're using proxy
});

export default API;
