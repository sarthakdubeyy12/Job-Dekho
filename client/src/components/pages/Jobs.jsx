import React, { useEffect, useState } from 'react';
import { MapPin, Briefcase, IndianRupee, Heart } from 'lucide-react';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../api';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };

    const fetchWishlist = async () => {
      if (user) {
        try {
          const res = await API.get(`/wishlist/${user.uid}`);
          const wishlistIds = res.data.map((j) => j._id);
          setWishlist(wishlistIds);
        } catch (err) {
          console.error('Error fetching wishlist:', err);
        }
      }
    };

    fetchJobs();
    fetchWishlist();
  }, [user]);

  const toggleWishlist = async (jobId) => {
    if (!user) {
      toast.warning("Please log in to use the wishlist feature.");
      return;
    }

    try {
      if (wishlist.includes(jobId)) {
  await API.delete(`/wishlist/${user.uid}/${jobId}`);
  setWishlist((prev) => prev.filter((id) => id !== jobId));
  toast.info("Removed from Wishlist");
      } else {
        await API.post('/wishlist/add',{
          userId: user.uid,
          jobId,
        });
        setWishlist((prev) => [...prev, jobId]);
        toast.success("Added to Wishlist");
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-0 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-center items-center mb-40">
  <h2 className="text-5xl font-bold text-center">Available Job Openings</h2>
</div>


      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md hover:shadow-2xl rounded-xl p-6 border border-gray-200 relative transition duration-300 ease-in-out"
          >
            {/* Heart Icon */}
            <button
              onClick={() => toggleWishlist(job._id)}
              className="absolute top-4 right-4 text-red-500"
              title={wishlist.includes(job._id) ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              {wishlist.includes(job._id) ? (
                <Heart fill="red" className="w-6 h-6" />
              ) : (
                <Heart className="w-6 h-6" />
              )}
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-gray-600 font-medium mb-2">{job.company}</p>

            <div className="text-sm text-gray-500 mb-1 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location || 'Remote'}
            </div>

            <div className="text-sm text-gray-500 mb-1 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              {job.type || 'Full-Time'}
            </div>

            <div className="text-sm text-gray-500 mb-3 flex items-center">
              <IndianRupee className="w-4 h-4 mr-2" />
              {job.salary || 'Not disclosed'}
            </div>

            <p className="text-gray-700 text-sm line-clamp-3">
              {job.description || 'No description provided.'}
            </p>

            <button className="mt-4 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
