import React from "react";
import TechCard from "./TechCard";

function Skills() {
    return (
        <section id="skills" className="pt-8">
            <h2 className="text-center dark:text-white text-xl font-bold my-10">Habilidades</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 w-4/5 mx-auto">
                <TechCard img="https://i.im.ge/2024/06/04/KmEaPP.html.png" name={"HTML"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmEIuf.css.png" name={"CSS"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmE9nc.js.png" name={"JAVASCRIPT"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmE0L0.react.png" name={"REACT"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmEwPG.tailwind.png" name={"TAILWIND"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmE6kx.ts.png" name={"TYPESCRIPT"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmEiQW.node.png" name={"NODE"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmE53T.nest.png" name={"NEST"}/>
                <TechCard img="https://i.im.ge/2024/06/04/KmERF8.image-8.png" name={"MONGO DB"}/>
            </div>
        </section>
    );
}

export default Skills;