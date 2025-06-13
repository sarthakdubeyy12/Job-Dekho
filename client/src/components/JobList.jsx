// src/components/JobList.jsx
import React, { useEffect, useState } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/jobs");
        const data = await res.json();
        setJobs(data || []); // Depends on API structure
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Estimated Job Salaries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job, idx) => (
            <li key={idx} className="p-4 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.location}</p>
              <p className="mt-2">Estimated Salary: {job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
