import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Footer from "./Footer/Footer";


const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedMood, setSelectedMood] = useState(null);
  console.log("User:", user);

  const handleClick = () => {
    navigate("/notifications");
  };


  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCardClick = () => {
    navigate("/rehabilitation-games");
  };

  const handleMoodClick = (index) => {
    // Set the selected mood in state
    setSelectedMood(index);

    // Add the active class to the clicked button
    const buttons = document.querySelectorAll(".pain-scale-button");
    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

  
  };

  return (
    <div className="home-container">
      <div className="animated-background"></div>

      {/* Header Section */}
      <header className="header">
        <div className="header-decoration"></div>
       <div className="header-content">
  <div className="header-left">
    <div className="logo-container">
      <div className="logo-pulse"></div>
      <img src="/addimage/logo.png" alt="Logo" className="logo" />
    </div>
    
    <h1 className="brand-title">NeuroFlip</h1>

    {/* Only show navigation if user is logged in */}
    
      <nav className="nav-links">
        <button onClick={() => navigate("/about")} className="nav-link">About Us</button>
        <button onClick={() => navigate("/services")} className="nav-link">Our Services</button>
        <button onClick={() => navigate("/programs")} className="nav-link">Focus Tools</button>
        <button onClick={() => navigate("/contact")} className="nav-link">Contact Us</button>
      </nav>
    
  </div>

  <div className="header-right">
    <button className="notification-button" onClick={handleClick}>
      <div className="notification-dot"></div>
      <span className="notification-icon">🔔</span>
    </button>
    <div className="auth-buttons">
    {user ? (
  <>
    <button className="btn btn-secondary" onClick={() => navigate("/profile")}>
      Profile
    </button>
    <button className="btn btn-primary" onClick={handleLogout}>
      Logout
    </button>
  </>
) : (
  <>
    <button className="btn btn-primary" onClick={() => navigate("/login")}>
      Login
    </button>
    <button className="btn btn-success" onClick={() => navigate("/signup")}>
      Sign Up
    </button>
  </>
)}

    </div>
  </div>
</div>
</header>

      {/* Description Section */}
      <div className="description-section">
        <div className="description-card">
          <div className="gradient-bar"></div>
          <div className="description-grid">
            <div className="description-content">
              <h2 className="section-title">
              Your Focused Future Starts with NeuroFlip
              </h2>
              <p className="section-text">
              Welcome to NeuroFlip, a dual-purpose web app designed to empower your mind and boost productivity. Whether you're a student preparing for exams or a professional managing a heavy workload, NeuroFlip helps you stay sharp, focused, and balanced through scientifically-informed mental training and task management tools.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Personalized Care</span>
                </div>
                
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Progress Tracking</span>
                </div>
              </div>
            </div>
            <div className="description-image">
              <div className="image-background"></div>
              <div className="image-content">
                <div className="info-card">
                  <div className="info-item blue">
                  <div className="info-item blue">
  <h3>Evidence-Based Design</h3>
  <p>
    All features in NeuroFlip are built on neuroscience research to promote cognitive engagement and sustained attention.
  </p>
</div>
<div className="info-item purple">
  <h3>All-in-One Productivity</h3>
  <p>
    Combine focused task sessions with mental refreshers using Pomodoro timers, guided breaks, and calming tools.
  </p>
</div>
<div className="info-item green">
  <h3>Gamified Brain Training</h3>
  <p>
    Play interactive mini-games designed to enhance memory, attention span, and processing speed in short, fun bursts.
  </p>
</div>
<div className="info-item orange">
  <h3>Supportive Community</h3>
  <p>
    Join a like-minded community of students and professionals, share progress, and find motivation through shared goals.
  </p>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-wrapper">
        <h2 className="section-title">Let's Begin Your Journey to Recovery!</h2>

        <div className="features-grid">
          <div
            className="grid-item"
            style={{
              backgroundImage: "url('/addimage/rehab-icon.png')",
            }}
          >
            <div className="grid-content" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <h3 className="feature-title">Focus Enhancement</h3>
<p className="feature-description">
  Boost your concentration with personalized mini-games and productivity tools. NeuroFlip adapts to your focus patterns for a more efficient work or study session.
</p>

            </div>
          </div>
          <div
            className="grid-item"
            style={{
              backgroundImage: "url('/addimage/games-icon.png')",
            }}
          >
            <div className="grid-content" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <h3 className="feature-title">Brain-Training Games</h3>
<p className="feature-description">
  Sharpen your memory, attention, and problem-solving skills with engaging mini-games designed to enhance cognitive performance and reduce mental fatigue.
</p>

            </div>
          </div>
          <a
  href="/analytics"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div
    className="grid-item"
    style={{ backgroundImage: "url('/addimage/Analytics.png')" }}
  >
    <div className="grid-content">
      <h3 className="feature-title">Analytics</h3>
      <p className="feature-description">
        Track your progress with real-time insights. Get personalized
        reports and data-driven recommendations.
      </p>
    </div>
  </div>
</a>

          <a
  href="/doctorchat"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div
    className="grid-item"
    style={{
      backgroundImage: "url('/addimage/doctor-logo.png')",
    }}
  >
    <div className="grid-content">
      <h3 className="feature-title">Chat Box</h3>
      <p className="feature-description">
        Get expert advice from healthcare professionals. Schedule
        virtual consultations and receive tailored medical guidance.
      </p>
    </div>
  </div>
</a>

        </div>

        {/* Pain Scale Section */}
        <div className="pain-scale-section">
          <h2 className="section-title">How are you feeling today?</h2>
          <div className="pain-scale-grid">
            {[
              { emoji: "😊", value: "0", label: "No Pain" },
              { emoji: "🙂", value: "2", label: "Mild Discomfort" },
              { emoji: "😐", value: "4", label: "Moderate Pain" },
              { emoji: "😕", value: "6", label: "Severe Pain" },
              { emoji: "😟", value: "8", label: "Very Severe Pain" },
              { emoji: "😢", value: "10", label: "Unbearable Pain" },
            ].map((mood, index) => (
              <button
                key={index}
                className={`pain-scale-button ${
                  selectedMood === index ? "active" : ""
                }`}
                onClick={() => handleMoodClick(index)}
              >
                <p className="mood-emoji">{mood.emoji}</p>
                <p className="mood-value">{mood.value}</p>
                <p className="mood-label">{mood.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Healing Highlights Section */}
<div className="healing-highlights">
  <h2>Neuro Highlights</h2>
  <div className="highlights-grid">
    
    {/* Health Blogs Card */}
    <a
      href="/healthblogs"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="highlight-card"
        style={{
          backgroundImage: "url('/addimage/blogs-icon.png')",
          backgroundSize: "65%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="highlight-title">Health Blogs</h3>
        <p className="highlight-description">
        Explore insightful articles on focus, productivity, and mental wellness. Stay updated with expert tips, success stories, and the latest strategies in cognitive enhancement and burnout recovery.
        </p>
      </div>
    </a>

    {/* Health Videos Card */}
    <a
      href="/healthvideos"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="highlight-card"
        style={{
          backgroundImage: "url('/addimage/videos-logo.png')",
          backgroundSize: "65%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="highlight-title">Health Videos</h3>
        <p className="highlight-description">
        Informative and engaging videos covering brain-training techniques, real user experiences, and expert tips to boost focus, beat burnout, and improve daily productivity.
        </p>
      </div>
    </a>

  </div>
</div>


        {/* Success Stories Section */}
       
      </div>

      <Footer />
    </div>
  );
};

export default Home;
