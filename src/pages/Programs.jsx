import React from "react";
import "../styles/Pages.css";

const Programs = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Explore NeuroFlip Modes</h1>

        <section className="content-section">
          <h2>Designed for Focused Living</h2>
          <p>
            NeuroFlip blends productivity science with brain-enhancing games to support students and working professionals. Whether you're beating procrastination or sharpening your cognitive edge, choose your mode and start flipping your brain into gear.
          </p>
        </section>

        <section className="content-section">
          <div className="programs-grid">

            <div className="program-card">
              <h3>Focus Mode</h3>
              <div className="program-details">
                <p>
                  Dive into 25-minute focus sprints with short breaks and smart nudges to keep you on track. Built on the Pomodoro technique with added AI reminders and audio cues.
                </p>
                <ul>
                  <li>Customize sprint/break timers</li>
                  <li>Get periodic focus nudges</li>
                  <li>Track your flow sessions</li>
                </ul>
              </div>
            </div>

            <div className="program-card">
              <h3>Brain Game Mode</h3>
              <div className="program-details">
                <p>
                  Challenge your brain with fast, focused games that enhance memory, rhythm, logic, and mental agility. Designed to be stimulating, not addictive.
                </p>
                <ul>
                  <li>3-5 minute cognitive games</li>
                  <li>Progressive difficulty levels</li>
                  <li>Offline-accessible for daily training</li>
                </ul>
              </div>
            </div>

            <div className="program-card">
              <h3>Guided Task Mode</h3>
              <div className="program-details">
                <p>
                  Break larger tasks into smaller steps with guided templates and checklists. Ideal for projects, studying, or journaling your workflow.
                </p>
                <ul>
                  <li>Pre-built productivity templates</li>
                  <li>Task progress tracking</li>
                  <li>Gentle reminders and check-ins</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="content-section">
          <h2>Why NeuroFlip?</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Hybrid Wellness</h3>
              <p>Only app combining Pomodoro focus and cognitive mini-games in one platform.</p>
            </div>
            <div className="value-item">
              <h3>Gamified but Safe</h3>
              <p>Engaging experience without addictive loops or dopamine traps.</p>
            </div>
            <div className="value-item">
              <h3>Track & Improve</h3>
              <p>Monitor your focus streaks and cognitive progress over time.</p>
            </div>
            <div className="value-item">
              <h3>Offline-First</h3>
              <p>Works seamlessly offline – perfect for deep work or on-the-go sessions.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Ready to Flip Your Focus?</h2>
          <p>
            Get started with NeuroFlip today. Pick your mode, track your progress, and unlock your brain’s potential – one session at a time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Programs;
