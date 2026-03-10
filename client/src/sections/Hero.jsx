import React from 'react'
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {profile} from "../data/profile.js";
import {ArrowDown,Download} from "lucide-react";
const Hero = () => {
  const contentRef=useRef(null);
  const hasAnimated=useRef(false);
  // const typedText=useTypingAnimation(profile.taglines);

  useEffect(()=>{
    if(!contentRef.current || hasAnimated.current) return;
    hasAnimated.current=true;
    const els=contentRef.current.querySelectorAll(".hero-anim");
    gsap.set(els,{y:40,opacity:0});
    const tl=gsap.timeline({delay:0.2});
    tl.to(els,{y:0,opacity:1,duration:0.8,stagger:0.12,ease:"power3.out"});
    return() =>{tl.kill();}
  },[]);

  const scrollTo=(id)=> document.querySelector(id) ?.scrollIntoView({behavior:"smooth"});
  return (
    <section id='hero' className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-10 bg-background sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage:"linear-gradient(hsl(0 0% 0%) 1px, transparent 1px),linear-gradient(90deg,hsl(0 0% 0%) 1px,transparent 1px)", backgroundSize:"60px 60px",
      }} />
      <div ref={contentRef} className="relative z-10 text-center">
       <h1 className="hero-anim text-4xl font-bold tracking-[0.1em] text-foreground sm:text-6xl sm:tracking-[0.15em] md:text-8xl lg:text-[9rem]">
         {profile.name}
        </h1>
        <p className="hero-anim mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
          {profile.title}
          </p>
          <p className="hero-anim mx-auto mt-3 max-w-xl text-xs text-muted-foreground sm:mt-4 sm:text-sm md:text-base">
            {profile.description}
            </p>

            <div className="hero-anim mt-5 h-7 sm:mt-6 sm:h-8">
             <span className="font-mono text-xs text-muted-foreground sm:text-sm md:text-base">
              {/* {typedText} */}
              
              <span className="ml-0.5 inline-block w-[2px] h-4 bg-foreground/40 animate-pulse sm:h-5" />
              
              </span>
              </div>
              <div className="hero-anim mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
                <button onClick={()=> scrollTo("#projects")} className="btn-primary text-xs sm:text-sm">+
                  View Projects </button>
              </div>
        </div>
      
    </section>
  )
}

export default Hero
