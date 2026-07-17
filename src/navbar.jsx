
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="flex justify-between items-center h-[10vh] fixed top-0 z-50 w-full bg-[#08111f]/35 backdrop-blur-md border-b border-white/10 p-2 shadow-2xl">
        <h1 className="text-xl">Hello User!</h1>
                 <div className="flex gap-6">
                <Link to="/">Home</Link>            
                <Link to="/about">About</Link>            
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Login</Link>
                </div>
    </nav>
        </div>
    
     );
}
 
export default Navbar;