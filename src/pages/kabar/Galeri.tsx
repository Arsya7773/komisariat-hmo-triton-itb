import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Galeri() {
  const baseUrl = import.meta.env.BASE_URL;

  // Mendefinisikan gambar secara eksplisit untuk menghindari Vite Error
  const galleryItems = [
    // --- FOTO DARI FOLDER NEWS ---
    { path: 'news/badai.jpg', title: 'Badai' },
    { path: 'news/best-booth.jpg', title: 'Best Booth' },
    { path: 'news/seruan-aksi.jpg', title: 'Seruan Aksi' },
    { path: 'news/totm.jpg', title: 'Triton of The Month' },
    { path: 'news/trace.jpeg', title: 'Trace' },
    { path: 'news/tubay.jpg', title: 'Tutor Sebaya' },
    { path: 'news/ultah.jpg', title: 'Ulang Tahun' },
    
    // --- FOTO DARI FOLDER PROGRAMS ---
    { path: 'programs/hari-besar.jpg', title: 'Hari Besar' },
    { path: 'programs/sekre-bersih.jpg', title: 'Sekre Bersih' },
    { path: 'programs/house-of-triton.jpg', title: 'House Of Triton' },
    { path: 'programs/komis-bergembira.jpg', title: 'Komis Bergembira' },
    { path: 'programs/seatriton.jpg', title: 'Seatriton' },
    { path: 'programs/triattire.jpg', title: 'Triattire' },
    { path: 'programs/triday.jpg', title: 'Triday' },
    { path: 'programs/trident.jpg', title: 'Trident' },
    { path: 'programs/trilink.jpg', title: 'Trilink' },
    { path: 'programs/trisula.jpg', title: 'Trisula' },
    { path: 'programs/triton-arena.jpg', title: 'Triton Arena' },
    { path: 'programs/triton-base.jpg', title: 'Triton Base' },
    { path: 'programs/triton-check.jpg', title: 'Triton Check' },
    { path: 'programs/triton-mart.jpg', title: 'Triton Mart' },
    { path: 'programs/triton-treasury.jpg', title: 'Triton Treasury' }
  ].map((item, index) => {
    const colors = ['#facc15', '#3b82f6', '#22d3ee']; 
    return {
      id: index,
      title: item.title,
      image: `${baseUrl}assets/${item.path}`,
      color: colors[index % colors.length]
    };
  });

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-24 overflow-hidden relative">
      <style>{`
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
        .neon-line { position: absolute; display: block; z-index: 20; opacity: 0; transition: opacity 0.3s ease; pointer-events: none; }
        .neon-card:hover .neon-line { opacity: 1; }
        .neon-card .neon-line:nth-child(1) { top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--neon-color)); animation: neonAnimate1 2s linear infinite; }
        @keyframes neonAnimate1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
        .neon-card .neon-line:nth-child(2) { top: -100%; right: 0; width: 2px; height: 100%; background: linear-gradient(180deg, transparent, var(--neon-color)); animation: neonAnimate2 2s linear infinite; animation-delay: 0.5s; }
        @keyframes neonAnimate2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }
        .neon-card .neon-line:nth-child(3) { bottom: 0; right: 0; width: 100%; height: 2px; background: linear-gradient(270deg, transparent, var(--neon-color)); animation: neonAnimate3 2s linear infinite; animation-delay: 1s; }
        @keyframes neonAnimate3 { 0% { right: -100%; } 50%, 100% { right: 100%; } }
        .neon-card .neon-line:nth-child(4) { bottom: -100%; left: 0; width: 2px; height: 100%; background: linear-gradient(360deg, transparent, var(--neon-color)); animation: neonAnimate4 2s linear infinite; animation-delay: 1.5s; }
        @keyframes neonAnimate4 { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <motion.main className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <header className="max-w-3xl block">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold" /> Kabar Himpunan
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase mt-2 block">
            <span className="ocean-aurora-text block w-full">GALERI</span>
          </h1>
          <div className="mt-4 flex justify-start w-full">
            <div className="relative inline-block text-left text-sm sm:text-base text-slate-300">
              <span className="opacity-0 pointer-events-none block">Jejak langkah, memori kegiatan, dan potret perjalanan Komisariat HMO TRITON ITB.</span>
              <span className="absolute top-0 left-0 h-full ocean-typing !border-cyan-400">Jejak langkah, memori kegiatan, dan potret perjalanan Komisariat HMO TRITON ITB.</span>
            </div>
          </div>
        </header>

        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.figure 
                key={item.id} 
                className="neon-card overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md group cursor-pointer"
                style={{ '--neon-color': item.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: '-80px' }} 
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
              >
                <span className="neon-line"></span><span className="neon-line"></span><span className="neon-line"></span><span className="neon-line"></span>
                <div className="aspect-video overflow-hidden rounded-xl bg-[#112240] relative z-10">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy" 
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" 
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <figcaption 
                  className="mt-4 text-sm font-semibold text-white relative z-10 transition-colors duration-300"
                  onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  {item.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </motion.main>
    </div>
  );
}