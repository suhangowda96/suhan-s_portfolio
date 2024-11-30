import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const experience = {
    company: "Unified Mentors",
    role: "Data Science Intern",
    description: "Successfully completed a data science internship at Unified Mentors, where I worked on three key projects aimed at solving real-world problems using data-driven approaches. Awarded an internship certificate for exemplary performance.",
    certificateUrl: "https://drive.google.com/file/d/120yFVe9QTd1tVZ8K_v7bj4kwOUOPKMUw/view",
    logoUrl: "https://drive.google.com/file/d/104bH1KwaXie9DFDFwyI6szpUdGjmgp5l/view?usp=sharing",
    projects: [
      "Coffee Sales Forecasting",
      "Climate Change Modeling with Machine Learning",
      "Uber Trip Analysis and Prediction"
    ]
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800 font-serif">Experience</h2>
        <ExperienceCard {...experience} />
      </div>
    </motion.section>
  );
}
