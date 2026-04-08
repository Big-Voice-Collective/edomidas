"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Developing Leaders & Managers", href:"/developing" }
  ];

  return (
    <div className="hidden lg:flex items-center w-full px-5 py-5 bg-white">
  {/* LEFT: Links */}
  <div className="flex flex-1 items-center gap-6 text-[#878787]">
  <Link href="/">
    <Image
      src="/linkeinlogo.png"
      alt="Edomidas Logo"
      width={45}
      height={45}
      priority
    />
  </Link>
  </div>

  {/* CENTER: Logo */}
  <div className="flex-1 flex justify-center">
  <Link href="/">
    <Image
      src="/edomidaslogo.png"
      alt="Edomidas Logo"
      width={210}
      height={50}
      priority
    />
  </Link>
</div>

  {/* RIGHT: Button */}
  <div className="flex justify-end gap-6">
  
  {/* Text (stacked) */}
  <div className="flex flex-col justify-center text-[#58595B]">
    <p className="text-sm mb-0">0333 772 2676</p>
    <p className="text-sm mb-0">enquires@edomidas.com</p>
  </div>

  {/* Button */}
  <button className="bg-[#F2EB42] hover:bg-red-500 text-[#58595B] px-9 rounded-full flex items-center text-sm font-semibold">
    CONTACT
  </button>

</div>
</div>
  );
}