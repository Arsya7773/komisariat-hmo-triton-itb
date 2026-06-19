import { ASSET_PATHS } from '../lib/assets';

export const bpakData = {
  leader: {
    name: 'Elok Ensa Anindhita',
    role: 'Ketua BPAK Komisariat HMO "TRITON" ITB',
    photo: ASSET_PATHS.pengurus.getPath('bpak.jpg')
  },
  mainFunctions: [
    { 
      id: 'rapat-internal-bpak', 
      title: 'Rapat Internal BPAK', 
      desc: 'Memantau dan memastikan anggota BPAK bekerja sesuai dengan fungsinya secara rutin setiap 2 bulan sekali.', 
      imageFallback: '[Masukkan foto Dokumentasi Rapat BPAK format .jpg]' 
    },
    { 
      id: 'dokumen-pag', 
      title: 'Dokumen PAG', 
      desc: 'Melakukan Forum Penyelarasan Arah Gerak (FPAG) dan mengesahkan dokumen PAG sebagai referensi kepengurusan.', 
      imageFallback: '[Masukkan foto Pengesahan Dokumen PAG format .jpg]' 
    }
  ],
  commissions: [
    {
      id: 'legislasi',
      title: 'Komisi Legislasi',
      desc: 'Membentuk, mengatur, dan melakukan perubahan suatu undang-undang atau dokumen peraturan yang mengikat anggota.',
      functions: [
        { id: 'evaluasi-satu-tahun', title: 'Evaluasi 1 Tahun Komisariat', desc: 'Melakukan kajian terhadap sistem Komisariat HMO "TRITON" ITB yang sedang berlangsung.', imageFallback: '[Masukkan foto Kajian Sistem / Forum Evaluasi format .jpg]' },
        { id: 'kajian-strategis', title: 'Kajian Strategis', desc: 'Mengkaji kebutuhan anggota biasa sebagai bahan pertimbangan dan rekomendasi keberjalanan Komisariat.', imageFallback: '[Masukkan foto Forum Kajian Strategis format .jpg]' }
      ]
    },
    {
      id: 'pengawasan',
      title: 'Komisi Pengawasan',
      desc: 'Mengawasi kinerja Badan-Badan di Komisariat serta mengevaluasi pelaksanaan Garis Besar Haluan Kerja (GBHK).',
      functions: [
        { id: 'evaluasi-kinerja-badan', title: 'Evaluasi Kinerja Badan', desc: 'Pengawasan berkala dan pelaporan evaluasi melalui Lembar Pengawasan terhadap BPK, Senator, dan POSEIDON.', imageFallback: '[Masukkan foto Rapat Evaluasi Kinerja format .jpg]' },
        { id: 'dokumen-gbhk', title: 'Dokumen GBHK', desc: 'Kajian dokumen GBHK 2026 dan melakukan penarikan aspirasi untuk menyusun GBHK 2027.', imageFallback: '[Masukkan foto Penyusunan GBHK format .jpg]' }
      ]
    },
    {
      id: 'advokasi',
      title: 'Komisi Advokasi',
      desc: 'Menindaklanjuti aspirasi, memberikan bantuan hukum, dan memastikan birokrasi serta demokrasi (Pemira) berjalan lancar.',
      functions: [
        { id: 'bantuan-hukum', title: 'Bantuan Hukum', desc: 'Menangani kasus khusus yang melibatkan anggota atau organisasi dan memberikan pendampingan.', imageFallback: '[Masukkan foto Diskusi Bantuan Hukum format .jpg]' },
        { id: 'pemira', title: 'Pemilihan Umum Raya', desc: 'Bertanggung jawab atas keberlangsungan Pemilu Ketua Komisariat dan Senator secara transparan.', imageFallback: '[Masukkan foto Pelaksanaan PEMIRA format .jpg]' },
        { id: 'serap-aspirasi', title: 'Serap Aspirasi', desc: 'Wadah aspirasi bagi massa dalam bentuk wawancara langsung dan formulir online.', imageFallback: '[Masukkan grafis Media Serap Aspirasi format .jpg]' }
      ]
    }
  ]
};