import { Check, CreditCard, Sparkles, HelpCircle, Wallet } from "lucide-react";
import { Prices } from "../../data";

export default function PriceSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-widest uppercase mb-4">
            <CreditCard size={14} />
            <span>Membership Plans</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            PRICING <span className="text-violet-700">PLAN</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-light">
            Become a part of our health community. Choose a membership level that reflects your commitment to wellness.
          </p>
          <div className="mt-6 w-16 h-1.5 bg-violet-600 rounded-full"></div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {Prices.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                tier.isPopular 
                ? "bg-violet-900 text-white shadow-2xl shadow-violet-200 ring-4 ring-violet-500/20" 
                : "bg-white text-gray-900 border border-gray-100 hover:shadow-xl"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles size={10} />
                  Most Common
                </div>
              )}

              <div className="mb-8 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${tier.isPopular ? "bg-white/10 text-white" : "bg-violet-50 text-violet-700"}`}>
                  <tier.icon size={24} />
                </div>
                <p className={`text-xs font-black uppercase tracking-[0.2em] mb-4 text-center ${tier.isPopular ? "text-violet-300" : "text-violet-600"}`}>
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">{tier.price}</span>
                  <span className={`text-xs font-medium ${tier.isPopular ? "text-violet-300" : "text-gray-400"}`}>XAF/year</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <div className={`mt-0.5 rounded-full p-0.5 ${tier.isPopular ? "bg-violet-400/20 text-violet-300" : "bg-violet-100 text-violet-600"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={tier.isPopular ? "text-violet-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://glchcommmunitycard.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-300 text-sm ${
                  tier.isPopular 
                  ? "bg-white text-violet-900 hover:bg-violet-50" 
                  : "bg-violet-700 text-white hover:bg-violet-800"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

        {/* Footer Question Section */}
        <div className="mt-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-violet-600 shadow-sm border border-gray-100 mb-6">
            <HelpCircle size={32} />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Why wait until you're sick to go to the hospital?
          </h4>
          <p className="text-gray-500 mb-8 font-light italic leading-relaxed">
            Register now and become a member of the community to enjoy preventive care and mutual assistance.
          </p>
          <a
            href="https://glchcommmunitycard.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-violet-800 text-white font-bold py-4 px-10 rounded-full hover:bg-violet-900 transition-all hover:scale-105 shadow-xl shadow-violet-200"
          >
            <Wallet size={20} />
            <span>GET YOUR CARDS NOW</span>
          </a>
        </div>

      </div>
    </section>
  );
}
