import { ASSET_PATHS } from '../lib/assets';

export interface ProgramItem {
  id: string;
  title: string;
  desc: string;
  imageFallback: string;
  image?: string; 
  url?: string;
}

export interface DivisionItem {
  id: string;
  title: string;
  leader: { name: string; role: string; photo: string };
  programs: ProgramItem[];
}

export interface BidangItem {
  id: string;
  title: string;
  desc: string;
  logo: string;
  leader: { name: string; role: string; photo: string };
  programs: ProgramItem[];
  divisions: DivisionItem[];
}

export const bpData: BidangItem[] = [
  {
    id: 'ketua-komisariat',
    title: 'Ketua Komisariat',
    desc: 'Pemimpin tertinggi dan penanggung jawab seluruh arah gerak himpunan',
    logo: ASSET_PATHS.divisions.getPath('ketua-komisariat.png'),
    leader: { name: 'Adrevi Chepa Muhammad', role: 'Ketua Komisariat', photo: ASSET_PATHS.pengurus.getPath('adrevi-chepa.jpg') },
    programs: [],
    divisions: []
  },
  {
    id: 'kesekjenan',
    title: 'Bidang Kesekjenan',
    desc: 'Pusat pengelolaan administrasi, arsip, keuangan, dan timeline kegiatan Komisariat',
    logo: ASSET_PATHS.divisions.getPath('kesekjenan.png'),
    leader: { name: 'Laila Anggraini', role: 'Sekretaris Jendral', photo: ASSET_PATHS.pengurus.getPath('kesekjenan.jpg') },
    programs: [
      { id: 'triplan', title: 'TRIPLAN', desc: 'Perancangan dan penyusunan timeline seluruh kegiatan Komisariat', imageFallback: '[Masukkan foto timeline TRIPLAN format .jpg]', image: 'triplan.jpg' },
      { id: 'tridate', title: 'TRIDATE', desc: 'Sistem update dan realisasi pelaksanaan kegiatan himpunan', imageFallback: '[Masukkan foto pelaporan TRIDATE format .jpg]', image: 'tridate.jpg' },
      { id: 'trilink', title: 'TRILINK', desc: 'Pengarsipan seluruh dokumen dan informasi kegiatan secara terpusat', imageFallback: '[Masukkan foto arsip TRILINK format .jpg]', image: 'trilink.jpg', url: 'https://linktr.ee/komisariathmotritonitb' },
      { id: 'tritonitb-com', title: 'TRITONITB.COM', desc: 'Penyampaian informasi profil Komisariat melalui website', imageFallback: '[Masukkan screenshot Website format .jpg]', image: 'tritonitb-com.jpg' }
    ],
    divisions: [
      {
        id: 'sekretaris', title: 'Divisi Sekretaris',
        leader: { name: 'Azhar Nursadiyyah', role: 'Ketua Divisi Sekretaris', photo: ASSET_PATHS.pengurus.getPath('sekretaris.jpg') },
        programs: [
          { id: 'triarchive', title: 'TRI-Archive', desc: 'Media pengarsipan dokumen administrasi terpusat', imageFallback: '[Masukkan foto sistem arsip TRI-Archive format .jpg]', image: 'triarchive.jpg' },
          { id: 'tridocs', title: 'TRIDOCS', desc: 'Penyediaan template dokumen untuk kebutuhan administrasi', imageFallback: '[Masukkan foto template TRIDOCS format .jpg]', image: 'tridocs.jpg' },
          { id: 'triadmin', title: 'TRI-Admin', desc: 'SOP administrasi dan penyelesaian masalah administratif', imageFallback: '[Masukkan foto SOP TRI-Admin format .jpg]', image: 'triadmin.jpg' },
          { id: 'fortri', title: 'FORTRI', desc: 'Sistem permintaan pembuatan surat atau dokumen', imageFallback: '[Masukkan foto formulir FORTRI format .jpg]', image: 'fortri.jpg' }
        ]
      },
      {
        id: 'bendahara', title: 'Divisi Bendahara',
        leader: { name: 'Rika Aulia', role: 'Ketua Divisi Bendahara', photo: ASSET_PATHS.pengurus.getPath('bendahara.jpg') },
        programs: [
          { id: 'evaluasi-rab', title: 'Evaluasi RAB', desc: 'Perencanaan anggaran dan evaluasi pendanaan', imageFallback: '[Masukkan foto evaluasi RAB format .jpg]', image: 'evaluasi-rab.jpg' },
          { id: 'seatriton', title: 'SEATRITON', desc: 'Pengelolaan keuangan melalui rekening resmi himpunan', imageFallback: '[Masukkan foto rekening SEATRITON format .jpg]', image: 'seatriton.jpg', url: 'https://docs.google.com/spreadsheets/d/1CpWglBgp9ZxfjqhqMLQPCothNAdvtCKz8CHOWLiICdc/edit?gid=0#gid=0' },
          { id: 'triton-treasury', title: 'TRITON TREASURY', desc: 'Pelaporan cashflow keuangan secara transparan', imageFallback: '[Masukkan foto laporan TRITON Treasury format .jpg]', image: 'triton-treasury.jpg', url: 'https://docs.google.com/spreadsheets/d/1rLHZFLf4tOJIdFCx7djXO-VHywLWiLEO0n1iUZlHdQM/edit?usp=sharing' }
        ]
      },
      {
        id: 'pendanaan', title: 'Divisi Pendanaan',
        leader: { name: 'Risma Amelia', role: 'Ketua Divisi Pendanaan', photo: ASSET_PATHS.pengurus.getPath('pendanaan.jpg') },
        programs: [
          { id: 'triton-mart', title: 'TRITON Mart', desc: 'Unit usaha internal penjualan F&B dan merchandise', imageFallback: '[Masukkan foto kegiatan TRITON Mart format .jpg]', image: 'triton-mart.jpg' },
          { id: 'triattire', title: 'TRIATTIRE', desc: 'Pengadaan pakaian resmi (Jahim, Jalap, Kemlap)', imageFallback: '[Masukkan foto desain TRIATTIRE format .jpg]', image: 'triattire.jpg' },
          { id: 'tricon', title: 'TRICON', desc: 'Kerja sama sponsorship dengan donatur dan alumni', imageFallback: '[Masukkan foto partnership TRICON format .jpg]', image: 'tricon.jpg' }
        ]
      }
    ]
  },
  {
    id: 'akilprof',
    title: 'Bidang Akilprof',
    desc: 'Pengembangan keilmuan dan keprofesian anggota Komisariat di bidang Oseanografi',
    logo: ASSET_PATHS.divisions.getPath('akilprof.png'),
    leader: { name: 'Dieva Riswanda Putra', role: 'Ketua Bidang Akilprof', photo: ASSET_PATHS.pengurus.getPath('akilprof.jpg') },
    programs: [
      { id: 'orbit', title: 'ORBIT', desc: 'Benchmarking lintas jurusan dan diskusi irisan keilmuan', imageFallback: '[Masukkan foto diskusi ORBIT format .jpg]', image: 'orbit.jpg' }
    ],
    divisions: [
      {
        id: 'akad-keilmuan', title: 'Divisi Akademik & Keilmuan',
        leader: { name: 'Reni Wahyu Ningsih', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('akad-keilmuan.jpg') },
        programs: [
          { id: 'trisula', title: 'TRISULA', desc: 'Arsip materi perkuliahan, bank soal, dan ulasan matkul', imageFallback: '[Masukkan foto bank soal TRISULA format .jpg]', image: 'trisula.jpg' },
          { id: 'tubay', title: 'Tubay (Tutor Sebaya)', desc: 'Kegiatan tutorial akademik dan kuis simulasi ujian', imageFallback: '[Masukkan foto kegiatan Tubay format .jpg]', image: 'tubay.jpg' },
          { id: 'klinik', title: 'KLINIK', desc: 'Pembinaan dan inkubasi inovasi untuk kompetisi ilmiah', imageFallback: '[Masukkan foto workshop KLINIK format .jpg]', image: 'klinik.jpg' },
          { id: 'samudra', title: 'SAMUDRA', desc: 'Konten literasi isu oseanografi edukatif di sosial media', imageFallback: '[Masukkan desain konten SAMUDRA format .jpg]', image: 'samudra.jpg' },
          { id: 'oskar', title: 'OSKAR', desc: 'Seminar penulisan Skripsi, Karya Ilmiah, dan Riset', imageFallback: '[Masukkan foto seminar OSKAR format .jpg]', image: 'oskar.jpg' }
        ]
      },
      {
        id: 'keprofesian', title: 'Divisi Keprofesian',
        leader: { name: 'Ardika Fauzianto', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('keprofesian.jpg') },
        programs: [
          { id: 'loka', title: 'LOKA', desc: 'Log Oseanografi dan Karier Anggota (Database magang)', imageFallback: '[Masukkan foto database LOKA format .jpg]', image: 'loka.jpg' },
          { id: 'pelita', title: 'PELITA', desc: 'Program Edukasi dan Latihan Anggota (Pelatihan software)', imageFallback: '[Masukkan foto pelatihan PELITA format .jpg]', image: 'pelita.jpg' },
          { id: 'badai', title: 'BADAI', desc: 'Bincang Alumni dan Arah Inspirasi (Sharing session)', imageFallback: '[Masukkan foto acara BADAI format .jpg]', image: 'badai.jpg' },
          { id: 'compvis', title: 'Company Visit', desc: 'Kunjungan industri untuk observasi operasional perusahaan', imageFallback: '[Masukkan foto Company Visit format .jpg]', image: 'compvis.jpg' }
        ]
      }
    ]
  },
  {
    id: 'internal',
    title: 'Bidang Internal',
    desc: 'Mewadahi harmonisasi internal, budaya apresiatif, dan potensi non-akademik anggota',
    logo: ASSET_PATHS.divisions.getPath('internal.png'),
    leader: { name: 'Timothy De Niro Junior Siahaan', role: 'Ketua Bidang Internal', photo: ASSET_PATHS.pengurus.getPath('internal.jpg') },
    programs: [
      { id: 'trident', title: 'TRIDENT', desc: 'Perayaan Dies Natalis HMO "TRITON" ITB', imageFallback: '[Masukkan foto acara TRIDENT format .jpg]', image: 'trident.jpg' },
      { id: 'sail', title: 'SAIL', desc: 'Apresiasi perayaan Parade Wisuda bagi alumni S1', imageFallback: '[Masukkan foto Parade Wisuda SAIL format .jpg]', image: 'sail.jpg' },
      { id: 'internal-feedback', title: 'Internal Feedback', desc: 'Penghimpunan aspirasi massa secara berkala', imageFallback: '[Masukkan grafis form Internal Feedback format .jpg]', image: 'internal-feedback.jpg' }
    ],
    divisions: [
      {
        id: 'minat-bakat', title: 'Divisi Minat Bakat',
        leader: { name: 'Al May Rafi Izdhihar', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('minat-bakat.jpg') },
        programs: [
          { id: 'talent-compass', title: 'Talent Compass', desc: 'Pemetaan minat dan bakat anggota', imageFallback: '[Masukkan grafis Talent Compass format .jpg]', image: 'talent-compass.jpg' },
          { id: 'triton-arena', title: 'TRITON Arena', desc: 'Kegiatan olahraga rutin dan kompetisi internal', imageFallback: '[Masukkan foto olahraga TRITON Arena format .jpg]', image: 'triton-arena.jpg' }
        ]
      },
      {
        id: 'kekeluargaan', title: 'Divisi Kekeluargaan',
        leader: { name: 'Amanda Riby Agistia', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('kekeluargaan.jpg') },
        programs: [
          { id: 'komis-bergembira', title: 'KOMIS BERGEMBIRA', desc: 'Kegiatan internalisasi (Bukber, Makrab, Welcoming Party)', imageFallback: '[Masukkan foto Makrab KOMIS BERGEMBIRA format .jpg]', image: 'komis-bergembira.jpg' },
          { id: 'triday', title: 'TRIDAY', desc: 'Pemberian ucapan ulang tahun dan hadiah kepada anggota', imageFallback: '[Masukkan foto kado TRIDAY format .jpg]', image: 'triday.jpg' },
          { id: 'house-of-triton', title: 'HOUSE OF TRITON', desc: 'Pengelolaan fasilitas sekretariat dan foto kegiatan', imageFallback: '[Masukkan foto Sekretariat HOUSE OF TRITON format .jpg]', image: 'house-of-triton.jpg' },
          { id: 'sekre-bersih', title: 'SEKRE BERSIH', desc: 'Kegiatan bersih-bersih sekretariat sesuai jadwal piket', imageFallback: '[Masukkan foto piket SEKRE BERSIH format .jpg]', image: 'sekre-bersih.jpg' }
        ]
      }
    ]
  },
  {
    id: 'eksternal',
    title: 'Bidang Eksternal',
    desc: 'Membangun relasi eksternal di lingkup ITB maupun di luar ITB untuk memperluas jaringan',
    logo: ASSET_PATHS.divisions.getPath('eksternal.png'),
    leader: { name: 'Nora Prima Lestari', role: 'Ketua Bidang Eksternal', photo: ASSET_PATHS.pengurus.getPath('ekstrakampus.jpg') },
    programs: [
      { id: 'jalin-external', title: 'JALIN External', desc: 'Koordinasi perancangan dan evaluasi program kerja eksternal', imageFallback: '[Masukkan foto rapat JALIN External format .jpg]', image: 'jalin-external.jpg' }
    ],
    divisions: [
      {
        id: 'intrakampus', title: 'Divisi Intrakampus',
        leader: { name: 'Dhiya’ Akmal Fauzan', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('intrakampus.jpg') },
        programs: [
          { id: 'tide-talk', title: 'TIDE & TALK', desc: 'Benchmarking santai dengan HMPS di ITB Cirebon', imageFallback: '[Masukkan foto TIDE & TALK format .jpg]', image: 'tide-talk.jpg' },
          { id: 'eureka', title: 'EUREKA', desc: 'Exploring and Sharing Keilmuan Bersama HMPS Ganesha', imageFallback: '[Masukkan foto EUREKA format .jpg]', image: 'eureka.jpg' },
          { id: 'unit-a', title: 'UNIT-A', desc: 'Kolaborasi kegiatan dengan UKM di ITB Cirebon', imageFallback: '[Masukkan foto acara UNIT-A format .jpg]', image: 'unit-a.jpg' },
          { id: 'resonaira', title: 'RESONAIRA', desc: 'Ucapan ulang tahun HMPS via media sosial', imageFallback: '[Masukkan foto poster RESONAIRA format .jpg]', image: 'resonaira.jpg' },
          { id: 'tribute', title: 'TRIBUTE', desc: 'Pemberian kado apresiasi ulang tahun HMPS ITB Cirebon', imageFallback: '[Masukkan foto kado TRIBUTE format .jpg]', image: 'tribute.jpg' },
          { id: 'corelist', title: 'CORELIST', desc: 'Penyusunan database narahubung lembaga di ITB', imageFallback: '[Masukkan grafis database CORELIST format .jpg]', image: 'corelist.jpg' }
        ]
      },
      {
        id: 'ekstrakampus', title: 'Divisi Ekstrakampus',
        leader: { name: 'Fitri Apriliani Dwi Astuti', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('ekstrakampus.jpg') },
        programs: [
          { id: 'scope', title: 'SCOPE', desc: 'Studi banding dengan himpunan luar kampus ITB', imageFallback: '[Masukkan foto Studi Banding SCOPE format .jpg]', image: 'scope.jpg' },
          { id: 'impact', title: 'IMPACT', desc: 'Kerja sama media partner publikasi', imageFallback: '[Masukkan foto kolaborasi IMPACT format .jpg]', image: 'impact.jpg' },
          { id: 'x-cuan', title: 'X-CUAN', desc: 'Pengelolaan pengajuan kerja sama sponsorship', imageFallback: '[Masukkan foto sponsorship X-CUAN format .jpg]', image: 'x-cuan.jpg' },
          { id: 'ter-hub', title: 'TER-Hub', desc: 'Database eksternal himpunan dan perusahaan', imageFallback: '[Masukkan grafis TER-Hub format .jpg]', image: 'ter-hub.jpg' },
          { id: 'trace', title: 'TRACE', desc: 'Kegiatan temu alumni dan sharing wawasan profesional', imageFallback: '[Masukkan foto Temu Alumni TRACE format .jpg]', image: 'trace.jpg' },
          { id: 'a-map', title: 'A-MAP', desc: 'Pengelolaan database alumni terstruktur', imageFallback: '[Masukkan grafis sistem A-MAP format .jpg]', image: 'a-map.jpg' }
        ]
      }
    ]
  },
  {
    id: 'pmsda',
    title: 'Bidang PMSDA',
    desc: 'Pengembangan dan Manajemen Sumber Daya Anggota secara berkelanjutan',
    logo: ASSET_PATHS.divisions.getPath('pmsda.png'),
    leader: { name: 'Hanif Alghiffari Pohan', role: 'Ketua Bidang PMSDA', photo: ASSET_PATHS.pengurus.getPath('pmsda.jpg') },
    programs: [
      { id: 'pendiksar', title: 'PENDIKSAR', desc: 'Pelatihan Panitia Kaderisasi Pendidikan Dasar', imageFallback: '[Masukkan foto PENDIKSAR format .jpg]', image: 'pendiksar.jpg' },
      { id: 'sekolah-stakeholder', title: 'Sekolah Stakeholder', desc: 'Pendampingan anggota yang ingin menjadi stakeholder kepanitiaan', imageFallback: '[Masukkan foto Sekolah Stakeholder format .jpg]', image: 'sekolah-stakeholder.jpg' },
      { id: 'bedah-ruk', title: 'BEDAH RUK', desc: 'Kajian dan evaluasi dokumen Rancangan Umum Kaderisasi', imageFallback: '[Masukkan foto BEDAH RUK format .jpg]', image: 'bedah-ruk.jpg' }
    ],
    divisions: [
      {
        id: 'psda', title: 'Divisi PSDA',
        leader: { name: 'Nazua Khaliza Lawahizh', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('psda.jpg') },
        programs: [
          { id: 'diksar', title: 'DIKSAR', desc: 'Pendidikan Dasar untuk penurunan nilai dan budaya himpunan', imageFallback: '[Masukkan foto DIKSAR format .jpg]', image: 'diksar.jpg' },
          { id: 'ldo', title: 'LDO', desc: 'Latihan Dasar Organisasi untuk fase penyesuaian', imageFallback: '[Masukkan foto acara LDO format .jpg]', image: 'ldo.jpg' },
          { id: 'lko', title: 'LKO', desc: 'Latihan Kepemimpinan Organisasi untuk fase penerapan', imageFallback: '[Masukkan foto acara LKO format .jpg]', image: 'lko.jpg' }
        ]
      },
      {
        id: 'msda', title: 'Divisi MSDA',
        leader: { name: 'Nazwa Nurul Fatimah', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('msda.jpg') },
        programs: [
          { id: 'triton-base', title: 'TRITON Base', desc: 'Database profil seluruh anggota himpunan', imageFallback: '[Masukkan grafis TRITON Base format .jpg]', image: 'triton-base.jpg', url: 'https://bit.ly/TRITONBase' },
          { id: 'triton-check', title: 'TRITON Check', desc: 'Pengecekan kehadiran dan rapor partisipasi anggota', imageFallback: '[Masukkan foto absensi TRITON Check format .jpg]', image: 'triton-check.jpg', url: 'https://bit.ly/TRITONCheck' },
          { id: 'totm', title: 'TOTM', desc: 'Triton Of The Month: Apresiasi anggota teraktif', imageFallback: '[Masukkan poster TOTM format .jpg]', image: 'totm.jpg' },
          { id: 'apres-triton', title: 'APRES TRITON!', desc: 'Apresiasi prestasi akademik dan non-akademik', imageFallback: '[Masukkan foto APRES TRITON format .jpg]', image: 'apres-triton.jpg', url: 'https://bit.ly/APRESTRITON' },
          { id: 'ber-intern', title: 'TRITON #Ber-Intern', desc: 'Program magang internal badan kelengkapan himpunan', imageFallback: '[Masukkan foto magang #Ber-Intern format .jpg]', image: 'ber-intern.jpg' }
        ]
      }
    ]
  },
  {
    id: 'medkominfo',
    title: 'Bidang Medkominfo',
    desc: 'Pengelolaan dokumentasi, publikasi, dan identitas visual himpunan kepada khalayak umum',
    logo: ASSET_PATHS.divisions.getPath('medkominfo.png'),
    leader: { name: 'Tiara Dewi Syifa Febriany', role: 'Ketua Bidang Medkominfo', photo: ASSET_PATHS.pengurus.getPath('medkominfo.jpg') },
    programs: [],
    divisions: [
      {
        id: 'desain', title: 'Divisi Desain',
        leader: { name: 'Zahra Nafisha Maulida', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('desain.jpg') },
        programs: [
          { id: 'gdv', title: 'GDV', desc: 'Pembuatan Grand Design Visual acuan identitas himpunan', imageFallback: '[Masukkan grafis panduan GDV format .jpg]', image: 'gdv.jpg' },
          { id: 'tide', title: 'TIDE', desc: 'Mekanisme terstruktur pemenuhan permintaan desain', imageFallback: '[Masukkan workflow TIDE format .jpg]', image: 'tide.jpg' }
        ]
      },
      {
        id: 'publikasi-dokumentasi', title: 'Divisi Publikasi & Dokumentasi',
        leader: { name: 'Andi Muyassar Alfarizi Hatta', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('publikasi-dokumentasi.jpg') },
        programs: [
          { id: 'triton-archive', title: 'TRITON Archive System', desc: 'Standarisasi drive pengarsipan dokumentasi kegiatan', imageFallback: '[Masukkan foto TRITON Archive format .jpg]', image: 'triton-archive.jpg' },
          { id: 'triton-recap', title: 'TRITON Recap', desc: 'Rekap visual kegiatan bulanan di media sosial', imageFallback: '[Masukkan konten TRITON Recap format .jpg]', image: 'triton-recap.jpg' },
          { id: 'triton-insight', title: 'TRITON Insight', desc: 'Publikasi konten edukatif seputar oseanografi', imageFallback: '[Masukkan konten TRITON Insight format .jpg]', image: 'triton-insight.jpg' },
          { id: 'hari-besar', title: 'Hari Besar', desc: 'Desain dan ucapan peringatan hari besar di media sosial', imageFallback: '[Masukkan desain Hari Besar format .jpg]', image: 'hari-besar.jpg' }
        ]
      }
    ]
  }
];

export const bpakData = {
  leader: { name: 'Elok Ensa Anindhita', role: 'BPAK HMO "TRITON" ITB', photo: ASSET_PATHS.pengurus.getPath('bpak.jpg') },
  mainFunctions: [
    { id: 'bpak_rapat', title: 'Rapat Internal/Evaluasi', desc: 'Sidang evaluasi berkala capaian kinerja triwulan eksekutif.', imageFallback: '[Masukkan foto Rapat Internal/Evaluasi format .jpg]', image: 'bpak-rapat.jpg' },
    { id: 'bpak_kajis', title: 'Kajian Strategis', desc: 'Penyusunan dokumen PAG (Penyelarasan Arah Gerak) organisasi.', imageFallback: '[Masukkan foto Kajian Strategis format .jpg]', image: 'bpak-kajian.jpg' },
    { id: 'bpak_pemira', title: 'PEMIRA', desc: 'Penyelenggaraan Pemilu Raya pergantian tampuk kepemimpinan.', imageFallback: '[Masukkan foto PEMIRA format .jpg]', image: 'bpak-pemira.jpg' },
    { id: 'bpak_advokasi', title: 'Serap Aspirasi/Advokasi', desc: 'Forum dengar pendapat (hearing) pemecahan masalah massa.', imageFallback: '[Masukkan foto Serap Aspirasi format .jpg]', image: 'bpak-aspirasi.jpg' },
    { id: 'bpak_gbhk', title: 'GBHK', desc: 'Amandemen haluan kerja hukum berorganisasi Komisariat.', imageFallback: '[Masukkan foto dokumen GBHK format .jpg]', image: 'bpak-gbhk.jpg' }
  ],
  commissions: []
};

export const senatorData = {
  leader: { name: 'Muhammad Raihan Akbar', role: 'Senator Komisariat', photo: ASSET_PATHS.pengurus.getPath('senator.jpg') },
  workloads: [
    { id: 'senator_sidang', title: 'Sidang Kongres KM ITB', desc: 'Keterlibatan aktif dalam perumusan kebijakan taktis di pusat.', imageFallback: '[Masukkan foto Sidang Kongres format .jpg]', image: 'senator-sidang.jpg' },
    { id: 'senator_bapa', title: 'BAPA (Berita Acara Penarikan Aspirasi)', desc: 'Dokumen legal penarikan suara massa untuk isu internal maupun pusat.', imageFallback: '[Masukkan grafis/dokumen BAPA format .jpg]', image: 'senator-bapa.jpg' },
    { id: 'senator_sosialisasi', title: 'Sosialisasi KM ITB', desc: 'Forum pencerdasan dinamika politik kampus terpusat di Cirebon.', imageFallback: '[Masukkan foto Sosialisasi KM ITB format .jpg]', image: 'senator-sosialisasi.jpg' }
  ],
  bapaPrograms: []
};

export const poseidonData = {
  leader: { name: 'Pandu Malik Aulia', role: 'Ketua POSEIDON', photo: ASSET_PATHS.pengurus.getPath('poseidon.jpg') },
  programs: [
    { id: 'poseidon_mitigasi', title: 'Edukasi Mitigasi Bencana', desc: 'Penyuluhan tanggap darurat tsunami bagi masyarakat pesisir.', imageFallback: '[Masukkan foto Edukasi Mitigasi Bencana format .jpg]', image: 'poseidon-mitigasi.jpg' },
    { id: 'poseidon_nelayan', title: 'Optimalisasi Ekonomi Nelayan', desc: 'Pemetaan wilayah tangkap dan survey peningkatan ekonomi.', imageFallback: '[Masukkan foto Optimalisasi Ekonomi Nelayan format .jpg]', image: 'poseidon-nelayan.jpg' },
    { id: 'poseidon_limbah', title: 'Teknologi Pengolahan Limbah', desc: 'Gerakan Coastal Clean Up dan implementasi alat filtrasi.', imageFallback: '[Masukkan foto Teknologi Pengolahan Limbah format .jpg]', image: 'poseidon-limbah.jpg' }
  ]
};