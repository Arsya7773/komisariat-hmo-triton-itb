/**
 * ConnectingLines Component
 * Renders SVG connections between organizational nodes with ABSOLUTE offset separation for parallel lines
 * Implements three line types: Command (solid), Coordination (dashed), Supervision (dotted)
 * Uses only 90-degree orthogonal paths: M (move), V (vertical), H (horizontal)
 */

import React from 'react';
import { OrgConnection, OrgNode, LineType } from '@/types/organogram';
import { orgChartData, getNodeById } from '@/data/organogram';

interface ConnectingLinesProps {
  width: number;
  height: number;
}

/**
 * LINE OFFSET SEPARATION CONSTANTS
 * Used to mathematically separate Solid and Dashed lines
 * on both vertical and horizontal segments.
 */
const VERTICAL_OFFSET = 12;
const HORIZONTAL_OFFSET = 8;
const SUPERVISION_MARKER_ID = 'arrow-pengawasan';

const BIDANG_TARGET_IDS = new Set([
  'kesekjenan',
  'pmsda',
  'akilprof',
  'eksternal',
  'internal',
  'medkominfo',
]);

const KESEKJENAN_DIVISIONS = new Set([
  'sekretaris',
  'bendahara',
  'pendanaan',
]);

const KETUA_LEFT_BRANCH_TARGETS = new Set([
  'ketua-hmo-ganesha',
  'senator-komisariat',
]);

/**
 * Create STRICTLY orthogonal path using only M, V, H commands
 * Implements offset logic for parallel lines (Solid vs Dashed)
 */
const createOrthogonalPath = (
  connection: OrgConnection,
  fromNode: OrgNode,
  toNode: OrgNode
): string => {
  let start = { ...fromNode.position };
  let end = { ...toNode.position };
  const horizontalAdjustment =
    connection.type === 'command'
      ? -HORIZONTAL_OFFSET
      : connection.type === 'coordination'
      ? HORIZONTAL_OFFSET
      : 0;

  const isPoseidonSupervision =
    connection.from === 'ketua-komisariat' &&
    connection.to === 'poseidon' &&
    connection.type === 'supervision';

  if (isPoseidonSupervision) {
    start.x += 120;
    start.y += 24;
  }

  const isKetuaToBidang =
    connection.from === 'ketua-komisariat' &&
    BIDANG_TARGET_IDS.has(connection.to);

  const isKesekjenanToDivision =
    connection.from === 'kesekjenan' &&
    KESEKJENAN_DIVISIONS.has(connection.to);

  const isKetuaLeftBranch =
    connection.from === 'ketua-komisariat' &&
    KETUA_LEFT_BRANCH_TARGETS.has(connection.to) &&
    connection.type === 'coordination';

  const isKesekjenanBranch =
    connection.from === 'ketua-komisariat' &&
    connection.to === 'kesekjenan';

  // KETUA TO BIDANG: Apply X-axis offset for vertical trunk separation
  if (isKetuaToBidang) {
    if (connection.type === 'command') {
      start.x -= VERTICAL_OFFSET;
      end.x -= VERTICAL_OFFSET;
    } else if (connection.type === 'coordination') {
      start.x += VERTICAL_OFFSET;
      end.x += VERTICAL_OFFSET;
    }
  }

  // KESEKJENAN TO DIVISIONS: Keep the horizontal segment separated via Y-offset
  if (isKesekjenanToDivision) {
    // Use vertical anchor points at nodes, but offset the horizontal branch.
    const yMid = (start.y + end.y) / 2 + horizontalAdjustment;
    return `M ${start.x} ${start.y} V ${yMid} H ${end.x} V ${end.y}`;
  }

  // KETUA LEFT BRANCH: single dashed branch going left, then split up/down.
  if (isKetuaLeftBranch) {
    const junctionX = start.x - 260;
    const branchY = start.y + horizontalAdjustment;
    return `M ${start.x} ${start.y} V ${branchY} H ${junctionX} V ${end.y} H ${end.x}`;
  }

  // KESekjenan receives from main trunk and branches left.
  if (isKesekjenanBranch) {
    const branchY = end.y + horizontalAdjustment;
    return `M ${start.x} ${start.y} V ${branchY} H ${end.x}`;
  }

  const isVertical = start.x === end.x;
  const isHorizontal = start.y === end.y;

  if (isVertical) {
    return `M ${start.x} ${start.y} V ${end.y}`;
  }

  if (isHorizontal) {
    const branchY = start.y + horizontalAdjustment;
    return `M ${start.x} ${start.y} V ${branchY} H ${end.x} V ${end.y}`;
  }

  const yMid = (start.y + end.y) / 2 + horizontalAdjustment;
  return `M ${start.x} ${start.y} V ${yMid} H ${end.x} V ${end.y}`;
};

/**
 * Get stroke properties based on line type
 */
const getLineStyle = (type: LineType) => {
  switch (type) {
    case 'command':
      return {
        stroke: '#ffffff',
        strokeWidth: 2,
        strokeDasharray: 'none',
      };
    case 'coordination':
      return {
        stroke: '#fbbf24',
        strokeWidth: 2,
        strokeDasharray: '6,6',
      };
    case 'supervision':
      return {
        stroke: '#22d3ee',
        strokeWidth: 2.5,
        strokeDasharray: '3,5',
      };
  }
};

/**
 * Get marker ID and configuration based on line type
 */
const getMarkerConfig = (type: LineType) => {
  switch (type) {
    case 'command':
      return {
        id: 'arrowCommand',
        color: '#ffffff',
        hasArrow: true,
      };
    case 'supervision':
      return {
        id: SUPERVISION_MARKER_ID,
        color: '#22d3ee',
        hasArrow: true,
      };
    case 'coordination':
      return {
        id: 'arrowCoordination',
        color: '#fbbf24',
        hasArrow: false, // No arrow for coordination
      };
  }
};

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  width,
  height,
}) => {
  // Group connections by type for rendering
  const commandLines = orgChartData.connections.filter(
    (c) => c.type === 'command'
  );
  const coordinationLines = orgChartData.connections.filter(
    (c) => c.type === 'coordination'
  );
  const supervisionLines = orgChartData.connections.filter(
    (c) => c.type === 'supervision'
  );

  const renderConnectionLine = (connection: OrgConnection): React.ReactNode => {
    const fromNode = getNodeById(connection.from);
    const toNode = getNodeById(connection.to);

    if (!fromNode || !toNode) return null;

    const style = getLineStyle(connection.type);
    const marker = getMarkerConfig(connection.type);
    const pathData = createOrthogonalPath(connection, fromNode, toNode);

    return (
      <g key={connection.id}>
        <path
          d={pathData}
          stroke={style.stroke}
          strokeWidth={style.strokeWidth}
          strokeDasharray={style.strokeDasharray}
          fill="none"
          markerEnd={
            marker.hasArrow
              ? `url(#${marker.id})`
              : 'none'
          }
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>
    );
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* MARKER DEFINITIONS */}
      <defs>
        {/* Command Arrow - White Solid */}
        <marker
          id="arrowCommand"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#ffffff" />
        </marker>

        {/* Supervision Arrow - Cyan Dotted */}
        <marker
          id={SUPERVISION_MARKER_ID}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
        </marker>

        {/* Gradient filter for glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* RENDER LINES IN LAYER ORDER */}
      {/* Layer 1: Command Lines (Solid - behind) */}
      <g className="command-lines" filter="url(#glow)">
        {commandLines.map((conn) => renderConnectionLine(conn))}
      </g>

      {/* Layer 2: Coordination Lines (Dashed - middle) */}
      <g className="coordination-lines" filter="url(#glow)">
        {coordinationLines.map((conn) => renderConnectionLine(conn))}
      </g>

      {/* Layer 3: Supervision Lines (Dotted - front) */}
      <g className="supervision-lines" filter="url(#glow)">
        {supervisionLines.map((conn) => renderConnectionLine(conn))}
      </g>
    </svg>
  );
};

export default ConnectingLines;
