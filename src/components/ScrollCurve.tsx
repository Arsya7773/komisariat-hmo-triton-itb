import React, { useEffect, useState } from 'react';

export const ScrollCurve = () => {
  const [curveValue, setCurveValue] = useState(180);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const calculated = Math.max(80, 180 - scrollY / 4);
      setCurveValue(calculated);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
      <svg viewBox="0 0 800 300" preserveAspectRatio="none" className="w-full h-40 md:h-52">
        <path
          d={`M 800 300 Q 400 ${curveValue} 0 300 L 0 0 L 800 0 L 800 300 Z`}
          fill="#0A192F"
        />
      </svg>
    </div>
  );
};
