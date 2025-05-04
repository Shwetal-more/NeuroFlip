import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './HealthVideos.css';

const HealthVideos = () => {
  const resources = [
    {
      id: 1,
      title: "Focus Sprint: Deep Work Session",
      description: "Guided 25-minute focus session with ambient sounds and periodic nudges to maintain flow state. Perfect for studying or complex work tasks.",
      thumbnailUrl: "https://i.ytimg.com/vi/gVG8l80fDbk/sddefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=gVG8l80fDbk",
      duration: "25 min",
      type: "focus"
    },
    {
      id: 2,
      title: "Memory Matrix Game Tutorial",
      description: "Learn our pattern recognition game that strengthens working memory. Start at beginner level and progress through increasingly complex patterns.",
      thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/watch?v=EbDhtRzMKWY",
      duration: "15 min",
      type: "game"
    },
    {
      id: 3,
      title: "Cognitive Reset: Micro-Break Activities",
      description: "5-minute guided breaks that actually refresh your mind. Includes breathing exercises, eye relaxation, and light stretching.",
      thumbnailUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/watch?v=1r81SF90IHw",
      duration: "5 min",
      type: "focus"
    },
    {
      id: 4,
      title: "Rhythm Helps Focusing",
      description: "Our signature audio-visual sequencing games that boosts processing speed and attention. Sync with the beats to level up!",
      thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "http://youtube.com/watch?app=desktop&v=A8cr3rUORN0",
      duration: "10 min",
      type: "game"
    },
    {
      id: 5,
      title: "Task Chunking Workshop",
      description: "Learn how to break overwhelming projects into manageable sprints using our ABCDE prioritization method.",
      thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "#",
      duration: "20 min",
      type: "focus"
    },
    {
      id: 6,
      title: "Flow State Playlist",
      description: "Curated audio tracks scientifically designed to enhance concentration and cognitive performance during focus sessions.",
      thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/watch?v=CO1TDz-ycCI",
      duration: "3 hrs",
      type: "focus"
    }
  ];

  const [activeMode, setActiveMode] = React.useState('focus');

  const filteredResources = resources.filter(resource => 
    activeMode === 'all' || resource.type === activeMode
  );

  return (
    <div className="neuroflip-container">
      <div className="neuroflip-header">
        <h1>NeuroFlip Resources</h1>
        <p className="subtitle">Boost your focus and cognitive performance with our science-backed tools</p>
        
        <div className="mode-toggle">
          <button 
            className={activeMode === 'focus' ? 'active' : ''}
            onClick={() => setActiveMode('focus')}
          >
            Focus Mode
          </button>
          <button 
            className={activeMode === 'game' ? 'active' : ''}
            onClick={() => setActiveMode('game')}
          >
            Brain Game Mode
          </button>
          <button 
            className={activeMode === 'all' ? 'active' : ''}
            onClick={() => setActiveMode('all')}
          >
            All Resources
          </button>
        </div>
      </div>
      
      <div className="resources-grid">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="card-image">
              <img src={resource.thumbnailUrl} alt={resource.title} />
              <div className="play-overlay">
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div className="card-footer">
                <span className={`duration-badge ${resource.type}`}>
                  {resource.duration}
                </span>
                <a href={resource.videoUrl} className="action-button">
                  Try Now <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthVideos;