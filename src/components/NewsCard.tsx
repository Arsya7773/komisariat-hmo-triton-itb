import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../data/kabarHimpunanData';

type Props = {
  news: NewsItem;
  onClick: () => void;
};

export default function NewsCard({ news, onClick }: Props) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <article
      onClick={onClick}
      // Diberikan class neon-card dan overflow-hidden agar cahaya berjalan mengikut pinggir radius kartu
      className="neon-card group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md cursor-pointer flex flex-col h-full"
      style={{ '--neon-color': '#eab308' } as React.CSSProperties} // Menggunakan warna Gold untuk kartu berita kecil
    >
      {/* Garis Cahaya Animasi Neon */}
      <span className="neon-line"></span>
      <span className="neon-line"></span>
      <span className="neon-line"></span>
      <span className="neon-line"></span>

      {/* Konten (z-10 agar berada di atas efek cahaya) */}
      <div className="relative z-10 mb-4 aspect-video overflow-hidden rounded-xl bg-[#112240]">
        <img
          src={`${baseUrl}assets/news/${news.image}`}
          alt={news.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <div className="relative z-10 flex-grow">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
          <CalendarDays className="h-3 w-3" />
          {news.category}
        </div>
        <h3 className="text-xl font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors">
          {news.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-2">
          {news.excerpt}
        </p>
      </div>
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs font-mono text-cyan-500">{news.date}</span>
        <div className="flex items-center text-xs font-bold text-cyan-400 group-hover:text-yellow-400 transition-colors">
          Baca <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}