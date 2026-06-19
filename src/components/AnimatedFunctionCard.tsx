import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FunctionItem {
  id: string;
  title: string;
  desc: string;
  imageFallback: string;
}

export default function AnimatedFunctionCard({ data, glowColor = 'cyan' }: { data: FunctionItem; glowColor?: string }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = `/assets/programs/${data.id}.jpg`;

  const borderGlows: Record<string, string> = {
    cyan: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]',
    blue: 'hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]',
    yellow: 'hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]'
  };

  const linesGlows: Record<string, string> = {
    cyan: 'border-cyan-400/50',
    blue: 'border-blue-400/50',
    yellow: 'border-yellow-400/50'
  };

  return (
    <motion.div
      className={`relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl bg-[#071026] border border-white/10 cursor-pointer group transition-all duration-300 ${borderGlows[glowColor] || borderGlows['cyan']}`}
      initial="initial"
      whileHover="hover"
    >
      {/* Gambar Latar */}
      {!imgError ? (
        <motion.img
          src={imgSrc}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-cyan-200/60 bg-gradient-to-br from-[#0A192F] to-[#112240]">
          <span className="border border-dashed border-cyan-500/30 p-4 rounded-xl leading-relaxed">{data.imageFallback}</span>
        </div>
      )}

      {/* Tirai Kaca (Slide Up Overlay) */}
      <motion.div
        variants={{
          initial: { y: '100%' },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]/70 backdrop-blur-sm p-6 flex flex-col justify-center border-t-2 ${linesGlows[glowColor] || linesGlows['cyan']}`}
      >
        {/* Teks Animasi dari Kiri (Slide Left Pop) */}
        <motion.div className="flex flex-col gap-2">
          <motion.h3 
            variants={{
              initial: { x: -40, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white leading-tight"
          >
            {data.title}
          </motion.h3>

          <motion.p 
            variants={{
              initial: { x: -40, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-slate-300 text-sm leading-relaxed"
          >
            {data.desc}
          </motion.p>
        </motion.div>

        {/* Animasi Titik Bawah (Dots Slide Up) */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {[0.4, 0.5, 0.6].map((delayValue, i) => (
            <motion.div 
              key={i}
              variants={{
                initial: { y: 20, opacity: 0 },
                hover: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4, delay: delayValue, ease: "easeOut" }}
              className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${i === 0 ? 'bg-cyan-400 text-cyan-400' : i === 1 ? 'bg-blue-400 text-blue-400' : 'bg-yellow-400 text-yellow-400'}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}