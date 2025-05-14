import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CardProps {
  title: string;
  subtitle: string;
  points: string[];
  images?: string[];
  colorClass?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle, 
  points,
  images,
  colorClass = "from-[#123C4A] to-[#1F6F4A]" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full ${
        isExpanded ? 'transform scale-[1.02]' : 'hover:transform hover:scale-[1.01]'
      }`}
    >
      {images && images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={nextImage}
          />
        </div>
      )}
      <div 
        className={`bg-gradient-to-r ${colorClass} px-6 py-4 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-white">{title}</h3>
          <button className="text-white">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <p className="text-gray-100 text-sm mt-1">{subtitle}</p>
      </div>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 py-5' : 'max-h-0 py-0'
        }`}
      >
        <ul className="list-disc list-inside space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;