import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar"; 
import Home from "./components/pages/Home";
import Register from './components/Register';
import Login from './components/Login';
import Jobs from './components/pages/Jobs';
import ChooseRole from "./components/pages/ChooseRole";
import PostJob from "./components/pages/PostJob"; 
import Wishlist from './components/pages/Wishlist'; 



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      
      {/* ✅ Correct position: Outside Routes */}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </Router>
  );
}

export default App;
