import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
import BalloonBurst from "./Games/balloonburst";
import TraceTrain from "./Games/trace_train";
import MemoryMatch from "./Games/memory_match";

// Focus Mode
import FocusMode from "./FocusMode/Focusmode";

// Extra Features
import HealthBlogs from "./HealthBlogs/HealthBlogs";
import HealthVideos from "./HealthVideos/HealthVideos";
import Analytics from "./Analytics/Analytics";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.uid) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth Pages */}
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />

      {/* Protected Profile Pages */}
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/notifications" element={isAuthenticated ? <NotificationPage /> : <Navigate to="/login" />} />

      {/* Doctor Chat */}
      <Route path="/doctorchat" element={isAuthenticated ? <DoctorChat /> : <Navigate to="/login" />} />

      {/* Focus Mode */}
      <Route path="/focusmode" element={<FocusMode />} />

      {/* Games */}
      <Route path="/gametraining" element={<GameTrainingPage />} />
      <Route path="/balloonburst" element={<BalloonBurst />} />
      <Route path="/trace_train" element={<TraceTrain />} />
      <Route path="/memory_match" element={<MemoryMatch />} />

      {/* Extra Features */}
      <Route path="/healthblogs" element={<HealthBlogs />} />
      <Route path="/healthvideos" element={<HealthVideos />} />
      <Route path="/analytics" element={isAuthenticated ? <Analytics /> : <Navigate to="/login" />} />

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
