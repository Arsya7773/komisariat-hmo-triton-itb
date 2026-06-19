import React from 'react';
import { MapPin, Instagram, Linkedin } from 'lucide-react';
import { ASSET_PATHS } from '@/lib/assets';

// Custom SVG Icons untuk TikTok dan X (Twitter)
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

export const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/himpunan-mahasiswa-oseanografi-hmo-triton-itb/', 
      color: '#0077b5',
      icon: <Linkedin className="w-5 h-5" /> 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/komisariat.hmotritonitb/', 
      color: '#E1306C',
      icon: <Instagram className="w-5 h-5" /> 
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@komisariat.triton?_r=1&_t=ZS-97FTdYMmxPd', 
      color: '#FE2C55',
      icon: <TikTokIcon className="w-5 h-5" /> 
    },
    { 
      name: 'X', 
      url: 'https://x.com/hmotritonitb', 
      color: '#ffffff',
      icon: <XIcon className="w-4 h-4" /> 
    },
  ];

  return (
    <footer id="kontak" className="bg-[#030914] pt-20 pb-8 px-6 md:px-12 lg:px-20 relative overflow-hidden border-t border-cyan-900/30">
      
      <style>{`
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .footer-social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: var(--hover-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .footer-social-btn:hover {
          transform: translateY(-5px);
          border-color: var(--hover-color);
          box-shadow: 0 10px 20px -5px var(--hover-color);
        }
        .footer-social-btn:hover::before {
          opacity: 0.2;
        }
        .footer-social-icon {
          position: relative;
          z-index: 10;
          color: #94a3b8;
          transition: all 0.3s ease;
        }
        .footer-social-btn:hover .footer-social-icon {
          color: var(--hover-color);
          transform: scale(1.1);
        }
      `}</style>

      {/* Orbs Ambient di Footer */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* KIRI: Brand & Address (Ambil 7 Kolom) */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-2 rounded-2xl border border-white/10 shadow-lg shrink-0">
                <img 
                  src={ASSET_PATHS.logos.hmo} 
                  alt="HMO Logo" 
                  loading="lazy" 
                  decoding="async" 
                  width={56} height={56} 
                  className="h-14 w-auto object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
              <div>
                {/* Diubah jadi Komisariat HMO "TRITON" ITB */}
                <span className="block text-lg md:text-xl font-black text-white uppercase tracking-wide">Komisariat HMO "TRITON" ITB</span>
                <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-[0.2em] mt-1">Oceanography ITB Cirebon</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Wadah pemersatu mahasiswa Oseanografi ITB untuk mengembangkan potensi, kesejahteraan, dan aktualisasi diri dalam ruang lingkup kemahasiswaan dan keprofesian.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p>Gedung A, Kebonturi, Kec. Arjawinangun, Kabupaten Cirebon, Jawa Barat.</p>
              </div>
              {/* Blok Email Dihapus Sesuai Permintaan */}
            </div>
          </div>

          {/* KANAN: Social Media (Ambil 5 Kolom) */}
          <div className="md:col-span-5 flex flex-col md:items-end justify-center space-y-6">
            <div className="text-left md:text-right">
              <h3 className="text-white font-bold text-lg mb-2">Terhubung Bersama Kami</h3>
              <p className="text-slate-400 text-sm mb-6">Ikuti perkembangan terbaru dan kegiatan himpunan melalui kanal media sosial resmi kami.</p>
              
              <div className="flex flex-wrap md:justify-end gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-btn group"
                    style={{ '--hover-color': item.color } as React.CSSProperties}
                    aria-label={`Kunjungi ${item.name} HMO TRITON ITB`}
                  >
                    <div className="footer-social-icon">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BAWAH: Copyright Divider */}
        <div className="pt-8 border-t border-cyan-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Komisariat HMO "TRITON" ITB. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-bold text-slate-600 uppercase tracking-widest text-[10px]">
            <span>Ad Maiora Natus</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span>Jalesveva Jayamahe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};