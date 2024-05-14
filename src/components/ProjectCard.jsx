import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  function ProjectCard() {
    return (
            <Card className="my-auto mx-auto md:w-96 w-32 dark:bg-secondary-dark bg-primary-light">
                <img className="p-3 rounded-3xl"
                    src="src\assets\landing1.png"
                    alt="card-image"
                />
                <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-white">
                    Projeto 1
                </Typography>
                <Typography className="dark:text-white">
                    Descrição breve sobre o projetos
                </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                <Button className="bg-primary-blue">Ver Projeto</Button>
                </CardFooter>
            </Card>
    );
  }
  
  export default ProjectCard;