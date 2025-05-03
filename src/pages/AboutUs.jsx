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
            At NeuroRehab, we are dedicated to transforming lives through
            comprehensive neurorehabilitation. Our mission is to provide
            exceptional care that empowers individuals to achieve their highest
            potential in recovery and daily living.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every individual affected by neurological
            conditions has access to personalized, evidence-based rehabilitation
            that maximizes their independence and quality of life.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>
                We approach every patient with empathy and understanding,
                recognizing the unique challenges they face in their recovery
                journey.
              </p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>
                Our commitment to excellence drives us to deliver the highest
                quality care through continuous learning and innovation.
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards in all our
                interactions, ensuring transparency and trust in our services.
              </p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>
                We believe in working together with patients, families, and
                healthcare professionals to achieve the best possible outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Expertise</h2>
          <p>
            With years of specialized experience in neurorehabilitation, our
            team of experts brings together diverse skills and knowledge to
            provide comprehensive care. We stay at the forefront of
            rehabilitation science, incorporating the latest research and
            techniques into our practice.
          </p>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>Specialized Care</h3>
              <p>
                Our team includes specialists in neurology, physical therapy,
                occupational therapy, and speech-language pathology, working
                together to address all aspects of recovery.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Evidence-Based Practice</h3>
              <p>
                We base our treatment approaches on the latest scientific
                research and clinical evidence, ensuring the most effective
                interventions for our patients.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Patient-Centered Approach</h3>
              <p>
                Every treatment plan is tailored to the individual's specific
                needs, goals, and circumstances, ensuring personalized care that
                delivers results.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to providing a supportive and nurturing environment
            where patients can focus on their recovery. Our team works
            tirelessly to ensure that each individual receives the attention and
            care they deserve, with a focus on long-term success and improved
            quality of life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
