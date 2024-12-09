"use client";
import { useState } from "react";

const navLinks = [
    { id: 1, menu: "About" },
    { id: 2, menu: "Pricing" },
    { id: 3, menu: "Contact" },
    { id: 4, menu: "Buy Nft" },
];

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const [active, setActive] = useState<string>("About");

    const toggleMenu = () => setMenu((prev) => !prev);

    return (
        <nav className="w-full flex py-6 justify-between items-center xl:px-0 sm:px-16 px-6 relative">
            <img
                src="/icons/logo.svg"
                alt="logo"
                className="w-[124px] h-[32px] object-contain"
            />

            <ul className="justify-end items-center flex-1 gap-12 w-full sm:flex hidden cursor-pointer">
                {navLinks.map((item) => (
                    <li
                        key={item.id}
                        className="hover:text-secondary font-medium text-[20px]"
                    >
                        <a href={`#${item.menu}`} className="hover:text-white">
                            {item.menu}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
                <img
                    src={menu ? "/icons/close.svg" : "/icons/menu.svg"}
                    alt="menu"
                    onClick={toggleMenu}
                />
            </div>

            <div
                className={`fixed top-20 right-0 h-full w-[35%] bg-secondary z-[10] transition-transform duration-300 sm:hidden flex
                ${menu ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col h-full p-6">
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-outfit font-medium text-[18px] cursor-pointer ${active === nav.menu ? "text-white" : "text-black"}`}
                                onClick={() => { setActive(nav.menu); toggleMenu(); }}
                            >
                                <a href={`#${nav.menu}`} className="hover:text-white">
                                    {nav.menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
