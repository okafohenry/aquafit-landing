import React, { useState } from "react";
import logo from "../../assets/imgs/Logo.svg";
import hamburger from "../../assets/imgs/hamburger.svg"
import closeMenu from "../../assets/imgs/close.svg"
import MobileNavbar from "./MobileNavbar";
import { nav_links } from "../../utils/constants";


function Navbar(){
    const [toggle, setToggle] = useState(false);


    return(
        <header className="w-full ">
            <nav className="w-full flex justify-between items-center">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"  height="37px" width="200px" />
                    </a>
                </div>
                <div className="nav-links flex items-center">
                    <ul className="list-none flex">
                        { nav_links.map((nav_item) => (
                            <li className="capitalize px-3" key={nav_item.id}>
                                <a href={nav_item.path}>{nav_item.name}</a>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="login-btn">
                        <a href="">Log In</a>
                    </div> */}
                </div>
               {!toggle ?
                <div 
                    onClick={() =>   setToggle(true)}
                    className="nav-links-mobile flex items-center">
                    <img src={hamburger} alt="menu" height="30px" width="30px" />
                </div>
                :
                <div 
                    onClick={() =>   setToggle(false)}
                    className="nav-links-mobile flex items-center">
                    <img src={closeMenu} alt="menu" height="30px" width="30px" />
                </div>}
            </nav>

            {toggle && <MobileNavbar />}
        </header>
    )
}


export default Navbar