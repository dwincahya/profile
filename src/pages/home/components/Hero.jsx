import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import profileImage from '../../../img/profile.jpg';

const Hero = () => {
    return (
        <section className="bg-gray-900 py-0 px-8 md:py-20 md:px-52 lg:py-28 flex flex-col gap-0 items-center text-white h-lvh">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-50 h-50 md:w-60 md:h-60 lg:w-48 lg:h-48 rounded-full border-8 border-white object-cover mb-6 "
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-full text-slate-800 text-white">
                    Dwi Nur Cahya
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 text-white">
                    INFORMATICS ENGINEERING
                </p>
                <p className="text-md md:text-lg lg:text-xl text-slate-300 px-0 md:px-20">
                    Hai, Saya adalah Dwi Nur Cahya, Biasa dipanggil Cahya. Saya memiliki pengalaman dan pengetahuan di bidang Sistem Informasi Jaringan dan Aplikasi.
                </p>
                <button className="text-white border-[2px] border-gray-300 font-medium py-2 px-8 rounded-lg w-fit flex gap-2 items-center justify-center hover:scale-110 transition-all duration-300 bg-gradient-to-br from-gray-900 via-slate-700 to-gray-500 hover:from-gray-500 hover:via-slate-700 hover:to-gray500 ">
                    Let's Talk
                </button>
            </div>
            <div className="flex gap-3 mt-5">
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
