import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Startups = () => {
  const startups = [
    {
      title: "SmartMoney",
      subtitle: "Founder, 2025–Present",
      points: [
        "We’re building an AI-powered financial assistant on WhatsApp that helps people organize their finances, learn smart habits, and achieve financial independence.",
        "Our solution combines financial education, automation, and personalized insights to guide users with clear, data-driven recommendations.",
        " We launched our MVP on Telegram, received strong feedback, and are now implementing the full solution on WhatsApp using AI and automation for a seamless experience."
      ],
      images: [
        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
      ],
      colorClass: "from-[#123C4A] to-[#1F6F4A]"
    },
    {
      title: "Solar Freeze",
      subtitle: "Co-founder & CMO, 2023–Present",
      points: [
        "We’re building a smart cooling system that reduces heat buildup on solar panels, helping them operate more efficiently.",
        "Our solution has shown up to a 12% increase in energy efficiency through real-world testing, improving performance and durability",
        "We combine hardware innovation and data monitoring to optimize energy production and reduce long-term operational costs.",
        "We’re a purpose-driven team committed to making solar energy more sustainable, accessible, and productive for the future."
      ],
      images: [
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
        "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
      ],
      colorClass: "from-[#133D4B] to-[#1E6E49]"
    },
    {
      title: "Eclipta",
      subtitle: "CEO, 2024–Present",
      points: [
        "Amazon business",
        "We sell high-quality daily-use gadgets to improve people's everyday life",
        "Managed logistics, ads, profits and cash flow",
        "Led branding, product listings, and marketing strategies, utilizing Amazon Ads to enhance visibility and drive sales."
      ],
      images: [
        "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg",
        "https://images.pexels.com/photos/4480453/pexels-photo-4480453.jpeg"
      ],
      colorClass: "from-[#143E4C] to-[#1D6D48]"
    }
  ];

  return (
    <section id="startups" className="py-20 px-4 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <SectionTitle 
          title="Startups & Business" 
          subtitle="Founding and growing innovative ventures with technology at their core"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <Card 
              key={index}
              title={startup.title}
              subtitle={startup.subtitle}
              points={startup.points}
              images={startup.images}
              colorClass={startup.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;