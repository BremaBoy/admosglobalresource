import { Link } from "wouter";
import { ArrowRight, Building2, Droplets, Zap, Paintbrush2, Grid3X3, Armchair } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Materials Supply",
    description:
      "Supply of high-quality general building materials for residential, commercial, and industrial construction projects. Our extensive inventory ensures that all your structural and foundational needs are met with precision and quality.",
    features: [
      "Structural steel and reinforcement bars",
      "Cement and concrete materials",
      "Roofing materials and accessories",
      "Blocks, bricks, and masonry products",
      "Timber, plywood, and board materials",
    ],
    color: "hsl(225,68%,32%)",
    bgColor: "hsl(225,68%,96%)",
  },
  {
    icon: Droplets,
    title: "Plumbing Materials Supply",
    description:
      "Procurement and delivery of durable plumbing materials and accessories for all categories of projects. From water supply systems to drainage solutions, we provide everything required for seamless plumbing installations.",
    features: [
      "PVC pipes, fittings, and valves",
      "Sanitary ware and bathroom fixtures",
      "Water tanks and storage solutions",
      "Drainage systems and components",
      "Pumps and water treatment accessories",
    ],
    color: "hsl(200,60%,35%)",
    bgColor: "hsl(200,60%,95%)",
  },
  {
    icon: Zap,
    title: "Electrical Materials Supply",
    description:
      "Supply of standard electrical materials, fittings, cables, accessories, and related components for all electrical installations. We source only certified, standard-compliant electrical materials.",
    features: [
      "Electrical cables and wires (all gauges)",
      "Circuit breakers and distribution boards",
      "Switches, sockets, and conduit fittings",
      "Lighting fixtures and accessories",
      "Generators and electrical panels",
    ],
    color: "hsl(43,74%,38%)",
    bgColor: "hsl(43,74%,95%)",
  },
  {
    icon: Paintbrush2,
    title: "Interior Decoration Materials",
    description:
      "Provision of premium interior finishing and decoration materials that enhance aesthetics and functionality. We offer a curated selection of finishing materials that transform spaces into elegant, functional environments.",
    features: [
      "Premium paints and wall coatings",
      "False ceiling and partition systems",
      "Decorative mouldings and trimmings",
      "Flooring materials and underlays",
      "Wallpaper and surface finishes",
    ],
    color: "hsl(300,40%,40%)",
    bgColor: "hsl(300,40%,96%)",
  },
  {
    icon: Grid3X3,
    title: "Tiles & Kitchen Accessories",
    description:
      "Supply of quality tiles, kitchen fittings, accessories, and finishing products sourced from trusted local and international manufacturers. We offer an extensive range of tiles for every application and aesthetic preference.",
    features: [
      "Floor and wall tiles (ceramic, porcelain, marble)",
      "Kitchen cabinets and countertops",
      "Kitchen sinks and faucet fittings",
      "Bathroom tiles and mosaic designs",
      "Grouting materials and tile adhesives",
    ],
    color: "hsl(150,55%,32%)",
    bgColor: "hsl(150,55%,95%)",
  },
  {
    icon: Armchair,
    title: "Furniture & Furnishing Materials",
    description:
      "Procurement and supply of furniture, furnishing items, and related materials for homes, offices, and commercial spaces. Our furniture solutions cater to diverse tastes, from contemporary to classic designs.",
    features: [
      "Office furniture and workstations",
      "Residential living room furniture",
      "Bedroom sets and wardrobes",
      "Curtains, blinds, and draperies",
      "Upholstery materials and foam",
    ],
    color: "hsl(20,60%,38%)",
    bgColor: "hsl(20,60%,96%)",
  },
];

export default function Services() {
  return (
    <div className="pt-[72px]">
      {/* Page Hero */}
      <section className="bg-[hsl(225,68%,14%)] py-20" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            <span className="text-[hsl(43,74%,62%)] font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4" data-testid="text-services-page-heading">
            Our Procurement
            <span className="block text-[hsl(43,74%,62%)]">& Supply Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl" data-testid="text-services-page-description">
            Comprehensive procurement and supply services tailored for the construction and infrastructure sector, as well as corporate and commercial clients.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-testid={`card-service-${index + 1}`}
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className="p-8"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h2
                      className="font-display text-xl font-extrabold mb-3"
                      style={{ color: service.color }}
                      data-testid={`text-service-title-${index + 1}`}
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What's included</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5" data-testid={`item-service-feature-${feature.toLowerCase().replace(/ /g, "-")}`}>
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(43,74%,42%)]" data-testid="section-services-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4" data-testid="text-services-cta-heading">
            Need a Custom Procurement Solution?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to handle all your procurement needs — from single items to full project supply. Get in touch today for a tailored quote.
          </p>
          <Link
            href="/contact"
            data-testid="button-services-contact"
            className="inline-flex items-center gap-2 bg-[hsl(225,68%,32%)] text-white font-bold px-8 py-4 rounded-md hover:bg-[hsl(225,68%,26%)] transition-colors shadow-xl text-lg"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
