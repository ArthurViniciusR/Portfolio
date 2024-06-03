import React from "react";

function Footer() {
    return ( 
        <footer className="h-10 border-t-4 border-primary-blue p-12 flex flex-col justify-center gap-2 mt-4">
            <img className="w-5 mx-auto" src="../images/Vector.png" alt="" />
            <p className="dark:text-white text-center text-sm">by dev Arthur</p>
        </footer>
     );
}

export default Footer;