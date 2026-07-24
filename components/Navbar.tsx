import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-288.5 mx-auto mt-4">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={45} height={38} priority />
      </Link>

      <div className="flex items-center gap-94.5">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="bg-[#1565FF] text-white text-center rounded-full px-6 py-2.5 font-manrope font-bold text-[13px] leading-[19.5px] tracking-[-0.13px]"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
}
