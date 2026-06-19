import { ASSET_PATHS } from '../lib/assets';

export const senatorData = {
  leader: {
    name: 'Muhammad Raihan Akbar',
    role: 'Senator Komisariat HMO "TRITON" ITB',
    photo: ASSET_PATHS.pengurus.getPath('senator.jpg')
  },
  workloads: [
    { id: 'pengambil-kebijakan', title: 'Pengambil Kebijakan', desc: 'Menciptakan kebijakan yang berdampak nyata dan berkelanjutan bagi himpunan.', imageFallback: '[Masukkan foto Pengambilan Kebijakan format .jpg]' },
    { id: 'penjaga-arah-gerak', title: 'Penjaga Arah Gerak', desc: 'Menjaga arah gerak himpunan agar sejalan dengan visi dan kebutuhan massa.', imageFallback: '[Masukkan foto Penjagaan Arah Gerak format .jpg]' },
    { id: 'fasilitator-komunikasi', title: 'Fasilitator Komunikasi', desc: 'Menjadi fasilitator komunikasi antara massa TRITON dengan KM ITB dan Kongres.', imageFallback: '[Masukkan foto Fasilitator Komunikasi format .jpg]' }
  ],
  bapaPrograms: [
    { id: 'bapa-wisuda', title: 'BAPA Wisuda Agustus 2025', desc: 'Penarikan aspirasi terkait keikutsertaan wisudawan dalam Parade Wisuda Agustus atau Oktober.', imageFallback: '[Masukkan foto BAPA Wisuda format .jpg]' },
    { id: 'bapa-relevansi', title: 'BAPA Relevansi KM ITB', desc: 'Penarikan aspirasi mengenai sistem KM ITB dan dukungan terhadap sistem Bikameral.', imageFallback: '[Masukkan foto BAPA Relevansi format .jpg]' },
    { id: 'bapa-multikampus', title: 'BAPA Keterwakilan Multikampus', desc: 'Mengkaji hak suara dan keterwakilan massa Cirebon dalam pengambilan keputusan terpusat.', imageFallback: '[Masukkan foto BAPA Multikampus format .jpg]' },
    { id: 'sekolah-stakeholder-senator', title: 'Sekolah Stakeholder', desc: 'Pencerdasan massa terkait struktur, konsepsi, dan dinamika KM ITB.', imageFallback: '[Masukkan foto Sekolah Stakeholder format .jpg]' }
  ]
};
