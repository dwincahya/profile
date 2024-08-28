import React from "react";

const Experiences = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "SMK NEGERI 2 YOGYAKARTA",
            date: "2021 - Sekarang",
            description:
                "Mempelajari Bahasa Pemrograman serta Tools yang akan digunakan untuk FrontEnd Develop",
        },
        {
            title: "Internet Of Things",
            company: "SMK NEGERI 2 YOGYAKARTA",
            date: "2024",
            description:
                "Merancang serta mendesign alat untuk Penyiraman Tanaman Otomatis",
        },
    ];

    return (
        <section className="bg-gray-900 py-16 px-8 md:py-24 md:px-52">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                PENGALAMAN
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-[3px] border-slate-800 rounded-lg p-6 hover:scale-105 transition-all cursor-pointer"
                    >
                        <h3 className="text-white text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-gray-100 mb-2">{exp.company}</p>
                        <p className="text-gray-200 mb-4">{exp.date}</p>
                        <p className="text-white">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
