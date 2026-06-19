import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function AgendaKegiatan() {
  const agendas = [
    { date: '15 Juni 2026', title: 'Pendidikan Dasar (DIKSAR)', type: 'Kaderisasi' },
    { date: '28 Juli 2026', title: 'Company Visit Jakarta', type: 'Akilprof' },
    { date: '10 Agustus 2026', title: 'Pengabdian POSEIDON', type: 'Sosmas' }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-24 overflow-hidden relative">
      
      {/* CSS Animasi Aurora & Typing */}
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
        @keyframes ocean-shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
        .ocean-typing { overflow: hidden; white-space: nowrap; border-right: 2px solid currentColor; animation: oceanType 6s steps(54, end) infinite, oceanBlink 0.75s step-end infinite; }
        @keyframes oceanType { 0%, 10% { max-width: 0; } 40%, 70% { max-width: 100%; } 90%, 100% { max-width: 0; } }
        @keyframes oceanBlink { from, to { border-color: transparent; } 50% { border-color: currentColor; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-40 right-[-6rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <motion.main className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <header className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold" /> Kabar Himpunan
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl ocean-aurora-text uppercase">
            AGENDA KEGIATAN
          </h1>
          <div className="mt-4 flex justify-start w-full">
            <div className="relative inline-block text-left text-sm sm:text-base text-slate-300">
              <span className="opacity-0 pointer-events-none block">Jadwal event, pertemuan, dan program mendatang yang perlu diperhatikan oleh anggota.</span>
              <span className="absolute top-0 left-0 h-full ocean-typing !border-yellow-500">Jadwal event, pertemuan, dan program mendatang yang perlu diperhatikan oleh anggota.</span>
            </div>
          </div>
        </header>

        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {agendas.map((agenda, i) => (
              <motion.article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  <CalendarDays className="h-4 w-4" /> {agenda.date}
                </div>
                <h2 className="text-xl font-bold text-white">{agenda.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{agenda.type}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.main>
    </div>
  );
}