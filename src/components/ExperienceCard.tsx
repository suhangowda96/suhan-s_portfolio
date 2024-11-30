import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  role: string;
  description: string;
  certificateUrl: string;
  projects: string[];
  logoUrl: string;
}

export function ExperienceCard({ company, role, description, certificateUrl, projects, logoUrl }: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100"
    >
      <div className="flex items-center gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 rounded-xl overflow-hidden shadow-lg"
        >
          <img 
            src={logoUrl} 
            alt={`${company} logo`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-purple-700 font-serif mb-2">{company}</h3>
          <h4 className="text-xl text-purple-600 font-serif">{role}</h4>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 font-mono leading-relaxed">{description}</p>
      
      <div className="mb-6">
        <h5 className="text-lg font-semibold text-purple-600 mb-2">Key Projects:</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 font-mono">
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
      >
        View Certificate <ExternalLink className="ml-2" size={16} />
      </motion.a>
    </motion.div>
  );
}
