import React, { useState } from "react";
import { Heart, Sparkles, ShieldCheck, Users, ArrowUpRight } from "lucide-react";
import { Abouts } from "../../data/index";

export default function AboutSection() {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#fafafa] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- EN-TÊTE ÉDITORIAL --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 pb-10 border-b border-slate-200/60">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
              <Sparkles size={12} className="text-violet-600" />
              <span>Notre Histoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              À Propos <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">De Nous</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center lg:pl-12">
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed border-l-2 border-slate-200 pl-6 italic">
              "Together to greatness — Building a healthier community through compassion and action."
            </p>
          </div>
        </div>

        {/* --- GRILLE DES VALEURS (CARTES INTERACTIVES ALTERNÉES) --- */}
        <div className="grid gap-10 mb-28">
          {Abouts.map((stack, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.04)]"
              >
                <div className={`flex flex-col md:flex-row h-full ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Image de couverture avec effet de zoom professionnel */}
                  <div className="md:w-5/12 relative min-h-[260px] md:min-h-full overflow-hidden bg-slate-100">
                    <img
                      src={stack.cover}
                      alt={stack.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 transition-opacity group-hover:opacity-0" />
                  </div>
                  
                  {/* Zone de contenu textuel */}
                  <div className="md:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex justify-center items-center text-violet-600 shadow-sm transition-colors group-hover:bg-violet-600 group-hover:text-white group-hover:border-transparent duration-300">
                        <ShieldCheck size={18} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                        {stack.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                      {stack.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- SECTION HÉRITAGE & LEGACY STYLE RAPPORT ANNUEL --- */}
        <div className="relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(148,163,184,0.12)] overflow-hidden">
          {/* Cercles de lueurs claires d'arrière-plan */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-fuchsia-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-4 w-[2px] bg-violet-600 rounded-full" />
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em]">
                Our Association's Legacy
              </h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
              {/* Récit historique */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal space-y-6">
                  <p className="text-slate-900 font-medium text-lg sm:text-xl leading-snug">
                    The promotion of health and prevention have always been among the greatest challenges in developing countries. 
                    Mainly due to the lack of medical personnel and insufficient infrastructure, we created GLCH to bridge the gap between 
                    cultural practices and modern medicine.
                  </p>
                  
                  <div className={`space-y-6 text-slate-600 text-sm sm:text-base transition-all duration-500 ${!isReadMore && "hidden md:block"}`}>
                    <p>
                      The concept of <strong className="text-slate-900 font-semibold">"social medicine"</strong> stems from the work of a great man, the 
                      <strong className="text-slate-900 font-bold italic"> Honorable Tchoffo Lucas</strong>, known as "Grand Luc," who dedicated his life to the development 
                      of his country through social and financial aid to anyone in distress.
                    </p>
                    <p>
                      Inspired by his legacy, his daughter, <strong className="text-slate-900 font-semibold">Dr. Tchoffo Bakem Scherrez</strong>, a graduate of St. George’s University 
                      School of Medicine, decided to honor him by creating this non-profit association. She aimed to introduce a new vision 
                      of African medicine into cultural practices and ensure a healthy state of well-being.
                    </p>
                    <p className="border-t border-slate-100 pt-4">
                      We must ensure that our cultural identity is well integrated into our community health interventions. Education is essential 
                      to avoid unnecessary expenses and promote prevention. Remember, <span className="text-violet-600 font-bold">health is wealth</span>.
                    </p>
                  </div>
                </div>

                {/* Bouton d'action responsive */}
                <div className="mt-8 md:hidden">
                  <button 
                    onClick={() => setIsReadMore(!isReadMore)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-violet-600 hover:text-violet-700 transition-colors"
                  >
                    <span>{isReadMore ? "Fermer la lecture" : "Lire toute notre histoire"}</span>
                    <ArrowIcon isRotated={isReadMore} />
                  </button>
                </div>
              </div>

              {/* Blocs d'objectifs (Vision & Mission) en Verre Sablé */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-slate-100/40 border border-slate-200/60 p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mb-5">
                    <Users className="text-violet-600" size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">Our Vision</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Integrating cultural values with modern medical standards to improve life expectancy across African communities.
                  </p>
                </div>

                <div className="bg-slate-100/40 border border-slate-200/60 p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mb-5">
                    <Heart className="text-fuchsia-600" size={18} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">Our Mission</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Facilitating access to medical care through altruism, compassion, and community-driven financial support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// Sous-composant interne pour l'icône de flèche adaptative
function ArrowIcon({ isRotated }) {
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`transition-transform duration-300 ${isRotated ? "rotate-180" : "rotate-0"}`}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}