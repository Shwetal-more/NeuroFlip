import React from "react";
import "../styles/Pages.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">About Us</h1>

        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            At NeuroFlip, we are dedicated to enhancing focus and cognitive
            function. Our mission is to help students and professionals overcome
            distractions, burnout, and focus fatigue, empowering them to perform
            at their highest potential in both academic and professional
            environments. Through engaging brain-training games and effective
            focus tools, we aim to make productivity and mental clarity accessible
            to everyone.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every individual can optimize their focus
            and cognitive abilities, enabling them to thrive in their academic
            and professional lives. Through personalized brain-training games and
            focus-enhancing tools, NeuroFlip aims to empower users to overcome
            distractions and improve mental clarity, leading to a more productive
            and fulfilling daily experience.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>
                We approach every user with empathy and understanding, recognizing
                the unique challenges they face in managing distractions, burnout,
                and focus fatigue. Through personalized tools and engaging activities,
                NeuroFlip supports each individual in their journey toward enhanced
                productivity and mental clarity.
              </p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>
                Our commitment to excellence drives us to deliver the highest quality
                care through continuous learning and innovation.
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards in all our interactions,
                ensuring transparency and trust in our services.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>Focus & Cognitive Training</h3>
              <p>
                Our approach combines engaging brain-training mini-games and focus
                tools, carefully designed to improve cognitive function, reaction
                times, and memory.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Personalized Experience</h3>
              <p>
                We adapt our tools and exercises based on each user's unique
                challenges, helping them stay on track and achieve their productivity
                goals.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Data-Driven Insights</h3>
              <p>
                Real-time feedback and performance tracking enable users to visualize
                their progress and identify areas for improvement, helping them stay
                motivated.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to helping users enhance their focus and cognitive
            abilities. At **NeuroFlip**, we strive to create a supportive and
            engaging environment where individuals can improve productivity, manage
            distractions, and achieve their personal and professional goals. Our
            tools are designed to empower users in their journey toward sustained
            mental clarity and long-term success.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
