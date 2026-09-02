import GetQuote from "@/components/getQuates";
import { BadgeCheck, Handshake, ShieldCheck, Target } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about SurgiCare, a surgical instruments and medical equipment supply company serving hospitals and healthcare professionals."
};

export default function AboutPage() {
  return (
    <div>
      <GetQuote />
    </div>
    // <section className="inner-page section">
    //   <div className="container narrow">
    //     <div className="eyebrow">About SurgiCare</div>
    //     <h1>Built around precision, trust and healthcare.</h1>
    //     <p className="lead">
    //       SurgiCare is a surgical supply company focused on helping hospitals,
    //       clinics and healthcare professionals source dependable instruments
    //       and medical equipment.
    //     </p>

    //     <div className="about-cards">
    //       <div><Target /><h3>Our mission</h3><p>Make professional healthcare procurement simpler and more reliable.</p></div>
    //       <div><ShieldCheck /><h3>Our approach</h3><p>Focus on quality, clear communication and responsible service.</p></div>
    //       <div><Handshake /><h3>Our promise</h3><p>Support customers before, during and after every order.</p></div>
    //       <div><BadgeCheck /><h3>Our values</h3><p>Precision, integrity, responsiveness and long-term relationships.</p></div>
    //     </div>
    //   </div>
    // </section>
  );
}
