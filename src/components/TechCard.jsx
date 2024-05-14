import React from "react";

function TechCard({img, name}) {
    return (
        <div className=" dark:bg-secondary-dark bg-primary-light md:flex items-center p-2 rounded-md">
            <img className="md:m-0 mx-auto p-3" src={img} alt="" />
            <p className="dark:text-white text-lg md:mx-auto text-center">{name}</p>
        </div>     
    );
}

export default TechCard;