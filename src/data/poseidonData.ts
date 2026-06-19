import { ASSET_PATHS } from '../lib/assets';

export const poseidonData = {
  leader: {
    name: 'Pandu Malik Aulia',
    role: 'Ketua POSEIDON',
    photo: ASSET_PATHS.pengurus.getPath('poseidon.jpg')
  },
  programs: [
    { id: 'poseidon-mitigasi', title: 'Edukasi Mitigasi Bencana', desc: 'Observasi kondisi perairan dan edukasi kelautan/mitigasi bencana bagi masyarakat pesisir.', imageFallback: '[Masukkan foto Mitigasi Bencana format .jpg]' },
    { id: 'poseidon-nelayan', title: 'Optimalisasi Ekonomi Nelayan', desc: 'Peningkatan literasi pesisir untuk memberdayakan ekonomi nelayan lokal di Cirebon.', imageFallback: '[Masukkan foto Ekonomi Nelayan format .jpg]' },
    { id: 'poseidon-limbah', title: 'Teknologi Pengolahan Limbah', desc: 'Pengelolaan sampah pesisir dan penguatan kesadaran masyarakat dalam menjaga ekosistem pantai.', imageFallback: '[Masukkan foto Pengelolaan Limbah format .jpg]' },
    { id: 'poseidon-website', title: 'Website Resmi POSEIDON', desc: 'Pusat dokumentasi, publikasi hasil kajian, dan media monitoring perkembangan desa binaan.', imageFallback: '[Masukkan screenshot Website POSEIDON format .jpg]' }
  ]
};
