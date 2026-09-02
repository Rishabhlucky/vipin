"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Menu, PhoneCall, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header relative z-50">
      <div className="container nav flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="logo rounded-full flex items-center"
        >
          <span className="logo-mark rounded-full animate__animated animate__pulse">
            <Image
              src={logo}
              alt="Ayugya Mati logo"
              priority
              className="rounded-full hover:-translate-x-[12px] hover:-translate-y-[12px] duration-500"
            />
          </span>

          <p className="logo-name text-xl font-bold animate__animated animate__pulse hover:text-teal-800 hover:scale-105 transition duration-300">
            Ayugya <span>Mati</span>
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <nav className=" text-base font-extrabold desktop-nav ">
          <Link
            href="/"
            className="hover:scale-105 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:scale-105 transition duration-300"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="hover:scale-105 transition duration-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:scale-105 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP GET QUOTE */}
        <Link
          href="/quote"
          className="nav-cta animate__animated animate__infinite animate__pulse"
        >
          <PhoneCall size={16} />
          Get a Quote
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* DARK BACKGROUND */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 bg-black/50
          transition-opacity duration-300
          md:hidden
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`
          fixed top-0 right-0
          h-screen w-full
          bg-white
          z-[100]
          md:hidden
          flex flex-col
          shadow-2xl
          transform
          transition-transform
          duration-300
          ease-in-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold text-teal-700"
          >
            Ayugya Mati
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-teal-700 transition"
          >
            <X size={30} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col w-full">
          <Link
            href="/"
            onClick={closeMenu}
            className="w-full px-6 py-5 text-lg border-b hover:bg-teal-50 hover:text-teal-700 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={closeMenu}
            className="w-full px-6 py-5 text-lg border-b hover:bg-teal-50 hover:text-teal-700 transition"
          >
            Products
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="w-full px-6 py-5 text-lg border-b hover:bg-teal-50 hover:text-teal-700 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="w-full px-6 py-5 text-lg border-b hover:bg-teal-50 hover:text-teal-700 transition"
          >
            Contact
          </Link>
        </nav>

        {/* GET QUOTE */}
        <div className="mt-auto p-6">
          <Link
            href="/quote"
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white py-4 rounded-lg hover:bg-teal-800 transition"
          >
            <PhoneCall size={18} />
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

