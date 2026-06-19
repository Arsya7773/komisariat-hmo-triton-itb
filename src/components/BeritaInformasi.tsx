import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const realNews = [
  {
    id: 1,
    title: 'Bincang Alumni "BADAI": Arah Inspirasi Masa Depan',
    desc: 'Program kerja sinergis dari Bidang Akilprof BP Komisariat yang menghadirkan Kak Andaru Katri Lasrindy (Oseanografi ITB 2009) untuk berbagi insight berharga seputar Coastal Engineering dan pengalaman beasiswa LPDP kepada massa himpunan.',
    date: '24 Mei 2026',
    tag: 'AKILPROF',
    image: './assets/news/badai.jpg'
  },
  {
    id: 2,
    title: 'Penghargaan Best Booth ITB Fair Cirebon Chapter 2026',
    desc: 'Sebuah pencapaian luar biasa! Melalui koordinasi strategis Bidang Eksternal BP Komisariat, HMO "TRITON" ITB berhasil meraih penghargaan Best Booth, membuktikan eksistensi nyata himpunan di lingkungan multikampus Cirebon.',
    date: 'Mei 2026',
    tag: 'EKSTERNAL',
    image: './assets/news/best-booth.jpg'
  },
  {
    id: 3,
    title: 'Apresiasi Massa: Selamat Ulang Tahun Dieva!',
    desc: 'Sebagai wujud nyata program kerja Bidang Internal dalam menjaga asas kekeluargaan, segenap pengurus BP Komisariat mengucapkan selamat bertambah usia untuk Dieva Riswansa Putra (TRITON 24-082). Teruslah berkembang dan berprestasi!',
    date: '27 Mei 2026',
    tag: 'INTERNAL',
    image: './assets/news/ultah.jpg'
  }
];

// Varian Animasi Swipe Kiri-Kanan (Tetap dipertahankan)
const sliderVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    };
  }
};

export default function BeritaInformasi() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % realNews.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-slide effect 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    // Background diubah menjadi putih bersih
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <ScrollReveal animation="slide-right">
            {/* Teks diubah menjadi Navy Gelap agar terbaca di BG Putih */}
            <h2 className="text-4xl md:text-5xl font-black text-[#040D1A] tracking-tight">
              Berita & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Informasi</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-500 rounded-full mt-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-left" delay={1}>
            <a href="/kabar/berita" className="hidden md:flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-bold tracking-wider uppercase text-sm transition-colors group">
              Lihat Semua Berita 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
            </a>
          </ScrollReveal>
        </div>

        {/* Single Slider Container */}
        <ScrollReveal animation="bounce-down" delay={2}>
          {/* Kartu slider diubah menjadi putih dengan shadow elegan */}
          <div className="relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-[0_15px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col group perspective-[1000px]">
            
            {/* Area Gambar (Tetap Gelap agar kontras fotonya cinematic) */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-900 flex items-center justify-center cursor-grab active:cursor-grabbing">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    rotateY: { duration: 0.6 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) {
                      paginate(1);
                    } else if (swipe > 10000) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {/* Blurred Background */}
                  <img 
                    src={realNews[imageIndex].image} 
                    alt="" 
                    aria-hidden="true"
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl scale-125 pointer-events-none" 
                  />
                  {/* Actual Main Image */}
                  <img 
                    src={realNews[imageIndex].image} 
                    alt={realNews[imageIndex].title} 
                    loading="eager" decoding="sync"
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl pointer-events-none" 
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows (Disesuaikan untuk tema putih) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => paginate(-1)} className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[#040D1A] hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-lg">
                  <ChevronLeft size={24}/>
                </button>
                <button onClick={() => paginate(1)} className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[#040D1A] hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-lg">
                  <ChevronRight size={24}/>
                </button>
              </div>
              
              {/* Instruksi Swipe */}
              <div className="absolute bottom-4 left-0 w-full text-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                  Geser untuk melihat foto lain
                </span>
              </div>
            </div>

            {/* Area Teks Konten (Background Putih) */}
            <div className="relative p-8 md:p-12 bg-white z-20 min-h-[250px] border-t border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${page}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {/* Tag dengan gaya desain light-mode (soft background, text color jelas) */}
                    <span className="bg-cyan-50 text-cyan-600 border border-cyan-200 px-3 py-1 text-xs font-bold uppercase rounded-md tracking-wider">
                      {realNews[imageIndex].tag}
                    </span>
                    <span className="text-slate-500 text-sm font-semibold">
                      {realNews[imageIndex].date}
                    </span>
                  </div>
                  
                  {/* Judul Teks Navy Gelap */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#040D1A] mb-4 leading-tight hover:text-cyan-600 transition-colors duration-300 cursor-pointer">
                    {realNews[imageIndex].title}
                  </h3>
                  
                  {/* Deskripsi Teks Abu-abu */}
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {realNews[imageIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </ScrollReveal>

        {/* Mobile View More Button */}
        <div className="mt-10 text-center md:hidden">
          <a href="/kabar/berita" className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase text-sm group">
            Lihat Semua Berita <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
          </a>
        </div>

      </div>
    </section>
  );
}