import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  school: string;
  degree: string;
  score: string;
  period: string;
  logoUrl: string;
}

export function EducationCard({ school, degree, score, period, logoUrl }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100"
    >
      <div className="flex items-center gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-2"
        >
          <img 
            src={logoUrl} 
            alt={`${school} logo`} 
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-purple-700 font-serif">{school}</h3>
          <p className="text-gray-700 font-mono">{degree}</p>
          <p className="text-gray-600 font-mono">{score}</p>
          <p className="text-gray-500 font-mono">{period}</p>
        </div>
      </div>
    </motion.div>
  );
}
