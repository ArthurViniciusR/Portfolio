import React from "react";
import TechCard from "./TechCard";

function Skills() {
    return (
        <section id="skills" className="pt-8">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Habilidades</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 w-4/5 mx-auto">
                <TechCard img="../assets/html.png" name={"HTML"}/>
                <TechCard img="../assets/css.png" name={"CSS"}/>
                <TechCard img="../assets/js.png" name={"JAVASCRIPT"}/>
                <TechCard img="../assets/react.png" name={"REACT"}/>
                <TechCard img="../assets/tailwind.png" name={"TAILWIND"}/>
                <TechCard img="../assets/ts.png" name={"TYPESCRIPT"}/>
                <TechCard img="../assets/node.png" name={"NODE"}/>
                <TechCard img="../assets/nest.png" name={"NEST"}/>
                <TechCard img="../assets/mongo.png" name={"MONGO DB"}/>
            </div>
        </section>
    );
}

export default Skills;