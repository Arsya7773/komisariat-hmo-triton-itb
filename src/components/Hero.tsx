import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import DeepOceanAmbient from './DeepOceanAmbient';

export const Hero = () => {
  const [curve, setCurve] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const val = Math.max(150, 300 - window.scrollY / 3);
      setCurve(val);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] pb-40 pt-32 bg-[#0A192F] overflow-hidden flex items-center px-8 md:px-20">
      
      {/* CSS Animasi Aurora Khusus Teks (Aman, Tidak Bocor ke Background!) */}
      <style>{`
        .aurora-text {
          background: linear-gradient(
            to right,
            #22d3ee 0%,
            #ffffff 20%,
            #facc15 40%,
            #60a5fa 60%,
            #22d3ee 80%,
            #ffffff 100%
          );
          background-size: 300% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: aurora-flow 6s linear infinite;
          /* Sedikit bayangan cahaya di luar teks biar glowing */
          filter: drop-shadow(0px 0px 8px rgba(34,211,238,0.3));
        }

        @keyframes aurora-flow {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
      `}</style>

      {/* Animasi Paus & Gelembung Laut (Aman dari cat bocor) */}
      <DeepOceanAmbient />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            
            {/* Teks Judul dengan Class Aurora Baru */}
            <ScrollReveal animation="slide-left" className="relative z-10">
              <h1 className="aurora-text text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight italic font-serif">
                Komisariat HMO "TRITON" ITB
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={1} className="relative z-10">
              <p className="text-xl md:text-2xl text-cyan-300 font-light leading-relaxed mb-12 max-w-2xl">
                Mengembangkan Potensi, Meningkatkan Eksistensi. Memajukan Ilmu Kelautan Indonesia.
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap gap-4 mb-16 relative z-10">
              <ScrollReveal animation="pop" delay={2} className="">
                <a href="#profil" className="liquid-button px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-slate-950 transition-transform duration-300">
                  JELAJAHI TRITON
                </a>
              </ScrollReveal>
              <ScrollReveal animation="pop" delay={3} className="">
                <a href="#visi-misi" className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-white bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-300">
                  VISI & MISI
                </a>
              </ScrollReveal>
            </div>

            {/* Bagian Stats dengan Angka Emas Kokoh */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl relative z-10 pb-40">
              {[
                { val: '91', label: 'MASSA KOMISARIAT' },
                { val: '4', label: 'SUB-ORGANISASI' },
                { val: '2024', label: 'DIDIRIKAN' }
              ].map((stat, i) => (
                <ScrollReveal key={i} animation="slide-up" delay={i + 1} className="space-y-3">
                  <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] font-black drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    {stat.val}
                  </div>
                  <div className="text-sm md:text-base font-bold text-white uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <div className="w-12 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gelombang Putih di Bawah */}
      <svg viewBox="0 0 800 400" className="absolute bottom-0 left-0 w-full min-w-full h-32 md:h-48 drop-shadow-lg z-20" preserveAspectRatio="none">
        <path fill="#ffffff" d={`M 0 300 Q 400 ${curve} 800 300 L 800 400 L 0 400 Z`} style={{ transition: 'd 0.1s ease-out' }} />
      </svg>
    </section>
  );
};