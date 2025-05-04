import React from "react";
import "../styles/Pages.css";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Contact NeuroFlip</h1>

        <section className="content-section">
          <p className="contact-intro">
            Have questions about NeuroFlip, need support, or want to give feedback? We're here to help! Whether you're a student, professional, or team lead, reach out to explore how NeuroFlip can boost focus and cognitive wellness.
          </p>
        </section>

        <section className="content-section">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>Support Line: (555) 432-9876</p>
                <p>Mon–Fri: 9am – 6pm PT</p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p>General: hello@neuroflip.app</p>
                <p>Partners: collab@neuroflip.app</p>
              </div>

              <div className="info-item">
                <h3>📍 Headquarters</h3>
                <p>301 Focus Lane</p>
                <p>Innovation Park</p>
                <p>San Francisco, CA 94103</p>
              </div>

              <div className="info-item emergency">
                <h3>🚨 App Support</h3>
                <p>Need help with app access or bugs? Email: support@neuroflip.app</p>
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
                  <input type="tel" placeholder="Your Phone (Optional)" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>

                <div className="form-group" style={{ gridColumn: "span 2" }}>
                  <textarea
                    placeholder="How can we assist you?"
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
              <p>Join our community and get focus tips, feature updates, and events.</p>
              <a href="#" className="social-link">@NeuroFlip</a>
            </div>
            <div className="value-item">
              <h3>Twitter</h3>
              <p>Productivity tips, mental wellness facts, and game updates.</p>
              <a href="#" className="social-link">@NeuroFlipApp</a>
            </div>
            <div className="value-item">
              <h3>LinkedIn</h3>
              <p>Connect with the team behind NeuroFlip. Ideal for partners and professionals.</p>
              <a href="#" className="social-link">NeuroFlip on LinkedIn</a>
            </div>
            <div className="value-item">
              <h3>Instagram</h3>
              <p>Behind the scenes, user shoutouts, and focus hacks.</p>
              <a href="#" className="social-link">@neuroflip.life</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
