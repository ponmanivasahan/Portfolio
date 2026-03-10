import {navLink as RouterNavLink} from "react-router-dom";
const NavLink=({className,activeClassName,pendingClassName,to,...props})=>{
    return(
        <RouterNavLink to={to} className={({isActive,isPending})=>[className,isActive && activeClassName,isPending && pendingClassName].filter(Boolean).join(" ")}
        {...props} />
    );
};

NavLink.displayName="NavLink";
export {NavLink};