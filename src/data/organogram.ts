/**
 * Organogram Data - Exact organizational structure
 * HMO TRITON ITB Komisariat
 */

import { OrgChart, OrgNode, OrgConnection } from '@/types/organogram';
import { ASSET_PATHS } from '@/lib/assets';

/**
 * ORGANIZATIONAL NODES
 * Positioned precisely for proper layout
 */
const nodes: OrgNode[] = [
  // ===== FIRST HALF: CORE EXECUTIVE STRUCTURE =====
  {
    id: 'ketua-hmo-ganesha',
    name: 'Ketua HMO "TRITON" ITB Ganesha',
    fullName: 'Ardiansyah Fachrulrozi',
    title: 'Ketua HMO "TRITON" ITB Ganesha',
    photo: ASSET_PATHS.pengurus.getPath('ketua-hmo.jpg'),
    position: { x: 600, y: 100 },
    level: 0,
  },
  {
    id: 'ketua-komisariat',
    name: 'Ketua Komisariat HMO "TRITON" ITB',
    fullName: 'Adrevi Chepa Muhammad',
    title: 'Ketua Komisariat HMO "TRITON" ITB',
    photo: ASSET_PATHS.pengurus.getPath('adrevi-chepa.jpg'),
    position: { x: 1500, y: 100 },
    level: 1,
  },
  {
    id: 'bpak',
    name: 'BPAK HMO "TRITON" ITB',
    fullName: 'Elok Ensa Anindhita',
    title: 'BPAK HMO "TRITON" ITB',
    photo: ASSET_PATHS.pengurus.getPath('bpak.jpg'),
    position: { x: 2400, y: 100 },
    level: 0,
  },
  {
    id: 'senator-komisariat',
    name: 'Senator Komisariat HMO "TRITON" ITB',
    fullName: 'Muhammad Raihan Akbar',
    title: 'Senator Komisariat HMO "TRITON" ITB',
    photo: ASSET_PATHS.pengurus.getPath('senator.jpg'),
    position: { x: 600, y: 280 },
    level: 1,
  },
  {
    id: 'kesekjenan',
    name: 'Kesekjenan',
    fullName: 'Laila Anggraini',
    title: 'Kesekjenan',
    photo: ASSET_PATHS.pengurus.getPath('kesekjenan.jpg'),
    position: { x: 1500, y: 280 },
    level: 2,
  },
  {
    id: 'poseidon',
    name: 'POSEIDON',
    fullName: 'Pandu Malik Aulia',
    title: 'POSEIDON',
    photo: ASSET_PATHS.pengurus.getPath('poseidon.jpg'),
    position: { x: 2400, y: 280 },
    level: 2,
  },
  {
    id: 'sekretaris',
    name: 'Sekretaris',
    fullName: 'Azhar Nursadiyyah',
    title: 'Sekretaris',
    photo: ASSET_PATHS.pengurus.getPath('sekretaris.jpg'),
    position: { x: 1100, y: 460 },
    level: 2,
  },
  {
    id: 'bendahara',
    name: 'Bendahara',
    fullName: 'Rika Aulia',
    title: 'Bendahara',
    photo: ASSET_PATHS.pengurus.getPath('bendahara.jpg'),
    position: { x: 1500, y: 460 },
    level: 2,
  },
  {
    id: 'pendanaan',
    name: 'Pendanaan',
    fullName: 'Risma Amelia',
    title: 'Pendanaan',
    photo: ASSET_PATHS.pengurus.getPath('pendanaan.jpg'),
    position: { x: 1900, y: 460 },
    level: 2,
  },

  // ===== LEVEL 3: BIDANG (Main divisions with wider spacing) =====
  {
    id: 'pmsda',
    name: 'PMSDA',
    fullName: 'Hanif Alghiffari Pohan',
    title: 'PMSDA',
    photo: ASSET_PATHS.pengurus.getPath('pmsda.jpg'),
    position: { x: 300, y: 700 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'akilprof',
    name: 'Akilprof',
    fullName: 'Dieva Riswanda Putra',
    title: 'Akilprof',
    photo: ASSET_PATHS.pengurus.getPath('akilprof.jpg'),
    position: { x: 900, y: 700 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'eksternal',
    name: 'Eksternal',
    fullName: 'Nora Prima Lestari',
    title: 'Eksternal',
    photo: ASSET_PATHS.pengurus.getPath('eksternal.jpg'),
    position: { x: 1500, y: 700 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'internal',
    name: 'Internal',
    fullName: 'Timothy De Niro Junior Siahaan',
    title: 'Internal',
    photo: ASSET_PATHS.pengurus.getPath('internal.jpg'),
    position: { x: 2100, y: 700 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'medkominfo',
    name: 'Medkominfo',
    fullName: 'Tiara Dewi Syifa Febriany',
    title: 'Medkominfo',
    photo: ASSET_PATHS.pengurus.getPath('medkominfo.jpg'),
    position: { x: 2700, y: 700 },
    level: 3,
    isDivision: true,
  },

  // ===== LEVEL 4: DIVISI (Sub-divisions under each Bidang) =====
  {
    id: 'psda',
    name: 'PSDA',
    fullName: 'Nazua Khaliza Lawahizh',
    title: 'PSDA',
    photo: ASSET_PATHS.pengurus.getPath('psda.jpg'),
    position: { x: 200, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'pmsda',
  },
  {
    id: 'msda',
    name: 'MSDA',
    fullName: 'Nazwa Nurul Fatimah',
    title: 'MSDA',
    photo: ASSET_PATHS.pengurus.getPath('msda.jpg'),
    position: { x: 400, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'pmsda',
  },
  {
    id: 'akad-keilmuan',
    name: 'Akademik dan Keilmuan',
    fullName: 'Reni Wahyu Ningsih',
    title: 'Akademik dan Keilmuan',
    photo: ASSET_PATHS.pengurus.getPath('akad-keilmuan.jpg'),
    position: { x: 800, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'akilprof',
  },
  {
    id: 'keprofesian',
    name: 'Keprofesian',
    fullName: 'Ardika Fauzianto',
    title: 'Keprofesian',
    photo: ASSET_PATHS.pengurus.getPath('keprofesian.jpg'),
    position: { x: 1000, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'akilprof',
  },
  {
    id: 'intrakampus',
    name: 'Intrakampus',
    fullName: 'Dhiya’ Akmal Fauzan',
    title: 'Intrakampus',
    photo: ASSET_PATHS.pengurus.getPath('intrakampus.jpg'),
    position: { x: 1400, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'eksternal',
  },
  {
    id: 'ekstrakampus',
    name: 'Ekstrakampus',
    fullName: 'Fitri Apriliani Dwi Astuti',
    title: 'Ekstrakampus',
    photo: ASSET_PATHS.pengurus.getPath('ekstrakampus.jpg'),
    position: { x: 1600, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'eksternal',
  },
  {
    id: 'kekeluargaan',
    name: 'Kekeluargaan',
    fullName: 'Amanda Riby Agistia',
    title: 'Kekeluargaan',
    photo: ASSET_PATHS.pengurus.getPath('kekeluargaan.jpg'),
    position: { x: 2000, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'internal',
  },
  {
    id: 'minat-bakat',
    name: 'Minat dan Bakat',
    fullName: 'Al May Rafi Izdhihar',
    title: 'Minat dan Bakat',
    photo: ASSET_PATHS.pengurus.getPath('minat-bakat.jpg'),
    position: { x: 2200, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'internal',
  },
  {
    id: 'desain',
    name: 'Desain',
    fullName: 'Zahra Nafisha Maulida',
    title: 'Desain',
    photo: ASSET_PATHS.pengurus.getPath('desain.jpg'),
    position: { x: 2600, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'medkominfo',
  },
  {
    id: 'publikasi-dokumentasi',
    name: 'Publikasi dan Dokumentasi',
    fullName: 'Andi Muyassar Alfarizi Hatta',
    title: 'Publikasi dan Dokumentasi',
    photo: ASSET_PATHS.pengurus.getPath('publikasi-dokumentasi.jpg'),
    position: { x: 2800, y: 920 },
    level: 4,
    isDivision: true,
    parentId: 'medkominfo',
  },
];

/**
 * ORGANIZATIONAL CONNECTIONS
 * Implements three line types with exact directional rules
 */
const connections: OrgConnection[] = [
  // ===== GARIS PENGAWASAN (Supervision - Dotted with Arrow) =====
  // Rule: Ketua Komisariat -> POSEIDON (Arrow TO Poseidon)
  {
    id: 'supervision-ketua-poseidon',
    from: 'ketua-komisariat',
    to: 'poseidon',
    type: 'supervision',
    label: 'Pengawasan',
  },
  // Rule: BPAK HMO TRITON ITB -> Ketua Komisariat (Arrow TO Ketua Komisariat)
  {
    id: 'supervision-bpak-ketua',
    from: 'bpak',
    to: 'ketua-komisariat',
    type: 'supervision',
    label: 'Pengawasan',
  },

  // ===== GARIS KOORDINASI (Coordination - Dashed, NO Arrow) =====
  // Rule: Ketua Komisariat <-> Ketua HMO TRITON ITB Ganesha
  {
    id: 'coordination-ketua-hmo',
    from: 'ketua-komisariat',
    to: 'ketua-hmo-ganesha',
    type: 'coordination',
    label: 'Koordinasi',
  },
  // Rule: Ketua Komisariat <-> Senator Komisariat
  {
    id: 'coordination-ketua-senator',
    from: 'ketua-komisariat',
    to: 'senator-komisariat',
    type: 'coordination',
    label: 'Koordinasi',
  },
  // Rule: Sekretaris <-> Bendahara <-> Pendanaan (Horizontal, no upward connection)
  {
    id: 'coordination-sekretaris-bendahara',
    from: 'sekretaris',
    to: 'bendahara',
    type: 'coordination',
    label: 'Koordinasi',
  },
  {
    id: 'coordination-bendahara-pendanaan',
    from: 'bendahara',
    to: 'pendanaan',
    type: 'coordination',
    label: 'Koordinasi',
  },
  // Rule: Ketua Komisariat <-> All 6 Bidang (Dashed line parallel to Command line)
  {
    id: 'coordination-ketua-pmsda',
    from: 'ketua-komisariat',
    to: 'pmsda',
    type: 'coordination',
  },
  {
    id: 'coordination-ketua-akilprof',
    from: 'ketua-komisariat',
    to: 'akilprof',
    type: 'coordination',
  },
  {
    id: 'coordination-ketua-eksternal',
    from: 'ketua-komisariat',
    to: 'eksternal',
    type: 'coordination',
  },
  {
    id: 'coordination-ketua-internal',
    from: 'ketua-komisariat',
    to: 'internal',
    type: 'coordination',
  },
  {
    id: 'coordination-ketua-medkominfo',
    from: 'ketua-komisariat',
    to: 'medkominfo',
    type: 'coordination',
  },
  {
    id: 'coordination-ketua-kesekjenan',
    from: 'ketua-komisariat',
    to: 'kesekjenan',
    type: 'coordination',
  },

  // ===== GARIS KOMANDO (Command - Solid with Arrow) =====
  // Rule: Ketua Komisariat -> All 6 Bidang (Arrow TO Bidang)
  {
    id: 'command-ketua-pmsda',
    from: 'ketua-komisariat',
    to: 'pmsda',
    type: 'command',
  },
  {
    id: 'command-ketua-akilprof',
    from: 'ketua-komisariat',
    to: 'akilprof',
    type: 'command',
  },
  {
    id: 'command-ketua-eksternal',
    from: 'ketua-komisariat',
    to: 'eksternal',
    type: 'command',
  },
  {
    id: 'command-ketua-internal',
    from: 'ketua-komisariat',
    to: 'internal',
    type: 'command',
  },
  {
    id: 'command-ketua-medkominfo',
    from: 'ketua-komisariat',
    to: 'medkominfo',
    type: 'command',
  },
  {
    id: 'command-ketua-kesekjenan',
    from: 'ketua-komisariat',
    to: 'kesekjenan',
    type: 'command',
  },

  // Rule: Kesekjenan -> Sekretaris, Bendahara, Pendanaan (Downward command)
  {
    id: 'command-kesekjenan-sekretaris',
    from: 'kesekjenan',
    to: 'sekretaris',
    type: 'command',
  },
  {
    id: 'command-kesekjenan-bendahara',
    from: 'kesekjenan',
    to: 'bendahara',
    type: 'command',
  },
  {
    id: 'command-kesekjenan-pendanaan',
    from: 'kesekjenan',
    to: 'pendanaan',
    type: 'command',
  },

  // Rule: Bidang -> Divisi (Arrow TO Divisi)
  // PMSDA divisi
  {
    id: 'command-pmsda-psda',
    from: 'pmsda',
    to: 'psda',
    type: 'command',
  },
  {
    id: 'command-pmsda-msda',
    from: 'pmsda',
    to: 'msda',
    type: 'command',
  },
  // Akilprof divisi
  {
    id: 'command-akilprof-akad',
    from: 'akilprof',
    to: 'akad-keilmuan',
    type: 'command',
  },
  {
    id: 'command-akilprof-keprofesian',
    from: 'akilprof',
    to: 'keprofesian',
    type: 'command',
  },
  // Eksternal divisi
  {
    id: 'command-eksternal-intrakampus',
    from: 'eksternal',
    to: 'intrakampus',
    type: 'command',
  },
  {
    id: 'command-eksternal-ekstrakampus',
    from: 'eksternal',
    to: 'ekstrakampus',
    type: 'command',
  },
  // Internal divisi
  {
    id: 'command-internal-kekeluargaan',
    from: 'internal',
    to: 'kekeluargaan',
    type: 'command',
  },
  // Medkominfo divisi
  {
    id: 'command-medkominfo-desain',
    from: 'medkominfo',
    to: 'desain',
    type: 'command',
  },
  {
    id: 'command-medkominfo-publikasi',
    from: 'medkominfo',
    to: 'publikasi-dokumentasi',
    type: 'command',
  },
];

/**
 * Exported chart data
 */
export const orgChartData: OrgChart = {
  nodes,
  connections,
  svgDimensions: {
    width: 3000,
    height: 1200,
  },
};

/**
 * Helper function to get node by ID
 */
export const getNodeById = (id: string): OrgNode | undefined => {
  return orgChartData.nodes.find((node) => node.id === id);
};

/**
 * Helper function to get connections for a node
 */
export const getNodeConnections = (nodeId: string): OrgConnection[] => {
  return orgChartData.connections.filter(
    (conn) => conn.from === nodeId || conn.to === nodeId
  );
};

/**
 * Helper function to get children of a node
 */
export const getChildNodes = (parentId: string): OrgNode[] => {
  return orgChartData.nodes.filter((node) => node.parentId === parentId);
};
