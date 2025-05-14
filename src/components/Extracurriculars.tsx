import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Extracurriculars = () => {
  const activities = [
    {
      title: "The Wellbeing Project",
      subtitle: "2023–Present",
      points: [
        "Collaborated with teams from Georgetown University and University of Ljubljana to explore themes of ecological belonging, ancestry, and sustainability",
        "Developed Engaged with cultural elders and project founder Aaron Pereira, gaining deep insights into the relationship between energy, nature, and human purpose. engagement strategies"
      ],
      images: [
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
      ],
      colorClass: "from-[#1F6F4A] to-[#123C4A]"
    },
    {
      title: "Florestas Inteligentes",
      subtitle: "2025",
      points: [
        "Participated in a national project focused on supporting Amazon and Atlantic Forest communities through sustainable innovation.",
        "Studied bioeconomy and sustainability, with a focus on empowering forest-based communities. sustainable tech practices",
        "Co-developed and presented practical solutions tailored to real community needs.",
        "Gained deep insights into forest conservation, community challenges, and sustainable development.",
      ],
      images: [
        "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
        "https://images.pexels.com/photos/1105189/pexels-photo-1105189.jpeg"
      ],
      colorClass: "from-[#1E6E49] to-[#133D4B]"
    },
    {
      title: "FACE Pre-Acceleration",
      subtitle: "2023–Present",
      points: [
        "Winner of the pre-acceleration program, selected as the top project among early-stage ideas with impact-driven solutions.",
        "Became an ambassador for the center, helping to promote a culture of purpose-driven entrepreneurship on campus.",
        "Acted as a spokesperson, encouraging other students to create solutions that combine innovation, sustainability, and real-world impact, sharing the value of building startups with meaning"
      ],
      images: [
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
      ],
      colorClass: "from-[#1D6D48] to-[#143E4C]"
    },
    {
      title: "Instituto Dona Mara",
      subtitle: "2025–Present",
      points: [
        "Teach technology, programming, and computer skills to underprivileged students in a supportive, inclusive environment.",
        "Design and deliver classes focused on digital literacy, problem-solving, and creative thinking.",
        "Empower youth through accessible tech education, helping them build confidence and new opportunities for the future.",
      ],
      images: [
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg"
      ],
      colorClass: "from-[#1C6C47] to-[#153F4D]"
    }
  ];

  return (
    <section id="extracurriculars" className="py-20 px-4 bg-[#f0f4f8]">
      <div className="container mx-auto">
        <SectionTitle 
          title="Extracurriculars" 
          subtitle="Community involvement and impact-driven initiatives"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              title={activity.title}
              subtitle={activity.subtitle}
              points={activity.points}
              images={activity.images}
              colorClass={activity.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars