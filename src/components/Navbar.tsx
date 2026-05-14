import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Network, Briefcase, Mail, Users, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = {
    profil: [
      {
        to: '/sejarah',
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Sejarah',
        desc: 'Latar Belakang, Visi Misi, & Tujuan',
      },
      {
        to: '/organogram',
        icon: <Network className="w-6 h-6" />,
        title: 'Organogram',
        desc: 'Struktur, Logo, & Arahan Kerja',
      },
    ],
    program: [
      {
        to: '#program-akademik',
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Program Akademik',
        desc: 'Kegiatan pembelajaran dan pengembangan skill',
      },
      {
        to: '#program-sosial',
        icon: <Users className="w-6 h-6" />,
        title: 'Program Sosial',
        desc: 'Pengabdian masyarakat berkelanjutan',
      },
      {
        to: '#program-kaderisasi',
        icon: <Award className="w-6 h-6" />,
        title: 'Program Kaderisasi',
        desc: 'Pengembangan SDM dan generasi penerus',
      },
    ],
    kabar: [
      {
        to: '#berita-terkini',
        icon: <Award className="w-6 h-6" />,
        title: 'Berita Terkini',
        desc: 'Perkembangan dan pencapaian himpunan',
      },
      {
        to: '#agenda',
        icon: <Briefcase className="w-6 h-6" />,
        title: 'Agenda Kegiatan',
        desc: 'Jadwal event dan pertemuan mendatang',
      },
      {
        to: '#galeri',
        icon: <Users className="w-6 h-6" />,
        title: 'Galeri',
        desc: 'Dokumentasi kegiatan himpunan',
      },
    ],
    kontak: [
      {
        to: '#hubungi-kami',
        icon: <Mail className="w-6 h-6" />,
        title: 'Hubungi Kami',
        desc: 'Email, telepon, dan media sosial',
      },
      {
        to: '#lokasi',
        icon: <Network className="w-6 h-6" />,
        title: 'Lokasi',
        desc: 'Alamat sekretariat HMO TRITON ITB',
      },
      {
        to: '#media-sosial',
        icon: <Users className="w-6 h-6" />,
        title: 'Media Sosial',
        desc: 'Ikuti kami di berbagai platform',
      },
    ],
  };

  // Clear timeout on enter to prevent accidental close
  const handleMouseEnter = (dropdownKey: keyof typeof menuItems) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(dropdownKey);
  };

  // Debounce close with 200ms delay
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const DropdownMenu = ({ items }: { items: typeof menuItems.profil }) => (
    <div className="absolute left-0 top-full pt-6 z-20">
      {/* Invisible bridge - extends hover area */}
      <div className="absolute -top-6 left-0 right-0 h-6 pointer-events-auto" />
      
      {/* Dropdown content */}
      <div className="relative w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#0A192F] group/item"
              onClick={() => {
                setOpenDropdown(null);
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
              }}
            >
              <span className="flex-shrink-0 mt-1 text-blue-700 group-hover/item:text-yellow-400 transition-colors duration-300">
                {item.icon}
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-gray-900 text-xs uppercase tracking-wide group-hover/item:text-white transition-colors duration-300">
                  {item.title}
                </span>
                <span className="block text-xs text-gray-500 mt-1 group-hover/item:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const NavLink = ({ label, dropdownKey }: { label: string; dropdownKey: keyof typeof menuItems }) => (
    <div
      className="relative group"
      onMouseEnter={() => handleMouseEnter(dropdownKey)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="hover:text-slate-950 transition-colors relative pb-1 font-semibold">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </button>
      <AnimatePresence>
        {openDropdown === dropdownKey && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onMouseEnter={() => handleMouseEnter(dropdownKey)}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownMenu items={menuItems[dropdownKey]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-[99] bg-white/80 backdrop-blur-md border-b border-slate-200/20 px-8 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/assets/logos/logo-hmo.jpg"
          className="h-10 w-auto object-contain"
          alt="HMO Logo"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="font-serif text-slate-950 text-lg font-bold tracking-tight">Komisariat HMO "TRITON" ITB</span>
      </Link>
      <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold text-slate-900/80">
        <NavLink label="PROFIL" dropdownKey="profil" />
        <NavLink label="PROGRAM" dropdownKey="program" />
        <NavLink label="KABAR HIMPUNAN" dropdownKey="kabar" />
        <NavLink label="KONTAK" dropdownKey="kontak" />
      </div>
    </nav>
  );
};
