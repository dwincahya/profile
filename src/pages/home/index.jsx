import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/project";

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Experiences />
            <Projects />
        </>
    );
};

export default Home;
