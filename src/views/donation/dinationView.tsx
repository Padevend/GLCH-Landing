import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Globe, CreditCard, ChevronRight, AlertCircle, ShieldCheck } from "lucide-react";
import { donations_links } from "../../data";

const AVAILABLE_COUNTRIES = [
  { code: "CM", name: "Cameroun" },
  { code: "BJ", name: "Bénin" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "RW", name: "Rwanda" },
  { code: "UG", name: "Ouganda" },
  { code: "KE", name: "Kenya" },
];

export default function DonationProviderView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 flex items-center justify-center px-6 py-20 selection:bg-slate-100">
      <div className="max-w-3xl w-full">
        
        {/* --- EN-TÊTE DU GUICHET D'ACCOMPAGNEMENT --- */}
        <div className="border-b border-slate-200/60 pb-10 mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-violet-100">
            <Heart size={10} className="fill-current" />
            <span>Dotation de Solidarité</span>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase leading-none">
                SOUTENIR NOTRE <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">COMMUNAUTÉ.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed md:border-l border-slate-200 md:pl-6">
                Chaque contribution participe directement au déploiement de nos infrastructures et de nos protocoles de soin locaux.
              </p>
            </div>
          </div>
        </div>

        {/* --- FORMULAIRE DE VÉRIFICATION GÉOGRAPHIQUE --- */}
        <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
          
          <div className="mb-8">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4 mb-2">
              Vérification de la Zone de Résidence
            </h3>
            <p className="text-xs text-slate-400 font-normal">
              Afin d'ajuster le protocole de virement, confirmez si vous résidez actuellement dans l'un des pays suivants :
            </p>
          </div>

          {/* Liste des pays sous forme d'index de badges fins */}
          <div className="flex flex-wrap gap-2 mb-10">
            {AVAILABLE_COUNTRIES.map((country) => (
              <span 
                key={country.code}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-xl text-xs font-mono font-bold text-slate-600 uppercase tracking-wide"
              >
                {country.name}
              </span>
            ))}
          </div>

          {/* Grille des passerelles de transfert */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* OPTION : OUI - Passerelle Locale Mobile */}
            <button
              onClick={() => window.location.href = donations_links.mesomb}
              className="group flex flex-col justify-between p-6 bg-slate-50/50 border border-slate-200 rounded-2xl hover:border-slate-950 hover:bg-white transition-all duration-300 text-left"
            >
              <div>
                <div className="w-9 h-9 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Globe size={14} />
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">RÉSIDENT DE LA ZONE</h4>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  Activez le protocole sécurisé via Mobile Money (Orange Money, MTN, Wave, Moov).
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold tracking-widest text-slate-900 uppercase w-full">
                <span>Continuer l'envoi</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </button>

            {/* OPTION : NON - Passerelle Internationale (Bientôt) */}
            <div className="flex flex-col justify-between p-6 bg-slate-50/20 border border-dashed border-slate-200 rounded-2xl opacity-60">
              <div>
                <div className="w-9 h-9 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard size={14} />
                </div>
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-tight mb-1">AUTRE ZONE GÉOGRAPHIQUE</h4>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  Traitement de dotation internationale par PayPal et Cartes Bancaires majeures.
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50/60 border border-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  <AlertCircle size={10} /> En cours de validation
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* --- PIED DE PAGE : CERTIFICATION & SUPPORT --- */}
        <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 px-2 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-slate-300" />
            <span>Flux de transactions audité, chiffré de bout en bout (SSL/TLS).</span>
          </div>
          <div>
            Une question ?{" "}
            <button 
              onClick={() => navigate("/contact")}
              className="text-slate-900 font-bold hover:underline transition-all"
            >
              Joindre le secrétariat général
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}