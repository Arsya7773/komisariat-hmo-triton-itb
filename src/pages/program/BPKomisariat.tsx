import React from 'react';
import { motion } from 'framer-motion';
import AnimatedProgramCard from '../../components/AnimatedProgramCard';
// PERBAIKAN KRUSIAL: Jalur import diubah ke file bpData yang benar
import { bpData } from '../../data/bpData';

const fallbackImage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23112240"/><text x="50" y="50" font-family="Arial" font-size="12" fill="%2322d3ee" text-anchor="middle" dominant-baseline="middle">No Photo</text></svg>`;

const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const GalaxyCapsule = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`galaxy-capsule ${className ?? ''}`}>
      <span className="galaxy-backdrop" aria-hidden="true" />
      <span className="galaxy-spark" aria-hidden="true" />
      <div className="galaxy-layer" aria-hidden="true">
        <div className="galaxy__container">
          {[...Array(3)].map((_, i) => (
            <span
              key={`ring-${i}`}
              className="galaxy__ring"
              style={{
                opacity: 0.4 + i * 0.2,
                transform: `translate(-28%, -40%) rotateX(-24deg) rotateY(-30deg) rotateX(90deg) scale(${0.55 + i * 0.2})`,
                background: i % 2 === 0
                  ? 'radial-gradient(circle at center, transparent 61%, rgba(34,211,238,0.7) 62%, transparent 67%)'
                  : 'radial-gradient(circle at center, transparent 61%, rgba(250,204,21,0.6) 62%, transparent 67%)'
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="galaxy__container">
          {[...Array(20)].map((_, i) => {
            const size = RANDOM(1, 3);
            const distance = RANDOM(25, 75);
            const duration = RANDOM(6, 15);
            const delay = RANDOM(0, 10);
            const alpha = RANDOM(50, 100) / 100;
            return (
              <span
                key={`star-${i}`}
                className="galaxy-star"
                style={{
                  ['--size' as string]: size,
                  ['--distance' as string]: distance,
                  ['--duration' as string]: duration,
                  ['--delay' as string]: delay,
                  ['--alpha' as string]: alpha
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
      <div className="relative z-10 flex items-center gap-5">
        {children}
      </div>
    </div>
  );
};

export default function BPKomisariat() {
  return (
    <div className="bg-[#0A192F] min-h-screen pb-32 text-white relative overflow-hidden font-sans pt-32">
      
      <style>{`
        .galaxy-capsule {
          --transition: 0.3s; --spark: 2s; --active: 0; --hue: 190;
          --bg: radial-gradient(120% 120% at 126% 126%, hsl(var(--hue) calc(var(--active) * 97%) 98% / calc(var(--active) * 0.9)) 40%, transparent 50%) calc(100px - (var(--active) * 100px)) 0 / 100% 100% no-repeat, radial-gradient(120% 120% at 120% 120%, hsl(var(--hue) calc(var(--active) * 97%) 70% / calc(var(--active) * 1)) 30%, transparent 70%) calc(100px - (var(--active) * 100px)) 0 / 100% 100% no-repeat, hsl(var(--hue) calc(var(--active) * 100%) calc(12% - (var(--active) * 8%)));
          background: transparent; position: relative;
          box-shadow: 0 0 calc(var(--active) * 4em) calc(var(--active) * 2em) hsl(var(--hue) 97% 61% / 0.3), 0 0.05em 0 0 hsl(var(--hue) calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset, 0 -0.05em 0 0 hsl(var(--hue) calc(var(--active) * 97%) calc(var(--active) * 10%)) inset;
          transition: box-shadow var(--transition), scale var(--transition), background var(--transition);
          scale: calc(1 + (var(--active) * 0.03)); transform-style: preserve-3d; perspective: 100vmin; overflow: hidden; border: 0; cursor: pointer;
        }
        .galaxy-capsule:hover { --active: 1; }
        .galaxy-star { height: calc(var(--size) * 1px); aspect-ratio: 1; background: white; border-radius: 50%; position: absolute; opacity: var(--alpha); top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg) translateY(calc(var(--distance) * 1px)); animation: orbit calc(var(--duration) * 1s) calc(var(--delay) * -1s) infinite linear; }
        @keyframes orbit { to { transform: translate(-50%, -50%) rotate(360deg) translateY(calc(var(--distance) * 1px)); } }
        .galaxy-layer { position: absolute; width: 100%; aspect-ratio: 1; top: 50%; left: 50%; translate: -50% -50%; overflow: hidden; opacity: var(--active); transition: opacity var(--transition); pointer-events: none; z-index: 2; }
        .galaxy__ring { height: 200%; width: 200%; position: absolute; top: 50%; left: 50%; border-radius: 50%; transform: translate(-28%, -40%) rotateX(-24deg) rotateY(-30deg) rotateX(90deg); transform-style: preserve-3d; }
        .galaxy__container { position: absolute; inset: 0; opacity: var(--active); transition: opacity var(--transition); mask: radial-gradient(white, transparent); pointer-events: none; }
        .galaxy-spark { position: absolute; inset: 0; border-radius: 9999px; rotate: 0deg; overflow: hidden; mask: linear-gradient(white, transparent 50%); animation: flip calc(var(--spark) * 2) infinite steps(2, end); pointer-events: none; z-index: 1; }
        .galaxy-spark:before { content: ""; position: absolute; width: 200%; aspect-ratio: 1; top: 0%; left: 50%; z-index: -1; translate: -50% -15%; transform: rotate(-90deg); opacity: calc((var(--active)) + 0.4); background: conic-gradient(from 0deg, transparent 0 340deg, #facc15 360deg); transition: opacity var(--transition); animation: rotate var(--spark) linear infinite both; }
        .galaxy-backdrop { position: absolute; inset: 2px; background: var(--bg); border-radius: 9999px; transition: background var(--transition); z-index: 0; }
        @keyframes rotate { to { transform: rotate(270deg); } }
        @keyframes flip { to { rotate: 180deg; } }

        /* ================= TITLE TYPING LOOP OPTIMIZATION ================= */
        .title-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent; 
          width: 0;
          /* Diubah menjadi linear agar mulus di semua panjang teks */
          animation: typing 8s linear infinite, blink-caret .75s step-end infinite;
          animation-delay: 0.5s;
        }
        
        @keyframes typing { 
          0%, 5% { width: 0; }
          45%, 55% { width: 100%; } 
          95%, 100% { width: 0; }
        }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #facc15; } }

        /* ================= PERLIN BACKDROP ================= */
        .perlin-backdrop {
          background: conic-gradient(from 180deg at 50% 70%, #ffffff 0deg, #facc15 72deg, #ec4b4b 144deg, #22d3ee 216deg, #4dffbf 288deg, #ffffff 1turn); width: 100%; height: 100%; position: absolute; inset: 0; mask: radial-gradient(circle at 50% 50%, white 2.5px, transparent 3px) 50% 50% / 22px 22px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px; mask-composite: intersect; -webkit-mask: radial-gradient(circle at 50% 50%, white 2.5px, transparent 3px) 50% 50% / 22px 22px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px; -webkit-mask-composite: source-in; animation: perlin-flicker 15s infinite linear; opacity: 1; mix-blend-mode: screen; filter: blur(0.5px);
        }
        
        @keyframes perlin-flicker {
          to { mask-position: 50% 50%, 0 50%; -webkit-mask-position: 50% 50%, 0 50%; }
        }
      `}</style>

      {/* Perlin Noise Background Wrapper */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A192F]"></div>
        <div className="perlin-backdrop"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A192F] to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0A192F] to-transparent opacity-90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] text-shadow-[2px_2px_2px_#ffffff50]">
            Badan Pengurus Komisariat
          </h1>
          
          <div className="flex justify-center w-full mt-4">
            <div className="relative inline-block text-left text-yellow-400 text-xl md:text-2xl uppercase tracking-[0.4em] font-black drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
              {/* FIX: Tambahkan whitespace-nowrap di elemen cetakan */}
              <span className="opacity-0 pointer-events-none block whitespace-nowrap">Struktur Organisasi & Program Kerja</span>
              <span className="absolute top-0 left-0 h-full w-full title-typing overflow-hidden whitespace-nowrap">Struktur Organisasi & Program Kerja</span>
            </div>
          </div>
        </motion.header>

        {bpData.map((item, index) => (
          <motion.section 
            key={item.id} 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7 }}
            className="mb-28"
          >
            <div className="flex flex-col items-center text-center mb-16 relative">
              <div className="w-32 h-32 p-4 bg-[#112240]/80 backdrop-blur-md rounded-[2rem] border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] mb-6 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-[2rem] blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
                <div className="w-full h-full bg-white rounded-md flex items-center justify-center p-2 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(250,204,21,0.45)] relative z-10">
                      <img src={item.logo} alt={item.title} loading="lazy" decoding="async" width={48} height={48} className="max-w-full max-h-full object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }} />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">{item.title}</h2>
              
              {item.desc && (
                <div className="flex justify-center w-full mb-10 max-w-2xl mx-auto">
                  <div className="relative inline-block text-left text-cyan-100/80 text-lg">
                    {/* FIX: Tambahkan whitespace-nowrap di elemen cetakan */}
                    <span className="opacity-0 pointer-events-none block whitespace-nowrap">{item.desc}</span>
                    <span className="absolute top-0 left-0 h-full w-full title-typing overflow-hidden whitespace-nowrap !border-cyan-400">{item.desc}</span>
                  </div>
                </div>
              )}

              <GalaxyCapsule className="p-2 pr-10 rounded-full max-w-full">
                <img
                  src={item.leader.photo}
                  alt={item.leader.name}
                  loading="eager" decoding="sync"
                  width={64} height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 relative z-10 bg-[#0A192F]"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                />
                <div className="text-left relative z-10 pl-2">
                  <h3 className="font-bold text-white text-lg">{item.leader.name}</h3>
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-1">{item.leader.role}</p>
                </div>
              </GalaxyCapsule>
            </div>

            {item.programs && item.programs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
                {item.programs.map((program) => (
                  <AnimatedProgramCard key={program.id} program={program} />
                ))}
              </div>
            )}

            {item.divisions && item.divisions.length > 0 && (
              <div className="mt-16 space-y-16 bg-[#112240]/40 border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-inner backdrop-blur-sm relative z-10">
                {item.divisions.map((div) => (
                  <div key={div.id}>
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-6 border-b border-cyan-900/50 pb-8">
                      <h3 className="text-3xl font-bold text-cyan-50 border-l-4 border-cyan-400 pl-5">{div.title}</h3>
                      
                      <GalaxyCapsule className="p-2 pr-8 rounded-full flex items-center gap-4 w-fit max-w-full">
                        <img
                          src={div.leader.photo}
                          alt={div.leader.name}
                          loading="lazy" decoding="async"
                          width={56} height={56}
                          className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 relative z-10 bg-[#0A192F]"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                        />
                        <div className="text-left relative z-10 pl-1">
                          <h4 className="font-bold text-white tracking-wide">{div.leader.name}</h4>
                          <p className="text-cyan-300/90 text-xs font-medium uppercase tracking-wider">{div.leader.role}</p>
                        </div>
                      </GalaxyCapsule>
                      
                    </div>
                    {div.programs && div.programs.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {div.programs.map((program) => (
                          <AnimatedProgramCard key={program.id} program={program} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {index !== bpData.length - 1 && (
              <div className="mt-32 w-full flex justify-center opacity-50 relative z-10">
                <div className="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]" />
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}