import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const linesRef = useRef(null);
  const titleRef = useRef(null); 
  const subtitleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const canvas = gridRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const w = (canvas.width = window.innerWidth);
        const h = (canvas.height = window.innerHeight);

        ctx.fillStyle = "#0a0a0c";
        ctx.fillRect(0, 0, w, h);
        
        ctx.strokeStyle = "rgba(255, 215, 0, 0.1)";
        ctx.lineWidth = 0.5;
        
        const step = 60;
        for (let x = 0; x <= w; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y <= h; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        
        const gradient = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/3);
        gradient.addColorStop(0, "rgba(255, 215, 0, 0.15)");
        gradient.addColorStop(1, "rgba(255, 215, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
    }

    if (linesRef.current) {
      gsap.fromTo(
        linesRef.current.children,
        { y: "-100%", opacity: 0 },
        { y: "100%", opacity: 0.5, duration: 2, stagger: { each: 0.03, from: "random" }, ease: "none", repeat: -1 }
      );
    }
        const tl = gsap.timeline();
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 });
        tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].val));
      },
      onComplete: () => {
        if (!completedRef.current) {
          completedRef.current = true;
          setTimeout(() => {
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          }, 200);
        }
      }
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const name = "PONMANI VASHAN";
  const fallingLines = Array.from({ length: 30 });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#0a0a0c" }}
    >
      <canvas ref={gridRef} className="absolute inset-0 w-full h-full" />
      
      <div ref={linesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {fallingLines.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px"
            style={{
              left: `${Math.random() * 100}%`,
              height: "30vh", 
              background: "linear-gradient(to bottom, transparent, rgba(255,215,0,0.3), transparent)",
              transform: "translateY(-100%)" 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-5xl font-bold tracking-wider sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ 
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255,215,0,0.5)",
              opacity: 0,
              transform: "translateY(30px)"
            }}
          >
            {name}
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm tracking-[0.2em] uppercase mb-10 sm:text-base"
            style={{ 
              color: "rgba(255,255,255,0.8)", 
              textShadow: "0 0 10px rgba(255,215,0,0.3)",
              opacity: 0,
              transform: "translateY(30px)"
            }}
          >
            LOADING PORTFOLIO ...
          </p>
          
          <div className="w-64 mx-auto sm:w-80">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #FFD700, #FFA500)",
                  boxShadow: "0 0 15px #FFD700"
                }}
              />
            </div>
            <p className="mt-3 text-center font-mono text-sm text-white/60">
              {progress}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;