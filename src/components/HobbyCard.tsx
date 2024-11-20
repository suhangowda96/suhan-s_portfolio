import React from 'react';
import { motion } from 'framer-motion';
import { Map, Bike, Camera, Headphones, Gamepad, LucideIcon } from 'lucide-react';

interface HobbyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  map: Map,
  bike: Bike,
  camera: Camera,
  headphones: Headphones,
  gamepad: Gamepad
};

export function HobbyCard({ title, description, imageUrl, iconName }: HobbyCardProps) {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              {Icon && <Icon className="w-8 h-8" />}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 font-serif">{title}</h3>
          <p className="text-white/90 font-mono">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
