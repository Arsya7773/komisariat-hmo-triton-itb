import React, { useState, useEffect } from 'react';

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
      <div className="wave-container">
        <span className="wave-shape wave-1" />
        <span className="wave-shape wave-2" />
        <span className="wave-shape wave-3" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tight italic font-serif relative z-10">
              HMO TRITON ITB
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-light leading-relaxed mb-12 max-w-2xl relative z-10">
              Mengembangkan Potensi, Meningkatkan Eksistensi. Memajukan Ilmu Kelautan Indonesia.
            </p>
            <div className="flex flex-wrap gap-4 mb-16 relative z-10">
              <a href="#profil" className="liquid-button px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-slate-950 transition-transform duration-300">
                JELAJAHI TRITON
              </a>
              <a href="#visi-misi" className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-white bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-300">
                VISI & MISI
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl relative z-10 pb-40">
              {[
                { val: '350', label: 'MASSA HMO' },
                { val: '7', label: 'BIDANG KERJA' },
                { val: '2008', label: 'DIDIRIKAN' }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] font-black">{stat.val}</div>
                  <div className="text-sm uppercase text-white/60 tracking-[0.35em] leading-none">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 800 400" className="absolute bottom-0 left-0 w-full min-w-full h-32 md:h-48 drop-shadow-lg z-20" preserveAspectRatio="none">
        <path fill="#ffffff" d={`M 0 300 Q 400 ${curve} 800 300 L 800 400 L 0 400 Z`} style={{ transition: 'd 0.1s ease-out' }} />
      </svg>
    </section>
  );
};
