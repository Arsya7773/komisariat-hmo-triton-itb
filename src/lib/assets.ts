const BASE = import.meta.env.BASE_URL;

export const ASSET_PATHS = {
  logos: {
    hmo: `${BASE}assets/logos/logo-hmo.jpg`,
    getPath: (file: string) => `${BASE}assets/logos/${file}`,
  },
  divisions: {
    ketuaKomisariat: `${BASE}assets/divisions/ketua-komisariat.png`,
    kesekjenan: `${BASE}assets/divisions/kesekjenan.png`,
    internal: `${BASE}assets/divisions/internal.png`,
    eksternal: `${BASE}assets/divisions/eksternal.png`,
    akilprof: `${BASE}assets/divisions/akilprof.png`,
    // Menggunakan nama yang sama persis seperti file asli (kalau komputermu huruf besar, biarkan kapital)
    pmsda: `${BASE}assets/divisions/PMSDA.png`, 
    medkominfo: `${BASE}assets/divisions/medkominfo.png`,
    getPath: (file: string) => `${BASE}assets/divisions/${file}`,
  },
  pengurus: {
    adreviChepa: `${BASE}assets/pengurus/adrevi-chepa.jpg`,
    getPath: (file: string) => `${BASE}assets/pengurus/${file}`,
  },
  news: {
    news1: `${BASE}assets/news/news-1.jpg`,
    news2: `${BASE}assets/news/news-2.jpg`,
    news3: `${BASE}assets/news/news-3.jpg`,
    news4: `${BASE}assets/news/news-4.jpg`,
    getPath: (file: string) => `${BASE}assets/news/${file}`,
  },
};