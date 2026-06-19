import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import { kabarHimpunanData, NewsItem } from '../../data/kabarHimpunanData';
import NewsCard from '../../components/NewsCard';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function BeritaTerkini() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const featuredNews = kabarHimpunanData[0];
  const otherNews = kabarHimpunanData.slice(1);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Kumpulan CSS Animasi Aurora, Typing, dan NEON CARD */}
      <style>{`
        /* --- Teks Aurora & Typing --- */
        .ocean-aurora-text {
          background: linear-gradient(110deg, #ffffff 0%, #ffffff 30%, #22d3ee 45%, #facc15 50%, #22d3ee 55%, #ffffff 70%, #ffffff 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: ocean-shimmer 4s linear infinite;
        }
        @keyframes ocean-shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
        .ocean-typing { overflow: hidden; white-space: nowrap; border-right: 2px solid currentColor; animation: oceanType 6s steps(54, end) infinite, oceanBlink 0.75s step-end infinite; }
        @keyframes oceanType { 0%, 10% { max-width: 0; } 40%, 70% { max-width: 100%; } 90%, 100% { max-width: 0; } }
        @keyframes oceanBlink { from, to { border-color: transparent; } 50% { border-color: currentColor; } }

        /* --- Animasi Neon Border Interaktif --- */
        .neon-card {
          position: relative;
          overflow: hidden;
          transition: 0.5s ease-in-out;
        }
        .neon-card:hover {
          box-shadow: 0 10px 30px -10px var(--neon-color), 0 0 20px rgba(34, 211, 238, 0.15);
          transform: translateY(-8px);
          border-color: transparent !important;
        }
        
        .neon-line {
          position: absolute;
          display: block;
          z-index: 20;
          opacity: 0; /* Tersembunyi saat normal */
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .neon-card:hover .neon-line {
          opacity: 1; /* Menyala saat di-hover */
        }
        
        .neon-card .neon-line:nth-child(1) {
          top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--neon-color));
          animation: neonAnimate1 2s linear infinite;
        }
        @keyframes neonAnimate1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
        
        .neon-card .neon-line:nth-child(2) {
          top: -100%; right: 0; width: 2px; height: 100%;
          background: linear-gradient(180deg, transparent, var(--neon-color));
          animation: neonAnimate2 2s linear infinite;
          animation-delay: 0.5s;
        }
        @keyframes neonAnimate2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }
        
        .neon-card .neon-line:nth-child(3) {
          bottom: 0; right: 0; width: 100%; height: 2px;
          background: linear-gradient(270deg, transparent, var(--neon-color));
          animation: neonAnimate3 2s linear infinite;
          animation-delay: 1s;
        }
        @keyframes neonAnimate3 { 0% { right: -100%; } 50%, 100% { right: 100%; } }
        
        .neon-card .neon-line:nth-child(4) {
          bottom: -100%; left: 0; width: 2px; height: 100%;
          background: linear-gradient(360deg, transparent, var(--neon-color));
          animation: neonAnimate4 2s linear infinite;
          animation-delay: 1.5s;
        }
        @keyframes neonAnimate4 { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <motion.main className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        
        <motion.header className="max-w-3xl block" variants={pageVariants}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Kabar Himpunan
          </div>
          {/* PERBAIKAN OVERLAP */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase mt-2 block">
            <span className="ocean-aurora-text block w-full">BERITA TERKINI</span>
          </h1>
          <div className="mt-4 flex justify-start w-full">
            <div className="relative inline-block text-left text-sm sm:text-base text-slate-300">
              <span className="opacity-0 pointer-events-none block">Sorotan utama, perkembangan kegiatan, dan cerita terbaru dari Komisariat HMO TRITON ITB.</span>
              <span className="absolute top-0 left-0 h-full ocean-typing !border-cyan-400">Sorotan utama, perkembangan kegiatan, dan cerita terbaru dari Komisariat HMO TRITON ITB.</span>
            </div>
          </div>
        </motion.header>

        {/* SOROTAN UTAMA DENGAN EFEK NEON CARD */}
        {featuredNews && (
          <motion.section className="mt-12" variants={pageVariants}>
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              <span className="h-px w-10 bg-cyan-400/60" /> Sorotan Utama
            </div>
            
            <article 
              onClick={() => setSelectedNews(featuredNews)} 
              className="neon-card grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.35fr_0.85fr] lg:p-8 cursor-pointer group"
              style={{ '--neon-color': '#22d3ee' } as React.CSSProperties} /* Warna Biru Cyan untuk Sorotan Utama */
            >
              {/* Elemen Pembentuk Garis Cahaya */}
              <span className="neon-line"></span>
              <span className="neon-line"></span>
              <span className="neon-line"></span>
              <span className="neon-line"></span>

              <div className="overflow-hidden rounded-3xl bg-[#112240] aspect-video lg:h-full relative z-10">
                <img src={`${baseUrl}assets/news/${featuredNews.image}`} alt={featuredNews.title} loading="eager" decoding="sync" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-between gap-6 relative z-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    <CalendarDays className="h-4 w-4" /> {featuredNews.category}
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl group-hover:text-cyan-300 transition-colors">{featuredNews.title}</h2>
                  <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{featuredNews.excerpt}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono"><CalendarDays className="h-4 w-4 text-cyan-300" />{featuredNews.date}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-4 py-2 font-semibold text-cyan-200 transition group-hover:bg-cyan-400/25 text-xs">
                    Baca selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          </motion.section>
        )}

        <motion.section className="mt-16" variants={pageVariants}>
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80"><span className="h-px w-10 bg-cyan-400/60" />Berita Lainnya</div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherNews.map((news) => (<NewsCard key={news.id} news={news} onClick={() => setSelectedNews(news)} />))}
          </div>
        </motion.section>
      </motion.main>

      {/* MODAL POP-UP */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-[#020617]/85 backdrop-blur-sm" onClick={() => setSelectedNews(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-[#0A192F] border border-cyan-800/50 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="relative h-48 sm:h-64 bg-slate-900 flex-shrink-0">
                <img src={`${baseUrl}assets/news/${selectedNews.image}`} alt={selectedNews.title} className="w-full h-full object-cover object-top opacity-60" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
                <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 bg-black/50 hover:bg-cyan-500 text-white p-2 rounded-full backdrop-blur transition-all duration-300"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg></button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 mb-3"><span className="bg-cyan-500 text-[#0A192F] text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-wider">{selectedNews.category}</span><span className="text-cyan-400 text-xs font-mono">{selectedNews.date}</span></div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">{selectedNews.title}</h2>
                </div>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-grow"><p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{selectedNews.content}</p></div>
              {selectedNews.link && (
                <div className="p-6 border-t border-cyan-900/30 bg-[#071026] flex-shrink-0">
                  <a href={selectedNews.link} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 text-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)]">Akses Tautan / RSVP Terkait</a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}