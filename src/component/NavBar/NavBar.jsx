// import { list } from "postcss";
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  // const NavBar = useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="text-black bg-yellow-500 px-6">
      {/* <AiOutlineMenu className="text-2xl md:hidden"></AiOutlineMenu> */}

      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? 
          
          <AiOutlineClose></AiOutlineClose>

        : 
          <AiOutlineMenu></AiOutlineMenu>
        }
        {/* <AiOutlineMenu className="text-2xl"></AiOutlineMenu> */}
      </div>

      <ul
        className={`md:flex duration-500 absolute md:static ${
          open ? 'top-24' : '-top-60'
        } bg-yellow-200 px-6 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
