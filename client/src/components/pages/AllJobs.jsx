import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../JobCard'; // ✅ Ensure correct path

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs') // 🔁 Your actual endpoint
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
