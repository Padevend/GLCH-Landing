import React, { useState } from "react";
import { Heart, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Abouts }  from "../../data/index"

export default function AboutSection() {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-sm font-bold tracking-wider uppercase mb-4">
            <Sparkles size={16} />
            <span>Discover Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ABOUT <span className="text-violet-700">US</span>
          </h2>
          <div className="w-20 h-1.5 bg-violet-600 rounded-full mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl font-light italic">
            "Together to greatness — Building a healthier community through compassion and action."
          </p>
        </div>

        {/* Feature Cards Grid (Values) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {Abouts.map((stack, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-violet-200 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-violet-100/50"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Container */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={stack.cover}
                    alt={stack.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-violet-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Content Container */}
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-2xl flex justify-center items-center text-violet-700 mb-4 transition-transform group-hover:rotate-12">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
                    {stack.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {stack.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed History Section */}
        <div className="relative bg-violet-950 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-violet-400" />
              <h3 className="text-xl md:text-2xl font-bold text-violet-300 uppercase tracking-widest">
                Our Association's Legacy
              </h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 font-light">
                  The promotion of health and prevention have always been among the greatest challenges in developing countries. 
                  Mainly due to the lack of medical personnel and insufficient infrastructure, we created GLCH to bridge the gap between 
                  cultural practices and modern medicine.
                </p>
                
                <div className={`mt-6 space-y-6 text-gray-300 leading-relaxed transition-all duration-500 ${!isReadMore && "hidden md:block"}`}>
                  <p>
                    The concept of <strong className="text-white">"social medicine"</strong> stems from the work of a great man, the 
                    <strong className="text-white italic"> Honorable Tchoffo Lucas</strong>, known as "Grand Luc," who dedicated his life to the development 
                    of his country through social and financial aid to anyone in distress.
                  </p>
                  <p>
                    Inspired by his legacy, his daughter, <strong className="text-white">Dr. Tchoffo Bakem Scherrez</strong>, a graduate of St. George’s University 
                    School of Medicine, decided to honor him by creating this non-profit association. She aimed to introduce a new vision 
                    of African medicine into cultural practices and ensure a healthy state of well-being.
                  </p>
                  <p>
                    We must ensure that our cultural identity is well integrated into our community health interventions. Education is essential 
                    to avoid unnecessary expenses and promote prevention. Remember, <span className="text-violet-400 font-bold">health is wealth</span>.
                  </p>
                </div>

                <button 
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-8 flex items-center gap-2 text-violet-300 font-bold hover:text-white transition-colors md:hidden"
                >
                  {isReadMore ? "Show less" : "Read our full history"}
                  <ArrowRight size={18} className={isReadMore ? "-rotate-90" : "rotate-0"} />
                </button>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
                  <Users className="text-violet-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2 text-white">Our Vision</h4>
                  <p className="text-gray-400 text-sm">
                    Integrating cultural values with modern medical standards to improve life expectancy across African communities.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
                  <Heart className="text-violet-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2 text-white">Our Mission</h4>
                  <p className="text-gray-400 text-sm">
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

// Helper component for the arrow used in the read more button
function ArrowRight({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`transition-transform duration-300 ${className}`}
    >
      <path d="M5 12h14m-7-7 7 7-7 7"/>
    </svg>
  );
}