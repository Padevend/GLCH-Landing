import React from "react";
import { 
  Stethoscope, 
  ShieldPlus, 
  Activity, 
  Users, 
  ChevronRight,
  HeartPulse
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data internalisé pour garantir le fonctionnement dans le Canvas
const services = [
  {
    name: "Primary Care",
    description: "Comprehensive medical services focused on prevention, wellness, and treatment of common illnesses.",
    icon: <Stethoscope size={32} />,
  },
  {
    name: "Health Education",
    description: "Empowering communities with knowledge about hygiene, lifestyle, and disease prevention strategies.",
    icon: <Users size={32} />,
  },
  {
    name: "Preventive Medicine",
    description: "Early detection and intervention to maintain a healthy state and avoid chronic complications.",
    icon: <ShieldPlus size={32} />,
  },
  {
    name: "Community Support",
    description: "Financial and moral assistance for members in need of specialized medical intervention.",
    icon: <Activity size={32} />,
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-widest uppercase mb-4">
            <HeartPulse size={14} />
            <span>Excellence in Care</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            OUR <span className="text-violet-700">SERVICES</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-light">
            We offer the best primary preventive care services tailored to your cultural and health needs.
          </p>
          <div className="mt-6 w-16 h-1 bg-violet-600 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-50 rounded-bl-[5rem] -z-0 transition-colors group-hover:bg-violet-100/50" />
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 flex items-center justify-center bg-violet-50 text-violet-700 rounded-2xl mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-sm">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-violet-700 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-sm font-bold text-violet-700 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Read more
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA (Optional) */}
        <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-violet-600 to-violet-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-2xl font-bold mb-2">Need specialized assistance?</h4>
            <p className="text-violet-100">Our medical team is here to guide you through your health journey.</p>
          </div>
          <Link to={"/contact"} className="px-8 py-3 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-colors whitespace-nowrap">
            Contact Us Now
          </Link>
        </div>

      </div>
    </section>
  );
}