import React from 'react';
import { OrgNode } from '@/types/organogram';
import { getNodeById } from '@/data/organogram';

interface ConnectingLinesProps {
  width: number;
  height: number;
}

const REGULAR_NODE_WIDTH = 208;
const REGULAR_NODE_HEIGHT = 96;
const COMPACT_NODE_WIDTH = 160;
const COMPACT_NODE_HEIGHT = 84;
// exact pixel offset whenever a solid and dashed line run parallel
const offset = 8;

const getNodeBounds = (node: OrgNode) => {
  const width = node.level >= 3 ? COMPACT_NODE_WIDTH : REGULAR_NODE_WIDTH;
  const height = node.level >= 3 ? COMPACT_NODE_HEIGHT : REGULAR_NODE_HEIGHT;
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  return {
    centerX: node.position.x,
    centerY: node.position.y,
    leftCenter: node.position.x - halfWidth,
    rightCenter: node.position.x + halfWidth,
    topCenter: node.position.y - halfHeight,
    bottomCenter: node.position.y + halfHeight,
    bottomRightX: node.position.x + halfWidth,
    bottomRightY: node.position.y + halfHeight,
  };
};

const buildLine = (
  path: string,
  stroke: string,
  strokeWidth: number,
  dashArray: string,
  markerEnd: string | null
) => (
  <path
    key={path}
    d={path}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeDasharray={dashArray}
    fill="none"
    markerEnd={markerEnd ?? 'none'}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  width,
  height,
}) => {
  const ketua = getNodeById('ketua-komisariat');
  const ketuaHmo = getNodeById('ketua-hmo-ganesha');
  const bpak = getNodeById('bpak');
  const poseidon = getNodeById('poseidon');
  const kesekjenan = getNodeById('kesekjenan');
  const senator = getNodeById('senator-komisariat');
  const sekretaris = getNodeById('sekretaris');
  const bendahara = getNodeById('bendahara');
  const pendanaan = getNodeById('pendanaan');
  const bidangIds = ['pmsda', 'akilprof', 'eksternal', 'internal', 'medkominfo'];

  if (!ketua || !ketuaHmo || !bpak || !poseidon || !kesekjenan || !senator) {
    return null;
  }

  const ketuaBounds = getNodeBounds(ketua);
  const ketuaHmoBounds = getNodeBounds(ketuaHmo);
  const bpakBounds = getNodeBounds(bpak);
  const poseidonBounds = getNodeBounds(poseidon);
  const kesekjenanBounds = getNodeBounds(kesekjenan);
  const senatorBounds = getNodeBounds(senator);
  const sekretarisBounds = getNodeBounds(sekretaris!);
  const bendaharaBounds = getNodeBounds(bendahara!);
  const pendanaanBounds = getNodeBounds(pendanaan!);

  const bidangLines = bidangIds
    .map((id) => getNodeById(id))
    .filter(Boolean)
    .map((bidangNode) => ({
      id: (bidangNode as OrgNode).id,
      bounds: getNodeBounds(bidangNode as OrgNode),
    }));

  const commandX = ketuaBounds.centerX;
  const leftWingJunctionX = ketuaHmoBounds.centerX; // Dynamic Left Wing
  const leftWingJunctionY = ketuaBounds.centerY;
  const coordinationX = commandX + offset;
  const commandStartY = ketuaBounds.bottomCenter;

  const kesekjenanBranchSolidY = kesekjenanBounds.topCenter - 32;
  const kesekjenanBranchDashedY = kesekjenanBranchSolidY + offset;
  const kesekjenanDashedEntryX = kesekjenanBounds.centerX + offset;
  const kesekjenanBranchDropY = kesekjenanBounds.bottomCenter + 40;

  const fieldBaselineY = bidangLines[0].bounds.topCenter - 60; // Dynamic Field Baseline!
  const coordinationFieldBaselineY = fieldBaselineY + offset;
  const divisionBranchY = bidangLines[0].bounds.bottomCenter + 60; // Dynamic Division Drop!

  const supervisionLines = [
    buildLine(
      `M ${bpakBounds.leftCenter} ${bpakBounds.centerY} H ${ketuaBounds.rightCenter + 24}`,
      '#22d3ee',
      2.5,
      '2,4',
      'url(#arrowSupervision)'
    ),
    buildLine(
      `M ${ketuaBounds.bottomRightX - 32} ${ketuaBounds.bottomCenter} V ${poseidonBounds.topCenter - 40} H ${poseidonBounds.centerX} V ${poseidonBounds.topCenter - 2}`,
      '#22d3ee', 2.5, '2,4', 'url(#arrowSupervision)'
    ),
  ];

  const coordinationLines = [
    // Main trunk from Ketua going left
    buildLine(`M ${ketuaBounds.leftCenter + 4} ${leftWingJunctionY} H ${leftWingJunctionX}`, '#fbbf24', 2, '6,6', null),
    // Branch going UP to Ganesha
    buildLine(`M ${leftWingJunctionX} ${leftWingJunctionY} V ${ketuaHmoBounds.centerY} H ${ketuaHmoBounds.rightCenter - 2}`, '#fbbf24', 2, '6,6', null),
    // Branch going DOWN to Senator
    buildLine(`M ${leftWingJunctionX} ${leftWingJunctionY} V ${senatorBounds.centerY} H ${senatorBounds.rightCenter - 2}`, '#fbbf24', 2, '6,6', null),
    buildLine(
      `M ${coordinationX} ${commandStartY} V ${kesekjenanBranchDashedY}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    // Continue main dashed trunk down to the bottom field baseline
    buildLine(
      `M ${coordinationX} ${kesekjenanBranchDashedY} V ${coordinationFieldBaselineY}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    buildLine(
      `M ${coordinationX} ${kesekjenanBranchDashedY} H ${kesekjenanDashedEntryX} V ${kesekjenanBounds.topCenter} H ${kesekjenanBounds.centerX}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    // Vertical dashed drop from Kesekjenan down to the Sekretaris/Bendahara/Pendanaan dashed row
    buildLine(
      `M ${kesekjenanBounds.centerX + offset} ${kesekjenanBounds.bottomCenter} V ${kesekjenanBranchDropY + offset}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    buildLine(
      `M ${sekretarisBounds.centerX} ${kesekjenanBranchDropY + offset} H ${pendanaanBounds.centerX}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    buildLine(
      `M ${bidangLines[0].bounds.centerX + offset} ${coordinationFieldBaselineY} H ${bidangLines[bidangLines.length - 1].bounds.centerX + offset}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    ...bidangLines.map((bidang) =>
      buildLine(
        `M ${bidang.bounds.centerX + offset} ${coordinationFieldBaselineY} V ${bidang.bounds.topCenter} H ${bidang.bounds.centerX}`,
        '#fbbf24',
        2,
        '6,6',
        null
      )
    ),
  ];

  const childMap: Record<string, string[]> = {
    pmsda: ['psda', 'msda'],
    akilprof: ['akad-keilmuan', 'keprofesian'],
    eksternal: ['intrakampus', 'ekstrakampus'],
    internal: ['kekeluargaan', 'minat-bakat'],
    medkominfo: ['desain', 'publikasi-dokumentasi'],
  };

  const commandLines = [
    buildLine(
      `M ${commandX} ${commandStartY} V ${fieldBaselineY}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${commandX} ${commandStartY} V ${kesekjenanBranchSolidY}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${commandX} ${kesekjenanBranchSolidY} H ${kesekjenanBounds.centerX} V ${kesekjenanBounds.topCenter}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${kesekjenanBounds.centerX} ${kesekjenanBounds.bottomCenter} V ${kesekjenanBranchDropY}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${kesekjenanBounds.centerX} ${kesekjenanBranchDropY} H ${sekretarisBounds.centerX}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${kesekjenanBounds.centerX} ${kesekjenanBranchDropY} H ${pendanaanBounds.centerX}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(`M ${sekretarisBounds.centerX} ${kesekjenanBranchDropY} V ${sekretarisBounds.topCenter - 16}`, '#ffffff', 2, 'none', 'url(#arrowCommand)'),
    buildLine(`M ${bendaharaBounds.centerX} ${kesekjenanBranchDropY} V ${bendaharaBounds.topCenter - 16}`, '#ffffff', 2, 'none', 'url(#arrowCommand)'),
    buildLine(`M ${pendanaanBounds.centerX} ${kesekjenanBranchDropY} V ${pendanaanBounds.topCenter - 16}`, '#ffffff', 2, 'none', 'url(#arrowCommand)'),
    buildLine(
      `M ${sekretarisBounds.centerX} ${kesekjenanBranchDropY + offset} H ${pendanaanBounds.centerX}`,
      '#fbbf24',
      2,
      '6,6',
      null
    ),
    buildLine(
      `M ${commandX} ${fieldBaselineY} H ${bidangLines[0].bounds.centerX}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    buildLine(
      `M ${commandX} ${fieldBaselineY} H ${bidangLines[bidangLines.length - 1].bounds.centerX}`,
      '#ffffff',
      2,
      'none',
      null
    ),
    ...bidangLines.map((bidang) =>
      buildLine(
        `M ${bidang.bounds.centerX} ${fieldBaselineY} V ${bidang.bounds.topCenter - 16}`,
        '#ffffff', 2, 'none', 'url(#arrowCommand)'
      )
    ),
    ...bidangLines.flatMap((bidang) => {
      const childIds = childMap[bidang.id] || [];
      return childIds
        .map((childId) => getNodeById(childId))
        .filter(Boolean)
        .map((child) => {
          const childBounds = getNodeBounds(child as OrgNode);
          return buildLine(
            `M ${bidang.bounds.centerX} ${bidang.bounds.bottomCenter} V ${divisionBranchY} H ${childBounds.centerX} V ${childBounds.topCenter - 16}`,
            '#ffffff', 2, 'none', 'url(#arrowCommand)'
          );
        });
    }),
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <marker
          id="arrowCommand"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#ffffff" />
        </marker>
        <marker
          id="arrowSupervision"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#22d3ee" />
        </marker>
      </defs>

      {/* Layer 1: Command Lines */}
      <g className="command-lines">
        {commandLines}
      </g>

      {/* Layer 2: Coordination Lines */}
      <g className="coordination-lines">
        {coordinationLines}
      </g>

      {/* Layer 3: Supervision Lines */}
      <g className="supervision-lines">
        {supervisionLines}
      </g>
    </svg>
  );
};

export default ConnectingLines;
