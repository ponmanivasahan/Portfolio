import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";
import {projects,projectCategories} from "../data/projects.js";
import {Star, ArrowRight} from "lucide-react";
const Projects = () => {
  const [activeFilter,setActiveFilter]=useState("All");
  const filtered=activeFilter==="All" ? projects:projects.filter((p)=>p.category===activeFilter);

  return (
    <section id="projects" className="section-gradient relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1 w-1 rounded-full" style={{background:"hsl(var(--gold))"}} />
          Projects
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">Featured Work</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground sm:mb-10 sm:text-base">
          A selection of projects showcasing  fullstack, cloud infrastructure, and distributed systems. Click any project to see the full case study.
        </p>
        <div className="mb-8 flex flex-wrap gap-2 sm:mb-12">
          {projectCategories.map((cat)=>(
            <button key={cat} onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 s:px-5 sm:py-2 s:text-sm ${activeFilter===cat ? "bg-foreground text-primary-foreground shadow-md":"border border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filtered.map((project)=>(
            <Link key={project.id} to={`/project/${project.id}`} className="card-elevated group relative overflow-hidden p-4 sm:p-6 block">
              {project.featured && (
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium sm:right-4 sm:top-4 sm:text-[10px]" style={{background:"hsl(var(--gold)/0.1)",color:"hsl(var(--gold-foreground))"}}>
                  <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Featured
                </div>
              )}
              <div className="mb-3 h-1 w-10 rounded-full bg-border transition-all duration-300 group-hover:w-full sm:mb-4 sm:w-12" />
              <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">{project.title}</h3>
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-3 sm:mn-4 sm:text-sm">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-1 sm:mb-5 sm:gap-1.5">
                {project.tech.map((t)=>(
                  <span key={t} className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground sm:px-2 sm:text-[11px]">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 tex-[10px] font-medium transition-colors group-hover:text-foreground sm:text-xs" style={{color:"hsl(var(--gold-foreground))"}}>
                View Case Study <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Projects
