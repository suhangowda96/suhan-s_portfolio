import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100 overflow-hidden"
    >
      <div className="mb-6 overflow-hidden rounded-xl">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-purple-700 font-serif">{title}</h3>
      <p className="text-gray-700 mb-6 font-mono">{description}</p>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
      >
        View Project <ExternalLink className="ml-2" size={18} />
      </motion.a>
    </motion.div>
  );
}