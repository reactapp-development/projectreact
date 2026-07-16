
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="flex justify-between items-center absolute top-0 left-0 z-50 w-full h-[10vh] bg-white/30 backdrop-blur-lg p-2 shadow-2xl">
        <h1 className="text-xl">AstroLink</h1>
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