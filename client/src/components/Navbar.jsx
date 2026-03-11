import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  {label: "Contact", href:"#contact"},
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const navRef = useRef(null);
  const hasAnimated = useRef(false);
  const dotRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      const isActive = navLinks[i].href === activeSection;
      gsap.to(dot, {
        width: isActive ? 12 : 3,
        height: isActive ? 12 : 16,
        borderRadius: isActive ? "50%" : "9999px",
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.8,
        duration: 0.5,
        ease: "back.out(1.7)",
        boxShadow: isActive ? "0 0 10px hsl(45 100% 51% / 0.6)" : "none",
      });
    });
  }, [activeSection]);

  useEffect(() => {
    if (hasAnimated.current || !navRef.current) return;
    hasAnimated.current = true;
    
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.4, ease: "power3.out" }
    );
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4"
        style={{ opacity: 0 }}
      >
        <div 
          className={`flex items-center gap-8 rounded-full px-8 py-3 transition-all duration-500 ${
            isScrolled ? "bg-card/90 shadow-lg border border-border backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleClick(e, link.href)}
                className="group relative pb-1 text-sm font-medium transition-colors duration-200"
                style={{ color: activeSection === link.href ? "hsl(var(--gold))" : "" }}
              >
                <span className={activeSection !== link.href ? "text-muted-foreground hover:text-foreground" : ""}>
                  {link.label}
                </span>
                <span 
                  className="absolute -top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all duration-300"
                  style={{
                    background: "hsl(var(--gold))",
                    opacity: activeSection === link.href ? 1 : 0,
                    transform: `translateX(-50%) scale(${activeSection === link.href ? 1 : 0})`,
                  }}  
                />
                <span 
                  className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: activeSection === link.href ? "100%" : "0",
                    background: activeSection === link.href ? "hsl(var(--gold))" : "hsl(var(--foreground))",
                    opacity: activeSection === link.href ? 1 : 0,
                  }} 
                />
              </a>
            ))}
          </div>
          
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/50 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-52 rounded-2xl border border-border bg-card shadow-xl px-5 py-4 space-y-3 lg:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleClick(e, link.href)}
                className="block text-sm font-medium transition-colors"
                style={{ color: activeSection === link.href ? "hsl(var(--gold))" : "hsl(var(--foreground))" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
      <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 hidden flex-col items-center gap-3 lg:flex">
        {navLinks.map((link, i) => (
          <a 
            key={link.href} 
            href={link.href} 
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(link.href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }} 
            title={link.label} 
            className="group flex items-center justify-center"
          >
            <span
              ref={(el) => { dotRefs.current[i] = el; }}
              className="block"
              style={{
                background: "hsl(var(--gold))",
                width: activeSection === link.href ? 12 : 3,
                height: activeSection === link.href ? 12 : 16,
                borderRadius: activeSection === link.href ? "50%" : "9999px",
                opacity: activeSection === link.href ? 1 : 0.3,
              }}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;