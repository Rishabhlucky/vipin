"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("Thanks! We will contact you soon.");
        form.reset();
      } else {
        setSuccess(result.error || "Something went wrong.");
      }
    } catch (error) {
      setSuccess("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="inner-page section">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Get in touch</div>

          <h1>Let's discuss your requirement.</h1>

          <p className="lead">
            Send your product list or tell us what you need.
          </p>

          <div className="contact-info">
            <div>
              <Phone />
              <div>
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </div>
            </div>

            <div>
              <Mail />
              <div>
                <strong>Email</strong>
                <span>sales@example.com</span>
              </div>
            </div>

            <div>
              <MapPin />
              <div>
                <strong>Office</strong>
                <span>Your City, India</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Business email
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              placeholder="+91..."
            />
          </label>

          <label>
            Requirement
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your requirement..."
              required
            />
          </label>

          <button
            disabled={loading}
            className="btn btn-primary"
            type="submit"
          >
            {loading ? "Sending..." : "Send Enquiry"}
            <Send size={18} />
          </button>

          {success && (
            <p className="mt-3 text-sm">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}


// "use client"
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";

// export const metadata = {
//   title: "Contact Us",
//   description:
//     "Contact SurgiCare for surgical instrument enquiries, hospital supply requirements, product information and quotations."
// };

// export default function ContactPage() {
//     const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();

//     setLoading(true);
//     setSuccess("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//     };

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();

//     setLoading(false);

//     if (res.ok) {
//       setSuccess("Thanks! We will contact you soon.");
//       form.reset();
//     } else {
//       setSuccess(result.error || "Something went wrong.");
//     }
//   }
//   return (
//     <section className="inner-page section">
//       <div className="container contact-grid">
//         <div>
//           <div className="eyebrow">Get in touch</div>
//           <h1>Let's discuss your requirement.</h1>
//           <p className="lead">
//             Send your product list or tell us what you need. Replace the
//             placeholder contact details below with your firm's real details.
//           </p>

//           <div className="contact-info">
//             <div><Phone /><div><strong>Phone</strong><span>+91 98765 43210</span></div></div>
//             <div><Mail /><div><strong>Email</strong><span>sales@example.com</span></div></div>
//             <div><MapPin /><div><strong>Office</strong><span>Your City, India</span></div></div>
//           </div>
//         </div>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <label>Name<input name="name" placeholder="Your name" required /></label>
//           <label>Business email<input name="email" type="email" placeholder="you@company.com" required /></label>
//           <label>Phone<input name="phone" placeholder="+91..." /></label>
//           <label>Requirement<textarea name="message" rows="5" placeholder="Tell us about your requirement..." required /></label>
//           <button disabled={loading} className="btn btn-primary" type="submit">Send Enquiry <Send size={18} /></button>
//           <small>This demo form is UI-only. Connect it to your email/API before production.</small>
//         </form>
//       </div>
//     </section>
//   );
// }
