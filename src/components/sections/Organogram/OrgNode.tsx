/**
 * OrgNode Component
 * Individual organizational node with photo reveal on hover (Framer Motion)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrgNode as OrgNodeType } from '@/types/organogram';

interface OrgNodeProps {
  node: OrgNodeType;
  isKetua?: boolean; // Special styling for Ketua Komisariat
}

export const OrgNode: React.FC<OrgNodeProps> = ({
  node,
  isKetua = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCompact = node.level >= 3;
  const nodeWidthClass = isCompact ? 'w-32 md:w-36' : 'w-40';
  const nodePaddingClass = isCompact ? 'px-2 py-1' : 'px-3 py-2';
  const nodeTextClass = isCompact ? 'text-[10px] md:text-[11px]' : 'text-xs md:text-sm';

  return (
    <motion.div
      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${node.position.x}px`,
        top: `${node.position.y}px`,
      }}
      onMouseEnter={() => isKetua && setIsHovered(true)}
      onMouseLeave={() => isKetua && setIsHovered(false)}
    >
      {/* Main Node Card */}
      <motion.div
        className={`
          ${nodeWidthClass} ${nodePaddingClass} rounded-lg font-bold text-center
          transition-all duration-300
          ${
            isKetua
              ? 'bg-slate-950/95 border border-cyan-500/30 shadow-xl shadow-cyan-500/20'
              : 'bg-slate-900/90 backdrop-blur-md border border-cyan-500/30'
          }
          ${isKetua && isHovered ? 'ring-2 ring-cyan-400/60' : ''}
          hover:border-cyan-300 hover:text-cyan-200 hover:shadow-lg
          text-white ${nodeTextClass}
          leading-tight whitespace-pre-wrap
        `}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Flex container for text centering */}
        <div className="flex items-center justify-center min-h-[60px]">
          <span>
            {isKetua && !isHovered
              ? 'Ketua Komisariat HMO "TRITON" ITB'
              : node.fullName || node.name}
          </span>
        </div>
      </motion.div>

      {/* Photo Reveal Overlay (Ketua Komisariat only) */}
      <AnimatePresence>
        {isKetua && isHovered && node.photo && (
          <motion.div
            className="absolute left-1/2 top-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            {/* Glassmorphism Photo Card */}
            <div className="relative">
              {/* Glass backdrop container */}
              <motion.div
                className="
                  w-56 h-56 rounded-2xl
                  bg-gradient-to-br from-white/20 to-white/5
                  backdrop-blur-xl
                  border border-white/30 border-r-white/20 border-b-white/20
                  shadow-2xl shadow-black/40
                  overflow-hidden
                  ring-1 ring-white/40
                "
              >
                {/* Photo Image */}
                <motion.img
                  src={node.photo}
                  alt={node.fullName || node.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onError={(e) => {
                    // Fallback to gradient if image fails
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Info section at bottom */}
                <motion.div
                  className="
                    absolute bottom-0 left-0 right-0
                    bg-gradient-to-t from-black/80 to-transparent
                    p-4 text-white
                    backdrop-blur-sm
                  "
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <p className="text-sm font-bold">{node.fullName || node.name}</p>
                  <p className="text-xs text-cyan-300">{node.title}</p>
                </motion.div>
              </motion.div>

              {/* Floating glow effect */}
              <motion.div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-yellow-400/0 via-cyan-400/20 to-yellow-400/0
                  blur-xl z-0 pointer-events-none
                "
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip on hover (for non-Ketua nodes) */}
      {!isKetua && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-40 pointer-events-none"
          initial={{ opacity: 0, y: 4 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded whitespace-nowrap">
            {node.title}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OrgNode;
