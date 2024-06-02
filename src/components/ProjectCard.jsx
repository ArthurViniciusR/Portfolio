import {
    Card,
    CardFooter,
  } from "@material-tailwind/react";

  function ProjectCard({name, desc, img, link}) {
    return (
        <div className="flex mb-10">

            <Card className="my-auto mx-auto md:w-96 w-52 dark:bg-secondary-dark bg-primary-light">
                <img className="md:p-3 md:rounded-3xl p-2 rounded-xl"
                    src={img}
                    alt="card-image"
                />
                <div className="md:px-6 p-3">
                <p className="md:text-lg text-sm font-semibold dark:text-white mb-4">{name}</p>
                <p className="dark:text-white md:text-base text-xs" >
                    {desc}
                </p>
                </div>
                <CardFooter className="">
                <a href={link} target="_blank" rel="noopener noreferrer" className="md:w-1/2 md:text-base md:h-8 h-6 text-xs p-2 bg-primary-blue text-white rounded-md">Ver Projeto</a>
                </CardFooter>
            </Card>
        </div>
    );
  }
  
  export default ProjectCard;