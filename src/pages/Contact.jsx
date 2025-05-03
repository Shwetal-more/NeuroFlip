import React from "react";
import "../styles/Pages.css";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>

        <section className="content-section">
          <p className="contact-intro">
            We're here to help you on your rehabilitation journey. Reach out to
            us for any questions about our services, programs, or to schedule a
            consultation.
          </p>
        </section>

        <section className="content-section">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>Main: (555) 123-4567</p>
                <p>Toll-free: 1-800-NEURO-REHAB</p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p>General Inquiries: info@neurorehab.com</p>
                <p>Appointments: appointments@neurorehab.com</p>
              </div>

              <div className="info-item">
                <h3>📍 Location</h3>
                <p>123 Healing Way</p>
                <p>Medical District</p>
                <p>Los Angeles, CA 90012</p>
              </div>

              <div className="info-item emergency">
                <h3>🚨 24/7 Support</h3>
                <p>Emergency Contact: (555) 911-CARE</p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form className="form-grid">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>

                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>

                <div className="form-group" style={{ gridColumn: "span 2" }}>
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-group" style={{ gridColumn: "span 2" }}>
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Connect With Us</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Facebook</h3>
              <p>
                Follow us for daily updates, success stories, and rehabilitation
                tips.
              </p>
              <a href="#" className="social-link">
                @NeuroRehab
              </a>
            </div>
            <div className="value-item">
              <h3>Twitter</h3>
              <p>
                Stay informed about the latest in neurological rehabilitation.
              </p>
              <a href="#" className="social-link">
                @NeuroRehab_Care
              </a>
            </div>
            <div className="value-item">
              <h3>LinkedIn</h3>
              <p>Connect with our healthcare professionals and stay updated.</p>
              <a href="#" className="social-link">
                NeuroRehab Professional Network
              </a>
            </div>
            <div className="value-item">
              <h3>Instagram</h3>
              <p>See our facility, team, and patient success moments.</p>
              <a href="#" className="social-link">
                @neurorehablife
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
