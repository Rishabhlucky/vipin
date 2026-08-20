import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo footer-logo">Surgi<span>Care</span></Link>
          <p>Professional surgical instruments and medical equipment supply for hospitals, clinics and healthcare professionals.</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>

        <div>
          <h4>Quick links</h4>
          <Link href="/products">Products</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span><Phone size={16} /> +91 98765 43210</span>
          <span><Mail size={16} /> sales@example.com</span>
          <span><MapPin size={16} /> Your City, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} SurgiCare. All rights reserved.</div>
      </div>
    </footer>
  );
}
