import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { HobbyCard } from './components/HobbyCard';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [typewriterText, setTypewriterText] = useState('');
  const roles = [
    'Python Expert 🐍',
    'Data Scientist💻',
    'Machine Learning Integration🤖'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const text = roles[roleIndex];
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypewriterText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const projects = [
    {
      title: 'Heart Disease Prediction',
      description: 'An AI-based system that predicts the likelihood of heart disease using machine learning algorithms. Developed with Python and Flask.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
      projectUrl: 'https://github.com/suhangowda96/heart_disease_prediction'
    },
    {
      title: 'Coffee Sales Prediction',
      description: 'Developed a Coffee Sales Prediction model using ARIMA, SARIMA, and Exponential Smoothing to forecast trends and analyze seasonal patterns. Leveraged Python tools like pandas and statsmodels to derive actionable insights.',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800',
      projectUrl: 'https://www.kaggle.com/code/suhanhj/coffee-sales-forecast'
    },
    {
      title: 'Uber Trip Analysis and Prediction',
      description: 'Analyzed Uber trip data using Python to identify patterns, engineered features, and built predictive models to forecast trip demand, improving data-driven decision-making.',
      imageUrl: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800',
      projectUrl: 'https://www.kaggle.com/code/suhanhj/uber-trip-analysis'
    },
    {
      title: 'Climate Change Modeling with ML',
      description: 'Designed and implemented advanced machine learning models to predict climate change indicators using NASA\'s climate data, enabling trend analysis, sentiment insights, and future scenario projections.',
      imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800',
      projectUrl: 'https://www.kaggle.com/code/suhanhj/climate-change-prediction-and-sentiment-analysis'
    }
  ];

    const hobbies = [
    {
      title: "Traveling",
      description: "Exploring new places and cultures",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800",
      iconName: "map"
    },
    {
      title: "Riding",
      description: "Adventure on two wheels",
      imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800",
      iconName: "bike"
    },
    {
      title: "Photography",
      description: "Capturing moments through the lens",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800",
      iconName: "camera"
    },
    {
      title: "Music",
      description: "Lost in melodies",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800",
      iconName: "headphones"
    },
    {
      title: "Gaming",
      description: "Virtual adventures and challenges",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800",
      iconName: "gamepad"
    },
    {
      title: "Coding",
      description: "Building digital solutions",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
      iconName: "code"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <Hero typewriterText={typewriterText} />

      {/* About Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <motion.h2 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-4xl font-bold mb-6 text-purple-800 font-serif"
              >
                About Me
              </motion.h2>
              <motion.p 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                I’m a passionate Data Scientist with a Bachelor's in Computer Applications and a strong interest in data analysis, machine learning, and database management. 
                I have hands-on experience in Python, machine learning integration, SQL, and building data-driven solutions to extract valuable insights from complex datasets.
              </motion.p>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="mb-6 font-mono"
              >
                <p className="text-gray-700"><strong>Email:</strong> suhangowda92@gmail.com</p>
                <p className="text-gray-700"><strong>Location:</strong> Sakleshpur, Hassan, KA-573123</p>
              </motion.div>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://drive.google.com/file/d/1AlRAJl_ThT6cFVhgVQjLB3otnz7UzI9N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
              >
                View Resume <ExternalLink className="ml-2" size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Experience Section */}
      <ExperienceSection />


      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800 font-serif">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Programming Languages',
                skills: ['Python', 'Java'],
                icon: '🚀',
                color: 'from-blue-400 to-purple-400'
              },
              {
                title: 'Web Development',
                skills: ['React', 'HTML', 'CSS', 'JavaScript'],
                icon: '💻',
                color: 'from-purple-400 to-pink-400'
              },
              {
                title: 'Machine Learning',
                skills: ['scikit-learn', 'TensorFlow', 'Time Series Analysis', 'NLP'],
                icon: '🤖',
                color: 'from-pink-400 to-red-400'
              },
              {
                title: 'Database',
                skills: ['MySQL', 'XAMPP'],
                icon: '🗄️',
                color: 'from-red-400 to-gray-400'
              },
              {
                title: 'Version Control',
                skills: ['Git', 'GitHub'],
                icon: '🔧',
                color: 'from-gray-400 to-gray-400'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-xl text-white`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-white/90 font-mono">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800 font-serif">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Education Section */}
      <EducationSection />

      {/* Hobbies Section */}
      <motion.section 
        id="hobbies"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800 font-serif">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-8">
        <div className="container mx-auto px-4 text-center font-mono">
          <p>© 2024 Suhan H J. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
