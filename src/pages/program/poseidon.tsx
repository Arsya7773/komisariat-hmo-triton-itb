import React from 'react';
import { motion } from 'framer-motion';
import AnimatedProgramCard from '../../components/AnimatedProgramCard';
import { poseidonData } from '../../data/poseidonData';

const fallbackImage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23112240"/><text x="50" y="50" font-family="Arial" font-size="12" fill="%2322d3ee" text-anchor="middle" dominant-baseline="middle">No Photo</text></svg>`;
const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const GalaxyCapsule = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={`galaxy-capsule ${className ?? ''}`}>
      <span className="galaxy-backdrop" aria-hidden="true" />
      <span className="galaxy-spark" aria-hidden="true" />
      <div className="galaxy-layer" aria-hidden="true">
        <div className="galaxy__container">
          {[...Array(3)].map((_, i) => (
            <span key={`ring-${i}`} className="galaxy__ring" style={{ opacity: 0.4 + i * 0.2, transform: `translate(-28%, -40%) rotateX(-24deg) rotateY(-30deg) rotateX(90deg) scale(${0.55 + i * 0.2})`, background: i % 2 === 0 ? 'radial-gradient(circle at center, transparent 61%, rgba(59,130,246,0.7) 62%, transparent 67%)' : 'radial-gradient(circle at center, transparent 61%, rgba(34,211,238,0.6) 62%, transparent 67%)' } as React.CSSProperties} />
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

export default function PoseidonPage() {
  return (
    <div className="bg-[#0A192F] min-h-screen pb-32 text-white relative overflow-hidden pt-32">
      <style>{`
        .galaxy-capsule {
          --transition: 0.3s; --spark: 2s; --active: 0; --hue: 210;
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
        .galaxy-spark:before { content: ""; position: absolute; width: 200%; aspect-ratio: 1; top: 0%; left: 50%; z-index: -1; translate: -50% -15%; transform: rotate(-90deg); opacity: calc((var(--active)) + 0.4); background: conic-gradient(from 0deg, transparent 0 340deg, #3b82f6 360deg); transition: opacity var(--transition); animation: rotate var(--spark) linear infinite both; }
        .galaxy-backdrop { position: absolute; inset: 2px; background: var(--bg); border-radius: 9999px; transition: background var(--transition); z-index: 0; }
        @keyframes rotate { to { transform: rotate(270deg); } }
        @keyframes flip { to { rotate: 180deg; } }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-400">
            POSEIDON
          </h1>
          <p className="text-cyan-400 text-lg md:text-xl uppercase tracking-[0.3em] font-bold">
            Pengabdian Masyarakat & Inovasi Pesisir
          </p>
        </motion.header>

        <section className="mb-20 flex flex-col items-center">
          <GalaxyCapsule className="p-2 pr-10 rounded-full max-w-full mb-6">
            <img src={poseidonData.leader.photo} alt={poseidonData.leader.name} loading="eager" width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 relative z-10 bg-[#0A192F]" onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }} />
            <div className="text-left relative z-10 pl-2">
              <h3 className="font-bold text-white text-lg">{poseidonData.leader.name}</h3>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">{poseidonData.leader.role}</p>
            </div>
          </GalaxyCapsule>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {poseidonData.programs.map((prog) => (
            <AnimatedProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </div>
    </div>
  );
}