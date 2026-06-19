import React from 'react';
import { motion } from 'framer-motion';

const programKerja = [
  { id: 1, title: 'Bedah GDK', pic: 'PMSDA', desc: 'Mengkaji serta mengevaluasi dokumen Grand Design Kaderisasi untuk memastikan dokumen tersebut relevan dengan keadaan kondisi aktual.', icon: '📘' },
  { id: 2, title: 'Forum GDK, Senator, dan Sekolah Stakeholder', pic: 'PSDA & Senator', desc: 'Pencerdasan mengenai Grand Design Kaderisasi dan Ruang Lingkup Kemahasiswaan di KM ITB, serta wadah dukungan bagi calon ketua kepanitiaan/organisasi.', icon: '🏛️' },
  { id: 3, title: 'Tim Lomba', pic: 'Akademik & Keilmuan', desc: 'Membimbing anggota dalam perlombaan meliputi pembentukan tim, pelatihan bidang lomba, serta kolaborasi dengan pihak prodi maupun fakultas.', icon: '🏆' },
  { id: 4, title: 'Company Visit', pic: 'Ekstrakampus & Keprofesian', desc: 'Kunjungan ke perusahaan atau lembaga yang linear di bidang oseanografi untuk meningkatkan wawasan karier sekaligus menjalin hubungan baik.', icon: '🏢' },
  { id: 5, title: 'POSEIDON', pic: 'Poseidon', desc: 'Perwujudan Tri Dharma Perguruan Tinggi berupa pengabdian masyarakat yang solutif, berkelanjutan, dan berdampak nyata bagi lingkungan.', icon: '🌊' },
  { id: 6, title: 'Apresiasi TRITON', pic: 'MSDA & Internal', desc: 'Penghargaan atas kontribusi anggota melalui "TRITON Bercerita" (postingan pengalaman) dan "TRITON Of The Month" (anggota teraktif).', icon: '⭐' },
  { id: 7, title: 'Studi Banding', pic: 'Eksternal', desc: 'Kolaborasi dan benchmarking dengan HMPS di ITB maupun di luar lingkup ITB untuk bertukar keilmuan dan meningkatkan eksistensi himpunan.', icon: '🤝' },
  { id: 8, title: 'Get to Know Alumni', pic: 'Eksternal', desc: 'Konten edukatif interaktif di media sosial yang mengupas perjalanan karier dan pengalaman profesional dari alumni Oseanografi.', icon: '🎓' },
  { id: 9, title: 'Hari Besar TRITON', pic: 'Internal & Medkominfo', desc: 'Membangkitkan semangat berhimpun melalui TRITON Berjahim, Raboedaya, Halloween, dan hari raya keagamaan yang dikemas menarik.', icon: '🎉' },
  { id: 10, title: 'TRITON.COM', pic: 'Sekjen & Medkominfo', desc: 'Program website resmi Komisariat HMO "TRITON" ITB yang berisikan profil himpunan, keilmuan oseanografi, kegiatan, serta majalah digital.', icon: '🌐' },
  { id: 11, title: 'TRITON Recap', pic: 'Pub. & Dokumentasi', desc: 'Rekapitulasi visual kegiatan himpunan yang dipublikasikan secara berkala di media sosial untuk transparansi dan exposure.', icon: '📸' },
];

export default function ProgramKerja(): JSX.Element {
  return (
    <section className="relative bg-[#0A192F] py-16 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-80px] top-16 w-56 h-56 rounded-full bg-yellow-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-yellow-400 tracking-widest uppercase text-sm mb-3">PROGRAM KERJA UNGGULAN</p>
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Program Kerja Unggulan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programKerja.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-xl bg-[#112240]/80 border border-cyan-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1A365D]/80 hover:border-cyan-400/50"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 text-2xl">{p.icon}</div>
                <div className="rounded-full px-3 py-1 text-xs font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-800">{p.pic}</div>
              </div>

              <h3 className="mt-4 text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">{p.title}</h3>

              <p className="mt-2 text-slate-400 text-sm">{p.desc}</p>

              <div className="absolute bottom-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
