import { Link } from "react-router-dom"
import { GiCakeSlice } from "react-icons/gi";

const Navbar = () => {
  return (
    <header >
	<nav
		className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-red-500 shadow-md border-slate-500 dark:bg-red-500 transition duration-700 ease-out"
	>
		<div className="flex justify-between p-4">
			<div className=" flex text-[2rem] leading-[3rem] tracking-tight font-bold text-white dark:text-white">
				Happy Cake
                <GiCakeSlice className="mt-3 ml-2" />
			</div>
			<div className="flex items-center space-x-4 text-lg font-semibold tracking-tight text-white">
				
                    <Link to='/'>Home</Link>
                    <Link to='/contacto'>Contacto</Link>
                
			</div>
		</div>
	</nav>


    
	
</header>
  )
}

export default Navbar