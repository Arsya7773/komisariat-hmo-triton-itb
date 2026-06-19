import React from 'react';
import { Compass, Shield, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export const About = () => {
  const sections = [
    { 
      title: 'Sejarah', 
      icon: <Compass size={32} />, 
      desc: 'Berdiri sebagai wadah pemersatu mahasiswa Oseanografi ITB sejak tahun 2024.',
      color: '#06b6d4' // Cyan yang lebih solid untuk background putih
    },
    { 
      title: 'Asas', 
      icon: <Shield size={32} />, 
      desc: 'Asas HMO \'TRITON\' ITB adalah kemahasiswaan, keprofesian, kebenaran, dan kebebasan mimbar yang dewasa serta dapat dipertanggungjawabkan.',
      color: '#eab308' // Gold/Kuning yang lebih solid
    },
    { 
      title: 'Tujuan', 
      icon: <Target size={32} />, 
      desc: 'Dibentuk untuk mewadahi seluruh kebutuhan dasar mahasiswa berupa pendidikan, kesejahteraan, dan aktualisasi.',
      color: '#3b82f6' // Biru yang lebih solid
    },
  ];

  return (
    <section id="profil" className="py-32 px-8 md:px-20 bg-white relative overflow-hidden">
      
      {/* CSS Animasi Neon Border untuk Background Putih */}
      <style>{`
        .neon-card {
          position: relative;
          background: #ffffff; /* Background default kartu putih */
          border: 1px solid rgba(0, 0, 0, 0.05); /* Border super tipis */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); /* Bayangan lembut default */
          overflow: hidden;
          transition: 0.5s ease-in-out;
        }
        
        .neon-card:hover {
          background: var(--neon-color);
          /* Shadow neon disesuaikan agar tidak kotor di background putih */
          box-shadow: 0 10px 30px -10px var(--neon-color), 0 0 15px var(--neon-color);
          transform: translateY(-10px);
        }

        /* Garis Cahaya yang Berkeliling */
        .neon-card span {
          position: absolute;
          display: block;
        }
        .neon-card span:nth-child(1) {
          top: 0; left: 0; width: 100%; height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon-color));
          animation: animate1 2s linear infinite;
        }
        @keyframes animate1 {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }
        
        .neon-card span:nth-child(2) {
          top: -100%; right: 0; width: 3px; height: 100%;
          background: linear-gradient(180deg, transparent, var(--neon-color));
          animation: animate2 2s linear infinite;
          animation-delay: 0.5s;
        }
        @keyframes animate2 {
          0% { top: -100%; }
          50%, 100% { top: 100%; }
        }
        
        .neon-card span:nth-child(3) {
          bottom: 0; right: 0; width: 100%; height: 3px;
          background: linear-gradient(270deg, transparent, var(--neon-color));
          animation: animate3 2s linear infinite;
          animation-delay: 1s;
        }
        @keyframes animate3 {
          0% { right: -100%; }
          50%, 100% { right: 100%; }
        }
        
        .neon-card span:nth-child(4) {
          bottom: -100%; left: 0; width: 3px; height: 100%;
          background: linear-gradient(360deg, transparent, var(--neon-color));
          animation: animate4 2s linear infinite;
          animation-delay: 1.5s;
        }
        @keyframes animate4 {
          0% { bottom: -100%; }
          50%, 100% { bottom: 100%; }
        }

        /* Transisi warna teks saat di-hover */
        .neon-card h4, .neon-card p {
          transition: color 0.4s ease;
        }
        .neon-card:hover h4, .neon-card:hover p {
          color: #040D1A !important; /* Teks tetap gelap saat di-hover supaya kontras dengan background cerah */
        }
        .neon-card:hover .icon-wrapper {
          color: #040D1A !important;
          background: rgba(255, 255, 255, 0.4) !important;
          box-shadow: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Judul Bagian Profil (Disesuaikan untuk BG Putih) */}
        <ScrollReveal animation="bounce-down">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#040D1A] tracking-tight mb-4">
              Profil <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Himpunan</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
        </ScrollReveal>

        {/* 3 Kartu Neon Interaktif */}
        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <ScrollReveal key={i} animation={i === 1 ? 'pop' : 'slide-up'} delay={i + 1}>
              <div 
                className="neon-card p-10 rounded-2xl group flex flex-col h-full cursor-default"
                style={{ '--neon-color': s.color } as React.CSSProperties}
              >
                {/* 4 Elemen Pembentuk Garis Cahaya Berkeliling */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <div className="icon-wrapper w-16 h-16 rounded-full flex items-center justify-center bg-[#040D1A] mb-8 z-10 transition-all duration-500 shadow-md text-white">
                  {s.icon}
                </div>
                
                <h4 className="text-3xl font-bold text-[#040D1A] mb-4 z-10">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed z-10 font-medium">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};