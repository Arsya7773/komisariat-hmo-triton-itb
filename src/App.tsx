import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import VisionMission from './components/VisionMission';
import BeritaInformasi from './components/BeritaInformasi';
import SubOrganisasi from './components/SubOrganisasi'; 
import CashflowChart from './components/sections/CashflowChart';
import { Footer } from './components/Footer';
import { Sejarah } from './components/Sejarah';
import { Organogram } from './components/sections/Organogram/Organogram';

// MENGGUNAKAN FILE DENGAN DESAIN TERBAIK
import BPKomisariat from './pages/program/BPKomisariat'; 
import BPAKPage from './pages/program/BPAKPage'; // <-- Diarahkan ke desain yang pakai Partikel/Orbs
import SenatorPage from './pages/program/senator';
import PoseidonPage from './pages/program/poseidon';

import BeritaTerkini from './pages/kabar/BeritaTerkini';
import AgendaKegiatan from './pages/kabar/AgendaKegiatan';
import Galeri from './pages/kabar/Galeri';
import Kontak from './pages/Kontak';

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <VisionMission />
      <BeritaInformasi />
      <SubOrganisasi /> 
      <CashflowChart />
    </main>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#0A192F]">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/organogram" element={<Organogram />} />
          <Route path="/program/bp" element={<BPKomisariat />} />
          <Route path="/program/bpak" element={<BPAKPage />} />
          <Route path="/program/senator" element={<SenatorPage />} />
          <Route path="/program/poseidon" element={<PoseidonPage />} />
          <Route path="/kabar/berita" element={<BeritaTerkini />} />
          <Route path="/kabar/agenda" element={<AgendaKegiatan />} />
          <Route path="/kabar/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}