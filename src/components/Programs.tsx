import React from 'react';
import { Anchor, GraduationCap, Users, Globe2 } from 'lucide-react';

export const Programs = () => {
  const progs = [
    { title: 'Poseidon', icon: <Anchor />, desc: 'Pengembangan kurikulum dan riset kelautan terpadu bagi anggota.' },
    { title: 'Parade Wisuda HMO', icon: <GraduationCap />, desc: 'Apresiasi dan penghormatan bagi seluruh lulusan Oseanografi ITB.' },
    { title: 'Senator Komisariat', icon: <Users />, desc: 'Representasi diplomatik himpunan di tingkat universitas dan pusat.' },
    { title: 'Wyrtki HMO', icon: <Globe2 />, desc: 'Program pengabdian masyarakat pesisir dan edukasi maritim.' },
  ];

  return (
    <section id="program" className="py-24 px-8 md:px-20 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-5xl font-black italic text-white leading-none">
          PROGRAM UNGGULAN
        </h2>
        <p className="text-white/40 font-medium max-w-xl mx-auto italic">
          Inisiatif strategis Kabinet Daya Biru untuk memperkuat sinergi dan inovasi dalam lingkup maritim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {progs.map((p, i) => (
          <div key={i} className="program-card relative h-96 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
            {/* Face 1 - Content (bottom layer) */}
            <div className="face1 absolute inset-0 p-8 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm z-0">
              <div className="p-5 rounded-2xl text-white mb-6 bg-gradient-to-br from-[#3B82F6] to-[#D4AF37]">
                {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light text-center">
                {p.desc}
              </p>
            </div>

            {/* Face 2 - Title (top layer) */}
            <div className="face2 absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#D4AF37] flex items-center justify-center z-10 transition-all duration-500 ease-out">
              <h4 className="text-2xl font-bold uppercase tracking-tight text-white text-center px-4">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
