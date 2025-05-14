import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Experience = () => {
  const experiences = [
    {
      title: "VA Energy",
      subtitle: "2023–2025",
      points: [
        "Developed solar project proposals with detailed specifications",
        "Created 3D models for client presentations",
        "Led U.S. market outreach initiatives",
        "Managed international client and suppliers relationships"
      ],
      images: [
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
        "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
      ],
      colorClass: "from-[#123C4A] to-[#1F6F4A]"
    },
    {
      title: "VA Engenharia",
      subtitle: "2023–2025",
      points: [
        "Rotated through multiple departments, including marketing, projects, engineering, finance, controlling, and sales, gaining a comprehensive understanding of the business and preparing to become an entrepreneur",
        "Implemented CRM system to streamline client management",
        "Designed and maintained performance dashboards",
        "Managed digital advertising campaigns",
      ],
      images: [
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
      ],
      colorClass: "from-[#133D4B] to-[#1E6E49]"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="Building expertise across technology, energy, and business"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              points={experience.points}
              images={experience.images}
              colorClass={experience.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience