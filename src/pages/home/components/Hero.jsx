import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profileImage from '../../../img/profile.jpg'; 

const Hero = () => {
    return (
        <section className="bg-gray-900 py-16 px-8 md:py-40 md:px-52 flex flex-col gap-8 items-center text-white">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-40 h-40 md:w-64 md:h-64 lg:w-48 lg:h-48 rounded-full border-8 border-white object-cover mb-6 "
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-full text-slate-800 text-white">
                     Dwi Nur Cahya.
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 text-white">
                    FRONTEND DEVELOPER
                </p>
                <p className="text-md md:text-lg lg:text-xl text-slate-300 px-0 md:px-20">
                Hai, Saya adalah Dwi Nur Cahya, Biasa dipanggil Cahya. Saya memiliki pengalaman dan pengetahuan di bidang Sistem Informasi Jaringan dan Aplikasi. Saya memiliki minat pada FrontEnd Develop dan Fotografi.
                </p>
                <button className="text-white border-[3px] border-white font-medium py-2 px-8 rounded-lg w-fit flex gap-2 items-center justify-center hover:scale-110 transition-all">
                    Let's Talk
                </button>
            </div>
            <div className="flex gap-3">
                <a href="https://github.com/dwincahya" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://wa.me/62895362034655" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={35} className="hover:scale-110 transition-all" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
