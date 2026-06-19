import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Send,
  Instagram,
  Linkedin,
  PhoneCall,
} from 'lucide-react';

// Custom SVG Icons untuk TikTok dan X
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" className={className}>
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

// Komponen Background Partikel CSS Ringan
const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 4 + 2; 
      const left = Math.random() * 100; 
      const duration = Math.random() * 20 + 15; 
      
      const delay = -(Math.random() * duration); 
      
      const isGold = Math.random() > 0.8; 
      const color = isGold ? '#facc15' : '#22d3ee';
      const drift = (Math.random() - 0.5) * 40; 
      
      return (
        <div
          key={i}
          className="absolute rounded-full mix-blend-screen opacity-0"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}vw`,
            bottom: '-10vh',
            backgroundColor: color,
            boxShadow: `0 0 ${size * 3}px ${color}, 0 0 ${size}px #fff`,
            animation: `float-up ${duration}s linear ${delay}s infinite`,
            ['--drift' as string]: `${drift}vw`,
          }}
        />
      );
    });
  }, []);

  return <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">{particles}</div>;
};

export default function Kontak() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/himpunan-mahasiswa-oseanografi-hmo-triton-itb/', 
      color: '#0077b5',
      icon: <Linkedin className="w-10 h-10" /> 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/komisariat.hmotritonitb/', 
      color: '#E1306C',
      icon: <Instagram className="w-10 h-10" /> 
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@komisariat.triton?_r=1&_t=ZS-97FTdYMmxPd', 
      color: '#FE2C55',
      icon: <TikTokIcon className="w-9 h-9" /> 
    },
    { 
      name: 'X', 
      url: 'https://x.com/hmotritonitb', 
      color: '#000000',
      icon: <XIcon className="w-9 h-9" /> 
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A192F] text-white pt-32 pb-24 overflow-hidden relative">
      
      <style>{`
        /* ================= MARQUEE LOOP ANIMATION ================= */
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee-scroll 15s linear infinite;
        }

        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ================= PURE CSS PARTICLE ANIMATION ================= */
        @keyframes float-up {
          0% { transform: translate3d(0, 0, 0) scale(0.5); opacity: 0; }
          10% { opacity: 0.8; transform: translate3d(calc(var(--drift) * 0.1), -10vh, 0) scale(1); }
          90% { opacity: 0.8; }
          100% { transform: translate3d(var(--drift), -120vh, 0) scale(0.5); opacity: 0; }
        }

        /* ================= CYBER GRID BACKGROUND ================= */
        .cyber-grid {
          position: absolute;
          inset: 0;
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          z-index: 0;
        }

        /* ================= STYLISH SOCIAL BUTTONS ================= */
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          width: 90px;
          height: 90px;
          position: relative;
          overflow: hidden;
          border-radius: 28%;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .social-btn::before {
          content: '';
          width: 120%;
          height: 120%;
          position: absolute;
          transform: rotate(45deg);
          top: 90%;
          left: -110%;
          background-color: #1e3a8a;
          transition: all 0.4s cubic-bezier(0.310, -0.105, 0.430, 1.590);
        }

        .social-btn:hover::before {
          top: -10%;
          left: -10%;
        }

        .social-icon {
          position: relative;
          z-index: 10;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.310, -0.105, 0.430, 1.590);
        }

        .social-btn:hover .social-icon {
          transform: scale(1.15);
          color: #facc15 !important;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="cyber-grid"></div>
        <div className="absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-8 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-yellow-400/5 blur-[100px]" />
        
        <ParticleBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 mb-8"
        >
          <div className="max-w-4xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <PhoneCall className="h-4 w-4 text-cyan-400" />
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-bold">Informasi Kontak</p>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] mb-4">
              Hubungi Kami
            </h1>
            
            <div className="w-full max-w-2xl marquee-container text-yellow-400 text-sm md:text-base uppercase tracking-[0.25em] font-bold mt-2">
              <div className="marquee-content">
                INFORMASI LOKASI SEKRETARIAT DAN KANAL KOMUNIKASI HIMPUNAN &nbsp; • &nbsp; INFORMASI LOKASI SEKRETARIAT DAN KANAL KOMUNIKASI HIMPUNAN &nbsp; • &nbsp; 
              </div>
            </div>
          </div>
        </motion.section>

        {/* FORM: HUBUNGI KAMI */}
        <motion.section
          id="hubungi-kami"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="h-full bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] group">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Tinggalkan Pesan</p>
                <h2 className="text-3xl font-black text-white">Kirim Pesan</h2>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-[#0A192F] transition-all duration-500">
                <Send className="h-5 w-5" />
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Nama Lengkap
                  <input
                    type="text"
                    placeholder="Masukkan nama"
                    className="bg-[#071026] border border-slate-700/50 rounded-xl w-full p-4 text-white font-mono text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all shadow-inner"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Alamat Email
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="bg-[#071026] border border-slate-700/50 rounded-xl w-full p-4 text-white font-mono text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all shadow-inner"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                Subjek Pesan
                <input
                  type="text"
                  placeholder="Tujuan pesan"
                  className="bg-[#071026] border border-slate-700/50 rounded-xl w-full p-4 text-white font-mono text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all shadow-inner"
                />
              </label>

              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                Pesan
                <textarea
                  rows={5}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  className="bg-[#071026] border border-slate-700/50 rounded-xl w-full p-4 text-white font-mono text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none shadow-inner"
                />
              </label>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)] hover:from-cyan-400 hover:to-blue-500 active:scale-95"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </motion.section>

        {/* PETA LOKASI */}
        <motion.section
          id="lokasi"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-8 relative"
        >
          <div className="flex-1 bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-cyan-500/30 relative overflow-hidden z-10">
            <div className="flex items-center gap-3 mb-6 relative z-20">
              <div className="rounded-xl bg-yellow-400/10 p-3 text-yellow-400 border border-yellow-400/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-1">Lokasi Sekretariat</p>
                <h3 className="text-xl font-black text-white">Peta Lokasi</h3>
              </div>
            </div>

            {/* PETA SATELIT IFRAME YANG SUDAH DIPERBAIKI */}
            <div className="w-full aspect-square sm:aspect-video lg:aspect-square bg-[#071026] rounded-2xl border border-cyan-900/50 relative overflow-hidden mb-6 shadow-inner group z-20">
              <iframe 
                src="https://maps.google.com/maps?q=ITB%20Kampus%20Cirebon%20Arjawinangun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }} 
                allowFullScreen 
                aria-hidden="false" 
                tabIndex={0}
                title="Lokasi ITB Kampus Arjawinangun Cirebon"
                className="transition-transform duration-700 group-hover:scale-105"
              ></iframe>
              <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/5 p-5 relative z-20 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-cyan-400 mb-2">Alamat Lengkap</p>
              <p className="text-sm leading-6 text-slate-300">
                Sekretariat Komisariat HMO "TRITON" ITB, Gedung A, Kebonturi, Kec. Arjawinangun, Kabupaten Cirebon, Jawa Barat.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MEDIA SOSIAL */}
        <motion.section
          id="media-sosial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12"
        >
          <div className="bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
            
            <div className="text-center mb-16">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Kanal Resmi</p>
              <h3 className="text-3xl font-black text-white">Media Sosial & Jaringan</h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 pb-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center"
                >
                  <div className="social-btn">
                    <div className="social-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                  </div>

                  <span className="absolute -bottom-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm font-black tracking-widest text-yellow-400">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </motion.section>

      </div>
    </main>
  );
}