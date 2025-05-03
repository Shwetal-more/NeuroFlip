import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './HealthVideos.css';

const HealthVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding Stroke Recovery: A Patient's Guide",
      description: "Learn about the essential aspects of stroke recovery, from understanding the condition to practical rehabilitation techniques. This comprehensive guide helps patients and caregivers navigate the recovery journey effectively.",
      thumbnailUrl: "https://img.freepik.com/free-photo/physiotherapist-helping-patient-recover_23-2149071461.jpg",
      videoUrl: "https://youtu.be/BM0P-iLSlbs?si=VB_hwTBgaWZ0Al14"
    },
    {
      id: 2,
      title: "Neurological Rehabilitation Exercises",
      description: "Explore a series of specialized exercises designed for neurological rehabilitation. These exercises focus on improving mobility, strength, and coordination for better daily function and independence.",
      thumbnailUrl: "https://img.freepik.com/free-photo/physiotherapist-giving-resistance-band-exercise_23-2149071447.jpg",
      videoUrl: "https://youtu.be/0OUd4Za335c?si=8MlpzBfL8bSLcLgt"
    },
    {
      id: 3,
      title: "Balance Training for Stroke Recovery",
      description: "Master essential balance exercises specifically designed for stroke recovery. This video demonstrates safe and effective techniques to improve stability and prevent falls during rehabilitation.",
      thumbnailUrl: "https://img.freepik.com/free-photo/physiotherapist-helping-patient-with-balance-exercise_23-2149071455.jpg",
      videoUrl: "https://youtu.be/xpLe0zwtWOM?si=uUI9iHnjVPjaclgC"
    },
    {
      id: 4,
      title: "Speech Therapy Exercises at Home",
      description: "Practice effective speech therapy exercises in the comfort of your home. This video guides you through various techniques to improve articulation, fluency, and communication skills.",
      thumbnailUrl: "https://img.freepik.com/free-photo/speech-therapist-helping-patient-rehabilitation_23-2149071465.jpg",
      videoUrl: "https://youtu.be/s9yfKFKIFJo?si=MOiBHleVXvvxNWZ9"
    },
    {
      id: 5,
      title: "Hand Therapy After Stroke",
      description: "Learn specialized hand therapy exercises to regain fine motor skills and strength. These exercises are crucial for improving daily activities like writing, eating, and personal care.",
      thumbnailUrl: "https://img.freepik.com/free-photo/close-up-patient-doing-hand-exercises_23-2149071459.jpg",
      videoUrl: "https://youtu.be/3ou46UyvAvw?si=T2zDG_VJYV5kFbbH"
    },
    {
      id: 6,
      title: "Cognitive Rehabilitation Techniques",
      description: "Discover effective cognitive rehabilitation exercises to enhance memory, attention, and problem-solving skills. These techniques are essential for comprehensive neurological recovery.",
      thumbnailUrl: "https://img.freepik.com/free-photo/doctor-explaining-diagnosis-patient_23-2149071466.jpg",
      videoUrl: "https://youtu.be/dng5Tgmydhw?si=tU1lDrlATk4VGZJM"
    }
  ];

  return (
    <div className="health-videos-container">
      <h1>Health & Wellness Videos</h1>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-image">
              <img src={video.thumbnailUrl} alt={video.title} />
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="video-content">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="watch-video">
                Watch Video <FiArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthVideos;