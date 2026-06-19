import React from 'react';
import { motion } from 'framer-motion';
import AnimatedProgramCard from '../../components/AnimatedProgramCard';
import { bpakData } from '../../data/bpakData';

const fallbackImage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23112240"/><text x="50" y="50" font-family="Arial" font-size="12" fill="%2322d3ee" text-anchor="middle" dominant-baseline="middle">No Photo</text></svg>`;
const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

// KOMPONEN TYPING TEXT ANIMATION
const TypingText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const characters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={{ visible: { transition: { staggerChildren: 0.015, delayChildren: delay } }, hidden: {} }}
      className={className}
    >
      {characters.map((char, i) => (
        <motion.span key={i} variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const GalaxyCapsule = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={`galaxy-capsule ${className ?? ''}`}>
      <span className="galaxy-backdrop" aria-hidden="true" />
      <span className="galaxy-spark" aria-hidden="true" />
      <div className="galaxy-layer" aria-hidden="true">
        <div className="galaxy__container">
          {[...Array(3)].map((_, i) => (
            <span key={`ring-${i}`} className="galaxy__ring" style={{ opacity: 0.4 + i * 0.2, transform: `translate(-28%, -40%) rotateX(-24deg) rotateY(-30deg) rotateX(90deg) scale(${0.55 + i * 0.2})`, background: i % 2 === 0 ? 'radial-gradient(circle at center, transparent 61%, rgba(34,211,238,0.7) 62%, transparent 67%)' : 'radial-gradient(circle at center, transparent 61%, rgba(250,204,21,0.6) 62%, transparent 67%)' } as React.CSSProperties} />
          ))}
        </div>
        <div className="galaxy__container">
          {[...Array(20)].map((_, i) => {
            const size = RANDOM(1, 3); const distance = RANDOM(25, 75); const duration = RANDOM(6, 15); const delay = RANDOM(0, 10); const alpha = RANDOM(50, 100) / 100;
            return <span key={`star-${i}`} className="galaxy-star" style={{ ['--size' as string]: size, ['--distance' as string]: distance, ['--duration' as string]: duration, ['--delay' as string]: delay, ['--alpha' as string]: alpha } as React.CSSProperties} />;
          })}
        </div>
      </div>
      <div className="relative z-10 flex items-center gap-5">{children}</div>
    </div>
  );
};

export default function BPAKPage() {
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
        
        .title-typing {
          overflow: hidden; white-space: nowrap; border-right: 2px solid transparent; width: 0;
          animation: typing 8s linear infinite, blink-caret .75s step-end infinite;
          animation-delay: 0.5s;
        }
        @keyframes typing { 0%, 5% { width: 0; } 45%, 55% { width: 100%; } 95%, 100% { width: 0; } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #facc15; } }
        .perlin-backdrop { background: conic-gradient(from 180deg at 50% 70%, #ffffff 0deg, #facc15 72deg, #ec4b4b 144deg, #22d3ee 216deg, #4dffbf 288deg, #ffffff 1turn); width: 100%; height: 100%; position: absolute; inset: 0; mask: radial-gradient(circle at 50% 50%, white 2.5px, transparent 3px) 50% 50% / 22px 22px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px; mask-composite: intersect; -webkit-mask: radial-gradient(circle at 50% 50%, white 2.5px, transparent 3px) 50% 50% / 22px 22px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px; -webkit-mask-composite: source-in; animation: perlin-flicker 15s infinite linear; opacity: 1; mix-blend-mode: screen; filter: blur(0.5px); }
        @keyframes perlin-flicker { to { mask-position: 50% 50%, 0 50%; -webkit-mask-position: 50% 50%, 0 50%; } }
      `}</style>

      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A192F]"></div>
        <div className="perlin-backdrop"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A192F] to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0A192F] to-transparent opacity-90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-28">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] text-shadow-[2px_2px_2px_#ffffff50]">
            Badan Perwakilan Anggota
          </h1>
          <div className="flex justify-center w-full mt-4">
            <div className="relative inline-block text-left text-yellow-400 text-xl md:text-2xl uppercase tracking-[0.4em] font-black drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
              <span className="opacity-0 pointer-events-none block whitespace-nowrap">Legislasi, Pengawasan, & Advokasi</span>
              <span className="absolute top-0 left-0 h-full w-full title-typing overflow-hidden whitespace-nowrap">Legislasi, Pengawasan, & Advokasi</span>
            </div>
          </div>
        </motion.header>

        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7 }} className="mb-28 relative z-10">
          <div className="flex flex-col items-center text-center mb-16 relative">
            <div className="w-32 h-32 p-4 bg-[#112240]/80 backdrop-blur-md rounded-[2rem] border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] mb-6 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-[2rem] blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
              <div className="relative z-10 text-5xl drop-shadow-[0_0_20px_#22d3ee]">🏛️</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Ketua BPAK</h2>
            
            <div className="flex justify-center w-full mb-10 max-w-2xl mx-auto">
              <div className="relative inline-block text-left text-cyan-100/80 text-lg">
                <span className="opacity-0 pointer-events-none block whitespace-nowrap">Penanggung jawab tertinggi fungsi pengawasan BPAK</span>
                <span className="absolute top-0 left-0 h-full w-full title-typing overflow-hidden whitespace-nowrap !border-cyan-400">Penanggung jawab tertinggi fungsi pengawasan BPAK</span>
              </div>
            </div>

            <GalaxyCapsule className="p-2 pr-10 rounded-full max-w-full">
              <img src={bpakData.leader.photo} alt={bpakData.leader.name} loading="eager" width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 relative z-10 bg-[#0A192F]" onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }} />
              <div className="text-left relative z-10 pl-2">
                <h3 className="font-bold text-white text-lg">{bpakData.leader.name}</h3>
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-1">{bpakData.leader.role}</p>
              </div>
            </GalaxyCapsule>
          </div>

          {/* FUNGSI UTAMA BPAK */}
          {bpakData.mainFunctions && bpakData.mainFunctions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
              {bpakData.mainFunctions.map((func) => (
                <AnimatedProgramCard key={func.id} program={func} />
              ))}
            </div>
          )}

          {/* BAGIAN KOMISI DENGAN CLEAN TYPING EFFECT */}
          <div className="mt-20">
            <h3 className="text-3xl font-black text-cyan-50 border-l-4 border-cyan-400 pl-5 mb-12 uppercase tracking-wide">Komisi & Implementasi Fungsi</h3>
            
            <div className="space-y-16">
              {bpakData.commissions && bpakData.commissions.map((komisi: any) => (
                <div key={komisi.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#112240]/40 border border-cyan-900/40 p-8 rounded-[2rem] backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:border-cyan-500/30 transition-colors duration-500">
                  
                  {/* KIRI - Header Komisi (Sticky) */}
                  <div className="lg:col-span-5 lg:sticky top-32">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{komisi.title}</h3>
                    </div>
                    <p className="text-cyan-100/70 text-sm leading-relaxed border-l-2 border-cyan-900 pl-4">{komisi.desc}</p>
                  </div>

                  {/* KANAN - Clean Terminal Terminal Typing */}
                  <div className="lg:col-span-7 space-y-4">
                    {komisi.functions && komisi.functions.map((func: any, idx: number) => (
                      <div key={func.id} className="bg-[#071026] border border-cyan-800/50 rounded-xl p-5 font-mono relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></div>
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                          <span className="text-cyan-400 animate-pulse font-black">{'>'}</span>
                          {/* PERBAIKAN: Menghapus "./execute" agar murni mengetik judul */}
                          <TypingText text={func.title} delay={idx * 1.5} className="text-base font-sans tracking-wide text-cyan-300" />
                        </h4>
                        <div className="text-slate-300 text-sm leading-relaxed pl-4 border-l border-cyan-900/50 ml-1">
                          <TypingText text={func.desc} delay={(idx * 1.5) + 0.8} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}