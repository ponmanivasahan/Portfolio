import { useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../components/Loader.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
// import Experience from "../sections/Experience.jsx";
// import Projects from "../sections/Projects.jsx";
// import CodingStats from "../sections/CodingStats.jsx";
// import Achievements from "../sections/Achievements.jsx";
// import Contact from "../sections/Contact.jsx";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "../data/profile.js";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  }, []);

  // Refresh ScrollTrigger after content is shown
  useEffect(() => {
    if (showContent) {
      ScrollTrigger.refresh();
    }
  }, [showContent]);

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  if (!showContent) {
    return null; // Short delay before showing content
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <CodingStats /> */}
        {/* <Achievements /> */}
        {/* <Contact /> */}
      </main>
      
      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3.5 w-3.5 mx-1" style={{ color: "hsl(var(--gold))" }} /> by PONMANIVASHAN
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={profile.social?.github || "https://github.com"} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href={profile.social?.linkedin || "https://linkedin.com"} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href={`mailto:${profile.social?.email || "example@email.com"}`} 
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;