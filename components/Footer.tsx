import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-10 pt-16 pb-8">
      {/* Top Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        {/* Logo + Tagline */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          </div>
          <p className="text-xs leading-6 text-gray-500 max-w-\[160px]\">
            Full-service IT and telecoms business services company based in
            Lagos, Nigeria.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Company
          </p>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="#partners" className="hover:text-white transition">
                Partners
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Services
          </p>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="#" className="hover:text-white transition">
                Carrier Grade Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Mobile & Web Applications
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                AI & Automation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Technology Integration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Health IT
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Products
          </p>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="#" className="hover:text-white transition">
                HomeInteriors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Autobrand
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                24/7 Rides
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Contact
          </p>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>88, Norman Williams Street, Ikoyi, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span>info@technotrendng.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>+234 01-6323541</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Big Watermark Text */}
      <div className="max-w-6xl mx-auto overflow-hidden mb-6">
        <p className="text-[80px] md:text-[120px] font-extrabold text-gray-800 leading-none select-none">
          TechnoTrend
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between border-t border-gray-800 pt-6">
        <p className="text-xs text-gray-600">
          © 2026 TechnoTrend Platforms Nigeria Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#aaee00]"></span>
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Lagos, Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
}
