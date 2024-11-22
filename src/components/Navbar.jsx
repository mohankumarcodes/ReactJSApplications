import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";


const Navbar = () => {

  const [mobilDrawerOpen, setMobilDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobilDrawerOpen(!mobilDrawerOpen);
  }


  return (
    
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative-text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-6 m-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md hover:bg-neutral-700">Sign In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an acoount</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobilDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobilDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center lg-hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>

                <a href="#" className="flex bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                  <span className="hidden lg:block pr-1">Create an acoount</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg>
                </a>
              </div>
            </div>
          )}

        </div>
      </nav>

  


  )
}

export default Navbar;
