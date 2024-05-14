import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
      };

    return ( 
        <section id="projects" className="pt-10 slider-container">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Projetos</h2>
            <Slider {...settings}>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
                <div>
                    <ProjectCard/>
                </div>
            </Slider>
            
        </section>
     );
}

export default Projects;