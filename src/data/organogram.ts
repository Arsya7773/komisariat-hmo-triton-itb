/**
 * Organogram Data - Exact organizational structure
 * HMO TRITON ITB Komisariat
 */

import { OrgChart, OrgNode, OrgConnection } from '@/types/organogram';

/**
 * ORGANIZATIONAL NODES
 * Positioned precisely for proper layout
 */
const nodes: OrgNode[] = [
  // ===== LEVEL 0: TOP (Supervision targets) =====
  {
    id: 'ketua-komisariat',
    name: 'Adrevi Chepa\nMuhammad',
    fullName: 'Adrevi Chepa Muhammad',
    title: 'Ketua Komisariat',
    photo: '/assets/pengurus/adrevi-chepa.jpg',
    position: { x: 900, y: 80 },
    level: 0,
  },
  {
    id: 'bpak',
    name: 'BPAK HMO\nTRITON ITB',
    title: 'BPAK HMO TRITON ITB',
    position: { x: 1440, y: 80 },
    level: 0,
  },
  {
    id: 'poseidon',
    name: 'POSEIDON',
    title: 'POSEIDON',
    position: { x: 1440, y: 270 },
    level: 0,
  },

  // ===== LEVEL 1: COORDINATION LEVEL =====
  {
    id: 'ketua-hmo-ganesha',
    name: 'Ketua HMO\nGanesha',
    title: 'Ketua HMO TRITON ITB Ganesha',
    position: { x: 360, y: 80 },
    level: 1,
  },
  {
    id: 'senator-komisariat',
    name: 'Senator\nKomisariat',
    title: 'Senator Komisariat HMO TRITON ITB',
    position: { x: 360, y: 225 },
    level: 1,
  },

  // ===== LEVEL 2: EXECUTIVE TEAM (Kesekjenan on LEFT with its divisions) =====
  {
    id: 'kesekjenan',
    name: 'Kesekjenan',
    title: 'Bidang Kesekjenan',
    position: { x: 300, y: 315 },
    level: 2,
  },
  {
    id: 'sekretaris',
    name: 'Sekretaris',
    title: 'Sekretaris',
    position: { x: 180, y: 450 },
    level: 2,
  },
  {
    id: 'bendahara',
    name: 'Bendahara',
    title: 'Bendahara',
    position: { x: 300, y: 450 },
    level: 2,
  },
  {
    id: 'pendanaan',
    name: 'Pendanaan',
    title: 'Pendanaan',
    position: { x: 420, y: 450 },
    level: 2,
  },

  // ===== LEVEL 3: BIDANG (Main divisions - 5 total, spread horizontally at bottom) =====
  {
    id: 'pmsda',
    name: 'PMSDA',
    title: 'Bidang Pengembangan Minat & Studi Daya Anggaran',
    position: { x: 180, y: 585 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'akilprof',
    name: 'Akilprof',
    title: 'Bidang Akademik & Keprofesian',
    position: { x: 480, y: 585 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'eksternal',
    name: 'Eksternal',
    title: 'Bidang Eksternal',
    position: { x: 780, y: 585 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'internal',
    name: 'Internal',
    title: 'Bidang Internal',
    position: { x: 1080, y: 585 },
    level: 3,
    isDivision: true,
  },
  {
    id: 'medkominfo',
    name: 'Medkominfo',
    title: 'Bidang Media, Komunikasi & Informasi',
    position: { x: 1380, y: 585 },
    level: 3,
    isDivision: true,
  },

  // ===== LEVEL 4: DIVISI (Sub-divisions under each Bidang) =====
  // Under PMSDA (parent at x=180)
  {
    id: 'psda',
    name: 'PSDA',
    title: 'Pengembangan Studi Daya Anggaran',
    position: { x: 120, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'pmsda',
  },
  {
    id: 'msda',
    name: 'MSDA',
    title: 'Minat & Studi Daya Anggaran',
    position: { x: 240, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'pmsda',
  },

  // Under Akilprof (parent at x=480)
  {
    id: 'akad-keilmuan',
    name: 'Akad &\nKeilmuan',
    title: 'Akademik & Keilmuan',
    position: { x: 420, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'akilprof',
  },
  {
    id: 'keprofesian',
    name: 'Keprofesian',
    title: 'Keprofesian',
    position: { x: 540, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'akilprof',
  },

  // Under Eksternal (parent at x=780)
  {
    id: 'intrakampus',
    name: 'Intrakampus',
    title: 'Intrakampus',
    position: { x: 720, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'eksternal',
  },
  {
    id: 'ekstrakampus',
    name: 'Ekstrakampus',
    title: 'Ekstrakampus',
    position: { x: 840, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'eksternal',
  },

  // Under Internal (parent at x=1080)
  {
    id: 'kekeluargaan',
    name: 'Kekeluargaan',
    title: 'Kekeluargaan',
    position: { x: 1020, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'internal',
  },
  {
    id: 'minat-bakat',
    name: 'Minat dan Bakat',
    title: 'Minat dan Bakat',
    position: { x: 1140, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'internal',
  },

  // Under Medkominfo (parent at x=1380)
  {
    id: 'desain',
    name: 'Desain',
    title: 'Desain',
    position: { x: 1320, y: 765 },
    level: 4,
    isDivision: true,
    parentId: 'medkominfo',
  },
  {
    id: 'publikasi-dokumentasi',
    name: 'Publikasi dan Dokumentasi',
    title: 'Publikasi dan Dokumentasi',
    position: { x: 1440, y: 765 },
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
    width: 1800,
    height: 900,
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
