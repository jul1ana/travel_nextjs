'use client'
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import { ButtonNav } from './ButtonNav';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
        <Link href="/" className="lg:w-52">
          <Image src="/logo.png" alt="Logo" width={100} height={29} />
        </Link>

        <ul className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[16px] font-[500] text-black flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ButtonNav type="button" title="CONSULTANCY" icon="/seta-direita.png" />
        </div>

        <button onClick={toggleMenu}>
          <Image
            src="/menu-aberto.png"
            alt="Menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </button>
      </nav>
    </header>
  );
};
