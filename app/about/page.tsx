import React from "react";
import Navbar from "@/app/component/Navbar"
import Image from "next/image";

const About = () => {
    return (
        <div className=" h-full ">

            <Navbar />
            <div className="flex   mt-40 gap-24 ml-20 ">
            
            
              <div className=" mx-[80px]  ">

                  <h1 className=" text-[40px] underline border-l-[5px] border-x-slate-900 text-white border-l-500 pl-3  font-mono font-bold">Personal Info:</h1>
                  <p className="text-slate-400  text-xl font-semibold mt-3">Name Sikandar Tahir </p>
                  <p className="text-slate-400 text-xl font-semibold mt-3">Age 22y</p>
                  <p className="text-slate-400 text-xl font-semibold mt-3">Education Undergraduate</p>
                  <p className="text-slate-400 text-xl font-semibold mt-3">Nationality Pakistan</p>
                </div>
               <div className=" ml-40  shadow-2xl shadow-black">
                  <Image src="/my.jpg" alt="" width={200} height={150}  className=" rounded-2xl"/>
               </div>
               <div>
                <button>
                    
                </button>
               </div>
            </div>
        </div>
    );
}

export default About;