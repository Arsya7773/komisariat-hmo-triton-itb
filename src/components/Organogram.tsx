import React from 'react';

export const Organogram = () => {
  const divisions = [
    { title: 'KETUA KOMISARIAT', name: 'Adrevi Chepa Muhammad', img: '/assets/divisions/ketua-komisariat.png' },
    { title: 'KESEKJENAN', name: 'Kesekretariatan', img: '/assets/divisions/kesekjenan.png' },
    { title: 'INTERNAL', name: 'Divisi Internal', img: '/assets/divisions/internal.png' },
    { title: 'EKSTERNAL', name: 'Divisi Eksternal', img: '/assets/divisions/eksternal.png' },
    { title: 'AKILPROF', name: 'Akil & Profesi', img: '/assets/divisions/akilprof.png' },
    { title: 'PMSDA', name: 'Pengabdian Masyarakat', img: '/assets/divisions/PMSDA.png' },
    { title: 'MEDKOMINFO', name: 'Media & Komunikasi', img: '/assets/divisions/medkominfo.png' },
  ];

  return (
    <section id="struktur" className="py-24 px-8 md:px-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-5xl font-black italic text-navy-dark leading-none">
          STRUKTUR BADAN PENGURUS
        </h2>
        <p className="text-navy-dark/60 font-medium italic">
          7 Bidang Kerja Kabinet Daya Biru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {divisions.map((d, i) => (
          <div key={i} className="bg-navy-dark/5 p-8 rounded-[32px] border border-navy-dark/10 hover:border-[#D4AF37]/30 transition-all group cursor-pointer text-center">
            <img 
              src={d.img} 
              alt={d.title} 
              className="mx-auto mb-6 h-28 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <h4 className={`text-xl font-bold text-navy-dark mb-2 uppercase tracking-tight ${i === 0 ? 'whitespace-nowrap' : ''}`}>{d.title}</h4>
            <p className="text-sm text-navy-dark/60 leading-relaxed font-light">
              {d.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
