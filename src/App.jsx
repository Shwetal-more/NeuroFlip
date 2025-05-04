import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

// Auth Pages
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

// Main Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile/Profile";
import NotificationPage from "./pages/Profile/NotificationPage";
import DoctorChat from "./pages/DoctorChat";

// Games
import GameTrainingPage from "./pages/Games/GameTrainingPage";
import PatternMirror from "./Games/patternmirror";
import NumberGrid from "./Games/Numbergridmemory";
import MemoryMatch from "./Games/memory_match";
import BreathingGame from "./Games/BreathingGame";
import MathBuzz from "./Games/MathBuzz";

// Focus Mode
import FocusMode from "./FocusMode/Focusmode";

// Extra Features
import HealthBlogs from "./HealthBlogs/HealthBlogs";
import HealthVideos from "./HealthVideos/HealthVideos";
import Analytics from "./Analytics/Analytics";

// Create Auth Context
export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticated(!!(user && user.uid));
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const setAuth = (value) => {
    setIsAuthenticated(value);
    if (!value) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/focusmode" element={<FocusMode />} />
        <Route path="/healthblogs" element={<HealthBlogs />} />
        <Route path="/healthvideos" element={<HealthVideos />} />

        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login setAuth={setAuth} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Signup setAuth={setAuth} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile />
            ) : (
              <Navigate to="/login" state={{ from: "/profile" }} replace />
            )
          }
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated ? (
              <NotificationPage />
            ) : (
              <Navigate to="/login" state={{ from: "/notifications" }} replace />
            )
          }
        />
        <Route
          path="/doctorchat"
          element={
            isAuthenticated ? (
              <DoctorChat />
            ) : (
              <Navigate to="/login" state={{ from: "/doctorchat" }} replace />
            )
          }
        />
        <Route
          path="/analytics"
          element={
            isAuthenticated ? (
              <Analytics />
            ) : (
              <Navigate to="/login" state={{ from: "/analytics" }} replace />
            )
          }
        />

        {/* Game Routes */}
        <Route path="/gametraining" element={<GameTrainingPage />} />
        <Route path="/patternmirror" element={<PatternMirror />} />
        <Route path="/Numbergridmemory" element={<NumberGrid />} />
        <Route path="/memory_match" element={<MemoryMatch />} />
        <Route path="/breathing-game" element={<BreathingGame />} />
        <Route path="/mathbuzz" element={<MathBuzz />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;