import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Skill {
  id: number;
  name: string;
  level: string; // e.g., "Advanced", "Intermediate", "Beginner"
}

interface SkillsCardProps {
  skills: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex items-center bg-island bg-opacity-80 backdrop-blur-md rounded-lg shadow-sm p-4"
        >
          <FaCheckCircle className="text-green-400 mr-2" />
          <div>
            <h4 className="text-md font-semibold">{skill.name}</h4>
            <span className="text-sm text-gray-400">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
