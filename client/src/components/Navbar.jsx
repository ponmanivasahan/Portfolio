import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {Menu, X} from "lucide-react";
const navLinks=[
    {label:"Home",href:"hero"},
    {label:"About Me",href:"#about"},
    {label:"Experience",href:"#experience"},
    {label:"Projects",href:"#projects"},
];

const Navbar=()=>{
    // const [isScrolled,setIsScrolled] =useState(false);
  return(
    <>
    <nav className={`flex items-center gap-8 rounded-full px-8 py-3 transition-all duration-500`}>
       <div className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link)=>(
            <a key={link.href} href={link.href} onClick={(e) =>handleClick(e,link.href)}
            className="group relative pb-1 text-sm font-medium transition-colors duration-200" style={{color:""}} >
                {link.label}

                <span className="absolute -top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all duration-300" style={{background:"hsl(var(--gold))",
                    opacity:1,
                    transform:"translateX(-50%) scale(1)",
                }} />
            </a>

        ))}
        
        </div>
    </nav>
    </>
  )

}
export default Navbar;