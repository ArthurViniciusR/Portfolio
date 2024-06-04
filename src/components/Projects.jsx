import React from "react";
import ProjectCard from "./ProjectCard";
import { Carousel } from "@material-tailwind/react";


function Projects() {

    return ( 
        <section id="projects" className="pt-10 slider-container">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Projetos</h2>

            <Carousel>

                    <ProjectCard
                        name="Landing Page"
                        desc="landing page simples utilizando fundamentos de html, css e js"
                        img="https://i.im.ge/2024/06/04/KmCGI6.landing1.png"
                        link="https://github.com/ArthurViniciusR/LadingPage"
                    />
                    <ProjectCard
                        name="Landing Page 2"
                        desc="landing page temática de anime utilizando html e css"
                        img="https://i.im.ge/2024/06/04/KmETd9.landing2.png"
                        link="https://github.com/ArthurViniciusR/LadingPageSNK"
                    />
                    <ProjectCard
                        name="Futuros Projetos"
                        desc="Acompanhe e aguarde para novos projetos"
                        img="https://i.im.ge/2024/06/04/KmCn8S.breve.png"
                        link="https://www.linkedin.com/in/arthurviniciusr/"
                    />
                    
                
            </Carousel>

        </section>
     );
}

export default Projects;