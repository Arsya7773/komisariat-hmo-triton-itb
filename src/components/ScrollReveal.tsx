import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'pop' | 'slide-left' | 'slide-up' | 'bounce-down';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, animation = 'slide-up', delay = 0, className = '' }: ScrollRevealProps) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'slide-up' ? 60 : animation === 'bounce-down' ? -60 : 0,
      x: animation === 'slide-left' ? -60 : 0,
      scale: animation === 'pop' ? 0.8 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, x: 0, scale: 1,
      transition: { 
        type: animation === 'pop' || animation === 'bounce-down' ? 'spring' : 'tween',
        bounce: animation === 'bounce-down' ? 0.5 : 0.4,
        duration: 0.8,
        delay: delay * 0.15,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}