import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
}

interface ExperienceCardProps extends Experience { }

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    role,
    company,
    duration,
    description,
}) => {
    return (
        <div className="flex items-start bg-island bg-opacity-80 backdrop-blur-md rounded-lg shadow-md p-6">
            <div className="mr-4 text-blue-400">
                <FaBriefcase size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold">{role}</h3>
                <h4 className="text-md text-blue-300">{company}</h4>
                <span className="text-sm text-gray-400">{duration}</span>
                <p className="mt-2 text-gray-200">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
