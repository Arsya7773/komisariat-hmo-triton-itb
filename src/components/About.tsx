import React from 'react';
import { Compass, Shield, Target } from 'lucide-react';

export const About = () => {
  const sections = [
    { title: 'Sejarah', icon: <Compass size={24} className="text-gold" />, desc: 'Berdiri sebagai wadah pemersatu mahasiswa Oseanografi ITB sejak tahun 2008.' },
    { title: 'Asas', icon: <Shield size={24} className="text-accent-blue" />, desc: 'Asas HMO \'TRITON\' ITB adalah kemahasiswaan, keprofesian, kebenaran, dan kebebasan mimbar yang dewasa serta dapat dipertanggungjawabkan.' },
    { title: 'Tujuan', icon: <Target size={24} className="text-navy-deep" />, desc: 'Dibentuk untuk mewadahi seluruh kebutuhan dasar mahasiswa berupa pendidikan, kesejahteraan, dan aktualisasi.' },
  ];

  return (
    <section id="profil" className="py-24 px-8 md:px-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="bg-navy-dark/5 p-8 rounded-2xl border border-navy-dark/10 hover:border-gold/30 transition-all group backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-white ring-1 ring-navy-dark/10 group-hover:ring-gold/50 transition-all mb-4 w-fit">
                {s.icon}
              </div>
              <h4 className="font-bold text-navy-dark mb-4">{s.title}</h4>
              <p className="text-sm text-navy-dark/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
