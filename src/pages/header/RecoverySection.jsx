import React from "react";
import "./RecoverySection.css"; // Import CSS

const RecoverySection = () => {
    return (
        <section className="recovery-container">
            {/* Left Content */}
            <div className="recovery-text">
                <h2>Your Journey to Recovery Starts Here</h2>
                <p>
                    Welcome to Neuro Rehab, your comprehensive platform for neurological rehabilitation and recovery. We combine cutting-edge technology with evidence-based therapeutic approaches to provide personalized care and support throughout your healing journey.
                </p>
                <p className="features">
                    ✓ <span>Personalized Care</span> &nbsp;&nbsp;
                    ✓ <span>Expert Guidance</span> &nbsp;&nbsp;
                    ✓ <span>Progress Tracking</span>
                </p>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="recovery-cards">
                <div className="card light-blue">
                    <h3>Evidence-Based Approach</h3>
                    <p>Our rehabilitation programs are developed by leading neurological experts and backed by scientific research.</p>
                </div>
                <div className="card light-purple">
                    <h3>Comprehensive Support</h3>
                    <p>From initial assessment to recovery milestones, we provide continuous guidance and support throughout your journey.</p>
                </div>
                <div className="card light-green">
                    <h3>Interactive Learning</h3>
                    <p>Engage with interactive exercises and real-time feedback to enhance your rehabilitation experience.</p>
                </div>
                <div className="card light-orange">
                    <h3>Community Support</h3>
                    <p>Connect with others on similar recovery journeys and share experiences in a supportive environment.</p>
                </div>
            </div>
        </section>
    );
};

export default RecoverySection;
