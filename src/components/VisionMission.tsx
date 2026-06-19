import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, Zap, Users, Lightbulb, Globe, Activity, FileText } from 'lucide-react';

export default function VisionMission() {
  const missions = [
    { text: 'Memperkuat Daya Biru sebagai fondasi untuk Mengembangkan Potensi Anggota Komisariat HMO "TRITON" ITB.', icon: <Zap size={24} /> },
    { text: 'Meningkatkan Eksistensi dan Memberikan Kontribusi yang Nyata bagi Lingkungan serta Masyarakat.', icon: <Globe size={24} /> },
    { text: 'Mewujudkan HMO TRITON ITB yang sinergis dan kolaboratif antar elemen himpunan.', icon: <Users size={24} /> },
    { text: 'Mengembangkan potensi anggota melalui wadah aspirasi yang inovatif dan terarah.', icon: <Lightbulb size={24} /> },
    { text: 'Membangun lingkungan himpunan yang inklusif, apresiatif, dan berorientasi pada masa depan.', icon: <Target size={24} /> },
    { text: 'Meningkatkan kolaborasi eksternal untuk memperluas jaringan dan dampak himpunan.', icon: <Activity size={24} /> },
    { text: 'Mengoptimalkan media dan komunikasi untuk transparansi administrasi serta cashflow.', icon: <FileText size={24} /> },
  ];

  return (
    <section id="visi-misi" className="py-32 bg-gradient-to-b from-[#040D1A] to-[#0A192F] relative overflow-hidden">
      
      <style>{`
        /* Typewriter Animation Looping */
        .typewriter-cyan {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #22d3ee;
          animation: typing-loop 6s steps(40, end) infinite, blink-cyan 0.75s step-end infinite;
        }
        .typewriter-yellow {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #facc15;
          animation: typing-loop 6s steps(40, end) infinite, blink-yellow 0.75s step-end infinite;
          animation-delay: 0.5s;
        }
        
        @keyframes typing-loop {
          0%, 10% { max-width: 0; }
          40%, 70% { max-width: 100%; }
          90%, 100% { max-width: 0; }
        }
        
        @keyframes blink-cyan {
          from, to { border-color: transparent; }
          50% { border-color: #22d3ee; }
        }
        @keyframes blink-yellow {
          from, to { border-color: transparent; }
          50% { border-color: #facc15; }
        }

        /* Ocean Glow Text Animation */
        @keyframes ocean-lights {
          0% {
            color: hsl(190, 40%, 80%);
            text-shadow: 0 0 1em hsla(190, 100%, 50%, 0.2), 0 0 0.125em hsla(190, 100%, 60%, 0.3), -1em -0.125em 0.5em hsla(210, 100%, 60%, 0), 1em 0.125em 0.5em hsla(45, 100%, 60%, 0);
          }
          30% { 
            color: hsl(190, 80%, 90%);
            text-shadow: 0 0 1em hsla(190, 100%, 50%, 0.5), 0 0 0.125em hsla(190, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(210, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(45, 100%, 60%, 0.4);
          }
          40% { 
            color: hsl(190, 100%, 95%);
            text-shadow: 0 0 1em hsla(190, 100%, 50%, 0.5), 0 0 0.125em hsla(190, 100%, 90%, 0.5), -0.25em -0.125em 0.125em hsla(210, 100%, 60%, 0.2), 0.25em 0.125em 0.125em hsla(45, 100%, 60%, 0.4);
          }
          70% {
            color: hsl(190, 80%, 90%);
            text-shadow: 0 0 1em hsla(190, 100%, 50%, 0.5), 0 0 0.125em hsla(190, 100%, 60%, 0.5), 0.5em -0.125em 0.25em hsla(210, 100%, 60%, 0.2), -0.5em 0.125em 0.25em hsla(45, 100%, 60%, 0.4);
          }
          100% {
            color: hsl(190, 40%, 80%);
            text-shadow: 0 0 1em hsla(190, 100%, 50%, 0.2), 0 0 0.125em hsla(190, 100%, 60%, 0.3), 1em -0.125em 0.5em hsla(210, 100%, 60%, 0), -1em 0.125em 0.5em hsla(45, 100%, 60%, 0);
          }
        }
        .ocean-glow-text {
          animation: ocean-lights 5s 750ms linear infinite;
        }
      `}</style>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <ScrollReveal animation="bounce-down">
          <div className="text-center mb-24 flex flex-col items-center">
            <h3 className="text-6xl md:text-7xl font-black text-white tracking-tight mb-4">
              Visi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Misi</span>
            </h3>
            {/* Teks "Arah Masa Depan" warna Kuning Looping */}
            <div className="typewriter-yellow text-[#facc15] tracking-[0.3em] font-bold uppercase text-lg md:text-xl">
              Arah Masa Depan
            </div>
          </div>
        </ScrollReveal>

        {/* VISI - Hover berubah Glow Emas */}
        <ScrollReveal animation="pop" className="mb-24">
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-[#112240]/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] text-center group hover:border-[#facc15]/80 hover:shadow-[0_0_50px_rgba(250,204,21,0.25)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/0 via-[#facc15]/10 to-[#facc15]/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            
            <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-8 uppercase tracking-widest group-hover:text-[#facc15] transition-colors duration-500">
              <span className="typewriter-cyan group-hover:border-[#facc15]">Daya Biru</span>
            </div>
            
            <p className="ocean-glow-text text-2xl md:text-4xl font-serif font-medium leading-relaxed italic max-w-5xl mx-auto group-hover:text-white transition-colors">
              "Memperkuat <span className="font-black text-cyan-300 group-hover:text-[#facc15] transition-colors">Daya Biru</span> sebagai fondasi untuk Mengembangkan Potensi Anggota Komisariat HMO 'TRITON' ITB, Meningkatkan Eksistensi, dan Memberikan Kontribusi yang Nyata bagi Lingkungan serta Masyarakat."
            </p>
          </div>
        </ScrollReveal>

        {/* MISI - Hover Berubah Kotak & Ikon Emas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3 mb-4">
            <ScrollReveal animation="slide-right">
              <h4 className="text-3xl font-black text-white border-l-4 border-cyan-500 pl-4">Misi Utama</h4>
            </ScrollReveal>
          </div>

          {missions.map((misi, index) => (
            <ScrollReveal key={index} delay={index} animation="slide-up" className={`relative ${index === 6 ? 'lg:col-start-2' : ''}`}>
              <div className="bg-[#112240]/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-3xl h-full flex flex-col gap-6 group hover:bg-[#1a2f52] hover:border-[#facc15]/60 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-black text-white/5 group-hover:text-[#facc15]/20 transition-colors duration-300 absolute top-4 right-6 pointer-events-none">
                    0{index + 1}
                  </span>
                  
                  {/* Ikon: Default Cyan -> Hover Emas */}
                  <div className="w-12 h-12 rounded-full bg-[#0A192F] flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-[#facc15] group-hover:text-[#0A192F] transition-all duration-300 z-10 border border-cyan-500/30 group-hover:border-[#facc15] shadow-[0_0_10px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                    {misi.icon}
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed font-medium z-10 transition-colors duration-300 group-hover:ocean-glow-text group-hover:text-white">
                  {misi.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}