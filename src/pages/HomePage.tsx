import React from 'react';
import { Hero } from '../components/Hero';
import { MissionVision } from '../components/MissionVision';
import { ImpactData } from '../components/ImpactData';
import { ServicesOverview } from '../components/ServicesOverview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PageType } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 01. Hero Section & Impact Stats Bar */}
      <Hero onNavigate={onNavigate} />

      {/* 02. Overview of Services (Euphoria inspiration) */}
      <ServicesOverview onNavigate={onNavigate} />

      {/* 03. Mission and Vision (Full-Width Gemini Background) */}
      <MissionVision onNavigate={onNavigate} />

      {/* 04. Our Impact */}
      <ImpactData onNavigate={onNavigate} />

      {/* 05. Why Choose Us (Marwa Bento Grid inspiration) */}
      <WhyChooseUs onNavigate={onNavigate} />
    </div>
  );
};
