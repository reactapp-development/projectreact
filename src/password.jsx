import React from "react";

const Password = () => {
    return ( 
        <div className="flex justify-center items-center w-full h-screen bg-linear-to-br from-gray-600 via-blue-300 to-gray-950">
            <div className=" bg-linear-to-br from-blue-400 to-gray-500 w-[50%] h-[65vh] p-5 rounded-2xl text-white backdrop-blur-lg border border-gray-600 shadow-2xl">
                <div >
                    <h1 className=" flex justify-center text-lg font-semibold pb-5">Enter new password</h1>
                    <h2 className="p-4 px-14">Your new password  must be different from previous used password.</h2>
                </div>

                <div className="m-8 text-sm px-40">
                    <div>
                        <label>New password</label>
                        <div>
                            <input 
                            type="password"
                            placeholder="New password"
                            className="border border-gray-500 p-2 px-15 rounded-lg"
                        />
                        </div>
                        
                    </div>
                    <div className="mt-4">
                        <label >Confirm password</label>
                        <div>
                            <input 
                            type="password"
                            placeholder="Confirm password"
                            className="border border-gray-500 p-2 px-15 rounded-lg"
                        />
                        </div> 
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <button className="bg-blue-400/50 px-10 rounded-xl active:bg-blue-500">Reset password</button>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Password;