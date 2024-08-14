import Navbar from "./component/Navbar";
import Image from "next/image";
import {Github} from "react-bootstrap-icons"
import {Linkedin} from "react-bootstrap-icons"
export default function Home() {
  return (
    <main className="h-[90vh] ">
      <Navbar />
      <div className=" mt-40 gap-24 ml-1">
        <h1 className="text-[40px] font-bold font-mono  text-white mt-40  mx-56">Sikandar Tahir</h1>
        <p className="font-semibold  text-slate-400 justify-center mt-3 mx-56">Senior Student at GIAIC | Pursuing Certified Cloud Applied Generative <br />AI Engineering.  Passionate about cutting-edge technologies, currently <br />pursuing a Certified Cloud Applied Generative  AI Engineering. <br />  Also pursuing BS-Computer Science from Karachi University. <br /> Eager to leverage these skills to drive innovation and recently starting <br /> new journey in  Generative AI and Chatbot Development at <br />S.M.I.T (Saylani Mass I.T Training)!.</p>
      </div>
      <div className=" flex ml-56 gap-8 ">
      <button className="mt-5  rounded bg-red-900 flex justify-center items-center text-white w-[80px] h-[35px]">
      <a href="https://github.com/SikandarTahir23"><Github/></a>
      </button>
      <button className=" mt-5   rounded bg-blue-600 flex justify-center items-center text-white w-[80px] h-[35px]">
                  <a href="https://www.linkedin.com/in/sikandar-tahir-356a56273/"><Linkedin/></a>
                </button>
      </div>
      <div className="ml-[900px]  -my-64 shadow-2xl shadow-slate-950/50">
      <Image src="/my2.jpg" alt="" width={250} height={100}  className=" rounded-2xl"/>
      </div>

    </main>
  );
}
