"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { CustomLink } from "./CustomLink";

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Pages", path: "pages" },
    { link: "News", path: "news" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto md:px-14 p-4 bg-white text-primary border-b lg:border-b-0 z-50 fixed lg:static top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center text-lg font-medium">
          <div className="flex space-x-14 items-center">
            <Link href="/" className="lg:w-52">
              <Image src="/logo.png" alt="Logo" width={100} height={29} />
            </Link>

            {/* NAV ITEMS */}
            <ul className="md:flex space-x-12 hidden">
              {
                navItems.map(({ link, path }) => <Link key={link} href={path} className="block hover:text-yellow-500"> {link} </Link>)
              }
            </ul>
          </div>

          {/* BTN */}
          <div className="space-x-12 hidden md:flex items-center">
            <CustomLink href='/' size="default">constancy</CustomLink>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
              {
                isMenuOpen ?
                  (<FaRegCircleXmark className="w-6 h-6 text-blue-700" />) :
                  (<RiMenu3Line className="w-6 h-6 text-blue-700" />)
              }
            </button>
          </div>
        </div>
      </nav>

      <div className={`space-y-6 px-8 pt-24 pb-5 bg-[#086ad7] h-full font-semibold text-[#FFF] text-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
          navItems.map(({ link, path }) => <Link key={link} href={path} className="block hover:text-gray-300 p-2 border-b border-b-gray-400/30"> {link} </Link>)
        }
      </div>
    </header>
  );
};