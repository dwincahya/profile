import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="py-5 px-16 top-0 z-50 w-full bg-gradient-to-b from-gray-600 to-gray-900">
            <div className="flex items-center justify-between">
                <p className="font-extrabold text-slate-800 text-white text-2xl">DwiCahya</p>

                <GiHamburgerMenu
                    onClick={() => setOpen(!isOpen)}
                    className="block text-white size-10 rounded-full p-2 cursor-pointer hover:bg-gray-500 md:hidden"
                />

                <ul className="hidden md:flex gap-x-8 text-white font-bold text-2xl">
                    <li><a href="">KEAHLIAN</a>
                    </li>
                    <li><a href="">PROYEK</a>
                    </li>
                </ul>
            </div>
            {isOpen && (
                <ul className="flex pt-6 gap-y-4 md:hidden flex-col gap-x-8 text-white font-bold">
                    <li>
                        <a href="/Skills" className="underline-offset-4 hover:underline">
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a href="/project" className="underline-offset-4 hover:underline">
                            PROJECT
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
