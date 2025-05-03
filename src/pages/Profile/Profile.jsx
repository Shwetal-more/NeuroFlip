import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showMedical, setShowMedical] = useState(false);
  const [questionnaireData, setQuestionnaireData] = useState(null);
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

        // Fetch questionnaire response from Firestore
        const qSnapshot = await getDocs(collection(db, "questionnaire_responses"));
        qSnapshot.forEach((doc) => {
          if (doc.data().userId === currentUser.uid) {
            setQuestionnaireData(doc.data());
          }
        });
      } else {
        setUser(null);
        setUserData(null);
        setQuestionnaireData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading or not logged in...</p>;
  }

  const handleNavigation = (path) => {
    switch(path) {
      case "Notification":
        navigate("/notifications");
        break;
      case "Progress":
        navigate("/progress");
        break;
      case "Privacy & Security":
        navigate("/privacy-security");
        break;
      case "Language":
        navigate("/language");
        break;
      case "ChatBot":
        navigate("/chatbot");
        break;
      default:
        break;
    }
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
            <li onClick={() => handleNavigation("Notification")}>Notification</li>
            <li onClick={() => handleNavigation("Progress")}>Progress</li>
            <li onClick={() => handleNavigation("Privacy & Security")}>Privacy & Security</li>
            <li onClick={() => handleNavigation("Language")}>Language</li>
            <li onClick={() => setShowMedical(!showMedical)}>Medical History</li>
            <li onClick={() => handleNavigation("ChatBot")}>ChatBot</li>
          </ul>

          {showMedical && (
            <div className="medical-history">
              <h4>Medical History</h4>
              {questionnaireData ? (
                <ul>
                  {Object.entries(questionnaireData).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value.toString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No medical history found.</p>
              )}
            </div>
          )}

          {showAccount && (
            <div className="account-section">
              <h4>Account Details</h4>
              <p><strong>Name:</strong> {userData?.fullName || "N/A"}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Emergency Contact:</strong> {userData?.emergencyContact || "N/A"}</p>
              <p><strong>Blood Type:</strong> {userData?.bloodType || "N/A"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;