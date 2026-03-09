import React from 'react'
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
const Loader = () => {

    const lettersRef=useRef([]);
    const [progress,setProgress] = useState(0);
    const name="PONMANI VASAN";
    const fallingLines=Array.from({length:40});
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{background:"#0a0a0c"}}>
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="mb-6 overflow-hidden" style={{perspective:"600px"}}>
            <h1 className='text-4xl font-bold sm:text-5xl md:text-7xl lg:text-8xl' style={{color:"#ffffff",textShadow:"0 2px 20px rgba(255,255,255,0.15)"}}>
             {name.split("").map((letter,i)=>(
                <span key={i} ref={(el)=>{if (el) lettersRef.current[i]=el;}}
                className="inline-block">{letter}</span>
             ))}
             </h1>
        </div>
        <p className="mb-8 text-xs  tracking-[0.15em] uppercase sm:md-10 sm:text-sm sm:tracking-[0.2em] md:text-base" style={{color:"rgba(255,255,255,0.6)"}}>
            Loading Portfolio ...
        </p>

        <div className="w-56 sm:w-72 md:w-96">
            <div className="h-[2px] w-full overflow-hidden rounded-full" style={{background:"rgba(255,255,255,0.1)"}}>
                <div className="h-full rounded-full" style={{width:"50%",background:"rgba(255,255,255,0.5)",transition:"none"}} />
            </div>

        </div>
        </div>        
      
    </div>
  )
}

export default Loader
