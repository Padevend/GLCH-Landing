import React from "react";
import { Baby, ArrowRight, Heart, Users, CalendarClock, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gray-950 font-sans" // Use a darker base and standard font for professionalism
    >
      {/* Background with optimized performance and reduced 'amateur' scale */}
      <div
        className="absolute inset-0 z-0 bg-[url('/image/background.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"
        aria-hidden="true"
        style={{ willChange: 'transform' }} // Hint for hardware acceleration
      />

      {/* Modern Gradient Overlay: A slight desaturation of the violet for a more sophisticated feel */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/95 via-gray-950/70 to-transparent md:bg-gradient-to-r md:from-gray-950/98 md:via-gray-950/60 md:to-transparent" />

      {/* Subtler Decorative Glow Elements - less 'pulse', more 'shimmer' or static */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] z-10 opacity-60" />

      <div className="container mx-auto px-6 lg:px-24 xl:px-32 relative z-20"> {/* Wider containers on larger screens */}
        <div className="max-w-5xl flex flex-col items-center md:items-start text-center md:text-left"> {/* Increased max-width for better structure */}
          {/* Tagline: Retain identity but with a more polished look */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-violet-100 text-sm font-medium mb-10 transition-colors duration-300 hover:bg-white/10">
            <Heart size={15} className="fill-violet-400 text-violet-400" />
            <span>Serving our community with dedicated care since 2021</span>
          </div>

          {/* Main Title: Use heavier weights for professionalism, but the same content and gradient */}
          <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tighter">
            GRAND LUC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-violet-100">
              COMMUNITY HEALTH
            </span>
          </h1>

          {/* Subtitle: Maintain italic quote identity but with stronger typography and no 'italic' class */}
          <p className="mt-10 text-gray-100 text-xl md:text-2xl lg:text-3xl leading-snug max-w-3xl font-normal text-opacity-90">
            &quot;One family, One heart, One struggle, One solution, One health&quot;
          </p>

          {/* Action Buttons: Redesigned for modern feel, keeping colors and primary/secondary roles */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            {/* Primary Action: Modernized with stronger border and subtle shadow on hover */}
            <a
              href="https://card.glchcommunity.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-white text-gray-950 font-bold rounded-xl transition-all duration-300 hover:bg-violet-50 hover:shadow-xl active:scale-[0.98]"
            >
              <span>APPLY FOR MEMBERSHIP</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>

            {/* Secondary Action: Sophisticated border button */}
            <a
              href="/donate"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:border-white/40 active:scale-[0.98]"
            >
              <Baby size={22} className="text-violet-200" />
              <span className="uppercase tracking-widest text-sm">Make a donation</span>
            </a>
          </div>

          {/* Trust Indicators / Stats: Redesigned for professional layout with icons */}
          <div className="mt-20 flex items-center gap-12 border-t border-white/10 pt-10 w-full justify-center md:justify-start">
            <div className="flex items-center gap-4">
              <Users size={28} className="text-violet-300" />
              <div>
                <div className="text-3xl font-extrabold text-white">5k+</div>
                <div className="text-xs uppercase tracking-widest text-gray-300/80 font-semibold">
                  Community Members
                </div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex items-center gap-4">
              <CalendarClock size={28} className="text-violet-300" />
              <div>
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="text-xs uppercase tracking-widest text-gray-300/80 font-semibold">
                  Dedicated Support
                </div>
              </div>
            </div>
             <div className="w-px h-12 bg-white/10 hidden lg:block" /> {/* Added stat for balance on larger screens */}
            <div className="items-center gap-4 hidden lg:flex">
              <Target size={28} className="text-violet-300" />
              <div>
                <div className="text-3xl font-extrabold text-white">1</div>
                <div className="text-xs uppercase tracking-widest text-gray-300/80 font-semibold">
                  Unified Mission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}