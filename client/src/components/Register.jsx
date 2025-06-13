import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password must be at least 6 characters.');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-8 text-indigo-800">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-indigo-600"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* Alerts */}
        {error && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center mt-4">{success}</p>}

        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{' '}
          <button
            className="text-indigo-600 underline"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-indigo-50 p-10">
        <img
          src="/poster4.jpg" 
          alt="Register Illustration"
          className="w-3/4 max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Register;
