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
      certificateUrl: "https://drive.google.com/file/d/1ITt7Yp6T4bf3t4rumZELvfPl4VjuIQ8V/view?usp=sharing",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEwO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cMO0cNrOIOZAAAAEXRSTlMAHoCtcAnG/4zWn1kVNke773DXGkkAAAClSURBVHgB3ZC1gQMwEARXOGKp/2bNDOm/7UmOUf+Hsc758DIUIjibcnlVBlV7WnoOQujjqI7HmKONqXZs8jiQItT1Eo9JTvV10KHs+5vKuQ+a9LayZGW7P2VYN324mzkMVQkgp4dbGlmJc9tu5wJXw2WolYcVYwZWOQeOQJFqidP5LmmkuMj23HhB2rtD924B09Zq47lB4UL0Rg9/Dr7EOIvv+lG2bAkFdHdJxvwAAAAASUVORK5CYII=",
      projects: [
        "Cera E‑Commerce Website",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
