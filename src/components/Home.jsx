import React from "react";

function Home() {
    return (
        <div>
            <section id="home" className="dark:bg-primary-dark dark:text-white md:flex md:items-center w-full mt-5">
                <div className="flex flex-col gap-5 md:mx-auto p-5 animate-fade-right">
                    <p className="md:text-lg text-base font-medium">Arthur Vinícius</p>
                    <h1 className="text-primary-blue md:text-4xl text-3xl font-semibold">Desenvolvedor Full Stack</h1>
                    <p className="md:text-base text-sm">dev.artthur@gmail.com</p>
                    <div className="flex gap-2">
                        <a  href="https://github.com/ArthurViniciusR " target="_blank">
                            <svg className="fill-current text-primary-blue"
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </a>
                        <a  href="https://www.linkedin.com/in/arthurviniciusr/" target="_blank">
                            <svg className="fill-current text-primary-blue"
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex md:justify-center md:w-1/2 justify-center">
                    <img className="md:w-1/2 w-3/5 animate-fade-up" src="src\assets\perfil.png" alt="perfil" />
                </div>
            </section>
            <img className ="w-8 my-16 mx-auto animate-bounce animate-duration-[1500ms]"src="src\assets\arrows.png" alt="" />
        </div>
     );
}

export default Home;