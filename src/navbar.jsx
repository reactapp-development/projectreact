
import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return ( 
    <nav className="flex justify-between items-center bg-liear-to-r from-blue-400 to-black p-2">
        <h1 className="text-xl">Company Name</h1>
                 <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Contact">Contact</Link>
                </div>
    </nav>
     );
}
 
export default navbar;