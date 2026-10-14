"use client";
import { motion } from "framer-motion";

export default function HollowPurple() {
  // 16 second cycle
  const D = 16;

  // Keyframe times (0-1)
  // 0.00 → quiet
  // 0.10 → blue fades in
  // 0.22 → red fades in
  // 0.35 → blue moves toward center
  // 0.42 → red moves toward center
  // 0.50 → both touch
  // 0.55 → purple flash
  // 0.70 → purple expanding + fading
  // 1.00 → loop
  const times = [0, 0.1, 0.22, 0.35, 0.42, 0.5, 0.55, 0.7, 1];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      style={{ mixBlendMode: "screen" }}
    >
      {/* ============================================================
          LAYER 1: BLUE ORB (術式順転「蒼」) — starts left
          ============================================================ */}
      <motion.div
        className="absolute top-1/2 rounded-full"
        style={{
          left: 0,
          marginTop: -60,
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.95) 0%, rgba(34,211,238,0.9) 20%, rgba(8,145,178,0.7) 50%, rgba(6,182,212,0.3) 80%, transparent 100%)",
          filter: "blur(20px)",
          boxShadow:
            "0 0 60px 30px rgba(34,211,238,0.7), 0 0 160px 80px rgba(34,211,238,0.3)",
        }}
        animate={{
          x: [
            "-40vw",
            "5vw",
            "5vw",
            "30vw",
            "calc(50vw - 60px)",
            "calc(50vw - 60px)",
            "calc(50vw - 60px)",
            "calc(50vw - 60px)",
            "calc(50vw - 60px)",
          ],
          scale: [0.3, 1, 1, 1, 1.15, 1.3, 1.5, 0.2, 0],
          opacity: [0, 0.85, 0.85, 0.9, 1, 1, 0.9, 0.3, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============================================================
          LAYER 2: BLUE GLITCH GHOST (RGB split)
          ============================================================ */}
      <motion.div
        className="absolute top-1/2 rounded-full"
        style={{
          left: 0,
          marginTop: -60,
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
        animate={{
          x: [
            "-40vw",
            "3vw",
            "7vw",
            "28vw",
            "calc(50vw - 62px)",
            "calc(50vw - 62px)",
            "calc(50vw - 62px)",
            "calc(50vw - 62px)",
            "calc(50vw - 62px)",
          ],
          scale: [0.3, 1, 1, 1, 1.15, 1.3, 1.5, 0.2, 0],
          opacity: [0, 0.6, 0.4, 0.5, 0.7, 0.7, 0.5, 0.2, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============================================================
          LAYER 3: RED ORB (術式反転「赫」) — starts right
          ============================================================ */}
      <motion.div
        className="absolute top-1/2 rounded-full"
        style={{
          right: 0,
          marginTop: -60,
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.95) 0%, rgba(248,113,113,0.9) 20%, rgba(220,38,38,0.7) 50%, rgba(230,57,70,0.3) 80%, transparent 100%)",
          filter: "blur(20px)",
          boxShadow:
            "0 0 60px 30px rgba(248,113,113,0.7), 0 0 160px 80px rgba(230,57,70,0.3)",
        }}
        animate={{
          x: [
            "40vw",
            "-5vw",
            "-5vw",
            "-30vw",
            "calc(-50vw + 60px)",
            "calc(-50vw + 60px)",
            "calc(-50vw + 60px)",
            "calc(-50vw + 60px)",
            "calc(-50vw + 60px)",
          ],
          scale: [0.3, 0, 1, 1, 1.15, 1.3, 1.5, 0.2, 0],
          opacity: [0, 0, 0.85, 0.9, 1, 1, 0.9, 0.3, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============================================================
          LAYER 4: RED GLITCH GHOST
          ============================================================ */}
      <motion.div
        className="absolute top-1/2 rounded-full"
        style={{
          right: 0,
          marginTop: -60,
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, rgba(230,57,70,0.6) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
        animate={{
          x: [
            "40vw",
            "-3vw",
            "-7vw",
            "-28vw",
            "calc(-50vw + 62px)",
            "calc(-50vw + 62px)",
            "calc(-50vw + 62px)",
            "calc(-50vw + 62px)",
            "calc(-50vw + 62px)",
          ],
          scale: [0.3, 0, 1, 1, 1.15, 1.3, 1.5, 0.2, 0],
          opacity: [0, 0, 0.6, 0.5, 0.7, 0.7, 0.5, 0.2, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============================================================
          LAYER 5: PURPLE ORB (虚式「茈」) — appears at merge
          ============================================================ */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 180,
          height: 180,
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(233,213,255,0.95) 15%, rgba(192,132,252,0.85) 35%, rgba(168,85,247,0.6) 55%, rgba(123,44,191,0.4) 75%, transparent 100%)",
          filter: "blur(24px)",
          boxShadow:
            "0 0 100px 60px rgba(192,132,252,0.7), 0 0 250px 120px rgba(123,44,191,0.4)",
        }}
        animate={{
          scale: [0, 0, 0, 0, 0, 0.3, 1.1, 2.2, 0],
opacity: [0, 0, 0, 0, 0, 1, 1, 0.6, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* ============================================================
          LAYER 6: PURPLE GLITCH GHOST (offset)
          ============================================================ */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 180,
          height: 180,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.7) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
         scale: [0, 0, 0, 0, 0, 0.4, 1.2, 2, 0],
x: ["-50%", "-50%", "-50%", "-50%", "-50%", "-52%", "-48%", "-50%", "-50%"],
opacity: [0, 0, 0, 0, 0, 0.7, 0.7, 0.3, 0],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* ============================================================
          LAYER 7: SHOCKWAVE RINGS — expand at merge
          ============================================================ */}
      {[0, 0.15, 0.3].map((delay, idx) => (
        <motion.div
          key={idx}
          className="absolute left-1/2 top-1/2 rounded-full border-2 border-purple-400/60"
          style={{
            width: 200,
            height: 200,
            marginLeft: -100,
            marginTop: -100,
            filter: "blur(8px)",
            boxShadow: "0 0 60px 10px rgba(192,132,252,0.5)",
          }}
          animate={{
           scale: [0, 0, 0, 0, 0, 0.3, 1.2, 2.2, 2.5],
opacity: [0, 0, 0, 0, 0, 0.9, 0.5, 0.2, 0],
          }}
          transition={{
            duration: D,
            times: times.map((t) =>
              Math.min(1, Math.max(0, t + delay * 0.1))
            ),
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* ============================================================
          LAYER 8: 茈 KANJI — flash at merge moment
          ============================================================ */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-jp text-[180px] font-bold leading-none"
        style={{
          color: "#e9d5ff",
          textShadow:
            "0 0 40px #c084fc, 0 0 80px #7b2cbf, 0 0 160px #7b2cbf",
          filter: "blur(3px)",
        }}
        animate={{
          scale: [0, 0, 0, 0, 0, 0.3, 1.5, 2.2, 0],
opacity: [0, 0, 0, 0, 0, 0.9, 0.6, 0.2, 0],
rotate: [0, 0, 0, 0, 0, 0, 10, 20, 25],
        }}
        transition={{
          duration: D,
          times,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        茈
      </motion.div>

      {/* ============================================================
          LAYER 9: PARTICLE SPARKS — explode outward at merge
          ============================================================ */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const distance = 80;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-purple-300"
            style={{
              boxShadow: "0 0 20px 6px rgba(192,132,252,0.9)",
              filter: "blur(2px)",
            }}
            animate={{
              x: [
                0, 0, 0, 0, 0,
                Math.cos(angle) * distance,
                Math.cos(angle) * distance * 1.2,
                Math.cos(angle) * distance * 1.3,
                Math.cos(angle) * distance * 1.3,
              ],
              y: [
                0, 0, 0, 0, 0,
                Math.sin(angle) * distance,
                Math.sin(angle) * distance * 1.2,
                Math.sin(angle) * distance * 1.3,
                Math.sin(angle) * distance * 1.3,
              ],
              opacity: [0, 0, 0, 0, 0, 1, 0.7, 0.3, 0],
              scale: [0, 0, 0, 0, 0, 1.5, 1, 0.5, 0],
            }}
            transition={{
              duration: D,
              times,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* ============================================================
          LAYER 10: GLITCH SCANLINES — always on
          ============================================================ */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
          animation: "scan-scroll 8s linear infinite",
          mixBlendMode: "overlay",
        }}
      />

      {/* ============================================================
          LAYER 11: GLITCH BARS — flash occasionally
          ============================================================ */}
      <motion.div
        className="absolute left-0 right-0 h-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(0,180,216,0.4), transparent)",
          filter: "blur(3px)",
        }}
        animate={{
          top: ["-15%", "-15%", "25%", "25%", "-15%", "-15%"],
          opacity: [0, 0, 0.8, 0.8, 0, 0],
        }}
        transition={{
          duration: D,
          times: [0, 0.52, 0.54, 0.58, 0.6, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-4"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(230,57,70,0.5), rgba(168,85,247,0.4), transparent)",
          filter: "blur(2px)",
        }}
        animate={{
          top: ["-15%", "75%", "75%", "-15%", "-15%"],
          opacity: [0, 0.9, 0.9, 0, 0],
        }}
        transition={{
          duration: D,
          times: [0, 0.62, 0.66, 0.7, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}