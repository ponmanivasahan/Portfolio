import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const linesRef = useRef(null);
  const lettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = gridRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const w = (canvas.width = window.innerWidth);
        const h = (canvas.height = window.innerHeight);

        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.8);
        grad.addColorStop(0, "#2a2a2e");
        grad.addColorStop(0.3, "#1e1e22");
        grad.addColorStop(0.6, "#141418");
        grad.addColorStop(1, "#0a0a0c");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        const diag = ctx.createLinearGradient(0, 0, w, h);
        diag.addColorStop(0, "rgba(255,255,255,0.01)");
        diag.addColorStop(0.5, "rgba(255,255,255,0.03)");
        diag.addColorStop(1, "rgba(255,255,255,0.01)");
        ctx.fillStyle = diag;
        ctx.fillRect(0, 0, w, h);

        const step = 50;
        for (let x = 0; x <= w; x += step) {
          const dist = Math.abs(x - w / 2) / (w / 2);
          ctx.strokeStyle = `rgba(255,255,255,${0.04 + dist * 0.06})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y <= h; y += step) {
          const dist = Math.abs(y - h / 2) / (h / 2);
          ctx.strokeStyle = `rgba(255,255,255,${0.03 + dist * 0.05})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }

        const vig = ctx.createRadialGradient(w / 2, h / 2, w * 0.2, w / 2, h / 2, w * 0.85);
        vig.addColorStop(0, "rgba(0,0,0,0)");
        vig.addColorStop(1, "rgba(0,0,0,0.5)");
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, w, h);
      }
    }

    if (linesRef.current) {
      gsap.fromTo(
        linesRef.current.children,
        { y: "-100vh", opacity: 0 },
        { y: "100vh", opacity: 0.3, duration: 4, stagger: { each: 0.08, from: "random" }, ease: "none", repeat: -1 }
      );
    }

    const tl = gsap.timeline({ delay: 2 });

    tl.from(lettersRef.current, {
      y: 100, opacity: 0, rotateX: -90, duration: 1.2, stagger: 0.1, ease: "back.out(1.7)",
    });
    tl.to(lettersRef.current, {
      textShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.15)",
      duration: 0.8, ease: "power2.inOut",
    }, "-=0.3");
    tl.to(lettersRef.current, {
      textShadow: "0 0 0px rgba(255,255,255,0)", duration: 0.8, ease: "power2.inOut",
    });
    tl.from(subtitleRef.current, {
      y: 20, opacity: 0, duration: 0.8, ease: "power3.out",
    }, "-=0.6");
    tl.to(
      { val: 0 },
      {
        val: 100, duration: 3, ease: "power1.inOut",
        onUpdate: function () { setProgress(Math.round(this.targets()[0].val)); },
      },
      "-=0.5"
    );
    tl.to(containerRef.current, {
      opacity: 0, duration: 1, ease: "power2.inOut",
      onComplete: () => onCompleteRef.current(),
    });

    return () => { tl.kill(); };
  }, []);

  const name = "PONMANI VASHAN";
  const fallingLines = Array.from({ length: 40 });

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: "#0a0a0c" }}>
      <canvas ref={gridRef} className="absolute inset-0" />

      <div ref={linesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {fallingLines.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-56 w-px"
            style={{
              left: `${2 + Math.random() * 96}%`,
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="mb-6 overflow-hidden" style={{ perspective: "600px" }}>
          <h1
            className="text-4xl font-bold tracking-[0.2em] sm:text-5xl md:text-7xl lg:text-8xl"
            style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(255,255,255,0.15)" }}
          >
            {name.split("").map((letter, i) => (
              <span
                key={i}
                ref={(el) => { if (el) lettersRef.current[i] = el; }}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="mb-8 text-xs tracking-[0.15em] uppercase sm:mb-10 sm:text-sm sm:tracking-[0.2em] md:text-base"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
         LOADING PORTFOLIO ...
        </p>

        <div className="w-56 sm:w-72 md:w-96">
          <div className="h-[2px] w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, background: "rgba(255,255,255,0.5)", transition: "none" }}
            />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] tracking-wider sm:text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;