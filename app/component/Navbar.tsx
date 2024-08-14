const Navbar = () => {
    return (<>
        <nav className="">
            <ul className="flex justify-center  items-center mt-4 gap-10 text-white text-[22px] font-semibold ">
                <li className=" hover:text-slate-400"><a href="/">Home</a></li>
                <li className =" hover:text-slate-400"><a href="./about">About</a></li>
               
                <li className="hover:text-slate-400" ><a href="./service">Contact</a></li>

              
            </ul>
            
        </nav>
        </>
    );
}

export default Navbar;