import logo from '../images/zuludesk-logo.svg'
import React from "react";
import { ListCollapse, CirclePlay } from "lucide-react";
import Home from './Home'

const Layout = () =>{
    return(
        <div>
           <nav className='flex justify-between px-14 p-3'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                 <div className="hidden md:block text-xl">
                <a className='pr-5' href="#">Home</a>
                <a href="#">Training</a>
            </div>
            <div className="md:hidden">
                <ListCollapse />
            </div>
            </div>
           </nav>

            <div>
                <Home />
            </div>

        </div>
    )
}

export default Layout;