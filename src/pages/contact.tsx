import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const locations = [
  {
    type: "Head Office",
    address: "36A Toyin Street, Ikeja, Lagos, Nigeria",
    isHeadOffice: true,
  },
  {
    type: "Warehouse — Orile",
    address: "Orile, Lagos, Nigeria",
    isHeadOffice: false,
  },
  {
    type: "Warehouse — Apapa-Oshodi",
    address: "Apapa-Oshodi Expressway, Lagos, Nigeria",
    isHeadOffice: false,
  },
  {
    type: "Warehouse — Apapa",
    address: "Warehouse Road, Apapa, Lagos, Nigeria",
    isHeadOffice: false,
  },
];

const serviceOptions = [
  "Building Materials Supply",
  "Plumbing Materials Supply",
  "Electrical Materials Supply",
  "Interior Decoration Materials",
  "Tiles & Kitchen Accessories",
  "Furniture & Furnishing Materials",
  "General Procurement",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-[72px]">
      {/* Page Hero */}
      <section className="bg-[hsl(225,68%,14%)] py-20" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            <span className="text-[hsl(43,74%,62%)] font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4" data-testid="text-contact-heading">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl" data-testid="text-contact-description">
            Ready to discuss your procurement needs? Reach out to us — we are here to help you source quality materials and deliver them anywhere in Nigeria.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white" data-testid="section-contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-[hsl(225,68%,20%)] mb-2" data-testid="text-form-heading">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the form below and our team will respond within 24 hours.</p>

              {submitted ? (
                <div
                  className="bg-[hsl(150,55%,95%)] border border-[hsl(150,55%,70%)] rounded-xl p-8 text-center"
                  data-testid="message-success"
                >
                  <div className="w-16 h-16 bg-[hsl(150,55%,32%)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-[hsl(150,55%,25%)] text-xl mb-2">Message Sent!</h3>
                  <p className="text-[hsl(150,55%,35%)] text-sm">
                    Thank you for reaching out to AGRL. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        data-testid="input-name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(225,68%,32%)] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        data-testid="input-email"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(225,68%,32%)] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        data-testid="input-phone"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(225,68%,32%)] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="service">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        data-testid="select-service"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(225,68%,32%)] focus:border-transparent transition"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your procurement needs..."
                      data-testid="input-message"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(225,68%,32%)] focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="button-submit-form"
                    className="w-full bg-[hsl(225,68%,32%)] text-white font-bold py-3.5 rounded-lg hover:bg-[hsl(225,68%,26%)] transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-[hsl(225,68%,20%)] mb-2" data-testid="text-info-heading">
                Our Locations
              </h2>
              <p className="text-gray-500 text-sm mb-8">Visit us at our head office or any of our strategic warehouse locations across Lagos.</p>

              <div className="space-y-4 mb-10">
                {locations.map((loc) => (
                  <div
                    key={loc.type}
                    data-testid={`card-location-${loc.type.toLowerCase().replace(/ /g, "-").replace(/—/g, "")}`}
                    className={`flex gap-4 p-5 rounded-xl border ${
                      loc.isHeadOffice
                        ? "border-[hsl(225,68%,32%)] bg-[hsl(225,68%,96%)]"
                        : "border-gray-100 bg-[hsl(220,20%,98%)]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        loc.isHeadOffice ? "bg-[hsl(225,68%,32%)]" : "bg-gray-200"
                      }`}
                    >
                      <MapPin
                        size={18}
                        className={loc.isHeadOffice ? "text-white" : "text-gray-500"}
                      />
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-sm ${
                          loc.isHeadOffice ? "text-[hsl(225,68%,32%)]" : "text-gray-700"
                        }`}
                      >
                        {loc.type}
                      </p>
                      <p className="text-gray-500 text-sm mt-0.5">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[hsl(225,68%,14%)] rounded-2xl p-7 text-white space-y-5">
                <h3 className="font-display font-bold text-[hsl(43,74%,62%)] uppercase text-xs tracking-widest mb-5">Direct Contact</h3>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[hsl(43,74%,62%)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a href="tel:+2348037184402" data-testid="contact-phone" className="text-white font-semibold text-sm hover:text-[hsl(43,74%,62%)] transition-colors">
                      +2348037184402
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[hsl(43,74%,62%)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a href="mailto:info@admosglobalresource.com" data-testid="contact-email" className="text-white font-semibold text-sm hover:text-[hsl(43,74%,62%)] transition-colors">
                      info@admosglobalresource.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[hsl(43,74%,62%)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Business Hours</p>
                    <p className="text-white font-semibold text-sm">Mon – Fri: 8:00am – 6:00pm</p>
                    <p className="text-gray-400 text-xs">Saturday: 9:00am – 2:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
