import React from 'react'
import {profile } from "../data/profile.js";
import {Server,Cpu,Cloud,Shield,GraduationCap,School} from "lucide-react";
import Profile from '../assets/profile.jpg'
const iconMap={
  server:<Server className="h-5 w-5 sm:h-6 sm:w-6" />,
  cpu:<Cpu className='h-5 w-5 sm:h-6 sm:w-6' />,
  cloud:<Cloud className="h-5 w-5 sm:h-6 sm:w-6" />,
  shield:<Shield className='h-5 w-5 sm:h-6 sm:w-6' />,
};
const About = () => {
  return (
    <section id="about" className="section-gray relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className='mb-12 grid items-center gap-8 sm:mb-16 lg:grid-cols-[1fr_auto] lg:gap-16'>
          <div className='max-w-3xl'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground'>
              <span className="h-1 w-1 rounded-full" style={{background:"hsl(var(--gold))"}} />
              About Me
            </div>
            <h2 className='text-2xl font-bold text-foreground sm:text-3xl md:text-5xl'>
              Craafting robust systems that scale
            </h2>
            <p className='mt-4 text-sm leading-relaxed text-muted-foreground sm:mtm-6 sm:text-base md:text-lg'>
              {/* {profile.about} */}
              I'm a passionate software engineer with a knack for building beautiful and  efficient web applications. With a strong foundation in both frontend and backend technologies.
            </p>
          </div>
          <div className='flex justify-center lg:justify-end'>
            <div className='relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-border bg-secondary shadow-lg sm:h-56 sm:w-56 lg:h-64 lg:w-64'>
              <div className="h-full w-full bg-secondary flex items-center justify-center text-muted-foreground text-sm">
                <img src={Profile} alt='Profile' className='h-full w-full object-cover' />
              </div>
              <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5' />
            </div>
          </div>
        </div>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {profile.specializations.map((spec)=>(
            <div key={spec.title} className="card-elevated group p-4 sm:p-6">
              <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground/70 transition-colors group-hover:text-foreground sm:mb-4 sm:h-12 sm:w-12' style={{}} >
                {iconMap[spec.icon]}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground sm:text-base">{spec.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">I am Specalized in xyz spec</p>
              <div className="mt-3 h-[2px] w-8 rounded-full bg-border transition-all duration-300 group-hover:w-full sm:mt-4" style={{"--hover-bg":"hsl(var(--gold)/0.3)"}} />
              </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-elevated flex flex-col p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary" style={{color:"hsl(var(--gold))"}} >
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">College</h3>
            </div>
            {profile.education ?.map((edu,i)=>(
              <div key={i}>
                  <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.institution}</p>
                  <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground sm:text-xs">
                    <span>{edu.period}</span>
                    <span>CGPA:{edu.gpa}</span>
                    </div>
                </div>
            ))}
          </div>

          <div className="card-elevated flex flex-col p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary" style={{color:"hsl(var(--gold))"}} >
                <School className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">School</h3>
            </div>
            <div className="flex-1 space-y-3">
              {profile.schoolEducation?.map((edu,i)=>(
                <div key={i}>
                  <p className="text-sm font-medium text-foreground">{edu.standard}</p>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                  <p className="mt-0.5 text-[10px] sm:text-xs" style={{color:"hsl(var(--gold))"}} >
                    Score: {edu.percentage}
                  </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default About
