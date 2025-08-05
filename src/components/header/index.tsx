
export const Header = () => {
    return(
        <header className=" flex  w-full h-15 bg-black justify-around items-center gap-3 ">
            <div className="flex flex-row justify-center items-center gap-2 w-100 h-10" >
                <img src="/assets/logo/logo.png" alt="Logo"  className="w-10 h-10" />
                <h1 className="text-white font-bold">Café com codigo</h1>  
            </div>
            <nav className="w-100 ">
                <ul className="flex justify-center items-center gap-8 ">
                    <li className="cursor-pointer text-white hover:text-yellow-400 transition">Home</li>
                    <li className="cursor-pointer text-white hover:text-yellow-400 transition">About</li>
                    <li className="cursor-pointer text-white hover:text-yellow-400 transition">Contact</li>
                    <li className="cursor-pointer text-white hover:text-yellow-400 transition">Blog</li>
                </ul>
            </nav>
        </header>
    )
}