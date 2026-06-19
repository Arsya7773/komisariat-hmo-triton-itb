import React from 'react';
import { motion } from 'framer-motion';
import { bpakData } from '../data/bpakData';
import AnimatedFunctionCard from '../components/AnimatedFunctionCard';

const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='100%' height='100%' fill='#071422'/><g fill='#7dd3fc' font-family='Arial, Helvetica, sans-serif'><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' font-size='28'>No Photo</text></g></svg>`
)};`

export default function BPAKPage() {
  return (
    <motion.main className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#001219] to-[#061826] text-white py-16 px-6 overflow-hidden">
      {/* Background ornaments (glows & particles) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 opacity-30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        />
        <motion.div
          className="absolute -right-24 top-24 w-72 h-72 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {[...Array(15)].map((_, i) => {
          const size = 28 + (i % 6) * 10;
          const left = (i * 37) % 100;
          const top = (i * 29) % 100;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(6px)'
              }}
              animate={{ y: [0, -12, 0], opacity: [0.06, 0.3, 0.06] }}
              transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/6 border border-white/6 rounded-2xl p-8 backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Badan Perwakilan Anggota Komisariat</h1>
          <p className="mt-2 text-slate-200/80">Legislasi, Pengawasan, & Advokasi</p>
        </motion.header>

        {/* Ketua BPAK Section */}
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="col-span-1 flex flex-col items-center">
            <div className="rounded-full p-1 bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
              <img
                src={bpakData.leader.photo}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                alt={bpakData.leader.name}
                loading="eager" decoding="sync"
                width={160} height={160}
                className="w-40 h-40 object-cover rounded-full border-4 border-white/10"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-semibold text-lg">{bpakData.leader.name}</div>
              <div className="text-sm text-slate-200/80 mt-1">{bpakData.leader.role}</div>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bpakData.mainFunctions.map((func) => (
                <AnimatedFunctionCard key={func.id} data={func} glowColor="cyan" />
              ))}
            </div>
          </div>
        </section>

        {/* Glowing Divider */}
        <div className="w-full h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70" />

        {/* Komisi Bento Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bpakData.commissions.map((komisi, index) => (
            <motion.div key={komisi.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="bg-white/5 border border-white/8 rounded-2xl p-4 backdrop-blur-md flex flex-col">
              {/* Header Side */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{komisi.icon}</div>
                <div>
                  <div className="font-semibold text-lg">{komisi.title}</div>
                  <div className="text-sm text-slate-200/80">{komisi.desc}</div>
                </div>
              </div>

              {/* Functions Side */}
              <div className="mt-4 grid gap-3">
                {komisi.functions.map((func) => (
                  <AnimatedFunctionCard key={func.id} data={func} glowColor={komisi.id === 'advokasi' ? 'yellow' : komisi.id === 'pengawasan' ? 'blue' : 'cyan'} />
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </motion.main>
  );
}
