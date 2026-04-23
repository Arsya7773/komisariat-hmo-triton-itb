import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="kontak" className="bg-navy-dark pt-24 pb-12 px-8 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {/* Brand & Address */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img src="/assets/logos/logo-hmo.jpg" alt="HMO Logo" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div>
              <span className="block text-xl font-bold text-white font-serif uppercase leading-none">HMO TRITON</span>
              <span className="block text-[10px] font-medium text-white/50 uppercase tracking-widest mt-1">Oceanography ITB</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white/60 text-sm leading-relaxed">
              Sekretariat HMO TRITON ITB,<br />
              Gedung Labtek XI Lantai 2,<br />
              Institut Teknologi Bandung,<br />
              Bandung, Jawa Barat.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-2 flex items-end">
          <p className="text-white/40 text-sm">
            © 2024 Komisariat HMO TRITON ITB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
