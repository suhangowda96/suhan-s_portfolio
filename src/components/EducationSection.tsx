import React from 'react';
import { motion } from 'framer-motion';
import { EducationCard } from './EducationCard';

export function EducationSection() {
  const educationData = [
    {
      school: "QSpider Software Training Institute",
      degree: "Python Full Stack Developer with Data Analytics",
      score: "Professional Training",
      period: "2024",
      logoUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=300"
    },
    {
      school: "DR P Dayananda Pai - P Sathisha Pai Government First Grade College Mangalore",
      degree: "Bachelor of Computer Application, Mangalore University",
      period: "2021 - 2024",
      logoUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300"
    },
    {
      school: "Sujala Pu College Hassan",
      degree: "State Board, Class XII",
      period: "2019 - 2021",
      logoUrl: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&w=300"
    },
    {
      school: "OLV Convent High School Somwarpet Kodagu",
      degree: "State Board, Class X",
      period: "2016 - 2019",
      logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=300"
    }
  ];

  return (
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
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
