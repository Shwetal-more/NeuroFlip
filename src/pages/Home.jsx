import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Footer from "./Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
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

            <nav className="nav-links">
              <button onClick={() => navigate("/about")} className="nav-link">About Us</button>
              <button onClick={() => navigate("/services")} className="nav-link">Our Services</button>
              <button onClick={() => navigate("/programs")} className="nav-link">Focus Tools</button>
              <button onClick={() => navigate("/contact")} className="nav-link">Contact Us</button>
            </nav>
          </div>

          <div className="header-right">
            <button className="notification-button" onClick={handleNotificationClick}>
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
                Welcome to NeuroFlip, a dual-purpose web app designed to empower your mind and boost productivity. 
                Whether you're a student preparing for exams or a professional managing a heavy workload, 
                NeuroFlip helps you stay sharp, focused, and balanced through scientifically-informed mental training 
                and task management tools.
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

      {/* Main Content Grid */}
      <div className="content-wrapper">
        <h2 className="section-title">Let's Begin Your Journey to Recovery!</h2>

        <div className="features-grid">
          {/* Focus Enhancement Card */}
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/rehab-icon.png')" }}
            onClick={() => navigate("/Focusmode")}
          >
            <div className="grid-content">
              <h3 className="feature-title">Focus Enhancement</h3>
              <p className="feature-description">
                Boost your concentration with personalized mini-games and productivity tools. 
                NeuroFlip adapts to your focus patterns for a more efficient work or study session.
              </p>
              
            </div>
          </div>

          {/* Brain-Training Games Card */}
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/games-icon.png')" }}
            onClick={() => navigate("/gametraining")}
          >
            <div className="grid-content">
              <h3 className="feature-title">Brain-Training Games</h3>
              <p className="feature-description">
                Sharpen your memory, attention, and problem-solving skills with engaging 
                mini-games designed to enhance cognitive performance and reduce mental fatigue.
              </p>
              
            </div>
          </div>

          {/* Analytics Card */}
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/Analytics.png')" }}
            onClick={() => navigate("/analytics")}
          >
            <div className="grid-content">
              <h3 className="feature-title">Analytics</h3>
              <p className="feature-description">
                Track your progress with real-time insights. Get personalized
                reports and data-driven recommendations.
              </p>
            </div>
          </div>

          {/* Chat Box Card */}
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/doctor-logo.png')" }}
            onClick={() => navigate("/doctorchat")}
          >
            <div className="grid-content">
              <h3 className="feature-title">Chat Box</h3>
              <p className="feature-description">
                Get expert advice from healthcare professionals. Schedule
                virtual consultations and receive tailored medical guidance.
              </p>
            </div>
          </div>
        </div>

      

        {/* Healing Highlights Section */}
        <div className="healing-highlights">
          <h2>Highlights</h2>
          <div className="highlights-grid">
            {/* Blogs Card */}
            <div
              className="highlight-card"
              style={{
                backgroundImage: "url('/addimage/blogs-icon.png')",
                backgroundSize: "65%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => navigate("/healthblogs")}
            >
              <h3 className="highlight-title">Blogs</h3>
              <p className="highlight-description">
                Explore insightful articles on focus, productivity, and mental wellness. 
                Stay updated with expert tips, success stories, and the latest strategies 
                in cognitive enhancement and burnout recovery.
              </p>
            </div>

            {/* Health Videos Card */}
            <div
              className="highlight-card"
              style={{
                backgroundImage: "url('/addimage/videos-logo.png')",
                backgroundSize: "65%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => navigate("/healthvideos")}
            >
              <h3 className="highlight-title">Videos</h3>
              <p className="highlight-description">
                Informative and engaging videos covering brain-training techniques, 
                real user experiences, and expert tips to boost focus, beat burnout, 
                and improve daily productivity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;