import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building2, Zap, Globe, Truck, Users, ShieldCheck } from "lucide-react";
import agrlLogo from "../assests/logo.jpg";

const services = [
  {
    icon: Building2,
    title: "Building Materials Supply",
    description: "High-quality general building materials for residential, commercial, and industrial construction projects.",
  },
  {
    icon: Zap,
    title: "Electrical Materials",
    description: "Supply of standard electrical materials, fittings, cables, accessories, and related components.",
  },
  {
    icon: Globe,
    title: "Interior Decoration",
    description: "Premium interior finishing and decoration materials that enhance aesthetics and functionality.",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Reliable Procurement Partner",
    description: "We simplify the procurement process by helping businesses source quality products efficiently.",
  },
  {
    icon: Zap,
    title: "Time & Cost Efficiency",
    description: "Our streamlined logistics systems help clients save valuable time and reduce operational costs.",
  },
  {
    icon: Globe,
    title: "Access to Quality Brands",
    description: "Through our global sourcing network, we provide access to reputable foreign and local brands.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "With trusted logistics partners, we ensure fast and reliable delivery across all of Nigeria.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Our leadership team combines decades of experience in banking, construction, and procurement.",
  },
  {
    icon: CheckCircle2,
    title: "Integrity & Professionalism",
    description: "We conduct business with transparency, fairness, and accountability at every step.",
  },
];

const stats = [
  { value: "25+", label: "Years of Industry Experience" },
  { value: "3", label: "Strategic Warehouse Locations" },
  { value: "6", label: "Core Service Categories" },
  { value: "100%", label: "Commitment to Quality" },
];

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center bg-[hsl(225,68%,14%)] overflow-hidden"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[hsl(225,68%,22%)] clip-diagonal hidden lg:block" />
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to top right, hsl(225,68%,14%) 50%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-1 w-12 bg-[hsl(43,74%,42%)] rounded-full" />
              <span className="text-[hsl(43,74%,62%)] font-semibold text-sm uppercase tracking-widest" data-testid="text-hero-tagline">
                CAC Registered | Lagos, Nigeria
              </span>
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              data-testid="text-hero-headline"
            >
              Nigeria's Trusted
              <span className="block text-[hsl(43,74%,62%)]">Procurement &</span>
              Supply Partner
            </h1>
            <p
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
              data-testid="text-hero-description"
            >
              Admos Global Resource Limited delivers innovative, reliable procurement and supply solutions to the construction industry and corporate organisations across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                data-testid="button-hero-services"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(43,74%,42%)] hover:bg-[hsl(43,74%,36%)] text-white font-semibold px-7 py-3.5 rounded-md transition-colors shadow-lg"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                data-testid="button-hero-contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-md transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:block">
          <img src={agrlLogo} alt="AGRL" className="h-32 w-32 object-contain opacity-30" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[hsl(43,74%,42%)]" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/ /g, "-")}`}>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
                <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[hsl(225,68%,20%)] leading-tight mb-5" data-testid="text-about-heading">
                More Than a Supplier — A Trusted Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Admos Global Resource Limited (AGRL) is a duly registered limited liability company with the Corporate Affairs Commission (CAC) of Nigeria. We are a multidimensional procurement and supply company committed to delivering innovative, reliable, and result-driven solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                As an associate and major supplier to BUILDOMART Merchandising and Constructions Limited, we have built a reputation for quality, professionalism, reliability, and timely execution — serving clients across the entire nation.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "End-to-end procurement services",
                  "Nationwide delivery via tier-one logistics partners",
                  "Quality products from local and international brands",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(43,74%,42%)] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                data-testid="button-learn-more"
                className="inline-flex items-center gap-2 bg-[hsl(225,68%,32%)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[hsl(225,68%,26%)] transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-[hsl(225,68%,14%)] rounded-2xl p-10 text-white">
                <h3 className="font-display font-bold text-[hsl(43,74%,62%)] uppercase text-xs tracking-widest mb-6">Our Purpose</h3>
                <div className="mb-8">
                  <h4 className="font-display font-bold text-lg mb-3">Our Mission</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    To provide high-quality procurement and supply solutions that meet the evolving needs of construction companies, corporate organizations, and individuals through efficiency, integrity, and excellent service delivery.
                  </p>
                </div>
                <div className="pt-8 border-t border-white/15">
                  <h4 className="font-display font-bold text-lg mb-3">Our Vision</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    To become one of Africa's leading procurement and supply companies, recognized for reliability, innovation, customer satisfaction, and operational excellence.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[hsl(43,74%,42%)] rounded-xl hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[hsl(225,68%,32%)] rounded-lg hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[hsl(220,20%,97%)]" data-testid="section-services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
              <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[hsl(225,68%,20%)]" data-testid="text-services-heading">
              Comprehensive Procurement Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              From building materials to interior decoration, we handle every procurement need for your construction project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-testid={`card-service-preview-${service.title.toLowerCase().replace(/ /g, "-")}`}
                  className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[hsl(225,68%,95%)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[hsl(225,68%,32%)] transition-colors">
                    <Icon size={22} className="text-[hsl(225,68%,32%)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-[hsl(225,68%,20%)] mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              data-testid="button-view-all-services"
              className="inline-flex items-center gap-2 border-2 border-[hsl(225,68%,32%)] text-[hsl(225,68%,32%)] font-semibold px-7 py-3 rounded-md hover:bg-[hsl(225,68%,32%)] hover:text-white transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
              <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">Why AGRL</span>
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[hsl(225,68%,20%)]" data-testid="text-why-us-heading">
              Why Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-testid={`card-why-${item.title.toLowerCase().replace(/ /g, "-")}`}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 bg-[hsl(43,74%,92%)] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={20} className="text-[hsl(43,74%,35%)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[hsl(225,68%,20%)] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[hsl(43,74%,42%)] py-16" data-testid="section-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4" data-testid="text-cta-heading">
            Partner With AGRL Today
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are handling a large construction project, office furnishing, facility upgrade, or general procurement — AGRL is your trusted partner.
          </p>
          <Link
            href="/contact"
            data-testid="button-cta-contact"
            className="inline-flex items-center gap-2 bg-[hsl(225,68%,32%)] text-white font-bold px-8 py-4 rounded-md hover:bg-[hsl(225,68%,26%)] transition-colors shadow-xl text-lg"
          >
            Contact Us Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
