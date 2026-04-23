import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Organogram } from './components/Organogram';
import { Programs } from './components/Programs';
import { NewsGrid } from './components/NewsGrid';
import { Footer } from './components/Footer';

function MainContent() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Organogram />
        <Programs />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MainContent />
  );
}
