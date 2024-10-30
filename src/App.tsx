import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [typewriterText, setTypewriterText] = useState('');
  const roles = [
    'Python Expert 🐍',
    'Machine Learning Engineer 🤖',
    'Full Stack Developer 💻',
    'Flask Specialist 🚀'
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
      title: 'Portfolio Website',
      description: 'This portfolio website showcases my skills and experience. Fully responsive and built with React, Tailwind CSS, and modern web technologies.',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800',
      projectUrl: 'https://github.com/suhangowda96/portfolio'
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
                I'm a passionate developer with a Bachelor's in Computer Applications and a keen interest in web development. 
                I have experience in Python, Flask, machine learning integration, and building dynamic web solutions.
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
                href="https://drive.google.com/file/d/1Ng9nkko5DF7_3zubul9j0MqxkVpdIZNh/view?usp=drive_link"
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
                skills: ['Python', 'PHP', 'Java', 'C++'],
                icon: '🚀',
                color: 'from-blue-400 to-purple-400'
              },
              {
                title: 'Web Development',
                skills: ['HTML', 'CSS', 'JavaScript', 'Flask'],
                icon: '💻',
                color: 'from-purple-400 to-pink-400'
              },
              {
                title: 'Machine Learning',
                skills: ['scikit-learn', 'TensorFlow'],
                icon: '🤖',
                color: 'from-pink-400 to-red-400'
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
      <motion.section 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800 font-serif">Education</h2>
          <div className="space-y-8">
            {[
              {
                school: "DR P Dayananda Pai - P Sathisha Pai Government First Grade College",
                degree: "Bachelor of Computer Application, Mangalore University",
                score: "CGPA: 6.54",
                period: "2021 - 2024"
              },
              {
                school: "Sujala Pu College Hassan",
                degree: "State Board, Class XII",
                score: "Percentage: 75.16% (CEBA)",
                period: "2019 - 2021"
              },
              {
                school: "OLV Convent High School Somwarpet Kodagu",
                degree: "State Board, Class X",
                score: "Percentage: 71.04%",
                period: "2016 - 2019"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700 font-serif">{edu.school}</h3>
                <p className="text-gray-700 font-mono">{edu.degree}</p>
                <p className="text-gray-600 font-mono">{edu.score}</p>
                <p className="text-gray-500 font-mono">{edu.period}</p>
              </motion.div>
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
