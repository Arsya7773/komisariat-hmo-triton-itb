/**
 * OrgNode Component
 * Reusable organizational node with glassmorphism hover reveal.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Position } from '@/types/organogram';

interface OrgNodeProps {
  title: string;
  personName: string;
  photoPath?: string;
  position: Position;
  level?: number;
}

export const OrgNode: React.FC<OrgNodeProps> = ({
  title,
  personName,
  photoPath,
  position,
  level = 2,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCompact = level >= 3;
  const nodeWidthClass = isCompact ? 'w-36 md:w-40' : 'w-48 md:w-52';
  const nodePaddingClass = isCompact ? 'px-3 py-2' : 'px-4 py-3';
  const nodeTextClass = isCompact ? 'text-xs md:text-sm' : 'text-sm md:text-base';

  return (
    <motion.div
      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`
          ${nodeWidthClass} ${nodePaddingClass} rounded-3xl text-center
          bg-slate-900/90 backdrop-blur-md border border-cyan-500/30
          shadow-lg shadow-cyan-500/10 text-white
          transition-all duration-300
          hover:border-cyan-300 hover:text-cyan-100 hover:shadow-xl
          ${nodeTextClass} font-semibold leading-tight whitespace-pre-wrap
        `}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-center min-h-[96px] px-2 py-1">
          <span>{title}</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-1/2 top-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="relative">
              <motion.div
                className="
                  w-64 h-64 rounded-[32px]
                  bg-gradient-to-br from-white/20 to-white/5
                  backdrop-blur-3xl
                  border border-white/20 border-r-white/10 border-b-white/10
                  shadow-2xl shadow-black/40
                  overflow-hidden
                  ring-1 ring-white/30
                "
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {photoPath ? (
                  <motion.img
                    src={photoPath}
                    alt={personName}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <motion.div
                  className="
                    absolute bottom-0 left-0 right-0
                    bg-gradient-to-t from-black/90 to-transparent
                    p-4 text-white
                    backdrop-blur-sm
                  "
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.28, delay: 0.1 }}
                >
                  <p className="text-sm font-bold">{personName}</p>
                  <p className="text-xs text-cyan-200 mt-1">{title}</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="
                  absolute inset-0 rounded-[32px]
                  bg-gradient-to-r from-yellow-400/0 via-cyan-400/20 to-yellow-400/0
                  blur-3xl pointer-events-none
                "
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OrgNode;
