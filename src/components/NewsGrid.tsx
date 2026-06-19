import React from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, ArrowRight } from 'lucide-react';
import { ASSET_PATHS } from '@/lib/assets';

export const NewsGrid = () => {
  const news = [
    { Ktitle: 'Apresiasi Lomba: Juara 1 Ocean Project 2024', date: 'SEP 20 2024', tag: 'Apresiasi', img: ASSET_PATHS.news.news1 },
    { title: 'Oceanography Student Summit: Global Perspectives', date: 'AUG 12 2024', tag: 'Kegiatan', img: ASSET_PATHS.news.news2 },
    { title: 'Coastal Care: Rehabilitasi Mangrove Pangandaran', date: 'JUL 05 2024', tag: 'Pengabdian', img: ASSET_PATHS.news.news3 },
    { title: 'Kunjungan Industri: BMKG & Dishidros TNI AL', date: 'JUN 22 2024', tag: 'Akademik', img: ASSET_PATHS.news.news4 },
  ];
  return (
    <section id="kabar" className="py-24 px-8 md:px-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-black italic text-navy-dark leading-none">
              KABAR <span className="text-accent-blue">HIMPUNAN</span>
            </h2>
            <p className="text-navy-dark/60 font-medium italic">Sorotan kegiatan dan pencapaian civitas Oseanografi ITB.</p>
          </div>
          <button className="flex items-center gap-2 text-gold font-bold border-b border-gold/30 pb-2 px-1 hover:border-gold transition-all transition-colors uppercase text-xs tracking-widest">
            Lihat Semua Berita <ArrowRight size={14} />
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {news.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid bg-navy-dark/5 rounded-3xl border border-navy-dark/10 overflow-hidden shadow-2xl backdrop-blur-sm group cursor-pointer hover:border-accent-blue/30 transition-all"
            >
              <div className="relative overflow-hidden aspect-auto">
                <img 
                  src={n.img} 
                  alt={n.title} 
                  loading="lazy" decoding="async"
                  className="w-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100 aspect-video object-cover" 
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.style.display = 'none'; }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-bold text-navy-dark uppercase tracking-widest ring-1 ring-navy-dark/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {n.tag}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold text-navy-dark/30 uppercase tracking-widest">
                  <Calendar size={14} />
                  {n.date}
                </div>
                <h3 className="text-2xl font-bold text-navy-dark leading-tight group-hover:text-gold transition-colors">
                  {n.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-navy-dark/10">
                  <span className="text-xs font-bold text-accent-blue flex items-center gap-2">Read More <ArrowRight size={14} /></span>
                  <Heart size={16} className="text-navy-dark/10 hover:text-red-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
