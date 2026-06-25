import { Check, CreditCard, Sparkles, HelpCircle, Wallet, ArrowUpRight } from "lucide-react";
import { Prices } from "../../data";

export default function PriceSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#fafafa] font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- EN-TÊTE ÉDITORIAL --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 pb-10 border-b border-slate-200/60">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
              <CreditCard size={12} className="text-violet-600" />
              <span>Membership Plans</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Nos Formules <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">D'Adhésion</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end lg:pb-2">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              Become a part of our health community. Choose a membership level that reflects your commitment to wellness and community-driven mutual support.
            </p>
          </div>
        </div>

        {/* --- GRILLE DE TARIFICATION FULL LIGHT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {Prices.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] bg-white flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 ${
                tier.isPopular 
                ? "border-2 border-slate-900 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.08)] z-10" 
                : "border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.03)]"
              }`}
            >
              {/* Badge plan populaire épuré */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-8 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                  <Sparkles size={10} className="text-amber-400 fill-amber-400" />
                  Recommandé
                </div>
              )}

              <div>
                {/* En-tête de la carte */}
                <div className="mb-8 flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    tier.isPopular ? "bg-slate-900 text-white border-transparent" : "bg-slate-50 text-slate-700 border-slate-200/60"
                  }`}>
                    <tier.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300">/0{index + 1}</span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  {tier.name}
                </p>

                {/* Zone de Prix */}
                <div className="flex items-baseline gap-1.5 pb-6 mb-8 border-b border-slate-100">
                  <span className="text-3xl font-black tracking-tight text-slate-900">{tier.price}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">XAF<span className="text-slate-300 font-normal">/an</span></span>
                </div>

                {/* Liste des Avantages */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className="mt-0.5 rounded-full p-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 flex-shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-normal leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton d'Action Structurel */}
              <a
                href="https://card.glchcommunity.online"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-300 text-xs tracking-widest uppercase border ${
                  tier.isPopular 
                  ? "bg-slate-900 hover:bg-slate-800 text-white border-transparent shadow-sm" 
                  : "bg-transparent hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                NOUS REJOINDRE
              </a>
            </div>
          ))}
        </div>

        {/* --- SECTION MANIFESTE PREVENTIF & CTA CARTES --- */}
        <div className="mt-24 relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(148,163,184,0.08)] overflow-hidden">
          {/* Décoration d'arrière-plan très discrète */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-50 to-fuchsia-50 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-violet-600 mb-4">
                <HelpCircle size={18} />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400">Question de santé globale</span>
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                Why wait until you're sick to go to the hospital?
              </h4>
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed italic border-l-2 border-slate-200 pl-4">
                "Register now and become a member of the community to enjoy preventive care, reduced medical expenses, and regional solidarity."
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              <a
                href="https://card.glchcommunity.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full lg:w-auto bg-slate-950 hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-xs tracking-[0.15em] uppercase"
              >
                <Wallet size={14} className="text-slate-400" />
                <span>Obtenir ma carte membre</span>
                <ArrowUpRight size={14} className="text-slate-500" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}