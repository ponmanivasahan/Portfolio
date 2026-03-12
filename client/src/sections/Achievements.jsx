import React from 'react'
import {Trophy,Award,Star} from "lucide-react";

const achievements=[{
  title:"2x National Hackathon Winner", description:"Won first place at two national-level hackathons competing against 500+ teams, building innovative solutions for real-world problems.", icon:Trophy, highlight:true
},
{
  title:"AWS Certified Solutions Architect", description:"Achieved AWS Solutions Architect Associate certification, demonstrating expertise in cloud architecture and best practices.",icon:Award
},
{
  title:"Top 30% on LeetCode", description:"Consistently ranked in the top 30% of the LeetCode users with 500+ problems solved across all difficulty levels.",icon:Star
},

]
const Achievements = () => {
  return (
    <section id="achievements" className="section-gradient relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          Achievements & Certifications
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">Milestones & Recognition</h2>
        <p className="mb-10 max-w-2xl text-sm text-muted-foreground  sm:mb-12 sm:text-base">
          Key accomplishments and recognitions throughout my journey as a developer.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {achievements.map((ach)=>{
            const Icon=ach.icon;
            return(
              <div key={ach.title} className={`card-elevated group p-4 sm:p-6 ${ach.highlight ? "border-foreground/15" : ""}`}>
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors sm:mb-4 sm:h-12 sm:w-12 ${ach.highlight ? "bg-foreground text-primary-foreground" : "bg-secondary text-foreground/70 group-hover:bg-foreground group-hover:text-primary-foreground"}`}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  {ach.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{ach.description}</p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
