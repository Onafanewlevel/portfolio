// src/components/cards/HeroCard.tsx

import React from 'react';
import Image from 'next/image';

interface HeroCardProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  callToActionText: string;
  callToActionLink: string;
  countryEmoji?: string; // Optional prop for country flag
}

const HeroCard: React.FC<HeroCardProps> = ({
  name,
  title,
  description,
  imageSrc,
  imageAlt,
  callToActionText,
  callToActionLink,
  countryEmoji,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-island bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-6 md:p-12 mb-12">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">{title}</h2>
        <p className="text-lg mb-6 flex items-center whitespace-pre-line">
          {description}
          {countryEmoji && (
            <span className="ml-2 text-xl" role="img" aria-label="Country Flag">
              {countryEmoji}
            </span>
          )}
        </p>
        {/* <a
          href={callToActionLink}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          {callToActionText}
        </a> */}
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className="rounded-full shadow-md"
        />
      </div>
    </section>
  );
};

export default HeroCard;
