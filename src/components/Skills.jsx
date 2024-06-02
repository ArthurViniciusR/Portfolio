import React from "react";
import TechCard from "./TechCard";

function Skills() {
    return (
        <section id="skills" className="pt-8">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Habilidades</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 w-4/5 mx-auto">
                <TechCard img="src/images/html.png" name={"HTML"}/>
                <TechCard img="src/images/css.png" name={"CSS"}/>
                <TechCard img="src/images/js.png" name={"JAVASCRIPT"}/>
                <TechCard img="src/images/react.png" name={"REACT"}/>
                <TechCard img="src/images/tailwind.png" name={"TAILWIND"}/>
                <TechCard img="src/images/ts.png" name={"TYPESCRIPT"}/>
                <TechCard img="src/images/node.png" name={"NODE"}/>
                <TechCard img="src/images/nest.png" name={"NEST"}/>
                <TechCard img="src/images/mongo.png" name={"MONGO DB"}/>
            </div>
        </section>
    );
}

export default Skills;