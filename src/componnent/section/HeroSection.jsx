import React from "react";
import { Baby, ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gray-900"
    >
      {/* Background Image with Parallax-ready styling */}
      <div
        className="absolute inset-0 z-0 bg-[url('/image/background.jpg')] bg-cover bg-center bg-no-repeat scale-105"
        aria-hidden="true"
      />

      {/* Advanced Gradient Overlay: Deep Violet to Transparent */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-violet-950/90 via-violet-900/60 to-transparent md:bg-gradient-to-r md:from-violet-950/95 md:via-violet-900/40 md:to-transparent" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] z-10 animate-pulse" />

      <div className="container mx-auto px-6 lg:px-24 relative z-20">
        <div className="max-w-4xl flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge / Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-violet-100 text-sm font-medium mb-8">
            <Heart size={14} className="fill-violet-400 text-violet-400" />
            <span>Caring for our community since 2021</span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            GRAND LUC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">
              COMMUNITY HEALTH
            </span>
          </h1>

          {/* Subtitle with refined typography */}
          <p className="mt-8 text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light italic">
            "One family, One heart, One struggle, One solution, One health"
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Action: Membership */}
            <a
              href="https://card.glchcommunity.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white text-violet-950 font-bold rounded-2xl transition-all duration-300 hover:bg-violet-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span>APPLY FOR MEMBERSHIP</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Secondary Action: Donation */}
            {/* href="https://www.paypal.com/ncp/payment/SJ76CH5QB698A" */}
            <a
              href="/donate"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white active:scale-95"
            >
              <Baby size={20} />
              <span className="uppercase tracking-wide">Make a donation</span>
            </a>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 w-full justify-center md:justify-start">
            <div>
              <div className="text-2xl font-bold text-white">5k+</div>
              <div className="text-xs uppercase tracking-widest text-violet-200/60 font-medium">
                Members
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs uppercase tracking-widest text-violet-200/60 font-medium">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
