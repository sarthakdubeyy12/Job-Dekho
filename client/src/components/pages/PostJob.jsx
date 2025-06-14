// src/pages/PostJob.jsx
import React, { useState } from 'react';
import API from '../../api';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/jobs', formData);
      setSuccess('Job posted successfully!');
      setError('');
      setFormData({ title: '', company: '', location: '', description: '' });
    } catch (err) {
      setError('Failed to post job. Try again.');
      setSuccess('');
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen px-16 py-30 flex flex-col items-center justify-start relative">
      <h1 className="text-5xl sm:text-7xl font-bold mb-12 text-center">Post a Job</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-5xl bg-[#0d0f15] p-8 rounded-lg shadow-xl space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#11131a] text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#11131a] text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
        />

        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#11131a] text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#11131a] text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="button"
            disabled
            className="bg-[#1f2937] text-white px-6 py-3 rounded-md mt-1 md:mt-0 cursor-not-allowed"
          >
            Add Company
          </button>
        </div>

        <div className="bg-[#11131a] border border-gray-700 rounded-md min-h-[200px] p-4 text-gray-400">
          {/* Placeholder for future rich text editor */}
          Rich Text Editor Placeholder
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg"
        >
          Submit
        </button>

        {success && <p className="text-green-500 font-medium">{success}</p>}
        {error && <p className="text-red-500 font-medium">{error}</p>}
      </form>
    </main>
  );
};

export default PostJob;
