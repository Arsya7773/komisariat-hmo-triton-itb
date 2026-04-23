import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/20 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img 
          src="/assets/logos/logo-hmo.jpg" 
          className="h-10 w-auto object-contain" 
          alt="HMO Logo"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="font-serif text-slate-950 text-lg font-bold tracking-tight">HMO TRITON ITB</span>
      </div>
      <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold text-slate-900/80">
        <a href="#profil" className="navbar-link hover:text-slate-950 transition-colors">PROFIL</a>
        <a href="#program" className="navbar-link hover:text-slate-950 transition-colors">PROGRAM</a>
        <a href="#kabar" className="navbar-link hover:text-slate-950 transition-colors">KABAR HIMPUNAN</a>
        <a href="#kontak" className="navbar-link hover:text-slate-950 transition-colors">KONTAK</a>
      </div>
    </nav>
  );
};
