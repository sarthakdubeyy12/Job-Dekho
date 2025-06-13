import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const ChooseRole = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleRoleSelect = async (role) => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { role, email: user.email }, { merge: true });

      if (role === "candidate") navigate("/jobs");
      else if (role === "recruiter") navigate("/post-job");
    } catch (error) {
      console.error("Error saving role:", error);
    }
  };

  return (
    <main className="min-h-screen px-6 sm:px-16 py-40 flex flex-col items-center justify-start">

      <h1 className="text-5xl sm:text-7xl font-bold mb-16 text-center drop-shadow-lg">
        Who Are You?
      </h1>
      <div className="flex flex-col sm:flex-row gap-10">
        <button
          onClick={() => handleRoleSelect("candidate")}
          className="bg-green-600 hover:bg-green-700 px-10 py-5 rounded-xl text-4xl font-semibold transition duration-300 shadow-lg"
        >
          I'm a Candidate
        </button>
        <button
          onClick={() => handleRoleSelect("recruiter")}
          className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xl text-4xl font-semibold transition duration-300 shadow-lg"
        >
          I'm a Admin
        </button>
      </div>
    </main>
  );
};

export default ChooseRole;
