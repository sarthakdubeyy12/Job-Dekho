import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import api from "../../api";
import JobCard from "../JobCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user) {
        try {
          const res = await api.get(`/wishlist/${user.uid}`);
          setWishlist(res.data);
        } catch (err) {
          console.error("Error fetching wishlist:", err);
        }
      }
    };

    fetchWishlist();
  }, [user]);

  return (
    <div style={styles.container}>
      
      {wishlist.length === 0 ? (
        <div style={styles.emptyState}>
          <div className="text-yellow-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-gray-600 font-semibold">No jobs wishlisted yet.</p>
        </div>
      ) : (
        wishlist.map((job) => <JobCard key={job._id} job={job} />)
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    minHeight: "80vh",
  },
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
    textAlign: "center",
  },
};

export default Wishlist;
