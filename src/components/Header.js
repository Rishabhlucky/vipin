"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { Menu, PhoneCall } from "lucide-react";
import { FaStethoscope } from "react-icons/fa";
import Image from "next/image";

export default function Header() {

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="logo rounded-full ">
          <span className="logo-mark rounded-full animate__animated animate__pulse">
            <Image src={logo} alt="logo/image" className="rounded-full hover:-translate-x-[12px] hover:-translate-y-[12px] duration-500" />
          </span>
          <p className=" align-middle animate__animated animate__pulse hover:text-teal-800 hover:scale-105 transition duraction-300 text-xl font-bold">Ayugya <span>Mati</span></p>
        </Link>

        <nav className="desktop-nav">
          <Link href="/" className="hover:scale-105 transition duration-300 hover:border-b-blue-300">Home</Link>
          <Link href="/products" className="hover:scale-105 transition duration-300 hover:border-b-blue-300">Products</Link>
          <Link href="/about" className="hover:scale-105 transition duration-300 hover:border-b-blue-300">About</Link>
          <Link href="/contact" className="hover:scale-105 transition duration-300 hover:border-b-blue-300">Contact</Link>
        </nav>
        <Link href="/quote" onClick={() => setIsOpen(true)} className="nav-cta animate__animated  animate__infinite animate__pulse bg-red-600 hover:bg-pink-600 transform duration-500">
          <PhoneCall size={16} className="animate__animated animate-pulse animate__infinite" /> Get a Quote
        </Link>
  
       
        <button className="mobile-menu" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  );
}
