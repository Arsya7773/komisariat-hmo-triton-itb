import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const VisionMission = () => {
  const missions = [
    'Memperkuat Daya Biru sebagai fondasi untuk Mengembangkan Potensi Anggota Komisariat HMO "TRITON" ITB.',
    'Meningkatkan Eksistensi dan Memberikan Kontribusi yang Nyata bagi Lingkungan serta Masyarakat.',
    'Mewujudkan HMO TRITON ITB yang sinergis dan kolaboratif antar elemen himpunan.',
    'Mengembangkan potensi anggota melalui wadah aspirasi yang inovatif dan terarah.',
    'Membangun lingkungan himpunan yang inklusif, apresiatif, dan berorientasi pada masa depan.',
    'Meningkatkan kolaborasi eksternal untuk memperluas jaringan dan dampak himpunan.',
    'Mengoptimalkan media dan komunikasi untuk transparansi administrasi serta cashflow.'
  ];

  return (
    <section id="visi-misi" className="py-24 px-8 md:px-20 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-bold tracking-widest uppercase text-xs">Arah Masa Depan</span>
              <h2 className="text-6xl font-black italic text-white leading-none">
                VISI <br /> <span className="text-accent-blue">DAYA BIRU</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10"
            >
              <p className="text-2xl md:text-3xl text-white/90 font-light italic leading-relaxed">
                “Memperkuat Daya Biru sebagai fondasi untuk Mengembangkan Potensi Anggota Komisariat HMO “TRITON” ITB, Meningkatkan Eksistensi, dan Memberikan Kontribusi yang Nyata bagi Lingkungan serta Masyarakat.”
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
               Misi Utama <div className="flex-1 h-px bg-white/10" />
            </h3>
            <div className="grid gap-4">
              {missions.map((mission, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-accent-blue font-bold text-lg">{i + 1}.</span>
                  <p className="text-white/80 leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
