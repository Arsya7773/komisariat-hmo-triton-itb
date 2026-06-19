import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProgramItem {
  id: string;
  title: string;
  desc: string;
  image?: string;
  imageFallback?: string;
  url?: string;
  link?: string;
}

// FIX 1: Langsung menggunakan export default function agar Vite tidak crash
export default function AnimatedProgramCard({ program }: { program: ProgramItem }) {
  // FIX 2: Selalu mulai dengan status 'loading' agar kartu mencoba mencari gambar di folder dulu
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isHovered, setIsHovered] = useState(false);

  // Ambil BASE_URL agar jalan mulus di GitHub Pages/Vercel
  const baseUrl = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  
  // FIX 3: Logika Pintar! Kalau di bpData.ts tidak ada 'image', coba cari pakai 'id' programnya
  const imgName = program.image || `${program.id}.jpg`;
  const imgSrc = `${baseUrl}/assets/programs/${imgName}`;
  
  const programUrl = program.url || program.link;

  return (
    <>
      {/* CSS Khusus untuk Efek Fallback */}
      <style>{`
        .geist-flicker-grid {
          background: conic-gradient(from 180deg at 50% 70%, hsla(0,0%,98%,1) 0deg, #eec32d 72deg, #ec4b4b 144deg, #709ab9 216deg, #4dffbf 288deg, hsla(0,0%,98%,1) 1turn);
          width: 100%; height: 100%; position: absolute; inset: 0;
          mask: radial-gradient(circle at 50% 50%, white 2px, transparent 2.5px) 50% 50% / 20px 20px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px;
          mask-composite: intersect;
          -webkit-mask: radial-gradient(circle at 50% 50%, white 2px, transparent 2.5px) 50% 50% / 20px 20px, url("https://assets.codepen.io/605876/noise-mask.png") 256px 50% / 256px 256px;
          -webkit-mask-composite: source-in;
          animation: geist-flicker-move 20s infinite linear; opacity: 0.25; mix-blend-mode: screen;
          will-change: mask-position;
        }
        @keyframes geist-flicker-move {
          to { mask-position: 50% 50%, 0 50%; -webkit-mask-position: 50% 50%, 0 50%; }
        }
      `}</style>

      {/* ================= WRAPPER UTAMA KARTU ================= */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-lg bg-[#071026] border border-cyan-900/40 transition-transform duration-300 flex flex-col"
        style={{ 
          pointerEvents: 'auto',
          WebkitPerspective: 1000,
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      >
        
        {/* ================= AREA GAMBAR (ATAS) ================= */}
        <div className="relative w-full h-full flex-grow overflow-hidden">
          
          {/* 1. SKELETON LOADER (Muncul pas kartu baru dimuat dan sedang mencoba nyari gambar) */}
          {imgStatus === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0A192F] z-0">
              <div className="w-8 h-8 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
            </div>
          )}

          {/* 2. FALLBACK UI (Muncul kalau gambar beneran GAK ADA di folder) */}
          {imgStatus === 'error' && (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A192F] z-0 pointer-events-none"
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              variants={{
                rest: { filter: 'blur(5px)', scale: 1.15, opacity: 0.8 },
                hover: { filter: 'blur(0px)', scale: 1, opacity: 1 }
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{ willChange: 'filter, transform', transform: 'translateZ(0)' }}
            >
              <div className="geist-flicker-grid"></div>
              {/* Pesan Fallback */}
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                 <svg className="w-10 h-10 mb-2 text-cyan-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-500/60 mb-2">Visual Belum Tersedia</span>
                {program.imageFallback && (
                  <span className="inline-block border border-dashed border-cyan-500/40 p-1.5 rounded-lg bg-[#0A192F]/80 backdrop-blur-sm shadow-xl text-[9px] font-mono tracking-wider text-cyan-300 max-w-[80%]">
                    {program.imageFallback}
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {/* 3. PENCARI GAMBAR (Akan nembak 'onLoad' kalau gambarnya ada, dan 'onError' kalau nggak ada) */}
          <motion.img
            src={imgSrc}
            alt={program.title}
            onLoad={() => setImgStatus('loaded')}
            onError={() => setImgStatus('error')}
            className={`absolute inset-0 w-full h-full object-cover origin-center pointer-events-none transition-opacity duration-500 ${imgStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            variants={{
              rest: { filter: 'blur(8px)', scale: 1.15, opacity: 0.6 },
              hover: { filter: 'blur(0px)', scale: 1.05, opacity: 1 }
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{ willChange: 'filter, transform, opacity', transform: 'translateZ(0)' }}
            loading="lazy"
            decoding="async"
          />

          {/* ================= OVERLAY PANEL GRADIENT ================= */}
          <motion.div
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            variants={{
              rest: { background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(5,11,25,0.75) 50%, rgba(2,6,23,0.95) 100%)' },
              hover: { background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(5,11,25,0.1) 40%, transparent 100%)' }
            }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 p-6 flex flex-col justify-center pointer-events-none z-10"
          >
            {/* BLOK TEKS UTAMA (Meluncur turun menghilang saat di-hover) */}
            <motion.div
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              variants={{
                rest: { y: 0, opacity: 1 },
                hover: { y: 70, opacity: 0 } 
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="flex flex-col relative w-full text-center items-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-100 to-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {program.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed max-w-[95%] mx-auto drop-shadow-md border-t border-cyan-500/40 mt-3 pt-3">
                {program.desc}
              </p>
            </motion.div>
          </motion.div>

          {/* ================= BOTTOM BAR (Titik & Link) ================= */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
            {/* Titik Animasi Slide-Up */}
            <div className="flex gap-2">
              {[0, 0.08, 0.15].map((delayTime, i) => (
                <motion.div
                  key={i}
                  initial="rest"
                  animate={isHovered ? "hover" : "rest"}
                  variants={{
                    rest: { y: 25, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.35, delay: delayTime, ease: 'backOut' }}
                  className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : i === 1 ? 'bg-blue-400' : 'bg-yellow-400 shadow-[0_0_8px_#facc15]'}`}
                  style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                />
              ))}
            </div>

            {/* Tombol Tautan Aksi */}
            {programUrl && (
              <a
                href={programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <motion.span
                  initial="rest"
                  animate={isHovered ? "hover" : "rest"}
                  variants={{
                    rest: { opacity: 0, x: 20 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-[#0A192F]/90 hover:bg-[#112240] backdrop-blur-md px-3 py-2 rounded-md border border-cyan-400/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-colors duration-300"
                  style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                >
                  Akses Program
                  <svg 
                    className="w-3 h-3 ml-0.5" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.span>
              </a>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
}