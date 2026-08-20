import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { FaStethoscope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="logo">
          <span className="logo-mark animate__animated        animate__pulse"><FaStethoscope size={20} /></span>
          Surgi<span>Care</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="nav-cta animate__animated animate__shakeX">
          <PhoneCall size={16} /> Get a Quote
        </Link>
        <button className="mobile-menu" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  );
}
