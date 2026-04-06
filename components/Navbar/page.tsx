"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white">
      <h1 className="text-xl font-semibold tracking-wide">SAKURA</h1>

      <div className="hidden md:flex gap-8 text-sm tracking-wide">
        <Link href="#">HOME</Link>
        <Link href="#">SPECIALS</Link>
        <Link href="#">PRODUCTS</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;