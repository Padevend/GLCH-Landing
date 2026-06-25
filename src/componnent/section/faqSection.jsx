import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircleQuestion, ArrowUpRight } from "lucide-react";
import { faqs } from "../../data";

export default function FaqsSection() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white font-sans text-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* --- EN-TÊTE ÉDITORIAL --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
            <MessageCircleQuestion size={12} className="text-violet-600" />
            <span>Support Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
            Questions <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Fréquentes</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-normal max-w-xl">
            Find answers to common questions about our community, memberships, and healthcare vision.
          </p>
        </div>

        {/* --- LISTE DES ACCORDÉONS PREMIUM --- */}
        <div className="border-t border-slate-200/80">
          {faqs.map((faq, index) => {
            const isOpen = activeFAQ === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-slate-200/80 transition-colors duration-300"
              >
                <button
                  className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4 pr-4">
                    {/* Indexation fine style catalogue */}
                    <span className={`text-[10px] font-mono font-bold mt-1.5 transition-colors ${
                      isOpen ? "text-violet-600" : "text-slate-300 group-hover:text-slate-600"
                    }`}>
                      0{index + 1}.
                    </span>
                    <h3 className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
                      isOpen ? "text-slate-950" : "text-slate-700 group-hover:text-slate-950"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Bouton d'action géométrique minimal */}
                  <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                    ? "bg-slate-950 border-transparent text-white rotate-90" 
                    : "bg-slate-50 border-slate-200/60 text-slate-400 group-hover:text-slate-900 group-hover:border-slate-300"
                  }`}>
                    {isOpen ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Conteneur de réponse fluide */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[350px] opacity-100 mb-6" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="pl-8 pr-2 sm:pr-12">
                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- ZONE D'AIDE EXTÉRIEURE CLAIRE --- */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 mb-1">Vous avez encore des interrogations ?</h4>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">Notre équipe de coordination communautaire est disponible pour vous répondre.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 text-xs font-bold tracking-wider uppercase rounded-xl shadow-sm transition-all whitespace-nowrap active:scale-[0.98]">
            <span>Contacter le support</span>
            <ArrowUpRight size={14} className="text-slate-400" />
          </button>
        </div>

      </div>
    </section>
  );
}