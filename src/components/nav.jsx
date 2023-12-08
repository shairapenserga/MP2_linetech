import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import logo from './images/logoko1.png';
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} className='Navbar-icon'></img> 
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={click ? "nav-menu active " : "nav-menu"}>
              
              <li className="nav-item">
                <NavLink to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                 onClick={closeMobileMenu}
                >
                  About
                </NavLink>
                </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                   onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
                </li>
                <li className='icon'>

              <NavLink to='/Wishlist' 
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
               <CiHeart/>
                 </NavLink> 

               <NavLink to='/cart' 
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                   onClick={closeMobileMenu}
                >
               <IoCartOutline/>
                 </NavLink>

                 
               <NavLink to='/RegisterAndLogin' 
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                 onClick={closeMobileMenu}
                >
                <FaRegUser/>
      
                </NavLink>
                </li>
                </ul>    
          </div>
          
          </nav>
       
      </IconContext.Provider>
      
    </>
  );
                }

export default Nav;

/* //  import './nav.css'
//  import logo from './images/logous.png';
//   import {Link} from 'react-router-dom';
//   import { AiOutlineSearch } from 'react-icons/ai';
//  import { CiHeart } from "react-icons/ci";
//  import { FaRegUser } from "react-icons/fa";
//  import { IoCartOutline } from "react-icons/io5";
//  import React, { useState } from 'react';
//  const Nav = () => */
     
            
//  return (
      
//  <nav className="navbar">
  
    
//     <div className='navbar-logo'>   
//          <img src={logo} alt='logo'></img> 
//          </div>
//      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
/* <li className="navbar-item"><a href="#home">Home</a></li>
<li className="navbar-item"><a href="#about">About</a></li>
<li className="navbar-item"><a href="#services">Services</a></li>

</ul> */

         
//          <div className='user'>
//                <div className='icon'>
//                 <Link to='/RegisterAndLogin'>
//                 <FaRegUser icon='login'/>
//                 </Link>

//                 <Link to='/RegisterAndLogin' className='link'>Sign In</Link>
                
//                 <Link to='/Wishlist'>
//                 <CiHeart icon='favorites'/>
//                 </Link>

//                 <Link to='/RegisterAndLogin'>
//                 <IoCartOutline icon='cart'/>
//                 </Link>
//            </div>
//           </div>
           
//             </nav> 
//               );
//  };

