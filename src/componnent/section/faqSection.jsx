import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { faqs } from "../../data";

export default function FaqsSection() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container max-w-4xl px-6 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageCircleQuestion size={14} />
            <span>Support Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            FREQUENTLY ASKED <span className="text-violet-700">QUESTIONS</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-light">
            Find answers to common questions about our community, memberships, and healthcare vision.
          </p>
          <div className="mt-6 w-16 h-1.5 bg-violet-600 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFAQ === index;
            
            return (
              <div 
                key={index} 
                className={`group border-2 transition-all duration-300 rounded-3xl overflow-hidden ${
                  isOpen 
                  ? "border-violet-200 bg-violet-50/30 shadow-lg shadow-violet-100/50" 
                  : "border-gray-100 hover:border-violet-100 hover:bg-gray-50/50"
                }`}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`hidden sm:flex w-10 h-10 rounded-xl items-center justify-center transition-colors ${
                      isOpen ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-400 group-hover:text-violet-600"
                    }`}>
                      <HelpCircle size={20} />
                    </div>
                    <h3 className={`font-bold text-lg transition-colors ${
                      isOpen ? "text-violet-900" : "text-gray-700"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-violet-600 text-white rotate-180" : "bg-gray-100 text-gray-400"
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 sm:pl-20">
                    <div className="h-px w-full bg-violet-100 mb-6" />
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-[2.5rem] bg-gray-50 border border-dashed border-gray-300 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button className="text-violet-700 font-bold hover:text-violet-900 transition-colors flex items-center gap-2 mx-auto">
            Contact our support team
            <Plus size={16} className="rotate-45" />
          </button>
        </div>

      </div>
    </section>
  );
}