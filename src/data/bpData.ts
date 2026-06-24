import { ASSET_PATHS } from '../lib/assets';

export const bpData = [
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
      { id: 'triplan', title: 'TRIPLAN', desc: 'Perancangan dan penyusunan timeline seluruh kegiatan Komisariat', imageFallback: '[Masukkan foto timeline TRIPLAN format .jpg]' },
      { id: 'tridate', title: 'TRIDATE', desc: 'Sistem update dan realisasi pelaksanaan kegiatan himpunan', imageFallback: '[Masukkan foto pelaporan TRIDATE format .jpg]' },
      { id: 'trilink', title: 'TRILINK', desc: 'Pengarsipan seluruh dokumen dan informasi kegiatan secara terpusat', imageFallback: '[Masukkan foto arsip TRILINK format .jpg]', url: 'https://linktr.ee/komisariathmotritonitb' },
      { id: 'tritonitb-com', title: 'TRITONITB.COM', desc: 'Penyampaian informasi profil Komisariat melalui website', imageFallback: '[Masukkan screenshot Website format .jpg]' }
    ],
    divisions: [
      {
        id: 'sekretaris', title: 'Divisi Sekretaris',
        leader: { name: 'Azhar Nursadiyyah', role: 'Ketua Divisi Sekretaris', photo: ASSET_PATHS.pengurus.getPath('sekretaris.jpg') },
        programs: [
          { id: 'triarchive', title: 'TRI-Archive', desc: 'Media pengarsipan dokumen administrasi terpusat', imageFallback: '[Masukkan foto sistem arsip TRI-Archive format .jpg]' },
          { id: 'tridocs', title: 'TRIDOCS', desc: 'Penyediaan template dokumen untuk kebutuhan administrasi', imageFallback: '[Masukkan foto template TRIDOCS format .jpg]' },
          { id: 'triadmin', title: 'TRI-Admin', desc: 'SOP administrasi dan penyelesaian masalah administratif', imageFallback: '[Masukkan foto SOP TRI-Admin format .jpg]' },
          { id: 'fortri', title: 'FORTRI', desc: 'Sistem permintaan pembuatan surat atau dokumen', imageFallback: '[Masukkan foto formulir FORTRI format .jpg]' }
        ]
      },
      {
        id: 'bendahara', title: 'Divisi Bendahara',
        leader: { name: 'Rika Aulia', role: 'Ketua Divisi Bendahara', photo: ASSET_PATHS.pengurus.getPath('bendahara.jpg') },
        programs: [
          { id: 'evaluasi-rab', title: 'Evaluasi RAB', desc: 'Perencanaan anggaran dan evaluasi pendanaan', imageFallback: '[Masukkan foto evaluasi RAB format .jpg]' },
          { id: 'seatriton', title: 'SEATRITON', desc: 'Pengelolaan keuangan melalui rekening resmi himpunan', imageFallback: '[Masukkan foto rekening SEATRITON format .jpg]', url: 'https://docs.google.com/spreadsheets/d/1CpWglBgp9ZxfjqhqMLQPCothNAdvtCKz8CHOWLiICdc/edit?gid=0#gid=0' },
          { id: 'triton-treasury', title: 'TRITON TREASURY', desc: 'Pelaporan cashflow keuangan secara transparan', imageFallback: '[Masukkan foto laporan TRITON Treasury format .jpg]', url: 'https://docs.google.com/spreadsheets/d/1rLHZFLf4tOJIdFCx7djXO-VHywLWiLEO0n1iUZlHdQM/edit?usp=sharing' }
        ]
      },
      {
        id: 'pendanaan', title: 'Divisi Pendanaan',
        leader: { name: 'Risma Amelia', role: 'Ketua Divisi Pendanaan', photo: ASSET_PATHS.pengurus.getPath('pendanaan.jpg') },
        programs: [
          // REVISI 1: TRITON Mart diganti menjadi HMO Mart
          { id: 'hmo-mart', title: 'HMO Mart', desc: 'Unit usaha internal penjualan F&B dan merchandise', imageFallback: '[Masukkan foto kegiatan HMO Mart format .jpg]' },
          { id: 'triattire', title: 'TRIATTIRE', desc: 'Pengadaan pakaian resmi (Jahim, Jalap, Kemlap)', imageFallback: '[Masukkan foto desain TRIATTIRE format .jpg]' },
          { id: 'tricon', title: 'TRICON', desc: 'Kerja sama sponsorship dengan donatur dan alumni', imageFallback: '[Masukkan foto partnership TRICON format .jpg]' }
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
      { id: 'orbit', title: 'ORBIT', desc: 'Benchmarking lintas jurusan dan diskusi irisan keilmuan', imageFallback: '[Masukkan foto diskusi ORBIT format .jpg]' }
    ],
    divisions: [
      {
        id: 'akad-keilmuan', title: 'Divisi Akademik & Keilmuan',
        leader: { name: 'Reni Wahyu Ningsih', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('akad-keilmuan.jpg') },
        programs: [
          { id: 'trisula', title: 'TRISULA', desc: 'Arsip materi perkuliahan, bank soal, dan ulasan matkul', imageFallback: '[Masukkan foto bank soal TRISULA format .jpg]' },
          { id: 'tubay', title: 'Tubay (Tutor Sebaya)', desc: 'Kegiatan tutorial akademik dan kuis simulasi ujian', imageFallback: '[Masukkan foto kegiatan Tubay format .jpg]' },
          { id: 'klinik', title: 'KLINIK', desc: 'Pembinaan dan inkubasi inovasi untuk kompetisi ilmiah', imageFallback: '[Masukkan foto workshop KLINIK format .jpg]' },
          { id: 'samudra', title: 'SAMUDRA', desc: 'Konten literasi isu oseanografi edukatif di sosial media', imageFallback: '[Masukkan desain konten SAMUDRA format .jpg]' },
          { id: 'oskar', title: 'OSKAR', desc: 'Seminar penulisan Skripsi, Karya Ilmiah, dan Riset', imageFallback: '[Masukkan foto seminar OSKAR format .jpg]' }
        ]
      },
      {
        id: 'keprofesian', title: 'Divisi Keprofesian',
        leader: { name: 'Ardika Fauzianto', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('keprofesian.jpg') },
        programs: [
          { id: 'loka', title: 'LOKA', desc: 'Log Oseanografi dan Karier Anggota (Database magang)', imageFallback: '[Masukkan foto database LOKA format .jpg]' },
          { id: 'pelita', title: 'PELITA', desc: 'Program Edukasi dan Latihan Anggota (Pelatihan software)', imageFallback: '[Masukkan foto pelatihan PELITA format .jpg]' },
          { id: 'badai', title: 'BADAI', desc: 'Bincang Alumni dan Arah Inspirasi (Sharing session)', imageFallback: '[Masukkan foto acara BADAI format .jpg]' },
          { id: 'compvis', title: 'Company Visit', desc: 'Kunjungan industri untuk observasi operasional perusahaan', imageFallback: '[Masukkan foto Company Visit format .jpg]' }
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
      { id: 'trident', title: 'TRIDENT', desc: 'Perayaan Dies Natalis HMO "TRITON" ITB', imageFallback: '[Masukkan foto acara TRIDENT format .jpg]' },
      { id: 'sail', title: 'SAIL', desc: 'Apresiasi perayaan Parade Wisuda bagi alumni S1', imageFallback: '[Masukkan foto Parade Wisuda SAIL format .jpg]' },
      { id: 'internal-feedback', title: 'Internal Feedback', desc: 'Penghimpunan aspirasi massa secara berkala', imageFallback: '[Masukkan grafis form Internal Feedback format .jpg]' }
    ],
    divisions: [
      {
        id: 'minat-bakat', title: 'Divisi Minat Bakat',
        leader: { name: 'Al May Rafi Izdhihar', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('minat-bakat.jpg') },
        programs: [
          { id: 'talent-compass', title: 'Talent Compass', desc: 'Pemetaan minat dan bakat anggota', imageFallback: '[Masukkan grafis Talent Compass format .jpg]' },
          { id: 'triton-arena', title: 'TRITON Arena', desc: 'Kegiatan olahraga rutin dan kompetisi internal', imageFallback: '[Masukkan foto olahraga TRITON Arena format .jpg]' }
        ]
      },
      {
        id: 'kekeluargaan', title: 'Divisi Kekeluargaan',
        leader: { name: 'Amanda Riby Agistia', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('kekeluargaan.jpg') },
        programs: [
          { id: 'komis-bergembira', title: 'KOMIS BERGEMBIRA', desc: 'Kegiatan internalisasi (Bukber, Makrab, Welcoming Party)', imageFallback: '[Masukkan foto Makrab KOMIS BERGEMBIRA format .jpg]' },
          { id: 'triday', title: 'TRIDAY', desc: 'Pemberian ucapan ulang tahun dan hadiah kepada anggota', imageFallback: '[Masukkan foto kado TRIDAY format .jpg]' },
          { id: 'house-of-triton', title: 'HOUSE OF TRITON', desc: 'Pengelolaan fasilitas sekretariat dan foto kegiatan', imageFallback: '[Masukkan foto Sekretariat HOUSE OF TRITON format .jpg]' },
          { id: 'sekre-bersih', title: 'SEKRE BERSIH', desc: 'Kegiatan bersih-bersih sekretariat sesuai jadwal piket', imageFallback: '[Masukkan foto piket SEKRE BERSIH format .jpg]' }
        ]
      }
    ]
  },
  {
    id: 'eksternal',
    title: 'Bidang Eksternal',
    desc: 'Membangun relasi eksternal di lingkup ITB maupun di luar ITB untuk memperluas jaringan',
    logo: ASSET_PATHS.divisions.getPath('eksternal.png'),
    // REVISI 2: Foto Kak Nora Prima Lestari dipastikan menunjuk ke eksternal.jpg
    leader: { name: 'Nora Prima Lestari', role: 'Ketua Bidang Eksternal', photo: ASSET_PATHS.pengurus.getPath('eksternal.jpg') },
    programs: [
      { id: 'jalin-external', title: 'JALIN External', desc: 'Koordinasi perancangan dan evaluasi program kerja eksternal', imageFallback: '[Masukkan foto rapat JALIN External format .jpg]' }
    ],
    divisions: [
      {
        id: 'intrakampus', title: 'Divisi Intrakampus',
        leader: { name: 'Dhiya’ Akmal Fauzan', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('intrakampus.jpg') },
        programs: [
          { id: 'tide-talk', title: 'TIDE & TALK', desc: 'Benchmarking santai dengan HMPS di ITB Cirebon', imageFallback: '[Masukkan foto TIDE & TALK format .jpg]' },
          { id: 'eureka', title: 'EUREKA', desc: 'Exploring and Sharing Keilmuan Bersama HMPS Ganesha', imageFallback: '[Masukkan foto EUREKA format .jpg]' },
          { id: 'unit-a', title: 'UNIT-A', desc: 'Kolaborasi kegiatan dengan UKM di ITB Cirebon', imageFallback: '[Masukkan foto acara UNIT-A format .jpg]' },
          { id: 'resonaira', title: 'RESONAIRA', desc: 'Ucapan ulang tahun HMPS via media sosial', imageFallback: '[Masukkan foto poster RESONAIRA format .jpg]' },
          { id: 'tribute', title: 'TRIBUTE', desc: 'Pemberian kado apresiasi ulang tahun HMPS ITB Cirebon', imageFallback: '[Masukkan foto kado TRIBUTE format .jpg]' },
          { id: 'corelist', title: 'CORELIST', desc: 'Penyusunan database narahubung lembaga di ITB', imageFallback: '[Masukkan grafis database CORELIST format .jpg]' }
        ]
      },
      {
        id: 'ekstrakampus', title: 'Divisi Ekstrakampus',
        leader: { name: 'Fitri Apriliani Dwi Astuti', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('ekstrakampus.jpg') },
        programs: [
          { id: 'scope', title: 'SCOPE', desc: 'Studi banding dengan himpunan luar kampus ITB', imageFallback: '[Masukkan foto Studi Banding SCOPE format .jpg]' },
          { id: 'impact', title: 'IMPACT', desc: 'Kerja sama media partner publikasi', imageFallback: '[Masukkan foto kolaborasi IMPACT format .jpg]' },
          { id: 'x-cuan', title: 'X-CUAN', desc: 'Pengelolaan pengajuan kerja sama sponsorship', imageFallback: '[Masukkan foto sponsorship X-CUAN format .jpg]' },
          { id: 'ter-hub', title: 'TER-Hub', desc: 'Database eksternal himpunan dan perusahaan', imageFallback: '[Masukkan grafis TER-Hub format .jpg]' },
          { id: 'trace', title: 'TRACE', desc: 'Kegiatan temu alumni dan sharing wawasan profesional', imageFallback: '[Masukkan foto Temu Alumni TRACE format .jpg]' },
          { id: 'a-map', title: 'A-MAP', desc: 'Pengelolaan database alumni terstruktur', imageFallback: '[Masukkan grafis sistem A-MAP format .jpg]' }
        ]
      }
    ]
  },
  {
    id: 'pmsda',
    title: 'Bidang PMSDA',
    desc: 'Pengembangan dan Manajemen Sumber Daya Anggota secara berkelanjutan',
    // REVISI 5: Perbaikan jalur file logo PMSDA agar langsung mengarah ke pmsda.png
    logo: ASSET_PATHS.divisions.getPath('pmsda.png'), 
    leader: { name: 'Hanif Alghiffari Pohan', role: 'Ketua Bidang PMSDA', photo: ASSET_PATHS.pengurus.getPath('pmsda.jpg') },
    programs: [
      { id: 'pendiksar', title: 'PENDIKSAR', desc: 'Pelatihan Panitia Kaderisasi Pendidikan Dasar', imageFallback: '[Masukkan foto PENDIKSAR format .jpg]' },
      { id: 'sekolah-stakeholder', title: 'Sekolah Stakeholder', desc: 'Pendampingan anggota yang ingin menjadi stakeholder kepanitiaan', imageFallback: '[Masukkan foto Sekolah Stakeholder format .jpg]' },
      { id: 'bedah-ruk', title: 'BEDAH RUK', desc: 'Kajian dan evaluasi dokumen Rancangan Umum Kaderisasi', imageFallback: '[Masukkan foto BEDAH RUK format .jpg]' }
    ],
    divisions: [
      {
        id: 'psda', title: 'Divisi PSDA',
        // REVISI 3: Mengubah Nama Ketua Divisi PSDA
        leader: { name: 'Nayla Elma Apriwianda', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('psda.jpg') },
        programs: [
          { id: 'diksar', title: 'DIKSAR', desc: 'Pendidikan Dasar untuk penurunan nilai dan budaya himpunan', imageFallback: '[Masukkan foto DIKSAR format .jpg]' },
          { id: 'ldo', title: 'LDO', desc: 'Latihan Dasar Organisasi untuk fase penyesuaian', imageFallback: '[Masukkan foto acara LDO format .jpg]' },
          { id: 'lko', title: 'LKO', desc: 'Latihan Kepemimpinan Organisasi untuk fase penerapan', imageFallback: '[Masukkan foto acara LKO format .jpg]' }
        ]
      },
      {
        id: 'msda', title: 'Divisi MSDA',
        leader: { name: 'Nazwa Nurul Fatimah', role: 'Ketua Divisi', photo: ASSET_PATHS.pengurus.getPath('msda.jpg') },
        programs: [
          { id: 'triton-base', title: 'TRITON Base', desc: 'Database profil seluruh anggota himpunan', imageFallback: '[Masukkan grafis TRITON Base format .jpg]', url: 'https://bit.ly/TRITONBase' },
          { id: 'triton-check', title: 'TRITON Check', desc: 'Pengecekan kehadiran dan rapor partisipasi anggota', imageFallback: '[Masukkan foto absensi TRITON Check format .jpg]', url: 'https://bit.ly/TRITONCheck' },
          { id: 'totm', title: 'TOTM', desc: 'Triton Of The Month: Apresiasi anggota teraktif', imageFallback: '[Masukkan poster TOTM format .jpg]' },
          { id: 'apres-triton', title: 'APRES TRITON!', desc: 'Apresiasi prestasi akademik dan non-akademik', imageFallback: '[Masukkan foto APRES TRITON format .jpg]', url: 'https://bit.ly/APRESTRITON' },
          { id: 'ber-intern', title: 'TRITON #Ber-Intern', desc: 'Program magang internal badan kelengkapan himpunan', imageFallback: '[Masukkan foto magang #Ber-Intern format .jpg]' }
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
    // REVISI 4: Semua proker Medkominfo dipindahkan langsung ke array programs Bidang. Array divisions dikosongkan.
    programs: [
      { id: 'gdv', title: 'GDV', desc: 'Pembuatan Grand Design Visual acuan identitas himpunan', imageFallback: '[Masukkan grafis panduan GDV format .jpg]' },
      { id: 'tide', title: 'TIDE', desc: 'Mekanisme terstruktur pemenuhan permintaan desain', imageFallback: '[Masukkan workflow TIDE format .jpg]' },
      { id: 'triton-archive', title: 'TRITON Archive System', desc: 'Standarisasi drive pengarsipan dokumentasi kegiatan', imageFallback: '[Masukkan foto TRITON Archive format .jpg]' },
      { id: 'triton-recap', title: 'TRITON Recap', desc: 'Rekap visual kegiatan bulanan di media sosial', imageFallback: '[Masukkan konten TRITON Recap format .jpg]' },
      { id: 'triton-insight', title: 'TRITON Insight', desc: 'Publikasi konten edukatif seputar oseanografi', imageFallback: '[Masukkan konten TRITON Insight format .jpg]' },
      { id: 'hari-besar', title: 'Hari Besar', desc: 'Desain dan ucapan peringatan hari besar di media sosial', imageFallback: '[Masukkan desain Hari Besar format .jpg]' }
    ],
    divisions: [] 
  }
];