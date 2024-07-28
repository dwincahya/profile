import React from "react";
import reactImage from '../../../img/skills/react.png';
import javascriptImage from '../../../img/skills/javascript.png';
import tailwindcssImage from '../../../img/skills/tailwindcss.png';
import nodejsImage from '../../../img/skills/nodejs.png';
import python from '../../../img/skills/python.png';
import IOT from '../../../img/skills/iot.png';
import foto from '../../../img/skills/foto.png';
import figma from '../../../img/skills/figma.png';


const Skills = () => {
    const skills = [
        { name: "React", image: reactImage },
        { name: "JavaScript", image: javascriptImage },
        { name: "Tailwind CSS", image: tailwindcssImage },
        { name: "Node.js", image: nodejsImage },
        { name: "Python", image: python },
        { name: "IOT", image: IOT },
        { name: "Fotografi", image: foto },
        { name: "Figma", image: figma }
    ];

    return (
        <section className="bg-gray-900 py-16 px-8 md:py-24 md:px-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                My Skills
            </h2>
            <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-0 md:px-48">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-lg border-[3px] border-slate-800 text-center font-semibold hover:scale-105 cursor-pointer transition-all"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mb-2"
                        />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
