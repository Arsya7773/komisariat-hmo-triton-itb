import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  Home,
  Images,
  Mail,
  Menu,
  Network,
  Newspaper,
  Users,
  X,
} from 'lucide-react';
import { ASSET_PATHS } from '@/lib/assets';

type DropdownKey = 'profil' | 'program' | 'kabar';

type MenuItem = {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const menuItems: Record<DropdownKey, { label: string; items: MenuItem[] }> = {
  profil: {
    label: 'Profil',
    items: [
      {
        to: '/sejarah',
        icon: <BookOpen className="h-5 w-5" />,
        title: 'Sejarah',
        desc: 'Latar belakang dan perjalanan himpunan',
      },
      {
        to: '/organogram',
        icon: <Network className="h-5 w-5" />,
        title: 'Organogram',
        desc: 'Struktur, logo, dan arah kerja',
      },
    ],
  },
  program: {
    label: 'Program',
    items: [
      {
        to: '/program/bp',
        icon: <Briefcase className="h-5 w-5" />,
        title: 'BP Komisariat',
        desc: 'Badan Pengurus Komisariat',
      },
      {
        to: '/program/bpak',
        icon: <Users className="h-5 w-5" />,
        title: 'BPAK Komisariat',
        desc: 'Badan Perwakilan Anggota Komisariat',
      },
      {
        to: '/program/senator',
        icon: <Award className="h-5 w-5" />,
        title: 'Senator Komisariat',
        desc: 'Penghubung massa dan lembaga KM ITB',
      },
      {
        to: '/program/poseidon',
        icon: <Network className="h-5 w-5" />,
        title: 'POSEIDON',
        desc: 'Program pengabdian dan kemasyarakatan',
      },
    ],
  },
  kabar: {
    label: 'Kabar Himpunan',
    items: [
      {
        to: '/kabar/berita',
        icon: <Newspaper className="h-5 w-5" />,
        title: 'Berita Terkini',
        desc: 'Pembaruan dan pencapaian himpunan',
      },
      // SUBMENU AGENDA KEGIATAN TELAH DIHAPUS DARI SINI
      {
        to: '/kabar/galeri',
        icon: <Images className="h-5 w-5" />,
        title: 'Galeri',
        desc: 'Dokumentasi visual kegiatan',
      },
    ],
  },
};

const mobileLinks = [
  { to: '/', label: 'Beranda', icon: <Home className="h-5 w-5" /> },
  { to: '/sejarah', label: 'Sejarah', icon: <BookOpen className="h-5 w-5" /> },
  { to: '/organogram', label: 'Organogram', icon: <Network className="h-5 w-5" /> },
  { to: '/program/bp', label: 'BP Komisariat', icon: <Briefcase className="h-5 w-5" /> },
  { to: '/program/bpak', label: 'BPAK Komisariat', icon: <Users className="h-5 w-5" /> },
  { to: '/program/senator', label: 'Senator', icon: <Award className="h-5 w-5" /> },
  { to: '/program/poseidon', label: 'POSEIDON', icon: <Network className="h-5 w-5" /> },
  { to: '/kabar/berita', label: 'Berita Terkini', icon: <Newspaper className="h-5 w-5" /> },
  { to: '/kontak', label: 'Kontak', icon: <Mail className="h-5 w-5" /> },
];

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openMenu = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeMobileMenu = () => setIsOpen(false);

  const handleItemClick = () => {
    setOpenDropdown(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const desktopNavButton = (key: DropdownKey) => {
    const section = menuItems[key];
    const isActive = openDropdown === key;

    return (
      <div
        className="sci-nav-trigger relative"
        data-active={isActive ? 'true' : 'false'}
        onMouseEnter={() => openMenu(key)}
        onMouseLeave={closeMenu}
      >
        <button
          type="button"
          className="flex items-center gap-2 px-2 py-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-800 transition-all duration-300 hover:text-cyan-600 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
        >
          <span>{section.label}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'rotate-180 text-yellow-500' : 'text-slate-400'}`} />
        </button>

        <div className="sci-dropdown-shell absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_rgba(2,8,23,0.1)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between px-2 text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">
            <span>{section.label}</span>
            <span className="mx-3 h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>
          
          <div className="flex flex-col gap-3">
            {section.items.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleItemClick}
                className={`group sci-dropdown-item ${index % 2 === 0 ? 'sci-dropdown-item--left' : 'sci-dropdown-item--right'} flex items-center gap-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 transition-all duration-300 hover:border-yellow-400 hover:bg-[#0A192F] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
                style={{ ['--item-delay' as never]: `${index * 50}ms` }}
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white text-cyan-600 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:bg-white/5 group-hover:text-yellow-400">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 group-hover:text-cyan-300">{item.title}</span>
                  <span className="mt-1 block text-xs leading-4 text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                    {item.desc}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .sci-nav-trigger .sci-dropdown-shell { opacity: 0; visibility: hidden; transform: translate(-50%, 15px); pointer-events: none; transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1); }
        .sci-nav-trigger[data-active='true'] .sci-dropdown-shell { opacity: 1; visibility: visible; transform: translate(-50%, 0); pointer-events: auto; }
        .sci-dropdown-item { position: relative; left: var(--item-x, 0); opacity: 0; transform: skew(25deg) scaleY(0.5); transition: left 400ms cubic-bezier(0.19, 1, 0.22, 1), transform 400ms cubic-bezier(0.19, 1, 0.22, 1), opacity 300ms ease; transition-delay: var(--item-delay, 0ms); }
        .sci-dropdown-item--left { --item-x: -150%; }
        .sci-dropdown-item--right { --item-x: 150%; }
        .sci-nav-trigger[data-active='true'] .sci-dropdown-item { left: 0; opacity: 1; transform: skew(0deg) scaleY(1); }
        .mobile-menu-link::after { content: ''; position: absolute; left: 50%; bottom: -8px; width: 80%; height: 3px; border-radius: 9999px; background: linear-gradient(90deg, #22d3ee, #facc15, #0A192F, #22d3ee); background-size: 200% auto; transform: translateX(-50%) scaleX(0); transform-origin: center; transition: transform 300ms ease; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); animation: neon-flow 2.5s linear infinite; }
        @keyframes neon-flow { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .mobile-menu-link:hover::after { transform: translateX(-50%) scaleX(1); }
      `}</style>

      <nav className="fixed top-0 z-[100] w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="group flex items-center gap-3">
            <img src={ASSET_PATHS.logos.hmo} loading="eager" decoding="sync" width={96} height={48} className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]" alt='KOMISARIAT HMO "TRITON" ITB' onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="hidden min-w-0 max-w-[24rem] truncate text-sm font-bold tracking-[0.2em] text-slate-900 xl:block group-hover:text-cyan-600 transition-colors">
              KOMISARIAT HMO "TRITON" ITB
            </span>
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            {desktopNavButton('profil')}
            {desktopNavButton('program')}
            {desktopNavButton('kabar')}
            
            <Link 
              to="/kontak" 
              className="flex items-center gap-2 px-2 py-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-800 transition-all duration-300 hover:text-cyan-600 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            >
              KONTAK
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="fixed right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-[#0A192F] text-white shadow-[0_4px_15px_rgba(10,25,47,0.3)] transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-[#0A192F] md:right-6 md:top-5 xl:hidden"
          >
            {isOpen ? <X className="h-6 w-6 font-bold" /> : <Menu className="h-6 w-6 font-bold" />}
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-[105] xl:hidden flex flex-col justify-center overflow-y-auto"
        style={{
          backgroundColor: '#ffffff',
          clipPath: isOpen ? 'circle(150% at calc(100% - 45px) 45px)' : 'circle(0px at calc(100% - 45px) 45px)',
          WebkitClipPath: isOpen ? 'circle(150% at calc(100% - 45px) 45px)' : 'circle(0px at calc(100% - 45px) 45px)',
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none', transition: 'clip-path 700ms cubic-bezier(0.77, 0, 0.175, 1), opacity 300ms ease',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22d3ee10,transparent_40%),radial-gradient(circle_at_bottom_right,#facc1510,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-10 text-center">
            <img src={ASSET_PATHS.logos.hmo} loading="eager" decoding="sync" width={160} height={80} alt='KOMISARIAT HMO "TRITON" ITB' className="mx-auto h-20 w-auto object-contain drop-shadow-[0_4px_10px_rgba(2,8,23,0.1)]" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.5em] text-cyan-600">Navigasi Himpunan</p>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center gap-6">
            {mobileLinks.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="mobile-menu-link group relative flex items-center gap-4 text-xl sm:text-2xl font-black uppercase tracking-widest text-slate-800 transition-colors duration-300 hover:text-[#0A192F]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-cyan-600 shadow-sm transition-all duration-300 group-hover:bg-[#0A192F] group-hover:text-yellow-400 group-hover:border-[#0A192F]">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;