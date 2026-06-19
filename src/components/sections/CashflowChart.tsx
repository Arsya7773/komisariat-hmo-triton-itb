import React, { useEffect, useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import Papa from 'papaparse';

type Row = {
  Tanggal: string;
  Keterangan: string;
  Program_Kerja: string;
  Pemasukan: number;
  Pengeluaran: number;
  Saldo: number;
};

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/1rLHZFLf4tOJIdFCx7djXO-VHywLWiLEO0n1iUZlHdQM/gviz/tq?tqx=out:csv&gid=0';

const sample: Row[] = [
  { Tanggal: '2026-03-08', Keterangan: 'Dana BP 2025/2026', Program_Kerja: '', Pemasukan: 7643365, Pengeluaran: 0, Saldo: 7643365 },
  { Tanggal: '2026-03-11', Keterangan: 'Kas Komis', Program_Kerja: '', Pemasukan: 230000, Pengeluaran: 0, Saldo: 7873365 },
  { Tanggal: '2026-03-12', Keterangan: 'Pendanaan', Program_Kerja: 'TRITON MART', Pemasukan: 36000, Pengeluaran: 5000, Saldo: 7909365 },
  { Tanggal: '2026-03-29', Keterangan: 'Kas Komis', Program_Kerja: '', Pemasukan: 340000, Pengeluaran: 0, Saldo: 8244365 },
];

function parseCurrency(s: string) {
  if (!s || s.trim() === '-') return 0;
  const cleaned = s.replace(/[^0-9.-]+/g, '');
  const num = Number(cleaned);
  return Number.isNaN(num) ? 0 : num;
}

// Custom Tooltip (Teks Putih, ada titik indikator warna)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#071026]/95 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        <p className="text-cyan-300 font-bold mb-3 border-b border-cyan-500/30 pb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2 mb-1.5">
            {/* Titik Warna Indikator */}
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
            {/* Teks Putih Tegas */}
            <p className="text-white text-sm font-semibold">
              {entry.name}: Rp {new Intl.NumberFormat('id-ID').format(entry.value)}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom Legend (Teks Putih)
const renderLegendText = (value: string) => {
  return <span className="text-white font-semibold ml-2">{value}</span>;
};

export default function CashflowChart() {
  const [data, setData] = useState<Row[]>(sample);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(CSV_URL)
      .then((r) => r.text())
      .then((txt) => {
        const parsed = Papa.parse(txt, { header: true });
        const rows: Row[] = (parsed.data as any[])
          .filter((r) => r && Object.keys(r).length)
          .map((r) => ({
            Tanggal: r['Tanggal'] || r['tanggal'] || r['Date'] || '',
            Keterangan: r['Keterangan'] || r['keterangan'] || '',
            Program_Kerja: r['Program Kerja'] || r['Program_Kerja'] || r['Program'] || '',
            Pemasukan: parseCurrency(r['Pemasukan'] || r['pemasukan'] || r['Income'] || ''),
            Pengeluaran: parseCurrency(r['Pengeluaran'] || r['pengeluaran'] || r['Expense'] || ''),
            Saldo: parseCurrency(r['Saldo'] || r['saldo'] || r['Balance'] || ''),
          }));

        const normalized = rows.map((row) => ({
          ...row,
          Tanggal: row.Tanggal ? new Date(row.Tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }) : '',
        }));
        
        if (mounted && normalized.length) setData(normalized);
      })
      .catch(() => {
        console.error("Gagal mengambil data dari Google Sheets, menggunakan data sampel.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
      <div className="bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Live Database</p>
            <h3 className="text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              Arus Kas <span className="text-yellow-400">Himpunan</span>
            </h3>
          </div>
          <div className="flex items-center gap-3 bg-[#0A192F]/80 border border-cyan-500/20 px-4 py-2 rounded-full">
            <span className={`h-2.5 w-2.5 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 shadow-[0_0_10px_#4ade80]'}`}></span>
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              {loading ? 'Menyinkronkan...' : 'Terhubung: Google Sheets'}
            </span>
          </div>
        </div>

        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPemasukan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorPengeluaran" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              
              <XAxis dataKey="Tanggal" tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
              
              {/* Sumbu Y Diubah Menjadi Jutaan (Jt) */}
              <YAxis 
                tick={{ fill: '#64748b', fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(val) => `Rp ${val / 1000000} Jt`} 
              />
              
              <Tooltip content={<CustomTooltip />} />
              <Legend formatter={renderLegendText} wrapperStyle={{ paddingTop: '20px' }} />
              
              <Bar dataKey="Pemasukan" name="Pemasukan" fill="url(#colorPemasukan)" radius={[6, 6, 0, 0]} maxBarSize={40} />
              <Bar dataKey="Pengeluaran" name="Pengeluaran" fill="url(#colorPengeluaran)" radius={[6, 6, 0, 0]} maxBarSize={40} />
              <Line type="monotone" dataKey="Saldo" name="Total Saldo" stroke="#facc15" strokeWidth={4} dot={{ r: 4, fill: '#facc15', stroke: '#0A192F', strokeWidth: 2 }} activeDot={{ r: 6, shadow: '0 0 10px #facc15' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}