"use client"
// import useReveal from "../hooks/useReveal";
import useReveal from "../hooks/useReveal";
import Faq from "@/components/faq";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Truck,
  Wrench
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollProgress from "@/components/scrollProgress";
import Readout from "@/components/CountUp";
import ProductSlider from "@/components/productSlider";
import {productsData} from "@/data"

const benefits = [
  "Quality-focused product selection",
  "Hospital and clinic supply support",
  "Bulk and institutional orders",
  "Responsive after-sales assistance"
];

export default function HomePage() {
  const [ref, visible] = useReveal(0.15)
  return (
    <>
      <section className="section">
        <div className="container">
          <h3 className="text-2xl">Hello SLider</h3>

        </div>
        <ProductSlider />

      </section>

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="animate__animated animate__fadeInLeft">
              <div className="eyebrow">
                <h3>Hello New APp</h3>
                <span className="eyebrow-dot" />
                Surgical solutions you can rely on
              </div>
              <h1>
                Precision instruments for
                <span> better healthcare.</span>
              </h1>
              <p>
                We help hospitals, clinics and healthcare professionals source
                dependable surgical instruments and medical equipment with
                confidence.
              </p>
              <div className="hero-actions">
                <Link href="/products" className="btn btn-primary">
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-light">
                  Request a Quote
                </Link>
              </div>
              <div className="trust-row">
                <div><BadgeCheck size={19} /> Quality focused</div>
                <div><Truck size={19} /> Pan-India supply</div>
                <div><ShieldCheck size={19} /> Reliable support</div>
              </div>
            </div>
          </div>

          <div className="hero-visual animate__animated animate__fadeInRight">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="instrument-card main-instrument animate__animated animate__zoomIn animate__delay-1s">
              <div className="instrument-icon"><HeartPulse size={34} /></div>
              <span>Professional</span>
              <strong>Surgical Solutions</strong>
              <div className="instrument-line" />
              <small>Built around precision, reliability and service.</small>
            </div>
            <div className="floating-card floating-top animate__animated animate__fadeInDown animate__delay-1s">
              <CheckCircle2 size={20} />
              <div><strong>Quality</strong><span>Focused supply</span></div>
            </div>
            <div className="floating-card floating-bottom animate__animated animate__fadeInUp animate__delay-1s">
              <Truck size={20} />
              <div><strong>Fast dispatch</strong><span>For eligible orders</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip mx-4">
        <div className="container stats-grid">
          <div>
            <Readout label="Hospitals served facilities" value={480} />
          </div>

          <div className="">
            <Readout label="Institutional clients" value={50} />
          </div>
          <div>
            <Readout label="Enquiry support" value={10} />
          </div>
          <div>
            <Readout label="Years of experience" value={6} />
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our product range"
            title="Surgical products for modern healthcare"
            text="From everyday surgical instruments to operating theatre solutions, build your procurement list around dependable products."
          />
          <div className="product-grid animate__animated animate__fadeInUp">
            {productsData.map((product) => (
              <ProductCard key={product.title} title={product.title} price={product.price} rating={product.rating} review={product.review} image={product.image} />
            ))}
          </div>
          <div className="center-link">
            <Link href="/products" className="text-link">
              View all products <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
      <div className="container bg-mist-300 p-9">
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </div>
      </section>
      <section className="section soft-section">
        <div className="container split-grid">
          <div className="about-visual animate__animated animate__fadeInLeft">
            <div className="about-panel">
              <HeartPulse size={38} />
              <strong>Precision matters.</strong>
              <p>So does the service behind every order.</p>
            </div>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <SectionTitle
              align="left"
              eyebrow="Why SurgiCare"
              title="A dependable partner for your medical supply needs"
              text="We combine product knowledge, responsive communication and practical supply support to make procurement easier."
            />
            <div className="benefit-list">
              {benefits.map((item) => (
                <div className="benefit" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary">
              About Our Company <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta animate__animated animate__fadeInUp">
          <div>
            <div className="eyebrow">Need a quotation?</div>
            <h2>Tell us what your hospital or clinic needs.</h2>
            <p>Share your product list or requirement and our team can help you with the next step.</p>
          </div>
          <Link href="/contact" className="btn btn-white">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <ScrollProgress />
    </>
  );
}
