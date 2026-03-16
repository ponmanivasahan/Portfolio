import React from 'react'
import {useState} from "react"
import {profile} from "../data/profile.js"
import {Github,Linkedin,Mail,Send,ArrowUpRight} from "lucide-react";
const Contact = () => {
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [submitted, setSubmitted] = useState(false);
  const socials = [
    profile.social?.github && {href:profile.social.github,icon:Github,label:"Github"},
    profile.social?.linkedin && {href:profile.social.linkedin, icon:Linkedin,label:"LinkedIn"},
    profile.social?.email && {href:`mailto:${profile.social.email}`,icon:Mail,label:"Email"},
  ].filter(Boolean);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!form.name.trim()) return;
    setSubmitted(true);
  };
  return (
    <section id="contact" className="section-gradient relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground" />
              Get in Touch
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl md:text-5xl">
              Let's build something great
            </h2>
            <p className="flex flex-wrap gap-2 sm:gap-3">Have a project in mind, want to collaborate on open source, or just want to say hello? I'd love to hear from you.</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
              {socials.map((s)=>(
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground hover:shadow-md sm:gap-2 sm:px-5 xm:py-2.5 sm:text-sm">
                  <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
             </div>
          </div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-8 py-14 text-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/10">
                <Send className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Thank you, {form.name}!
              </h3>
              <p className="text-sm text-muted-foreground">
                Your message has been received. I'll get back to you soon.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({name:"",email:"",message:""}); }}
                className="mt-2 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {[
              {name:"name",label:"Name",type:"text",placeholder:"Your Name"},
              {name:"email",label:"Email",type:"email",placeholder:"you@example.com"},
            ].map((field)=>(
              <div key={field.name}>
                    <label className="mb-1.5 block text-xs font-medium text-foreground sm:mb-2 sm:text-sm">
                    {field.label}  
                    </label> 
                    <input type={field.type} placeholder={field.placeholder} value={form[field.name]} onChange={(e)=> setForm((f)=>({...f,[field.name]:e.target.value}))}
                    className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-xs text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 sm:px-4 sm:py-3 sm:text-sm" />
              </div>
            ))}
            <div >
              <label className="mb-1.5 block text-xs font-medium text-foreground sm:mb-2 sm:text-sm">Message</label>
              <textarea value={form.message} placeholder="Tell me about your project..."
              onChange={(e)=>setForm((f)=>({...f,message:e.target.value}))}
              rows={4}
              className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-xs text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 resize-none sm:px-4 sm:py-3 sm:text-sm" />
            </div>
            <button type="submit" className="btn-primary text-xs sm:text-sm">
              Send Message <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
