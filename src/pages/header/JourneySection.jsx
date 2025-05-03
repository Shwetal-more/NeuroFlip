import React from "react";
import "./JourneySection.css"; // Import CSS

const JourneySection = () => {
    return (
        <section className="journey-container">
            <h2 className="journey-title">Let’s Begin Your Journey to Recovery!</h2>

            {/* First Row - Feature Cards */}
            <div className="journey-grid">
                <div className="journey-card">
                    <h3>Rehabilitation Focus</h3>
                    <p>Personalized exercises tailored to your recovery. Our programs are designed to aid your rehab, ensuring a steady and safe rehabilitation journey.</p>
                </div>
                <div className="journey-card">
                    <h3>Games</h3>
                    <p>Engaging cognitive and physical therapy games. Improve memory, motor skills, and coordination with fun and interactive challenges.</p>
                </div>
                <div className="journey-card">
                    <h3>Analytics</h3>
                    <p>Track your progress with real-time insights. Monitor improvement, identify patterns, and stay on track with your recovery goals.</p>
                </div>
                <div className="journey-card">
                    <h3>Connect with Doctor</h3>
                    <p>Schedule virtual consultations and receive tailored medical guidance to support your journey towards better health.</p>
                </div>
            </div>

            {/* Second Row - Mood Tracker */}
            <h3 className="mood-title">How are you feeling today?</h3>
            <div className="mood-tracker">
                {["No Pain", "Mild Discomfort", "Moderate Pain", "Severe Pain", "Very Severe Pain", "Unbearable Pain"].map((mood, index) => (
                    <button key={index} className="mood-btn">
                        {mood}
                    </button>
                ))}
            </div>

            {/* Third Row - Healing Highlights */}
            <div className="journey-grid">
                <div className="journey-card">
                    <h3>Health Blogs</h3>
                    <p>Explore scientific-backed articles, expert insights, and latest research to guide your rehab and recovery journey.</p>
                </div>
                <div className="journey-card">
                    <h3>Watch Health Videos</h3>
                    <p>Watch instructional and expert-led videos to support your rehabilitation and well-being.</p>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
