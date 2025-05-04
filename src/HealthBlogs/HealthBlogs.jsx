import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './HealthBlogs.css';

const HealthBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Boosting Focus with Brain Training Games",
      description: "Explore how engaging in brain training games can enhance concentration and cognitive abilities, aiding in better focus during daily tasks.",
      imageUrl: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      link: "https://www.verywellmind.com/what-are-brain-training-games-2794891"
    },
    {
      id: 2,
      title: "The Science Behind the Pomodoro Technique",
      description: "Delve into the Pomodoro Technique, a time management method that can improve productivity and reduce burnout.",
      imageUrl: "https://images.pexels.com/photos/53876/pexels-photo-53876.jpeg",
      link: "https://todoist.com/productivity-methods/pomodoro-technique"
    },
    {
      id: 3,
      title: "Guided Tasks: Enhancing Workflow Efficiency",
      description: "Learn how structured task guidance can streamline your workflow, making complex projects more manageable.",
      imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      link: "https://asana.com/resources/workflow-management"
    },
    {
      id: 4,
      title: "Mindfulness and Its Impact on Cognitive Function",
      description: "Understand the role of mindfulness practices in improving cognitive functions and reducing mental fatigue.",
      imageUrl: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      link: "https://www.headspace.com/mindfulness"
    },
    {
      id: 5,
      title: "Overcoming Burnout: Strategies for Mental Recovery",
      description: "Identify effective strategies to combat burnout and restore mental energy for sustained productivity.",
      imageUrl: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
      link: "https://www.psychologytoday.com/us/blog/high-octane-women/201111/overcoming-burnout"
    },
    {
      id: 6,
      title: "Neuroplasticity: Rewiring the Brain for Success",
      description: "Discover how neuroplasticity enables the brain to adapt, fostering personal growth and learning.",
      imageUrl: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
      link: "https://www.healthline.com/health/neuroplasticity"
    }
  ];

  return (
    <div className="health-blogs-container">
      <h1>NeuroFlip Insights</h1>
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
