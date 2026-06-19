/**
 * Organogram Main Component
 * Complete organizational structure page with hero, flowchart, and legend
 */

import React, { useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Ship, ChevronLeft, ChevronRight } from 'lucide-react';
import OrgNode from './OrgNode';
import ConnectingLines from './ConnectingLines';
import { orgChartData } from '@/data/organogram';

export const Organogram = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const startX = Math.random() * 100;
      const endX = startX + (20 + Math.random() * 20);
      return {
        id: i, startX, endX,
        delay: Math.random() * 12 + 's',
        duration: 3 + Math.random() * 4 + 's',
        size: 3 + Math.random() * 4 + 'px',
        isGold: Math.random() > 0.8,
      };
    });
  }, []);

  // Komponen Kartu 3D Sparkle Interaktif dengan Framer Motion
  const SparkleCard = ({ title, desc, variant = 'cyan', className = '', index = 0 }: { title: string; desc: string; variant?: 'cyan' | 'gold'; className?: string; index?: number }) => {
    const isGold = variant === 'gold';
    const borderClass = isGold ? 'border-yellow-400' : 'border-cyan-500';
    const bgGlow = isGold ? 'hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]' : 'hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]';

    return (
      <motion.article 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className={`sparkle-card-wrapper group relative bg-white rounded-2xl p-6 border-l-4 ${borderClass} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`sparkle-svg svg-${i + 1}`} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill={isGold ? '#facc15' : '#22d3ee'} />
            </svg>
          ))}
        </div>

        <div className={`sparkle-title-container ${isGold ? 'gold-variant' : 'cyan-variant'} relative mb-3 flex items-start gap-3`}>
          <div className={`w-2 h-2 rounded-full ${isGold ? 'bg-yellow-400' : 'bg-cyan-500'} flex-shrink-0 mt-2`}></div>
          <div className="relative inline-block w-full">
            <h3 className="sparkle-text-base text-lg md:text-xl font-bold">{title}</h3>
            <h3 className="sparkle-text-glare text-lg md:text-xl font-bold absolute top-0 left-0 w-full h-full" aria-hidden="true">{title}</h3>
          </div>
        </div>
        
        <p className="text-slate-600 relative z-10 leading-relaxed text-sm md:text-base">{desc}</p>
      </motion.article>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
      <style>{`
        /* ================= AURORA SHIMMER TEXT ================= */
        .ocean-aurora-text {
          background: linear-gradient(110deg, #ffffff 0%, #ffffff 30%, #22d3ee 45%, #facc15 50%, #22d3ee 55%, #ffffff 70%, #ffffff 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: ocean-shimmer 4s linear infinite;
          display: inline-block;
        }
        @keyframes ocean-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* ================= BULLETPROOF TYPING EFFECT ================= */
        .ocean-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid currentColor;
          animation: oceanType 8s steps(54, end) infinite, oceanBlink 0.75s step-end infinite;
        }
        @keyframes oceanType {
          0%, 10% { max-width: 0; }
          40%, 70% { max-width: 100%; }
          90%, 100% { max-width: 0; }
        }
        @keyframes oceanBlink {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }

        /* ================= STARFALL (METEOR SHOWER) ================= */
        .starfall-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .falling-star {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          top: -20px;
          animation: fall-diagonal var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
        .star-cyan { background: #22d3ee; box-shadow: 0 0 8px 2px rgba(34, 211, 238, 0.8); }
        .star-gold { background: #facc15; box-shadow: 0 0 8px 2px rgba(250, 204, 21, 0.8); }
        @keyframes fall-diagonal {
          0% { transform: translate(calc(var(--startX) * 1vw), 0); opacity: 0; }
          10% { opacity: 0.8; }
          20% { opacity: 1; box-shadow: 0 0 15px 4px currentColor; }
          30% { opacity: 0.6; }
          60% { opacity: 0; }
          100% { transform: translate(calc(var(--endX) * 1vw), 110vh); opacity: 0; }
        }

        /* ================= SPARKLE CARD 3D TEXT ================= */
        .sparkle-card-wrapper { --hover: 0; --pos: 0; }
        .sparkle-card-wrapper:hover { --hover: 1; --pos: 1; }
        .sparkle-title-container { --color: #0891b2; --shadow: #cbd5e1; --glare: rgba(255,255,255,0.9); }
        .sparkle-title-container.gold-variant { --color: #d97706; }
        
        .sparkle-text-base {
          color: transparent;
          text-shadow:
            calc(var(--hover) * -0.5px) calc(var(--hover) * 0.5px) var(--shadow),
            calc(var(--hover) * -1px) calc(var(--hover) * 1px) var(--shadow),
            calc(var(--hover) * -1.5px) calc(var(--hover) * 1.5px) var(--shadow),
            calc(var(--hover) * -2px) calc(var(--hover) * 2px) var(--shadow);
          transform: translate(calc(var(--hover) * 2px), calc(var(--hover) * -2px));
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .sparkle-text-glare {
          background: linear-gradient(108deg, transparent 0 55%, var(--glare) 55% 60%, transparent 60% 70%, var(--glare) 70% 85%, transparent 85%) calc(var(--pos) * -200%) 0% / 200% 100%, var(--color);
          -webkit-background-clip: text;
          color: transparent;
          transform: translate(calc(var(--hover) * 2px), calc(var(--hover) * -2px));
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-position 0s;
        }
        
        .sparkle-card-wrapper:hover .sparkle-text-glare {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-position calc(var(--hover) * 1.5s) calc(var(--hover) * 0.1s);
        }

        /* SPARKLE SVGS */
        .sparkle-svg {
          position: absolute;
          z-index: 0;
          width: 24px;
          height: 24px;
          --delay-step: 0.15;
          top: calc(var(--y, 50) * 1%);
          left: calc(var(--x, 0) * 1%);
          transform: translate(-50%, -50%) scale(0);
          opacity: 0.7;
        }
        .sparkle-card-wrapper:hover .sparkle-svg { animation: sparkle-anim 0.75s calc((var(--delay-step) * var(--d)) * 1s) both; }
        @keyframes sparkle-anim { 50% { transform: translate(-50%, -50%) scale(var(--s, 1)); } }
        .svg-1 { --x: 10; --y: 20; --s: 1.1; --d: 1; }
        .svg-2 { --x: 80; --y: 80; --s: 1.25; --d: 2; }
        .svg-3 { --x: 50; --y: 10; --s: 1.1; --d: 3; }
        .svg-4 { --x: 20; --y: 80; --s: 0.9; --d: 2; }
        .svg-5 { --x: 90; --y: 30; --s: 0.8; --d: 4; }
      `}</style>

      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full min-h-[80vh] bg-[#0A192F] overflow-hidden flex items-center justify-center pt-20 select-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="starfall-container">
          {shootingStars.map((star) => (
            <div
              key={star.id}
              className={`falling-star ${star.isGold ? 'star-gold' : 'star-cyan'}`}
              style={{
                width: star.size,
                height: star.size,
                '--startX': star.startX,
                '--endX': star.endX,
                '--delay': star.delay,
                '--duration': star.duration,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl w-full pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-serif leading-tight drop-shadow-lg ocean-aurora-text">
            Struktur Organisasi & Arahan Kerja
          </h1>
          <div className="mt-4 flex justify-center w-full px-2">
            <div className="relative inline-block text-left text-sm sm:text-base md:text-2xl font-light text-cyan-300">
              <span className="opacity-0 pointer-events-none block">Alur Komando, Koordinasi, dan Pengawasan</span>
              <span className="absolute top-0 left-0 h-full ocean-typing">Alur Komando, Koordinasi, dan Pengawasan</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.div>
      </section>

      {/* ========== SISTEM KERJA DAN KOORDINASI SECTION ========== */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4 font-serif">
              Sistem Kerja dan Koordinasi
            </h2>
            <div className="flex justify-center w-full">
              <div className="relative inline-block text-left text-4xl md:text-5xl font-bold text-navy-dark font-serif text-cyan-600">
                <span className="opacity-0 pointer-events-none block">Sistem Kerja dan Koordinasi</span>
                <span className="absolute top-0 left-0 h-full ocean-typing">Sistem Kerja dan Koordinasi</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <SparkleCard index={1} title="Ketua → Kesekjenan → Semua Bidang" desc="Ketua memberikan arahan langsung kepada seluruh bidang. Kesekjenan berfungsi memastikan semua bidang berjalan sesuai rancangan/timeline." variant="cyan" />
            <SparkleCard index={2} title="Bidang → Divisi → Anggota" desc="Setiap bidang membawahi divisi-divisi yang lebih spesifik. Divisi menjalankan program kerja dengan melibatkan anggota/staff." variant="gold" />
            <SparkleCard index={3} title="Koordinasi Antar Bidang" desc="Jika ada kegiatan yang melibatkan lebih dari satu bidang, maka setiap bidang yang berkaitan akan berkoordinasi satu sama lain." variant="cyan" />
            <SparkleCard index={4} title="Komunikasi dengan pihak Eksternal" desc="Bidang Eksternal bertanggung jawab atas komunikasi dalam menjalin hubungan di luar organisasi, tetapi tetap berkoordinasi dengan Ketua dan Kesekjenan." variant="gold" />
            <SparkleCard index={5} title="Pengawasan Khusus (BPAK & POSEIDON)" desc="BPAK (Badan Perwakilan Anggota Komisariat) bertugas mengawasi kinerja Ketua Komisariat. Sementara itu, Ketua Komisariat melakukan pengawasan langsung terhadap tim POSEIDON (Pengabdian Masyarakat)." variant="cyan" className="md:col-span-2" />
          </div>
        </div>
      </section>

      {/* ========== FLOWCHART SECTION ========== */}
      <section className="w-full bg-[#0A192F] py-16 relative border-y border-cyan-900/30 overflow-x-auto">
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
            Alur Komando <span className="text-yellow-400">& Koordinasi</span>
          </h2>
          <div className="flex justify-center w-full mt-2">
            <div className="relative inline-block text-left text-cyan-300 text-lg font-light">
              <span className="opacity-0 pointer-events-none block">Hierarki dan hubungan antar bidang organisasi</span>
              <span className="absolute top-0 left-0 h-full ocean-typing">Hierarki dan hubungan antar bidang organisasi</span>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full px-4">
          {canScrollLeft && (
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-yellow-400/20 hover:bg-yellow-400/40 border border-yellow-400 text-yellow-400 p-2 rounded-lg backdrop-blur-md transition-all"
              onClick={() => scroll('left')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-yellow-400/20 hover:bg-yellow-400/40 border border-yellow-400 text-yellow-400 p-2 rounded-lg backdrop-blur-md transition-all"
              onClick={() => scroll('right')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          <div ref={scrollContainerRef} className="w-full overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="relative w-[3000px] min-w-[2000px] h-[1200px] px-8 pb-32 mx-auto">
              <ConnectingLines width={orgChartData.svgDimensions.width} height={orgChartData.svgDimensions.height} />
              <div className="relative w-full h-full">
                {orgChartData.nodes.map((node) => (
                  <OrgNode key={node.id} title={node.title} personName={node.fullName || node.name} photoPath={node.photo} position={node.position} level={node.level} />
                ))}
              </div>

              <motion.div
                className="absolute top-10 right-10 z-[40] bg-[#0A192F]/80 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-sm font-bold text-yellow-400 mb-4 uppercase tracking-widest">Jenis Garis</h3>
                <div className="flex items-center gap-3 mb-3"><div className="w-8 h-1 bg-white rounded" /><span className="text-xs text-white">Garis Komando</span></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-1 bg-yellow-400 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 6px, transparent 6px, transparent 12px)' }} />
                  <span className="text-xs text-white">Garis Koordinasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-cyan-400 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22d3ee 0, #22d3ee 3px, transparent 3px, transparent 8px)' }} />
                  <span className="text-xs text-white">Garis Pengawasan</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BIDANG DESCRIPTION SECTION ========== */}
      <section className="w-full bg-white py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4 font-serif">Bidang & Fungsinya</h2>
            <div className="flex justify-center w-full mt-4">
              <div className="relative inline-block text-left text-gray-500 text-lg">
                <span className="opacity-0 pointer-events-none block">Deskripsi lengkap setiap bidang dalam organisasi</span>
                <span className="absolute top-0 left-0 h-full ocean-typing text-gray-600 !border-gray-400">Deskripsi lengkap setiap bidang dalam organisasi</span>
              </div>
            </div>
          </motion.div>

          {/* Di sini nanti AI Agent kamu bakal naruh Numbered Mission Card yang baru */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { id: 'pmsda', name: 'PMSDA', title: 'Pengembangan Minat & Studi Daya Anggaran', desc: 'Mengembangkan minat dan bakat anggota serta mengelola anggaran organisasi.' },
              { id: 'akilprof', name: 'Akilprof', title: 'Akademik & Keprofesian', desc: 'Mengelola aspek akademik dan profesional anggota organisasi.' },
              { id: 'eksternal', name: 'Eksternal', title: 'Bidang Eksternal', desc: 'Menjalin hubungan dengan organisasi luar dan mitra eksternal.' },
              { id: 'internal', name: 'Internal', title: 'Bidang Internal', desc: 'Memelihara hubungan internal dan kekeluargaan antar anggota.' },
              { id: 'medkominfo', name: 'Medkominfo', title: 'Media, Komunikasi & Informasi', desc: 'Mengelola komunikasi dan penyebarluasan informasi organisasi.' },
              { id: 'kesekjenan', name: 'Kesekjenan', title: 'Bidang Kesekjenan', desc: 'Mengelola aspek administrasi dan kesekretariatan organisasi.' },
            ].map((bidang, index) => (
              <motion.div
                key={bidang.id}
                className="bg-gradient-to-br from-[#0A192F]/5 to-cyan-500/5 border border-cyan-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <h3 className="text-xl font-bold text-navy-dark">{bidang.name}</h3>
                </div>
                <p className="text-sm text-cyan-600 font-semibold mb-3">{bidang.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{bidang.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organogram;