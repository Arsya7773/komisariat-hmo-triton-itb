/**
 * Organogram Main Component
 * Complete organizational structure page with hero, flowchart, and legend
 */

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Ship, ChevronLeft, ChevronRight } from 'lucide-react';
import OrgNode from './OrgNode';
import ConnectingLines from './ConnectingLines';
import { orgChartData } from '@/data/organogram';

export const Organogram = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
      {/* ========== HERO SECTION (FIXED TITLE OVERLAP) ========== */}
      <section className="relative w-full min-h-[80vh] bg-[#0A192F] overflow-hidden flex items-center justify-center pt-32 pb-12">
        {/* Animated Ship SVG - BEHIND TEXT */}
        <svg
          className="text-white w-48 h-48 absolute top-1/2 -translate-y-1/2 z-20 blend-exclusion animate-sail"
          viewBox="0 0 100 100"
          fill="white"
        >
          <path d="M 20 60 L 30 80 L 70 80 L 80 60 Z" fill="white" />
          <rect x="35" y="45" width="30" height="20" fill="white" rx="3" />
          <line x1="50" y1="45" x2="50" y2="15" stroke="white" strokeWidth="2" />
          <polygon points="50,20 50,50 75,45" fill="white" opacity="0.8" />
        </svg>

        {/* Hero Content - ON TOP */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-serif leading-tight drop-shadow-lg">
            Struktur Organisasi & Arahan Kerja
          </h1>
          <p className="text-lg md:text-xl text-cyan-300 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Alur Komando, Koordinasi, dan Pengawasan
          </p>

          {/* Animated dots */}
          <div className="mt-8 flex justify-center gap-3">
            <motion.div
              className="w-3 h-3 bg-yellow-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-yellow-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </section>
      {/* ========== INFORMATION SECTION ========== */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500 font-semibold mb-3">
              Sistem Kerja dan Koordinasi
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Sistem Kerja dan Koordinasi
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: 'Ketua → Kesekjenan → Semua Bidang',
                description:
                  'Ketua memberikan arahan langsung kepada seluruh bidang. Kesekjenan berfungsi memastikan semua bidang berjalan sesuai rancangan/timeline.',
              },
              {
                title: 'Bidang → Divisi → Anggota',
                description:
                  'Setiap bidang membawahi divisi-divisi yang lebih spesifik. Divisi menjalankan program kerja dengan melibatkan anggota/staff.',
              },
              {
                title: 'Koordinasi Antar Bidang',
                description:
                  'Jika ada kegiatan yang melibatkan lebih dari satu bidang, maka setiap bidang yang berkaitan akan berkoordinasi satu sama lain.',
              },
              {
                title: 'Komunikasi dengan pihak Eksternal',
                description:
                  'Bidang Eksternal bertanggung jawab atas komunikasi dalam menjalin hubungan di luar organisasi, tetapi tetap berkoordinasi dengan Ketua dan Kesekjenan.',
              },
              {
                title: 'Pengawasan Khusus (BPAK & POSEIDON)',
                description:
                  'BPAK (Badan Perwakilan Anggota Komisariat) bertugas mengawasi kinerja Ketua Komisariat. Sementara itu, Ketua Komisariat melakukan pengawasan langsung terhadap tim POSEIDON (Pengabdian Masyarakat).',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========== FLOWCHART SECTION ========== */}
      <section className="w-full bg-[#0A192F] py-16 relative border-y border-cyan-900/30 overflow-x-auto">
        {/* Section Header */}
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Alur Komando{' '}
            <span className="text-yellow-400">& Koordinasi</span>
          </h2>
          <p className="text-cyan-300 text-lg">
            Hierarki dan hubungan antar bidang organisasi
          </p>
        </motion.div>

        {/* Scrollable Flowchart Container */}
        <div className="relative w-full px-4">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-yellow-400/20 hover:bg-yellow-400/40 border border-yellow-400 text-yellow-400 p-2 rounded-lg backdrop-blur-md transition-all"
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-yellow-400/20 hover:bg-yellow-400/40 border border-yellow-400 text-yellow-400 p-2 rounded-lg backdrop-blur-md transition-all"
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          {/* Horizontal Scrollable Canvas */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto overflow-y-hidden no-scrollbar"
          >
            <div
              className="relative min-w-[1800px] h-[900px] px-8"
            >
              {/* SVG Connecting Lines Layer */}
              <ConnectingLines
                width={orgChartData.svgDimensions.width}
                height={orgChartData.svgDimensions.height}
              />

              {/* Organizational Nodes Layer */}
              <div className="relative w-full h-full">
                {orgChartData.nodes.map((node) => (
                  <OrgNode
                    key={node.id}
                    node={node}
                    isKetua={node.id === 'ketua-komisariat'}
                  />
                ))}
              </div>

              {/* Legend Box */}
              <motion.div
                className="absolute bottom-8 right-8 z-[40] bg-[#0A192F]/80 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-bold text-yellow-400 mb-4 uppercase tracking-widest">
                  Jenis Garis
                </h3>

                {/* Command Line */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-1 bg-white rounded" />
                  <span className="text-xs text-white">Garis Komando</span>
                </div>

                {/* Coordination Line */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-1 bg-yellow-400 rounded"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 6px, transparent 6px, transparent 12px)' }}
                  />
                  <span className="text-xs text-white">Garis Koordinasi</span>
                </div>

                {/* Supervision Line */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-1 bg-cyan-400 rounded"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22d3ee 0, #22d3ee 3px, transparent 3px, transparent 8px)' }}
                  />
                  <span className="text-xs text-white">Garis Pengawasan</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Hint */}
        <div className="text-center mt-8 text-cyan-400 text-sm md:hidden">
          ← Swipe untuk melihat flowchart →
        </div>
      </section>

      {/* ========== BIDANG DESCRIPTION SECTION ========== */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Bidang & Fungsinya
            </h2>
            <p className="text-lg text-gray-600">
              Deskripsi lengkap setiap bidang dalam organisasi
            </p>
          </motion.div>

          {/* Bidang Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'pmsda',
                name: 'PMSDA',
                title: 'Pengembangan Minat & Studi Daya Anggaran',
                desc: 'Mengembangkan minat dan bakat anggota serta mengelola anggaran organisasi.',
              },
              {
                id: 'akilprof',
                name: 'Akilprof',
                title: 'Akademik & Keprofesian',
                desc: 'Mengelola aspek akademik dan profesional anggota organisasi.',
              },
              {
                id: 'eksternal',
                name: 'Eksternal',
                title: 'Bidang Eksternal',
                desc: 'Menjalin hubungan dengan organisasi luar dan mitra eksternal.',
              },
              {
                id: 'internal',
                name: 'Internal',
                title: 'Bidang Internal',
                desc: 'Memelihara hubungan internal dan kekeluargaan antar anggota.',
              },
              {
                id: 'medkominfo',
                name: 'Medkominfo',
                title: 'Media, Komunikasi & Informasi',
                desc: 'Mengelola komunikasi dan penyebarluasan informasi organisasi.',
              },
              {
                id: 'kesekjenan',
                name: 'Kesekjenan',
                title: 'Bidang Kesekjenan',
                desc: 'Mengelola aspek administrasi dan kesekretariatan organisasi.',
              },
            ].map((bidang, index) => (
              <motion.div
                key={bidang.id}
                className="bg-gradient-to-br from-[#0A192F]/5 to-cyan-500/5 border border-cyan-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <h3 className="text-xl font-bold text-navy-dark">{bidang.name}</h3>
                </div>
                <p className="text-sm text-cyan-600 font-semibold mb-3">
                  {bidang.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {bidang.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organogram;
