import React, { useMemo, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Sejarah = () => {
  const shootingStars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const startX = Math.random() * 100;
      const endX = startX + (20 + Math.random() * 20);
      
      return {
        id: i,
        startX: startX,
        endX: endX,
        delay: Math.random() * 12 + 's',
        duration: 3 + Math.random() * 4 + 's',
        size: 3 + Math.random() * 4 + 'px',
        isGold: Math.random() > 0.8, 
      };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    const marks = document.querySelectorAll('mark.scroll-highlight, mark.scroll-highlight-cyan');
    marks.forEach((mark) => observer.observe(mark));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>

      <style>{`
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

        mark.scroll-highlight, mark.scroll-highlight-cyan {
          border-radius: 4px;
          padding: 2px 4px;
          color: inherit;
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 1.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        mark.scroll-highlight { background-image: linear-gradient(to right, rgba(250, 204, 21, 0.4) 50%, transparent 50%); }
        mark.scroll-highlight-cyan { background-image: linear-gradient(to right, rgba(34, 211, 238, 0.4) 50%, transparent 50%); }
        mark.is-visible { background-position: 0 0 !important; }

        .blob-card {
          position: relative;
          z-index: 1;
          background-color: #ffffff;
          transition: all 0.5s;
          border-radius: 1.5rem; 
          overflow: hidden;
        }
        .blob-card__inner {
          z-index: -1;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
        .blob-card__blobs {
          position: relative;
          display: block;
          height: 100%;
          filter: url('#goo');
        }
        .blob-card__blob {
          position: absolute;
          top: 0;
          width: 38%; 
          height: 100%;
          border-radius: 100%;
          transform: translate3d(0, 150%, 0) scale(1.5);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .blob-card__blob:nth-child(1) { left: -15%; transition-delay: 0s; }
        .blob-card__blob:nth-child(2) { left: 15%; transition-delay: 0.08s; }
        .blob-card__blob:nth-child(3) { left: 45%; transition-delay: 0.16s; }
        .blob-card__blob:nth-child(4) { left: 75%; transition-delay: 0.24s; }
        .blob-card:hover .blob-card__blob { transform: translateZ(0) scale(1.8); }
        .blob-yellow .blob-card__blob { background-color: #facc15; }
        .blob-cyan .blob-card__blob { background-color: #22d3ee; }

        .glow-on-hover-btn {
          position: relative;
          z-index: 0;
          border-radius: 9999px;
          background: #0A192F;
          cursor: pointer;
          border: 1px solid rgba(250, 204, 21, 0.4);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .glow-on-hover-btn:before {
          content: '';
          background: linear-gradient(45deg, #22d3ee, #facc15, #ffffff, #22d3ee, #facc15);
          position: absolute;
          top: -3px;
          left: -3px;
          background-size: 400%;
          z-index: -1;
          filter: blur(6px);
          width: calc(100% + 6px);
          height: calc(100% + 6px);
          animation: glowing 20s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          border-radius: 9999px;
        }
        .glow-on-hover-btn:after {
          z-index: -1;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #0A192F;
          left: 0;
          top: 0;
          border-radius: 9999px;
        }
        .glow-on-hover-btn:hover {
          border-color: transparent;
          transform: translateY(-4px);
        }
        .glow-on-hover-btn:hover:before { opacity: 1; }
        .glow-on-hover-btn:active:after { background: transparent; }
        @keyframes glowing {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `}</style>

      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full min-h-[80vh] bg-[#0A192F] overflow-hidden flex items-center justify-center pt-20 select-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="starfall-container">
          {shootingStars.map((star) => (
            <div
              key={star.id}
              className={`falling-star ${star.isGold ? 'star-gold text-yellow-400' : 'star-cyan text-cyan-400'}`}
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
          <h1 className="text-7xl md:text-8xl font-black mb-4 font-serif leading-tight ocean-aurora-text uppercase tracking-tight">
            Sejarah & Filosofi
          </h1>
          
          <div className="mt-4 flex justify-center w-full px-2">
            <div className="relative inline-block text-left text-sm sm:text-base md:text-2xl font-light">
              <span className="opacity-0 pointer-events-none block">
                Latar Belakang, Tinjauan Ideal, dan Kebutuhan Himpunan
              </span>
              <span className="absolute top-0 left-0 h-full ocean-typing text-cyan-300">
                Latar Belakang, Tinjauan Ideal, dan Kebutuhan Himpunan
              </span>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </section>

      {/* ========== VERTICAL TIMELINE SECTION ========== */}
      <section className="w-full bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-600">Latar Belakang & Definisi</span>
            </h2>
            <div className="mb-16 flex justify-start w-full">
              <div className="relative inline-block text-left text-gray-500 text-lg">
                <span className="opacity-0 pointer-events-none block">Fondasi dan struktur organisasi himpunan</span>
                <span className="absolute top-0 left-0 h-full ocean-typing !border-yellow-400">Fondasi dan struktur organisasi himpunan</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-cyan-500 to-transparent"></div>

            <div className="space-y-12">
              <motion.div 
                className="relative pl-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="absolute left-0 top-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50 animate-pulse z-10 border-4 border-yellow-500">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-cyan-50 rounded-2xl p-8 border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <span className="text-yellow-600">Latar Belakang</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Himpunan Mahasiswa Oseanografi "TRITON" ITB merupakan wadah bagi mahasiswa untuk <mark className="scroll-highlight bg-transparent">mengembangkan potensi diri</mark> di bidang keilmuan dan mempererat hubungan antar massa. Keberadaan Komisariat berkontribusi dalam <mark className="scroll-highlight-cyan bg-transparent">pembentukan karakter dan penguatan struktur internal</mark>. Diperlukan <mark className="scroll-highlight bg-transparent">perencanaan yang jelas dan terarah</mark> agar setiap kegiatan mampu menjawab tantangan dan kebutuhan massa secara optimal.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="relative pl-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="absolute left-0 top-2 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse z-10 border-4 border-cyan-600">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-cyan-500" />
                    <span className="text-cyan-600">Definisi BPAK</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Badan Perwakilan Anggota Komisariat (BPAK) HMO 'TRITON' ITB dipimpin oleh Ketua BPA yang bertanggung jawab agar badan ini berjalan sesuai fungsinya sebagai <mark className="scroll-highlight-cyan bg-transparent">lembaga perwakilan yang berkedudukan tinggi</mark>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENTO GRID SECTION ========== */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-600">Tinjauan Ideal (Kabinet Daya Biru)</span>
            </h2>
            <div className="mb-16 flex justify-start w-full">
              <div className="relative inline-block text-left text-gray-500 text-lg">
                <span className="opacity-0 pointer-events-none block">Visi dan misi berdasarkan peraturan dan ketentuan</span>
                <span className="absolute top-0 left-0 h-full ocean-typing !border-cyan-500">Visi dan misi berdasarkan peraturan dan ketentuan</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            <motion.div 
              className="blob-card blob-yellow md:col-span-2 border-2 border-yellow-400 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
            >
              <div className="blob-card__inner">
                <div className="blob-card__blobs">
                  <div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-slate-900 transition-colors duration-500 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-slate-900 transition-colors duration-500"></span>
                UU No. 12 Tahun 2012
              </h3>
              <p className="text-gray-600 group-hover:text-slate-800 transition-colors duration-500 leading-relaxed text-lg relative z-10">
                Pengembangan potensi kreatif, kepemimpinan, keprofesian, dan pengabdian masyarakat yang inovatif.
              </p>
            </motion.div>

            <motion.div 
              className="blob-card blob-cyan border-2 border-cyan-400 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
            >
              <div className="blob-card__inner">
                <div className="blob-card__blobs">
                  <div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-900 transition-colors duration-500 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-slate-900 transition-colors duration-500"></span>
                PP No. 65 Tahun 2013
              </h3>
              <p className="text-gray-600 group-hover:text-slate-800 transition-colors duration-500 leading-relaxed text-sm relative z-10">
                Wadah untuk mencerdaskan kehidupan bangsa melalui Tridharma Perguruan Tinggi.
              </p>
            </motion.div>

            <motion.div 
              className="blob-card blob-yellow border-2 border-yellow-400 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
            >
              <div className="blob-card__inner">
                <div className="blob-card__blobs">
                  <div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-900 transition-colors duration-500 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-slate-900 transition-colors duration-500"></span>
                Capaian Prodi Oseanografi
              </h3>
              <p className="text-gray-600 group-hover:text-slate-800 transition-colors duration-500 leading-relaxed text-sm relative z-10">
                Membentuk profesionalitas, integritas moral, kemampuan analisis, inovasi, dan komitmen pembelajar sepanjang hayat.
              </p>
            </motion.div>

            <motion.div 
              className="blob-card blob-cyan border-2 border-cyan-400 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
            >
              <div className="blob-card__inner">
                <div className="blob-card__blobs">
                  <div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-900 transition-colors duration-500 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-slate-900 transition-colors duration-500"></span>
                Konsepsi KM ITB
              </h3>
              <p className="text-gray-600 group-hover:text-slate-800 transition-colors duration-500 leading-relaxed text-sm relative z-10">
                Membentuk karakter mandiri, kekeluargaan, demokratis, serta memenuhi kebutuhan pendidikan, kesejahteraan, dan aktualisasi diri.
              </p>
            </motion.div>

            <motion.div 
              className="blob-card blob-yellow md:col-span-2 border-2 border-yellow-400 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}
            >
              <div className="blob-card__inner">
                <div className="blob-card__blobs">
                  <div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div><div className="blob-card__blob"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-slate-900 transition-colors duration-500 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-slate-900 transition-colors duration-500"></span>
                Dokumen HMO TRITON
              </h3>
              <p className="text-gray-600 group-hover:text-slate-800 transition-colors duration-500 leading-relaxed text-lg relative z-10">
                Kaderisasi berjenjang yang memupuk rasa empati dan pemenuhan tanggung jawab administratif/keuangan terpusat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== INTERACTIVE TAGS SECTION ========== */}
      <section className="w-full bg-[#0A192F] py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-2 font-serif flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Analisis Kebutuhan Pokok
            </h2>
            <div className="mb-16 flex justify-start w-full">
              <div className="relative inline-block text-left text-yellow-400 text-lg">
                <span className="opacity-0 pointer-events-none block">Prioritas strategis untuk pengembangan himpunan</span>
                <span className="absolute top-0 left-0 h-full ocean-typing !border-yellow-400">Prioritas strategis untuk pengembangan himpunan</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              'Kaderisasi Efektif', 'Pengarsipan Akademik', 'Pengabdian Masyarakat',
              'Lingkungan Inklusif', 'Relasi Eksternal', 'Optimalisasi Medkominfo', 'Transparansi Keuangan'
            ].map((need, idx) => (
              <motion.div
                key={idx}
                className="glow-on-hover-btn px-8 py-4 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 text-yellow-400 font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                  {need}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};