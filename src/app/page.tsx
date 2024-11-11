// src/app/page.tsx

import React from 'react';
import Container from '../components/layout/Container';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/hero';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experience';
import SkillsCard from '../components/SkillsCard';
import { skills } from '../data/skills';


const Home: React.FC = () => {
  return (
    <Container className="py-16" maxWidth="6xl">
      {/* Hero Section */}
      <HeroCard {...heroData} />

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <SkillsCard skills={skills} />
      </section>
    </Container>
  );
};

export default Home;
