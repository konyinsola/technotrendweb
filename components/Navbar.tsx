import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-center pt-6  sticky top-0 z-50">
      <div className="w-[85%] max-w-5xl bg-white rounded-full shadow-sm border border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="font-bold text-sm">TechnoTrend</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-m text-gray-600">
          <li className="hover:text-black cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#products">Products</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#partners">Partners</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Link href="/contact">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
            Speak with us
          </button>
        </Link>
      </div>
    </nav>
  );
}
