import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Password strength validation
   
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optional: Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
      }));

      navigate("/"); // Redirect to home page
    } catch (error) {
      console.log("Signup error:", error); // Add this
      setError(error.message || "Failed to create an account. Try again.");
    }
    
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Signup</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSignup} className="signup-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">Signup</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
