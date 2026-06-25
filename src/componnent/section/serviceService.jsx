import React from "react";
import { 
  Stethoscope, 
  ShieldPlus, 
  Activity, 
  Users, 
  ArrowUpRight,
  HeartPulse
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Primary Care",
    description: "Comprehensive medical services focused on prevention, wellness, and treatment of common illnesses.",
    icon: <Stethoscope size={22} />,
  },
  {
    name: "Health Education",
    description: "Empowering communities with knowledge about hygiene, lifestyle, and disease prevention strategies.",
    icon: <Users size={22} />,
  },
  {
    name: "Preventive Medicine",
    description: "Early detection and intervention to maintain a healthy state and avoid chronic complications.",
    icon: <ShieldPlus size={22} />,
  },
  {
    name: "Community Support",
    description: "Financial and moral assistance for members in need of specialized medical intervention.",
    icon: <Activity size={22} />,
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#fafafa] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- EN-TÊTE CONFIGURATION BENTO --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
              <HeartPulse size={12} className="text-violet-600" />
              <span>Excellence in Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Nos Services <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Communautaires</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end lg:pb-2">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              We offer the best primary preventive care services tailored to your cultural and health needs, balancing innovative modern standards and regional realities.
            </p>
          </div>
        </div>

        {/* --- GRILLE DE SERVICES PREMIUM --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.03)] hover:-translate-y-1 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Ligne du haut : Icône & Index de tri */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-700 border border-slate-200/50 rounded-xl group-hover:bg-slate-950 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-violet-200 transition-colors">
                    /0{index + 1}
                  </span>
                </div>

                {/* Titre & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- BANNIÈRE CTA ÉDITORIALE LIGHT --- */}
        <div className="mt-20 relative bg-white border border-slate-200/80 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(148,163,184,0.08)] overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Cercles de lumière subtils */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-50 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
              Besoin d'une assistance médicale ou d'orientations spécifiques ?
            </h4>
            <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
              Our medical team and local coordinators are here to guide you through your health journey and cultural integration.
            </p>
          </div>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] whitespace-nowrap"
          >
            <span>Contactez notre équipe</span>
            <ArrowUpRight size={14} className="text-slate-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}