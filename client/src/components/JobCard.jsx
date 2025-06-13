import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import api from "../api"; // Your Axios instance

const JobCard = ({ job }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      if (user) {
        try {
          const res = await api.get(`/wishlist/${user.uid}`);
          const found = res.data.find((j) => j._id === job._id);
          setIsWishlisted(!!found);
        } catch (err) {
          console.error("Error checking wishlist status:", err);
        }
      }
    };

    fetchWishlistStatus();
  }, [user, job._id]);

  const handleWishlistToggle = async () => {
    if (!user) return alert("Please log in to use wishlist.");

    try {
      if (isWishlisted) {
        await api.delete(`/wishlist/${user.uid}/${job._id}`);
        setIsWishlisted(false);
      } else {
        await api.post("/wishlist/add", {
          userId: user.uid,
          jobId: job._id,
        });
        setIsWishlisted(true);
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  return (
    <div className="job-card" style={styles.card}>
      <div style={styles.header}>
        <h3>{job.title}</h3>
        <button onClick={handleWishlistToggle} style={styles.wishlistBtn}>
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "8px",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  wishlistBtn: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default JobCard;
