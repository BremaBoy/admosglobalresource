import { Link } from "wouter";
import { ArrowRight, Award, Target, Eye, CheckCircle2 } from "lucide-react";
import director1 from "./../assests/director1.jpeg";
import director2 from "./../assests/director2.jpeg";

const leadershipTeam = [
  {
    name: "Aseniserare Justus Ade",
    title: "Managing Director",
    description:
      "An experienced ex-banker with remarkable expertise in project management, real estate finance, and general construction. He is the Chairman of BUILDOMART Merchandising and Constructions Limited and currently serves as the Managing Director of Admos Global Resource Limited.",
    initials: "AJA",
    image: director1,
    imageClass: "object-top",
  },
  {
    name: "Ajetunmobi Benson",
    title: "Executive Director",
    description:
      "A holder of a Master's Degree in Business Administration from Lagos State University and an Associate Member of the Chartered Institute of Finance and Control. With over twenty-five years of banking and construction industry experience, he serves as Executive Director.",
    initials: "AB",
    image: director2,
    imageClass: "object-center",
  },
];

const values = [
  { icon: CheckCircle2, label: "Quality" },
  { icon: CheckCircle2, label: "Professionalism" },
  { icon: CheckCircle2, label: "Reliability" },
  { icon: CheckCircle2, label: "Timely Execution" },
  { icon: CheckCircle2, label: "Integrity" },
  { icon: CheckCircle2, label: "Innovation" },
];

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Page Hero */}
      <section className="bg-[hsl(225,68%,14%)] py-20" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            <span className="text-[hsl(43,74%,62%)] font-semibold text-sm uppercase tracking-widest">About Us</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4" data-testid="text-about-page-heading">
            About Admos Global
            <span className="block text-[hsl(43,74%,62%)]">Resource Limited</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl" data-testid="text-about-page-description">
            A duly registered limited liability company with the CAC of Nigeria, committed to excellence in procurement and supply.
          </p>
        </div>
      </section>

      {/* Directors */}
      <section className="py-10 bg-[hsl(220,20%,97%)]" data-testid="section-directors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-extrabold text-[hsl(225,68%,20%)]">Board of Directors</h2>
            <p className="text-gray-500 mt-2 text-sm">Meet our directors</p>
          </div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="flex items-center gap-4 bg-white rounded-xl p-4 border">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0">
                  <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || 'object-top'}`} />
                </div>
                <div>
                  <p className="font-bold text-[hsl(225,68%,20%)]">{member.name}</p>
                  <p className="text-gray-500 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
                <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[hsl(225,68%,20%)] mb-6" data-testid="text-who-we-are-heading">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Admos Global Resource Limited (AGRL) is a multidimensional procurement and supply company committed to delivering innovative, reliable, and result-driven solutions to the construction industry and organizations requiring quality materials and general merchandise.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At AGRL, we specialize in end-to-end procurement services and efficient nationwide delivery solutions. Through our strong partnerships with tier-one logistics companies, we ensure prompt and seamless delivery of supplies to clients across Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As an associate and major supplier to BUILDOMART Merchandising and Constructions Limited, we have built a reputation for quality, professionalism, reliability, and timely execution.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "3", label: "Warehouses" },
                  { value: "6", label: "Service Areas" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    data-testid={`stat-about-${stat.label.toLowerCase().replace(/ /g, "-")}`}
                    className="bg-[hsl(225,68%,96%)] rounded-xl p-4 text-center"
                  >
                    <p className="font-display text-2xl font-extrabold text-[hsl(225,68%,32%)]">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-[hsl(225,68%,14%)] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={24} className="text-[hsl(43,74%,62%)]" />
                  <h3 className="font-display font-bold text-lg" data-testid="text-mission-heading">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To provide high-quality procurement and supply solutions that meet the evolving needs of construction companies, corporate organizations, and individuals through efficiency, integrity, and excellent service delivery.
                </p>
              </div>
              <div className="bg-[hsl(43,74%,42%)] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Eye size={24} className="text-white" />
                  <h3 className="font-display font-bold text-lg" data-testid="text-vision-heading">Our Vision</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  To become one of Africa's leading procurement and supply companies, recognized for reliability, innovation, customer satisfaction, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[hsl(220,20%,97%)]" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
              <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-[hsl(225,68%,20%)]" data-testid="text-values-heading">Our Core Values</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.label}
                  data-testid={`badge-value-${value.label.toLowerCase()}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm"
                >
                  <Icon size={16} className="text-[hsl(43,74%,42%)]" />
                  <span className="font-semibold text-[hsl(225,68%,20%)] text-sm">{value.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white" data-testid="section-leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
              <span className="text-[hsl(43,74%,42%)] font-semibold text-sm uppercase tracking-widest">Leadership</span>
              <span className="inline-block h-1 w-8 bg-[hsl(43,74%,42%)] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[hsl(225,68%,20%)]" data-testid="text-leadership-heading">
              Our Leadership Team
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Decades of combined experience in banking, construction, finance, procurement, and project management.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                data-testid={`card-leader-${member.name.toLowerCase().replace(/ /g, "-")}`}
                className="bg-[hsl(220,20%,97%)] rounded-2xl border border-gray-100 hover:shadow-md transition-shadow min-h-[460px] sm:min-h-[520px] flex flex-col overflow-hidden"
              >
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-center mt-2">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-md overflow-hidden border border-gray-200 shadow-sm">
                      <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imageClass || 'object-top'}`} />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="font-display font-bold text-[hsl(225,68%,20%)] text-lg" data-testid={`text-leader-name-${member.initials.toLowerCase()}`}>{member.name}</h3>
                    <p className="text-gray-500 text-sm mt-2 inline-block bg-[hsl(43,74%,42%)] text-white font-semibold px-3 py-1 rounded-full">{member.title}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-[hsl(225,68%,14%)]" data-testid="section-commitment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award size={40} className="text-[hsl(43,74%,62%)] mx-auto mb-5" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-5" data-testid="text-commitment-heading">
            Our Commitment
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            At Admos Global Resource Limited, we are committed to delivering quality products, dependable procurement solutions, and exceptional customer service. We continuously strive to exceed client expectations through professionalism, innovation, and operational excellence.
          </p>
          <Link
            href="/contact"
            data-testid="button-commitment-cta"
            className="inline-flex items-center gap-2 bg-[hsl(43,74%,42%)] text-white font-bold px-7 py-3.5 rounded-md hover:bg-[hsl(43,74%,36%)] transition-colors"
          >
            Partner With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
