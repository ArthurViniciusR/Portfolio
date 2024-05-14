import React from "react";
import TechCard from "./TechCard";

function Skills() {
    return (
        <section id="skills" className="pt-8">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Skills</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 w-4/5 mx-auto">
                <TechCard img="src\assets\html.png" name={"HTML"}/>
                <TechCard img="src\assets\css.png" name={"CSS"}/>
                <TechCard img="src\assets\js.png" name={"JAVASCRIPT"}/>
                <TechCard img="src\assets\react.png" name={"REACT"}/>
                <TechCard img="src\assets\tailwind.png" name={"TAILWIND"}/>
                <TechCard img="src\assets\ts.png" name={"TYPESCRIPT"}/>
                <TechCard img="src\assets\node.png" name={"NODE"}/>
                <TechCard img="src\assets\nest.png" name={"NEST"}/>
                <TechCard img="src\assets\mongo.png" name={"MONGO DB"}/>
            </div>
        </section>
    );
}

export default Skills;