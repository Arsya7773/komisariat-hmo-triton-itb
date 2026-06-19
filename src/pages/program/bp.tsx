import React from 'react';
import { motion } from 'framer-motion';
import { ASSET_PATHS } from '@/lib/assets';
import ExternalLinksGrid from '../../components/ExternalLinksGrid';

const divisions = [
  'ketuaKomisariat.png',
  'kesekjenan.png',
  'internal.png',
  'eksternal.png',
  'akilprof.png',
  'PMSDA.png',
  'medkominfo.png',
];

const programs = [
  'Bedah GDK',
  'Tim Lomba',
  'Company Visit',
  'Apresiasi TRITON',
  'Hari Besar TRITON',
  'TRITON.COM',
  'Mentoring & Kelas',
  'Pengembangan Kurikulum',
];

const team = [
  { role: 'Ketua', name: 'Adrevi Chepa', photo: ASSET_PATHS.pengurus.adreviChepa },
  { role: 'Ketua Bidang', name: 'Nama Ketua Bidang', photo: '/assets/placeholder.jpg' },
  { role: 'Ketua Divisi', name: 'Nama Ketua Divisi', photo: '/assets/placeholder.jpg' },
  { role: 'Anggota', name: 'Member A', photo: '/assets/placeholder.jpg' },
  { role: 'Anggota', name: 'Member B', photo: '/assets/placeholder.jpg' },
];

const BPPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-28 pb-24 relative overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-[#112240]/40 border border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">Badan Eksekutif</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-6">
              BP Komisariat
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
              Badan Pengurus Komisariat adalah organ eksekutif yang menjalankan program kerja, mengoordinasikan
              divisi, dan memastikan kelancaran operasional HMO TRITON ITB.
            </p>
          </div>
        </motion.div>

        {/* Tautan Dokumen Eksternal (Google Sheets, dll) -> Disisipin ke sini biar aman */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <ExternalLinksGrid />
        </motion.div>

        {/* Logos Showcase */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="py-8 px-6 sm:px-10 backdrop-blur-xl bg-[#112240]/40 border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-black text-white mb-8">Struktur Divisi</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {divisions.map((d) => (
                <div key={d} className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-2xl overflow-hidden p-3 bg-[#071026] border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer">
                  <img
                    src={ASSET_PATHS.divisions.getPath(d)}
                    alt={d}
                    loading="lazy" decoding="async"
                    width={128} height={128}
                    className="object-contain h-full w-full opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/placeholder.jpg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Flagship Programs */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="py-8 px-6 sm:px-10 backdrop-blur-xl bg-[#112240]/40 border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-black text-white mb-8">Program Unggulan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((p) => (
                <div
                  key={p}
                  className="group rounded-2xl p-6 bg-[#071026]/80 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h4 className="font-bold text-lg text-white mb-3">{p}</h4>
                  <p className="text-sm text-slate-400">Deskripsi singkat mengenai program kerja {p} dan dampaknya bagi himpunan.</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Structure */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="py-8 px-6 sm:px-10 backdrop-blur-xl bg-[#112240]/40 border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-black text-white mb-8">Pengurus Inti</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {team.map((m, idx) => (
                <div key={idx} className="group text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden bg-[#071026] border-2 border-white/10 group-hover:border-yellow-400 transition-colors duration-300 mb-4 shadow-lg">
                    <img 
                      src={m.photo} 
                      alt={m.name} 
                      loading="lazy" decoding="async"
                      width={96} height={96}
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/placeholder.jpg'; }} 
                    />
                  </div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{m.name}</div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-yellow-500 mt-1">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BPPage;