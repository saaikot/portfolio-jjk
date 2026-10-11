"use client";

export default function Background() {
  // Ember positions — random looking
  const embers = [
    { left: "8%",  delay: 0,   dur: 14, color: "#7b2cbf", size: 3 },
    { left: "18%", delay: 3,   dur: 18, color: "#e63946", size: 2 },
    { left: "32%", delay: 6,   dur: 16, color: "#ffb703", size: 3 },
    { left: "47%", delay: 1.5, dur: 20, color: "#7b2cbf", size: 4 },
    { left: "62%", delay: 4,   dur: 15, color: "#00b4d8", size: 2 },
    { left: "75%", delay: 7,   dur: 17, color: "#e63946", size: 3 },
    { left: "88%", delay: 2.5, dur: 19, color: "#7b2cbf", size: 3 },
    { left: "95%", delay: 5,   dur: 13, color: "#ffb703", size: 2 },
  ];

  // Floating kanji in bg
  const kanjis = [
    { char: "呪", top: "15%", left: "10%", size: 120 },
    { char: "術", top: "60%", left: "85%", size: 100 },
    { char: "廻", top: "75%", left: "20%", size: 140 },
    { char: "戦", top: "25%", left: "75%", size: 90 },
    { char: "祓", top: "45%", left: "5%",  size: 110 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* ===== Layer 1: Perspective grid ===== */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123, 44, 191, 0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 44, 191, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 80%)",
        }}
      />

      {/* ===== Layer 2: Domain Expansion Ring (center) ===== */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* outer ring — slow rotate */}
        <div
          className="absolute -left-[300px] -top-[300px] h-[600px] w-[600px] rounded-full border border-cursed/15"
          style={{
            animation: "spin-slow 60s linear infinite",
            borderStyle: "dashed",
          }}
        />
        {/* middle ring — reverse rotate */}
        <div
          className="absolute -left-[220px] -top-[220px] h-[440px] w-[440px] rounded-full border border-blood/10"
          style={{ animation: "spin-reverse 45s linear infinite" }}
        />
        {/* inner ring — golden thin */}
        <div
          className="absolute -left-[150px] -top-[150px] h-[300px] w-[300px] rounded-full border border-gold/20"
          style={{
            animation: "spin-slow 30s linear infinite",
            borderStyle: "dotted",
          }}
        />

        {/* Six Eyes center — pulsing blue glow */}
        <div
          className="absolute -left-[100px] -top-[100px] h-[200px] w-[200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 180, 216, 0.35) 0%, transparent 70%)",
            animation: "eyes-pulse 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* ===== Layer 3: Cursed Energy Tendrils ===== */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="tendrilGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7b2cbf" stopOpacity="0" />
            <stop offset="50%" stopColor="#7b2cbf" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7b2cbf" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tendrilGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0" />
            <stop offset="50%" stopColor="#e63946" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left tendrils */}
        <path
          d="M 80,0 Q 120,300 60,600 T 100,1000"
          stroke="url(#tendrilGrad1)"
          strokeWidth="3"
          fill="none"
          style={{ animation: "tendril-flow 8s ease-in-out infinite" }}
        />
        <path
          d="M 180,0 Q 140,250 200,550 T 160,1000"
          stroke="url(#tendrilGrad2)"
          strokeWidth="2"
          fill="none"
          style={{
            animation: "tendril-flow 11s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        {/* Right tendrils */}
        <path
          d="M 900,0 Q 860,350 920,650 T 880,1000"
          stroke="url(#tendrilGrad1)"
          strokeWidth="3"
          fill="none"
          style={{
            animation: "tendril-flow 9s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <path
          d="M 800,0 Q 840,300 780,600 T 820,1000"
          stroke="url(#tendrilGrad2)"
          strokeWidth="2"
          fill="none"
          style={{
            animation: "tendril-flow 12s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
      </svg>

      {/* ===== Layer 4: Floating Kanji ===== */}
      {kanjis.map((k, i) => (
        <div
          key={i}
          className="absolute font-jp font-bold text-cursed"
          style={{
            top: k.top,
            left: k.left,
            fontSize: `${k.size}px`,
            lineHeight: 1,
            animation: `kanji-drift ${12 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {k.char}
        </div>
      ))}

      {/* ===== Layer 5: Cursed Flame (bottom) ===== */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(123, 44, 191, 0.25) 0%, transparent 70%)",
          animation: "flame-flicker 3s ease-in-out infinite",
        }}
      />

      {/* ===== Layer 6: Falling Embers ===== */}
      {embers.map((e, i) => (
        <span
          key={i}
          className="absolute top-0 rounded-full"
          style={{
            left: e.left,
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: e.color,
            boxShadow: `0 0 12px 3px ${e.color}80`,
            animation: `ember-fall ${e.dur}s linear infinite`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}

      {/* ===== Layer 7: Vignette ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}