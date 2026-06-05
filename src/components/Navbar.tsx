import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import agrlLogo from "./../assests/logo.jpg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
          <img
            src={agrlLogo}
            alt="AGRL Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-[hsl(225,68%,32%)] text-base sm:text-lg leading-tight">
              ADMOS GLOBAL
            </p>
            <p className="font-display font-bold text-[hsl(225,68%,32%)] text-base sm:text-lg leading-tight">
              RESOURCE LIMITED
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className={`text-sm font-semibold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[hsl(43,74%,42%)] after:transition-all after:duration-300 ${
                location === link.href
                  ? "text-[hsl(225,68%,32%)] after:w-full"
                  : "text-gray-600 hover:text-[hsl(225,68%,32%)] after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            data-testid="button-get-quote"
            className="bg-[hsl(225,68%,32%)] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[hsl(225,68%,26%)] transition-colors duration-200 shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg" data-testid="nav-mobile">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                className={`text-base font-semibold py-2 border-b border-gray-100 ${
                  location === link.href
                    ? "text-[hsl(225,68%,32%)]"
                    : "text-gray-700 hover:text-[hsl(225,68%,32%)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              data-testid="button-mobile-get-quote"
              className="bg-[hsl(225,68%,32%)] text-white text-sm font-semibold px-5 py-3 rounded-md text-center hover:bg-[hsl(225,68%,26%)] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
