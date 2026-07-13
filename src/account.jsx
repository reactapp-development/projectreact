
import { useState } from "react";
import { Link } from "react-router-dom";

const account = () => {



    return ( 
        <div className="flex justify-center items-center h-screen m-full bg-linear-to-br from-gray-600 via-blue-300 to-gray-950 text-black" >
            <div className=" p-6 rounded-2xl bg-white/20 backdrop-blur-lg w-[50%]">
            <div >
                <h1 className=" font-semibold text-xl">
                    Welcome!
                </h1>
                <h1 className="text-sm mt-2">Let's help you get started</h1>
            </div>
            <div className="m-5 text-sm">
                <div className="flex justify-between">
                    <div>
                        <label className="font-semibold">First Name</label>
                    <input className="border border-gray-500 p-2  rounded-lg mb-4" 
                    type="text"
                    placeholder="Enter your First name"
                    required />
                    </div>
                    <div>
                        <label className="font-semibold">Last Name</label>
                    <input className="border border-gray-500 p-2  rounded-lg mb-4" 
                    type="text"
                    placeholder="Enter your Last name"
                    required />
                    </div>
                
                </div>

                <div className="flex justify-between">
                    <div>
                        <label className="font-semibold">Phone</label>
                        <input className="border border-gray-500 p-2 rounded-lg mb-4" 
                        type="number"
                        required
                        placeholder="Enter your number"/>
                    </div>
                    <div>
                        <label className="font-semibold">Email</label>
                        <input className="border border-gray-500 p-2 rounded-lg mb-4" 
                        type="email"
                        required
                        placeholder="Enter your Email"/>
                    </div>
                    
                </div>
                <div className="flex gap-9">
                    <div>
                        <label className="font-semibold">Password</label>
                        <input className="border border-gray-500 p-2 rounded-lg mb-4" 
                        type="password"
                        placeholder="Enter your Password" />
                    </div>
                    <div>
                        <label className="font-semibold">Confirm Password</label>
                        <input className="border border-gray-500 p-2 rounded-lg mb-4" 
                        type="password"
                        placeholder="Re-enter your password"
                        required />
                    </div>
                      
                </div>
                <div className="mt-4">
                        <input type="checkbox" />
                        <label > I want to receive latest news and course updates.</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label > I agree to terms and conditions.</label>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-black text-white px-15 rounded-xl active:bg-gray-700">Create Account</button>
            </div>
            <div className=" flex justify-center mt-2 text-sm">
                <h3>Already have an account?</h3>
                <Link to='/' className="text-blue-700 active:text-purple-600 mb-5">Login</Link>
            </div>
                
             </div>
             
                
           
            
        </div>
     );
}
 
export default account;