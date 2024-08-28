import React from "react";
import project1Image from '../../../img/projects/project1.png';
import project2Image from '../../../img/projects/project2.png';

const Projects = () => {
    const projects = [
        {
            title: "Kopi Asmara",
            image: project1Image,
            description: "Website tentang Kopi",
            link: "https://kopi-asmara.vercel.app/"
        },
        {
            title: "Web 1",
            image: project2Image,
            description: "Portofolio Pertama Saya",
            link: "https://dwinurcahya-portofolio.vercel.app/"
        }
    ];

    return (
        <section className="bg-gray-900 py-16 px-8 md:py-24 md:px-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center font-bold">
                PROYEK SAYA
            </h2>
            <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-48">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white p-4 rounded-lg border-[3px] md:h-1vh text-center hover:scale-110 transition-all"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-md">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
