import React from 'react';
import { Database, Link as LinkIcon, CheckSquare, BarChart3, ExternalLink } from 'lucide-react';

const links = [
  { 
    id: 'seatriton', 
    title: 'SEATRITON', 
    desc: 'Spreadsheet transparansi dan pencatatan SEATRITON.', 
    url: 'https://docs.google.com/spreadsheets/d/1CpWglBgp9ZxfjqhqMLQPCothNAdvtCKz8CHOWLiICdc/edit?gid=0#gid=0',
    icon: <Database className="w-8 h-8 text-cyan-400" />
  },
  { 
    id: 'treasury', 
    title: 'TRITON TREASURY', 
    desc: 'Laporan kas, transaksi masuk dan keluar.', 
    url: 'https://docs.google.com/spreadsheets/d/1rLHZFLf4tOJIdFCx7djXO-VHywLWiLEO0n1iUZlHdQM/edit?usp=sharing',
    icon: <BarChart3 className="w-8 h-8 text-yellow-400" />
  },
  { 
    id: 'trilink', 
    title: 'TRILINK', 
    desc: 'Tautan terpusat (Linktree) himpunan.', 
    url: 'https://linktr.ee/komisariathmotritonitb',
    icon: <LinkIcon className="w-8 h-8 text-emerald-400" />
  },
  { 
    id: 'msda', 
    title: 'TRITON Check (MSDA)', 
    desc: 'Presensi dan checksheet kegiatan massa.', 
    url: 'https://docs.google.com/spreadsheets/d/1g4wMRKRmSjqQjWZLKi2sryhHRUZN3dju-nAmaNEK1Mg/edit?usp=sharing',
    icon: <CheckSquare className="w-8 h-8 text-purple-400" />
  },
];

export default function ExternalLinksGrid() {
  return (
    <div className="py-8 px-6 sm:px-10 backdrop-blur-xl bg-[#112240]/40 border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="mb-8">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Portal Sistem</p>
        <h3 className="text-2xl sm:text-3xl font-black text-white">Akses Tautan & Dokumen</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {links.map((l) => (
          <div key={l.id} className="group flex flex-col justify-between rounded-2xl p-6 bg-[#071026]/80 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
            {/* Glow Background Effect */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#0A192F] border border-white/10 mb-6 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {l.icon}
              </div>
              <h4 className="font-black text-lg text-white mb-2">{l.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{l.desc}</p>
            </div>
            
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent"
            >
              <ExternalLink className="w-4 h-4" />
              Buka Tautan
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}