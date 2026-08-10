"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center justify-between w-full max-w-288.5 mx-auto mt-4 px-4 lg:px-0">

      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-94.5 font-['DM_Serif_Display']">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[#1565FF]"
                      : "text-gray-700 hover:text-[#1565FF]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className={`text-center rounded-full px-6 py-2.5 font-['DM_Serif_Display']font-bold text-[13px] leading-[19.5px] tracking-[-0.13px] ${
            pathname === "/contact"
              ? "bg-[#0D4ED8]"
              : "bg-[#1565FF]"
          } text-white`}
        >
          Contact us
        </Link>
      </div>

      {/* Mobile Contact + Hamburger */}
      <div className="flex items-center gap-3 lg:hidden">
        <Link
          href="/contact"
          className="bg-[#1565FF] text-white text-center rounded-full px-5 py-2.5 font-['DM_Serif_Display'] font-bold text-[13px]"
        >
          Contact us
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white font-['DM_Serif_Display'] rounded-xl shadow-lg p-5 z-50 lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-[#1565FF]"
                        : "text-gray-700 hover:text-[#1565FF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}