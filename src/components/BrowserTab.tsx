import React from 'react';

export function BrowserTab() {
  return (
    <div className="bg-gray-100 border-b border-gray-300 px-2 py-1 flex items-center justify-center text-sm">
      <div className="bg-white border border-gray-300 rounded-t-md px-4 py-1 flex items-center space-x-2 shadow-sm max-w-md">
        <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-gold rounded-full flex items-center justify-center text-white text-xs font-bold">🌊</div>
        <span className="text-gray-700 font-medium">Komisariat HMO TRITON ITB</span>
      </div>
    </div>
  );
}