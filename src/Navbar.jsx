import { useState } from "react";
import BrandImage from "./assets/developer.png";

const Navbar = () => {
    const menu = [
        {
            link: "#home",
            title: "HOME",
            id: 1
        },
        {
            link: "#about",
            title: "ABOUT",
            id: 2
        },
        {
            link: "#project",
            title: "PROJECTS",
            id: 3
        },
        {
            link: "#skill",
            title: "SKILLS",
            id: 4
        },
        {
            link: "#resume",
            title: "RESUME",
            id: 5
        },
        {
            link: "#certification",
            title: "CERTIFICATION",
            id: 6
        },
        {
            link: "#contact",
            title: "CONTACT",
            id: 7
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="main flex py-6 px-4 md:justify-between justify-center items-center bg-slate-900 text-white sticky top-0">
                {/* BrandName */}
                <div className="hidden md:block bg-white rounded-sm">
                    <img className="h-[44px] w-[44px]" src={BrandImage} alt="" />
                </div>
                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </div>

                {/* Menu Links for Medium and Large Screens */}
                <div className="hidden md:flex md:flex-row">
                    {menu.map((m) => (
                        <a key={m.id} className="text-[2px] md:text-[19px] lg:text-[22px]
                        font-semibold md:px-3 md:py-2  lg:px-6 lg:py-3 hover:bg-gray-600 rounded-full w-88 mx-auto px-1 hover:duration-300" href={m.link}>{m.title}</a>
                    ))}
                  
                </div>
                
                {/* Hamburger Menu for Small Screens */}
                <div className={`md:hidden flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
                    {menu.map((m) => (
                        <a key={m.id} className="md:px-6 md:py-3 text-[19px] hover:bg-gray-600 rounded-full w-88 mx-auto px-1" href={m.link}>{m.title}</a>
                    ))}
                   
                </div>
            </div>
        </>
    );
};

export default Navbar;