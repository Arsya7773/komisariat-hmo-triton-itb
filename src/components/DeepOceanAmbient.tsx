import React, { useMemo } from 'react';

export default function DeepOceanAmbient() {
  // Generate 40 gelembung secara acak saat komponen di-render pertama kali
  const bubbles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const size = 3 + Math.random() * 47; // Ukuran dari 3px sampai 50px
      const left = Math.random() * 100; // Posisi horizontal (0% - 100%)
      const animationDuration = 10 + Math.random() * 20; // Kecepatan naik (10s - 30s)
      const delay = Math.random() * -30; // Negative delay agar animasi mulai menyebar dari awal
      const swayDuration = 3 + Math.random() * 4; // Kecepatan goyangan arus air
      const opacity = 0.05 + Math.random() * 0.25; // Transparansi bervariasi

      return { id: i, size, left, animationDuration, delay, swayDuration, opacity };
    });
  }, []);

  return (
    <div className="ocean pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <style>{`
        .ocean {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(0deg, #040D1A, #0A192F, #002B5B);
          overflow: hidden;
        }

        /* OCTOCAT ANIMATION */
        #octocat {
          height: 300px;
          width: 200px;
          background: url(https://raw.githubusercontent.com/codypearce/codepen-files/main/pens/octocat/octocat.png) left center;
          animation: animateSprite 15s steps(1) infinite, swim 15s ease-in-out infinite;
          position: absolute;
          right: -200px;
          top: 50%;
          margin-top: -150px;
          z-index: 100;
          opacity: 0.6;
          filter: drop-shadow(0 0 20px rgba(34,211,238,0.3));
        }

        @keyframes animateSprite {
          0% { background-position: -600px; }
          20% { background-position: 0px; }
          25% { background-position: -200px; }
          35% { background-position: -400px; }
          40% { background-position: -400px; }
          50% { background-position: -200px; }
          60% { background-position: -0px; }
          67% { background-position: -600px; }
          100% { background-position: -600px; }
        }

        @keyframes swim {
          0% { transform: translate(0, 0); }
          20% { transform: translate(calc(-50vw - 100px), 0); }
          25% { transform: translate(calc(-50vw - 100px), 0); }
          35% { transform: translate(calc(-50vw - 100px), -20vh); }
          50% { transform: translate(-25vw, 15vh); }
          60% { transform: translate(-25vw, -20vh); }
          67% { transform: translate(-25vw, -20vh); }
          100% { transform: translate(calc(-100vw - 300px), 0); }
        }

        /* BUBBLE ANIMATION */
        .bubble-ambient {
          position: absolute;
          border-radius: 100%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1));
          bottom: -50px; /* Mulai dari luar layar bawah */
        }

        @keyframes floatUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-120vh); }
        }

        @keyframes drift {
          0% { margin-left: 0px; }
          100% { margin-left: 50px; }
        }

        @media (prefers-reduced-motion: reduce) {
          #octocat { animation: animateSprite 15s steps(1) infinite; }
          .bubble-ambient { animation: none !important; opacity: .12 !important; }
        }
      `}</style>

      {/* Render 40 Gelembung secara dinamis */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble-ambient"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            opacity: b.opacity,
            // Animasi naik ke atas dan goyang ke samping
            animation: `
              floatUp ${b.animationDuration}s ease-in infinite, 
              drift ${b.swayDuration}s ease-in-out infinite alternate
            `,
            animationDelay: `${b.delay}s, ${b.delay}s`
          }}
        />
      ))}

      {/* Cumi/Gurita */}
      <div id="octocat"></div>
    </div>
  );
}