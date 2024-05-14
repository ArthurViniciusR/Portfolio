import {Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";
import React from "react";

function Header() {

    return ( 
        <div className="w-full shadow-md shadow-primary-blue dark:bg-primary-dark bg-white sticky top-0 z-10">
            <header className="flex items-center justify-between w-full h-14 px-2 mx-auto max-w-screen-xl">
                <div className="flex items-center gap-4">
                    <img src="src\assets\Vector.png" alt="simbol" />
                    <a href="/"><p className="text-primary-blue font-medium text-xl">Portfólio</p></a>
                </div>
                <ul className="md:flex md:items-center md:gap-6 hidden">
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white dark:hover:text-primary-blue">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white dark:hover:text-primary-blue">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white dark:hover:text-primary-blue">
                        <a href="#qualifications">Qualifications</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white dark:hover:text-primary-blue">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="hover:text-primary-blue text-sm hover:font-semibold dark:text-white dark:hover:text-primary-blue">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
                <Menu className="md:hidden">
                    <MenuHandler>
                        <svg  className="md:hidden dark:fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </MenuHandler>
                    <MenuList className="md:hidden text-primary-blue">
                    <a href="/"><MenuItem>Home</MenuItem></a>
                    <a href="#about"><MenuItem>About</MenuItem></a>
                    <a href="#qualifications"><MenuItem>Qualifications</MenuItem></a>
                    <a href="#skills"><MenuItem>Skills</MenuItem></a>
                    <a href="#projects"><MenuItem>Projects</MenuItem></a>
                    </MenuList>
                </Menu>
            </header>
        </div>
     );
}

export default Header;