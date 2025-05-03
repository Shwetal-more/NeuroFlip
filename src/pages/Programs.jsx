import React from "react";
import "../styles/Pages.css";

const Programs = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Treatment Programs</h1>

        <section className="content-section">
          <h2>Personalized Recovery Paths</h2>
          <p>
            Our treatment programs are carefully designed to address specific
            neurological conditions and injuries. Each program combines
            evidence-based therapies, cutting-edge technology, and personalized
            care to optimize recovery outcomes.
          </p>
        </section>

        <section className="content-section">
          <div className="programs-grid">
            <div className="program-card">
              <h3>Stroke Recovery Program</h3>
              <div className="program-details">
                <p>
                  A comprehensive rehabilitation program designed specifically
                  for stroke survivors. Our approach focuses on restoring
                  function and independence through targeted therapies and
                  advanced rehabilitation techniques.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Early intervention and assessment</li>
                  <li>Motor function restoration</li>
                  <li>Speech and language recovery</li>
                  <li>Cognitive rehabilitation</li>
                  <li>Balance and mobility training</li>
                </ul>
                <p className="duration">Program Duration: 12-16 weeks</p>
              </div>
            </div>

            <div className="program-card">
              <h3>Brain Injury Rehabilitation</h3>
              <div className="program-details">
                <p>
                  Specialized treatment program for traumatic brain injury (TBI)
                  recovery. We utilize advanced neurological rehabilitation
                  techniques to address both physical and cognitive challenges.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Cognitive function improvement</li>
                  <li>Physical rehabilitation</li>
                  <li>Memory and attention training</li>
                  <li>Behavioral management</li>
                  <li>Life skills retraining</li>
                </ul>
                <p className="duration">Program Duration: 16-24 weeks</p>
              </div>
            </div>

            <div className="program-card">
              <h3>Spinal Cord Recovery</h3>
              <div className="program-details">
                <p>
                  Intensive rehabilitation program for spinal cord injury
                  patients. Our program combines traditional therapy with
                  innovative technologies to maximize functional recovery.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Advanced mobility training</li>
                  <li>Strength and conditioning</li>
                  <li>Adaptive equipment training</li>
                  <li>Pain management</li>
                  <li>Independence skills development</li>
                </ul>
                <p className="duration">Program Duration: 20-28 weeks</p>
              </div>
            </div>

            <div className="program-card">
              <h3>Neurological Rehabilitation</h3>
              <div className="program-details">
                <p>
                  Specialized program for various neurological conditions
                  including Multiple Sclerosis, Parkinson's Disease, and other
                  neurological disorders. Our approach is tailored to each
                  condition's unique challenges.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Symptom management</li>
                  <li>Movement disorders therapy</li>
                  <li>Balance and coordination training</li>
                  <li>Daily living skills adaptation</li>
                  <li>Quality of life improvement</li>
                </ul>
                <p className="duration">Program Duration: 12-20 weeks</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Program Benefits</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Evidence-Based Practice</h3>
              <p>
                All our programs are based on the latest research and clinical
                evidence in neurorehabilitation, ensuring the most effective
                treatment approaches.
              </p>
            </div>
            <div className="value-item">
              <h3>Personalized Care</h3>
              <p>
                Each program is customized to meet individual patient needs,
                considering their specific condition, goals, and lifestyle
                requirements.
              </p>
            </div>
            <div className="value-item">
              <h3>Progress Tracking</h3>
              <p>
                Regular assessments and detailed progress reports help monitor
                recovery and adjust treatment plans for optimal outcomes.
              </p>
            </div>
            <div className="value-item">
              <h3>Holistic Approach</h3>
              <p>
                Our programs address not just physical recovery but also
                emotional, cognitive, and social aspects of rehabilitation.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Getting Started</h2>
          <p>
            Beginning your rehabilitation journey with us starts with a
            comprehensive assessment to determine the most appropriate program
            for your needs. Our team will work with you to create a personalized
            treatment plan and set achievable recovery goals. Contact us today
            to schedule your initial consultation and take the first step toward
            recovery.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Programs;
