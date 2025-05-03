import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './HealthBlogs.css';

const HealthBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Neurological Rehabilitation",
      description: "Explore the comprehensive approach to neurological rehabilitation, including therapeutic techniques, recovery strategies, and expert insights for optimal healing and recovery.",
      imageUrl: "https://img.freepik.com/free-photo/physiotherapist-helping-patient-with-exercise_23-2149071450.jpg?w=1380&t=st=1682004514",
      link: "https://www.talktoangel.com/blog/neurological-rehabilitation"
    },
    {
      id: 2,
      title: "The Power of Neuroplasticity in Recovery",
      description: "Discover how your brain's remarkable ability to rewire and adapt can be harnessed for recovery. Learn about the latest research in neuroplasticity and practical techniques to enhance your rehabilitation journey.",
      imageUrl: "https://img.freepik.com/free-photo/close-up-doctor-patient-physical-recovery_23-2149071453.jpg?w=1380&t=st=1682004515",
      link: "#"
    },
    {
      id: 3,
      title: "Types of Movement Disorders: A Comprehensive Guide",
      description: "Dive deep into various movement disorders, their symptoms, and modern treatment approaches. Learn about conditions like Parkinson's, dystonia, and essential tremors, and understand the latest diagnostic methods and therapeutic interventions.",
      imageUrl: "https://img.freepik.com/free-photo/senior-woman-doing-physical-therapy-exercises_23-2149071460.jpg",
      link: "https://walkagainrehab.com/blog/types-of-movement-disorders-a-comprehensive-guide-to-diagnosis-treatment"
    },
    {
      id: 4,
      title: "11 Proven Ways to Regain Mobility After Stroke",
      description: "Discover practical, evidence-based strategies to accelerate your stroke recovery journey. From targeted exercises to innovative therapy techniques, learn how to enhance mobility and regain independence through proven rehabilitation methods.",
      imageUrl: "https://img.freepik.com/free-photo/physiotherapist-helping-patient-with-resistance-band-exercise_23-2149071451.jpg",
      link: "https://walkagainrehab.com/blog/stroke-recovery-hacks-11-proven-ways-to-regain-mobility-faster"
    },
    {
      id: 5,
      title: "Expert Guide: Stroke Recovery Exercises in Hyderabad",
      description: "Discover specialized stroke recovery exercises from Hyderabad's leading rehabilitation center. Learn about evidence-based techniques, from basic movements to advanced rehabilitation protocols, designed to enhance recovery and improve daily function.",
      imageUrl: "https://img.freepik.com/free-photo/physiotherapist-helping-elderly-woman-with-exercise_23-2149071457.jpg",
      link: "https://walkagainrehab.com/blog/stroke-recovery-exercises-from-a-rehabilitation-center-in-hyderabad"
    },
    {
      id: 6,
      title: "Effective Speech Therapy Techniques for Home Practice",
      description: "Master practical speech therapy exercises you can do at home. From articulation drills to language activities, learn how to maintain consistent progress in your speech rehabilitation journey with expert-recommended techniques and daily practice routines.",
      imageUrl: "https://img.freepik.com/free-photo/speech-therapist-working-with-patient_23-2149071464.jpg",
      link: "https://walkagainrehab.com/blog/speech-therapy-at-home"
    }
  ];

  return (
    <div className="health-blogs-container">
      <h1>Health & Wellness Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.imageUrl} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More <FiArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthBlogs;