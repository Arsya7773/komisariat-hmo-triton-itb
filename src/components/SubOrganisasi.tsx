import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

// Nama dan fullname sudah di-update agar konsisten dan rapi
const subOrgs = [
  { id: 'bp', name: 'Badan Pengurus', fullname: 'Komisariat HMO "TRITON" ITB', link: '/program/bp' },
  { id: 'bpak', name: 'Badan Perwakilan Anggota', fullname: 'Komisariat HMO "TRITON" ITB', link: '/program/bpak' },
  { id: 'senator', name: 'Badan Kesenatoran', fullname: 'Komisariat HMO "TRITON" ITB', link: '/program/senator' },
  { id: 'poseidon', name: 'POSEIDON', fullname: 'Komisariat HMO "TRITON" ITB', link: '/program/poseidon' }
];

export default function SubOrganisasi() {
  return (
    <section id="sub-organisasi" className="py-32 bg-[#040D1A] relative overflow-hidden">
      
      <style>{`
        .fizzy-card {
          position: relative;
          height: 320px;
          background: linear-gradient(135deg, #0A192F, #112240);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: visible; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          z-index: 1;
          text-decoration: none;
        }

        .fizzy-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(135deg, #112240, #1a365d);
          border-color: #facc15;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(250, 204, 21, 0.2);
          z-index: 10;
        }

        .fizzy-card h3 {
          transition: color 0.3s;
        }
        .fizzy-card:hover h3 {
          color: #facc15;
        }

        /* Setup Partikel Bola Solid */
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          top: var(--startY);
          left: var(--startX);
          transform: translate(-50%, -50%) scale(0);
        }

        .fizzy-card:hover .particle {
          animation: shoot-border var(--duration) ease-out infinite;
          animation-delay: calc(var(--delay) * -1);
        }

        @keyframes shoot-border {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          20% {
            transform: translate(calc(-50% + (var(--tx) * 0.3)), calc(-50% + (var(--ty) * 0.3))) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal animation="bounce-down">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
              Sub-<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Organisasi</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_#22d3ee]"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subOrgs.map((org, i) => {
            
            const particles = Array.from({ length: 35 }).map((_, index) => {
              const isTopBottom = Math.random() > 0.5;
              let startX, startY, tx, ty;

              if (isTopBottom) {
                startX = Math.random() * 100 + '%';
                startY = Math.random() > 0.5 ? '0%' : '100%';
                tx = (Math.random() - 0.5) * 60 + 'px'; 
                ty = startY === '0%' ? -(Math.random() * 40 + 20) + 'px' : (Math.random() * 40 + 20) + 'px'; 
              } else {
                startX = Math.random() > 0.5 ? '0%' : '100%';
                startY = Math.random() * 100 + '%';
                tx = startX === '0%' ? -(Math.random() * 40 + 20) + 'px' : (Math.random() * 40 + 20) + 'px'; 
                ty = (Math.random() - 0.5) * 60 + 'px'; 
              }

              const colorRoll = Math.random();
              let color = '#22d3ee'; 
              let shadow = '0 0 8px rgba(34, 211, 238, 0.6)';
              if (colorRoll > 0.7) {
                color = '#facc15'; 
                shadow = '0 0 8px rgba(250, 204, 21, 0.6)';
              } else if (colorRoll > 0.5) {
                color = '#ffffff'; 
                shadow = '0 0 8px rgba(255, 255, 255, 0.6)';
              }

              const size = Math.random() * 4 + 3 + 'px'; 
              const duration = Math.random() * 1 + 0.8 + 's'; 
              const delay = Math.random() * 2 + 's'; 

              return (
                <div 
                  key={index} 
                  className="particle" 
                  style={{ 
                    '--startX': startX, 
                    '--startY': startY, 
                    '--tx': tx, 
                    '--ty': ty, 
                    '--duration': duration,
                    '--delay': delay,
                    width: size,
                    height: size,
                    backgroundColor: color,
                    boxShadow: shadow
                  } as React.CSSProperties} 
                />
              );
            });

            return (
              <ScrollReveal key={org.id} delay={i} animation="pop">
                <Link to={org.link} className="fizzy-card p-8 group block">
                  
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    {particles}
                  </div>
                  
                  <div className="relative z-10 pointer-events-none">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-wide">
                      {org.name}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-cyan-300/80 uppercase tracking-widest leading-relaxed">
                      {org.fullname}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}