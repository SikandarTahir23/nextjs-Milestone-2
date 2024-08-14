import Link from "next/link";
import Navbar from "../component/Navbar";


const Contact = () => {
    return (
        <div className=" h-[100vh]">
            <Navbar />
            <div className="w-60  justify-center   mt-40 mx-60">
                <h1 className="text-[30px] font-bold  text-white hover:text-pink-700 font-serif    underline border-l-[5px] border-l-sky-500 pl-3">Contact Info:</h1>
            </div>
            <div className="font-semibold  mx-60 mt-4 ">
                <p className=" text-neutral-200 text-xl mt-2">Mobile no: 0312-3456789</p>
                <p className=" text-stone-200 text-xl mt-2 ">Email:sikandar.tahir04@gmail.com</p>
              
            </div>
            
        </div>
    );
}

export default Contact;