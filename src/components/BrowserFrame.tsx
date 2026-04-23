import React from 'react';
import { Globe, Lock, Search } from 'lucide-react';

interface BrowserFrameProps {
  children: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#E5E7EB] p-4 md:p-8 flex items-center justify-center font-sans tracking-tight">
      <div className="w-full max-w-[1440px] bg-[#0A192F] rounded-2xl overflow-hidden shadow-2xl border border-gray-400 flex flex-col h-[90vh]">
        {/* Safari Header */}
        <div className="bg-[#D1D5DB] border-b border-gray-400 p-3 flex items-center gap-4 select-none relative z-50">
          {/* Traffic Lights */}
          <div className="flex gap-2 ml-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]" />
          </div>
          
          {/* URL Bar */}
          <div className="flex-1 max-w-[800px] mx-auto bg-white rounded-md py-1 px-3 border border-gray-300 flex items-center justify-between text-[11px] text-gray-500 shadow-inner">
            <div className="flex items-center gap-2">
              <Lock size={10} className="text-gray-400" />
              <span className="font-medium text-gray-500">tritonitb.com</span>
            </div>
            <Search size={12} className="text-gray-400 opacity-50" />
          </div>
          
          <div className="w-20" /> {/* Spacer */}
        </div>
        
        {/* Browser Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          {children}
        </div>
      </div>
    </div>
  );
};
