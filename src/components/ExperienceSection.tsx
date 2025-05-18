import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const experiences = [
    {
      company: "Unified Mentors",
      role: "Data Science Intern",
      description: "Successfully completed a data science internship at Unified Mentors, where I worked on three key projects aimed at solving real-world problems using data-driven approaches. Awarded an internship certificate for exemplary performance.",
      certificateUrl: "https://drive.google.com/file/d/120yFVe9QTd1tVZ8K_v7bj4kwOUOPKMUw/view",
      logoUrl: "https://cdn.elearningindustry.com/wp-content/uploads/2023/10/276e36c0a066824acb064b6471dd7452.jpeg",
      projects: [
        "Coffee Sales Forecasting",
        "Climate Change Modeling with Machine Learning",
        "Uber Trip Analysis and Prediction"
      ]
    },
    {
      company: "Robowaves",
      role: "Web Development Intern",
      description: "During my Robowaves internship, I architected and built the Cera e-commerce website as a responsive, multi-page online store—implementing dynamic product listings, a shopping cart workflow, and image preview functionality using HTML, CSS, and JavaScript.",
      certificateUrl: "#",
      logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300",
      projects: [
        "Developed responsive e-commerce website from scratch",
        "Implemented dynamic product catalog and cart system",
        "Created interactive image preview functionality"
      ]
    }
  ];

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
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
