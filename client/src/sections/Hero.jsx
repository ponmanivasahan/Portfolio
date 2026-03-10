import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "../data/profile.js";
import { ArrowDown, Download } from "lucide-react";
import { useTypingAnimation } from "../hooks/useTypingAnimation.jsx";

const Hero = () => {
  const contentRef = useRef(null);
  const hasAnimated = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Only run typing animation after component is mounted
  const typedText = useTypingAnimation(profile.taglines || ["Full Stack Developer"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!contentRef.current || hasAnimated.current || !isMounted) return;
    
    const els = contentRef.current.querySelectorAll(".hero-anim");
    
    if (els.length > 0) {
      hasAnimated.current = true;
      
      // Set initial state
      gsap.set(els, { y: 40, opacity: 0 });
      
      // Create animation with a small delay to ensure everything is ready
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(els, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        clearProps: "transform" // Clean up after animation
      });
      
      return () => {
        tl.kill();
      };
    }
  }, [isMounted]);

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <section 
      id='hero' 
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-10 bg-background sm:px-6"
    >
      {/* Grid Background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0%) 1px, transparent 1px)", 
          backgroundSize: "60px 60px",
        }} 
      />
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="hero-anim text-4xl font-bold tracking-[0.1em] text-foreground sm:text-6xl sm:tracking-[0.15em] md:text-8xl lg:text-[9rem]">
          {profile.name || "PONMANI VASHAN"}
        </h1>
        
        <p className="hero-anim mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
          {profile.title || "Full Stack Developer"}
        </p>
        
        <p className="hero-anim mx-auto mt-3 max-w-xl text-xs text-muted-foreground sm:mt-4 sm:text-sm md:text-base">
          {profile.description || "I build exceptional digital experiences"}
        </p>

        <div className="hero-anim mt-5 h-8 sm:mt-6 sm:h-10">
          <span className="font-mono text-xs text-muted-foreground sm:text-sm md:text-base">
            {typedText}
            <span className="ml-0.5 inline-block w-[2px] h-4 bg-foreground/40 animate-pulse sm:h-5" />
          </span>
        </div>
        
        <div className="hero-anim mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          <button 
            onClick={() => scrollTo("#projects")} 
            className="btn-primary text-xs sm:text-sm"
          >
            View Projects
          </button>

          <a 
            href="/resume.pdf" 
            download 
            className="btn-secondary text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Download Resume
          </a>
        </div>
        
        <div className="hero-anim mt-12 grid grid-cols-2 gap-6 sm:mt-20 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 md:gap-16">
          {profile.stats && profile.stats.length > 0 ? (
            profile.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{stat.label}</p>
              </div>
            ))
          ) : (
            // Default stats if none provided
            <>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">5+</p>
                <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">50+</p>
                <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">Projects</p>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10">
        <ArrowDown className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
      </div>
    </section>
  );
};

export default Hero;