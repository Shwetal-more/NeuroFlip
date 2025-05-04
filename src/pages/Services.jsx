import React from "react";
import "../styles/Pages.css";

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Our Services</h1>

        <section className="content-section">
          <h2>Focus and Cognitive Enhancement</h2>
          <p>
            At NeuroFlip, we offer a range of services focused on improving mental clarity and cognitive performance. Our programs are designed to enhance focus, memory, and overall cognitive function, helping users reach their peak productivity.
          </p>
        </section>

        <section className="content-section">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>Brain-Training Games</h3>
              <p>
                Our engaging and scientifically-backed brain-training games are designed to enhance cognitive skills like memory, attention, and reaction time, helping users build better focus and productivity habits.
              </p>
              <ul className="program-details">
                <li>Memory enhancement exercises</li>
                <li>Attention and focus training</li>
                <li>Reaction time improvement</li>
                <li>Daily challenge levels</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Focus-Enhancing Tools</h3>
              <p>
                Our digital tools are designed to help users track their focus and improve mental clarity by using personalized reminders, timers, and environmental control features.
              </p>
              <ul className="program-details">
                <li>Personalized focus plans</li>
                <li>Customizable work timers</li>
                <li>Distraction-blocking tools</li>
                <li>Focus history and progress tracking</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Cognitive Behavioral Techniques</h3>
              <p>
                We offer specialized sessions using cognitive-behavioral techniques that teach users how to manage focus fatigue, reduce stress, and overcome mental barriers to maintain sustained attention.
              </p>
              <ul className="program-details">
                <li>Focus fatigue management</li>
                <li>Stress reduction strategies</li>
                <li>Overcoming cognitive barriers</li>
                <li>Building resilience and mental clarity</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🧘‍♀️</div>
              <h3>Mental Wellness & Stress Management</h3>
              <p>
                NeuroFlip provides tools that help users manage stress through mindfulness exercises, breathing techniques, and mental relaxation activities. These are designed to improve overall mental wellness, supporting focus and cognitive function.
              </p>
              <ul className="program-details">
                <li>Mindfulness exercises</li>
                <li>Breathing techniques</li>
                <li>Relaxation activities</li>
                <li>Stress tracking and management</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Motivation & Habit Formation</h3>
              <p>
                Our programs incorporate behavioral science techniques to help users stay motivated and form productive habits, fostering sustained engagement with our tools and ensuring long-term success.
              </p>
              <ul className="program-details">
                <li>Habit tracking</li>
                <li>Motivation boosters</li>
                <li>Daily goals and reminders</li>
                <li>Progress milestones and rewards</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Performance Analytics</h3>
              <p>
                NeuroFlip provides users with in-depth performance analytics, offering insights into their cognitive strengths and areas for improvement. These analytics allow users to track their progress and optimize their routines for better productivity.
              </p>
              <ul className="program-details">
                <li>Focus and productivity tracking</li>
                <li>Daily, weekly, and monthly reports</li>
                <li>Customizable feedback and goals</li>
                <li>Visual progress tracking charts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Approach</h2>
          <p>
            Every service we offer is designed with your unique needs in mind. At NeuroFlip, we believe in a holistic approach to cognitive enhancement that combines scientifically-backed games, stress management techniques, and habit-forming strategies. Our services are fully personalized to help users optimize their focus and productivity based on their individual challenges and goals.
          </p>
        </section>

        <section className="content-section">
          <h2>Commitment to Excellence</h2>
          <p>
            At NeuroFlip, we are committed to maintaining the highest standards in everything we do. Our team of experts is dedicated to continuously improving our services, based on the latest research in cognitive science and neuroscience. We ensure that every user receives the most effective tools and strategies for improving focus, mental clarity, and overall cognitive function.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;
