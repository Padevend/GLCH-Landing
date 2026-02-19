import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Globe, CreditCard, ChevronRight, AlertCircle } from "lucide-react";

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
  const [showCountries, setShowCountries] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-600 mb-4 animate-bounce">
            <Heart size={32} fill="currentColor" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Soutenir notre <span className="text-violet-600">Communauté</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Choisissez la méthode de paiement la plus adaptée à votre situation géographique.
          </p>
        </div>

        {/* Main Question Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 text-center">
              Êtes-vous résident dans l'un de ces pays ?
            </h2>

            {/* Country Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {AVAILABLE_COUNTRIES.map((country) => (
                <span 
                  key={country.code}
                  className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-sm font-semibold text-slate-600"
                >
                  {country.name}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* YES OPTION - Local Payment */}
              <button
                onClick={() => navigate("/donate/mobile")}
                className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-slate-100 rounded-3xl hover:border-violet-600 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-violet-600 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <span className="text-lg font-black text-slate-900">OUI</span>
                <span className="text-sm text-slate-500 mt-1">Paiement Mobile Local</span>
                <div className="mt-4 flex items-center text-violet-600 font-bold text-sm">
                  Continuer <ChevronRight size={16} className="ml-1" />
                </div>
              </button>

              {/* NO OPTION - PayPal (Coming Soon) */}
              <div className="relative group">
                <button
                  disabled
                  className="w-full flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl cursor-not-allowed opacity-80"
                >
                  <div className="w-12 h-12 bg-slate-200 text-slate-400 rounded-2xl flex items-center justify-center mb-4">
                    <CreditCard size={24} />
                  </div>
                  <span className="text-lg font-black text-slate-400">NON</span>
                  <span className="text-sm text-slate-400 mt-1">PayPal / Carte Int.</span>
                  
                  {/* Coming Soon Badge */}
                  <div className="mt-4 px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                    <AlertCircle size={12} /> Bientôt disponible
                  </div>
                </button>
                
                {/* Tooltip on hover */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  PayPal arrive bientôt pour le reste du monde !
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <p className="mt-8 text-center text-slate-400 text-sm">
          Vos transactions sont sécurisées et cryptées. <br className="hidden md:block" />
          Besoin d'aide ? <button className="text-violet-600 font-bold hover:underline">Contactez le support</button>
        </p>
      </div>
    </div>
  );
}