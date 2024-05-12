import {Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";
import React from "react";

function Header() {

    return ( 
        <div className="w-full shadow-md shadow-primary-blue">
            <header className="flex items-center justify-between w-full h-16 px-2 mx-auto max-w-screen-xl">
                <div className="flex items-center gap-4">
                    <img src="src\assets\Vector.png" alt="" />
                    <p className="text-primary-blue font-medium text-xl">Portfólio</p>
                </div>
                <ul className="md:flex md:items-center md:gap-6 hidden">
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white">
                        <a href="#">Qualifications</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white">
                        <a href="#">Skills</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white">
                        <a href="#">Projects</a>
                    </li>
                </ul>
                <Menu className="md:hidden">
                    <MenuHandler>
                        <svg  className="md:hidden dark:fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </MenuHandler>
                    <MenuList className="md:hidden">
                        <MenuItem><a href="#">Home</a></MenuItem>
                        <MenuItem><a href="#">About</a></MenuItem>
                        <MenuItem><a href="#">Qualifications</a></MenuItem>
                        <MenuItem><a href="#">Skills</a></MenuItem>
                        <MenuItem><a href="#">Projects</a></MenuItem>
                    </MenuList>
                </Menu>
            </header>
        </div>
     );
}

export default Header;