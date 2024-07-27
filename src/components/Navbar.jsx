import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="py-5 px-16 top-0 z-50 w-full bg-slate-800">
            <div className="flex items-center justify-between">
                <p className="font-extrabold text-slate-800 text-white text-2xl">DwiCahya</p>

                <GiHamburgerMenu
                    onClick={() => setOpen(!isOpen)}
                    className="block text-slate-800 size-10 rounded-full p-2 cursor-pointer hover:bg-gray-300 md:hidden"
                />

                <ul className="hidden md:flex gap-x-8 text-slate-800 font-bold">
                    <li>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
            {isOpen && (
                <ul className="flex pt-6 gap-y-4 md:hidden flex-col gap-x-8 text-slate-800 font-bold">
                    <li>
                        <a href="/" className="underline-offset-4 hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about-us" className="underline-offset-4 hover:underline">
                            About Us
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
