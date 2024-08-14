// import {Menu, X} from "lucide-react";
import { useState } from "react";
import { navItems } from '../constants'
import Icon from './Icons';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Icon name="logo" width={100} />
          </div>
          <ul className='hidden lg:flex ml-14 gap-10'>
            {navItems.map((item, index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center gap-6">
            <a href="#" className='inline-flex gap-2 items-center'>
              <span>
                <Icon name="heart" width={20} />
              </span>
              <span>
                Favorites
              </span>
            </a>
            <a href="#" className='inline-flex items-center'>
                <Icon name="profile" width={20} />
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {/* {mobileDrawerOpen ? <X /> : <Menu />} */}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index)=>(
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar