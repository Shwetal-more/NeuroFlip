import React from "react";
import "../styles/Pages.css";

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Our Services</h1>

        <section className="content-section">
          <h2>Comprehensive Rehabilitation Services</h2>
          <p>
            We offer a wide range of specialized rehabilitation services, each
            tailored to meet the unique needs of our patients. Our integrated
            approach ensures that every aspect of recovery is addressed with
            expertise and care.
          </p>
        </section>

        <section className="content-section">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>Neurological Rehabilitation</h3>
              <p>
                Specialized therapy for stroke recovery, traumatic brain injury,
                and other neurological conditions. Our evidence-based treatments
                focus on restoring neural pathways and improving functional
                outcomes.
              </p>
              <ul className="program-details">
                <li>Cognitive function restoration</li>
                <li>Motor skills development</li>
                <li>Neural pathway stimulation</li>
                <li>Balance and coordination training</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🦿</div>
              <h3>Physical Therapy</h3>
              <p>
                Comprehensive physical rehabilitation using advanced equipment
                and techniques. We focus on restoring mobility, strength, and
                function through personalized exercise programs.
              </p>
              <ul className="program-details">
                <li>Gait training and mobility exercises</li>
                <li>Strength and conditioning</li>
                <li>Pain management techniques</li>
                <li>Advanced equipment therapy</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Occupational Therapy</h3>
              <p>
                Focused rehabilitation to help patients regain independence in
                daily activities. We provide practical solutions for everyday
                challenges and adaptive techniques.
              </p>
              <ul className="program-details">
                <li>Daily living skills training</li>
                <li>Adaptive equipment training</li>
                <li>Home and workplace modifications</li>
                <li>Fine motor skills development</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💭</div>
              <h3>Speech and Language Therapy</h3>
              <p>
                Specialized therapy for communication disorders and swallowing
                difficulties. We help patients regain their ability to
                communicate effectively and safely manage eating and drinking.
              </p>
              <ul className="program-details">
                <li>Speech and language rehabilitation</li>
                <li>Swallowing therapy</li>
                <li>Voice restoration</li>
                <li>Communication skills training</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Cognitive Rehabilitation</h3>
              <div className="service-icon">🧠</div>
              <p>
                Our cognitive rehabilitation program focuses on improving
                memory, attention, problem-solving, and executive functioning
                skills. We use evidence-based techniques to help patients regain
                cognitive abilities and enhance their quality of life.
              </p>
              <div className="program-details">
                <h4>Key Features:</h4>
                <ul>
                  <li>Memory enhancement exercises</li>
                  <li>Attention and concentration training</li>
                  <li>Problem-solving strategies</li>
                  <li>Executive function development</li>
                  <li>Daily living skills training</li>
                  <li>Compensatory strategy development</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Support Services</h3>
              <p>
                Comprehensive support for patients and families throughout the
                rehabilitation journey. We provide resources and guidance for
                long-term success.
              </p>
              <ul className="program-details">
                <li>Family education and training</li>
                <li>Psychological support</li>
                <li>Care coordination</li>
                <li>Community reintegration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Approach</h2>
          <p>
            Every service we offer is delivered with a commitment to excellence
            and personalized care. Our team of specialists works collaboratively
            to create comprehensive treatment plans that address each patient's
            unique needs and goals. We utilize the latest technology and
            evidence-based practices to ensure optimal outcomes for our
            patients.
          </p>
        </section>

        <section className="content-section">
          <h2>Quality Assurance</h2>
          <p>
            Our services are delivered by licensed and certified professionals
            who maintain the highest standards of care. We regularly update our
            practices based on the latest research and medical advancements in
            neurorehabilitation. Our facility is equipped with state-of-the-art
            technology and maintains strict quality control measures to ensure
            the best possible care for our patients.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;
