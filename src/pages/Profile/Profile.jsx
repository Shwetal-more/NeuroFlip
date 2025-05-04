import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading or not logged in...</p>;
  }

  const handleNavigation = (path) => {
    navigate(`/${path.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1>{userData?.fullName || user.displayName || "User"}</h1>
          <p className="email">{user.email}</p>
        </div>

        <div className="profile-sections">
          <h2>Account</h2>
          <ul className="profile-options">
            <li onClick={() => setShowAccount(!showAccount)}>Account</li>
            <li onClick={() => handleNavigation("notifications")}>Notification</li>
            <li onClick={() => handleNavigation("progress")}>Progress</li>
            <li onClick={() => handleNavigation("privacy-security")}>Privacy & Security</li>
            <li onClick={() => handleNavigation("language")}>Language</li>
            <li onClick={() => navigate("/doctorchat")}>ChatBot</li>
          </ul>

          {showAccount && (
            <div className="account-section">
              <h4>Account Details</h4>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
