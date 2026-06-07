import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import imgBuilding from "./../assests/buildingmaterialssupply.jpeg";
import imgPlumbing from "./../assests/plumbingmaterialssupply.jpeg";
import imgElectrical from "./../assests/electricalmaterialssupply.jpeg";
import imgInterior from "./../assests/interiordecorationmaterials.jpeg";
import imgFurniture from "./../assests/furnitureandfurnishingmaterials.jpeg";

import imgBuildingExtra1 from "./../assests/building_materials_extra_1.jpg";
import imgBuildingExtra2 from "./../assests/building_materials_extra_2.jpg";
import imgBuildingExtra3 from "./../assests/building_materials_extra_3.jpg";
import imgBuildingExtra4 from "./../assests/building_materials_extra_4.jpg";

import imgPlumbingExtra1 from "./../assests/plumbing_materials_extra_1.jpg";
import imgPlumbingExtra2 from "./../assests/plumbing_materials_extra_2.jpg";
import imgPlumbingExtra3 from "./../assests/plumbing_materials_extra_3.jpg";
import imgPlumbingExtra4 from "./../assests/plumbing_materials_extra_4.jpg";

import imgElectricalExtra1 from "./../assests/electrical_materials_extra_1.jpg";
import imgElectricalExtra2 from "./../assests/electrical_materials_extra_2.jpg";
import imgElectricalExtra3 from "./../assests/electrical_materials_extra_3.jpg";
import imgElectricalExtra4 from "./../assests/electrical_materials_extra_4.jpg";

import imgInteriorExtra1 from "./../assests/interior_extra_1.jpg";
import imgInteriorExtra2 from "./../assests/interior_extra_2.jpg";
import imgInteriorExtra3 from "./../assests/interior_extra_3.jpg";
import imgInteriorExtra4 from "./../assests/interior_extra_4.jpg";

import imgFurnitureExtra1 from "./../assests/furniture_extra_1.jpg";
import imgFurnitureExtra2 from "./../assests/furniture_extra_2.jpg";
import imgFurnitureExtra3 from "./../assests/furniture_extra_3.jpg";
import imgFurnitureExtra4 from "./../assests/furniture_extra_4.jpg";

const procurementServices = [
  {
    id: "building-materials",
    title: "Building Materials Supply",
    image: imgBuilding,
    extraImages: [imgBuildingExtra1, imgBuildingExtra2, imgBuildingExtra3, imgBuildingExtra4],
    summary: "Comprehensive sourcing and supply of high-quality structural and foundational building materials.",
    details: [
      "We partner with leading global and local manufacturers to procure top-grade structural steel, cement, roofing sheets, and masonry products.",
      "Our quality assurance team rigorously inspects all batches to ensure they meet international safety and durability standards before delivery.",
      "We handle large-scale bulk procurement for commercial projects, ensuring timely delivery to site to keep your project schedule on track."
    ],
    features: [
      "Structural steel and reinforcement bars",
      "Cement, concrete, and masonry products",
      "Timber, plywood, and board materials",
      "Roofing materials and accessories"
    ],
    color: "hsl(225,68%,32%)",
  },
  {
    id: "plumbing-materials",
    title: "Plumbing Materials Supply",
    image: imgPlumbing,
    extraImages: [imgPlumbingExtra1, imgPlumbingExtra2, imgPlumbingExtra3, imgPlumbingExtra4],
    summary: "Durable plumbing materials and accessories for residential, commercial, and industrial water systems.",
    details: [
      "Our plumbing procurement division specializes in sourcing durable, corrosion-resistant PVC pipes, valves, and fittings for complex water supply networks.",
      "We supply high-end sanitary ware and bathroom fixtures that balance aesthetic appeal with long-lasting functionality and water efficiency.",
      "From drainage solutions to advanced water treatment and storage systems, we provide comprehensive plumbing packages tailored to project specifications."
    ],
    features: [
      "High-pressure PVC and PPR pipes",
      "Sanitary ware and premium bathroom fixtures",
      "Industrial pumps and water treatment accessories",
      "Drainage systems and underground piping"
    ],
    color: "hsl(200,60%,35%)",
  },
  {
    id: "electrical-materials",
    title: "Electrical Materials Supply",
    image: imgElectrical,
    extraImages: [imgElectricalExtra1, imgElectricalExtra2, imgElectricalExtra3, imgElectricalExtra4],
    summary: "Certified electrical materials, fittings, and cables for safe and efficient power installations.",
    details: [
      "Safety and compliance are paramount in our electrical procurement. We source only standard-compliant cables, wires, and circuit breakers.",
      "We supply robust distribution boards, electrical panels, and generators capable of supporting heavy industrial or commercial loads.",
      "Our range includes modern, energy-efficient lighting fixtures, smart switches, and sockets designed for both functionality and interior aesthetics."
    ],
    features: [
      "Standard-compliant cables and wires (all gauges)",
      "Circuit breakers, panels, and distribution boards",
      "Energy-efficient lighting and smart switches",
      "Generators and power backup solutions"
    ],
    color: "hsl(43,74%,38%)",
  },
  {
    id: "interior-decoration",
    title: "Interior Decoration & Finishing",
    image: imgInterior,
    extraImages: [imgInteriorExtra1, imgInteriorExtra2, imgInteriorExtra3, imgInteriorExtra4],
    summary: "Premium interior finishing materials that transform spaces into elegant environments.",
    details: [
      "We procure a curated selection of premium paints, wallpapers, and wall coatings that offer superior coverage, durability, and stunning visual finishes.",
      "Our finishing materials include advanced false ceiling systems, decorative mouldings, and architectural trimmings that add a touch of luxury to any space.",
      "We also supply high-quality flooring solutions, including hardwood, laminates, and luxury vinyl, complete with the necessary underlays and adhesives."
    ],
    features: [
      "Premium paints, coatings, and wallpapers",
      "False ceiling and acoustic partition systems",
      "Decorative mouldings and architectural trimmings",
      "Hardwood, laminate, and vinyl flooring materials"
    ],
    color: "hsl(300,40%,40%)",
  },
  {
    id: "furniture-furnishing",
    title: "Furniture & Furnishing Procurement",
    image: imgFurniture,
    extraImages: [imgFurnitureExtra1, imgFurnitureExtra2, imgFurnitureExtra3, imgFurnitureExtra4],
    summary: "Bespoke furniture and furnishing materials for homes, offices, and commercial spaces.",
    details: [
      "Our procurement extends to ergonomic office workstations, executive desks, and premium seating solutions designed for productivity and comfort.",
      "For residential projects, we source elegant living room sets, bedroom furniture, and custom wardrobes that reflect contemporary and classic styles.",
      "We supply high-grade upholstery materials, luxury fabrics, draperies, and window blinds, ensuring every furnishing detail is perfectly coordinated."
    ],
    features: [
      "Ergonomic office furniture and workstations",
      "Elegant residential furniture and bedroom sets",
      "High-grade upholstery materials and foams",
      "Custom draperies, blinds, and luxury fabrics"
    ],
    color: "hsl(20,60%,38%)",
  }
];

export default function Procurement() {
  return (
    <div className="pt-[72px]">
      {/* Page Hero */}
      <section className="bg-[hsl(225,68%,14%)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            <span className="text-[hsl(43,74%,62%)] font-semibold text-sm uppercase tracking-widest">Documentation</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Procurement & Supply
            <span className="block text-[hsl(43,74%,62%)]">Detailed Portfolio</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Explore our comprehensive procurement capabilities. We ensure the timely delivery of standard-compliant, high-quality materials and furnishings for projects of all scales.
          </p>
        </div>
      </section>

      {/* Procurement Details Sections */}
      <div className="bg-white">
        {procurementServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={service.id} 
              id={service.id} 
              className={`py-20 sm:py-28 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group mb-4 lg:mb-6">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[400px] sm:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"
                      />
                      <h2 className="absolute bottom-8 left-8 right-8 text-3xl font-display font-bold text-white z-20">
                        {service.title}
                      </h2>
                    </div>
                    {/* @ts-ignore - extraImages is optional */}
                    {service.extraImages && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                        {/* @ts-ignore */}
                        {service.extraImages.map((img, idx) => (
                          <div key={idx} className="relative rounded-xl overflow-hidden shadow-md group h-24 sm:h-32">
                            <img src={img} alt={`${service.title} extra ${idx}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                      Procurement Division
                    </div>
                    
                    <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="space-y-6 mb-10">
                      {service.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Key Supply Categories</h3>
                      <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: service.color }} />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(225,68%,14%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-[hsl(43,74%,42%)] rounded-full blur-3xl opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Start Your Procurement Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Partner with ADMOS GLOBAL RESOURCE LIMITED for reliable, cost-effective, and high-quality procurement solutions tailored exactly to your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(43,74%,50%)] text-[hsl(225,68%,14%)] font-bold px-8 py-4 rounded-md hover:bg-[hsl(43,74%,55%)] transition-colors shadow-lg text-lg"
          >
            Contact Our Procurement Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
