import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRoleRedirect = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists() || !userSnap.data().role) {
      navigate('/choose-role');
    } else {
      const role = userSnap.data().role;
      if (role === 'candidate') navigate('/jobs');
      else if (role === 'recruiter') navigate('/post-job');
      else navigate('/choose-role');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful! Redirecting...');
      await handleRoleRedirect(userCred.user.uid);
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError(err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSuccess('');
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName,
          role: null,
        });
      }

      setSuccess(`Logged in as ${user.email}`);
      await handleRoleRedirect(user.uid);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-8 text-indigo-800">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
            Login
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-5 flex items-center justify-center gap-4 border border-gray-300 py-3 rounded-md transition"
        >
          <img src="/googlelogo.jpg" alt="Google" className="w-5 h-5" />
          <span className="text-sm text-white">Sign in with Google</span>
        </button>

        {/* Alerts */}
        {error && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center mt-4">{success}</p>}

        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account?{' '}
          <button
            className="text-indigo-600 underline"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </p>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-indigo-50 p-10">
        <img
          src="/poster5.jpg" 
          alt="Login Illustration"
          className="w-3/4 max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
