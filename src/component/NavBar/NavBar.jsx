// import { list } from "postcss";
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const[open, setOpen]= useState(false)
    const NavBar = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
      ];

      
    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(true)}>  
                {
                    open === true? 'open' : 'close'
                }
                <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
            </div>
          
            <ul className="md:flex">{
        routes.map(route => <Link key={route.id} route={route}></Link>)
      }
       </ul>
      
        </nav>
    );
};

export default NavBar;