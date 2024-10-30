import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface HeroProps {
  typewriterText: string;
}

export function Hero({ typewriterText }: HeroProps) {
  return (
    <motion.div 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
    >
      <div className="text-center text-white">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold mb-6 font-serif"
        >
          Hi, I'm Suhan H J!
        </motion.h1>
        <motion.div
          className="text-2xl font-light mb-8 h-12 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {typewriterText}
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/suhan46" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-200 transition-all hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/suhangowda96" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-200 transition-all hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://wa.me/9448544386" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-200 transition-all hover:scale-110">
            <MessageCircle size={28} />
          </a>
          <a href="https://instagram.com/suhan_.gowda" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-200 transition-all hover:scale-110">
            <Instagram size={28} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}