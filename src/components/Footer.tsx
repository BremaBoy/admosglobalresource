import { Link } from "wouter";
import agrlLogo from "../assests/logo.jpg";
import { MapPin, Phone, Mail, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(225,68%,14%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={agrlLogo} alt="AGRL Logo" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight">ADMOS GLOBAL</p>
                <p className="font-display font-bold text-white text-sm leading-tight">RESOURCE LIMITED</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              A duly registered limited liability company committed to delivering innovative, reliable, and result-driven procurement solutions across Nigeria.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" data-testid="link-twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(43,74%,42%)] transition-colors flex items-center justify-center">
                <X size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[hsl(43,74%,62%)] uppercase text-xs tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-300 text-sm hover:text-[hsl(43,74%,62%)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[hsl(43,74%,62%)] uppercase text-xs tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Building Materials",
                "Plumbing Materials",
                "Electrical Materials",
                "Interior Decoration",
                "Tiles & Kitchen",
                "Furniture & Furnishing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    data-testid={`footer-service-${service.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-300 text-sm hover:text-[hsl(43,74%,62%)] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[hsl(43,74%,62%)] uppercase text-xs tracking-widest mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[hsl(43,74%,62%)] mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">36A Toyin Street, Ikeja, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[hsl(43,74%,62%)] mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Warehouses: Orile, Apapa-Oshodi Expressway, Warehouse Road Apapa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[hsl(43,74%,62%)] shrink-0" />
                <a href="tel:+2348000000000" data-testid="footer-link-phone" className="text-gray-300 text-sm hover:text-[hsl(43,74%,62%)] transition-colors">+234 800 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[hsl(43,74%,62%)] shrink-0" />
                <a href="mailto:info@agrl.com.ng" data-testid="footer-link-email" className="text-gray-300 text-sm hover:text-[hsl(43,74%,62%)] transition-colors">info@agrl.com.ng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Admos Global Resource Limited. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">CAC Registered | Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
