import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ routes }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090a0f] text-slate-400 border-t border-slate-900 font-sans">
      
      {/* --- SECTION HAUTE : NEWSLETTER ARCHITECTURALE --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 border-b border-slate-900/60">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Join our newsletter<span className="text-violet-500">.</span>
            </h3>
            <p className="mt-1.5 text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
              Stay updated with our latest health tips, community news, and medical prevention strategies directly in your inbox.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 w-full lg:justify-end">
            <div className="relative flex-grow max-w-md">
              <input
                type="email"
                placeholder="Enter your email corporate"
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white text-xs font-medium placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <button className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* --- INTÉRIEUR DU FOOTER (GRILLE EDITORIALE ASYMÉTRIQUE) --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Bloc Marque & Philosophie (Largeur 4/12) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-[0.2em] text-white uppercase leading-none">
                    GLCH<span className="text-violet-500">.</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.25em] text-slate-600 font-bold mt-1">
                    Community Health
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Empowering communities through social medicine, mutual assistance, and a new progressive vision of preventive healthcare in Africa.
              </p>
            </div>
            {/* Réseaux Sociaux Épurés */}
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-500 hover:text-white hover:bg-violet-600 hover:border-transparent transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne Navigation (Largeur 2/12) */}
          <div className="md:col-span-4 lg:col-span-2 md:pl-4">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {routes.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-xs font-semibold text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1px] bg-violet-500 transition-all duration-300 group-hover:w-2" />
                    <span className="capitalize">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Législation (Largeur 2/12) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
              Legal Info
            </h4>
            <ul className="space-y-3.5">
              {["Privacy Policy", "Terms of Service", "Membership Rules"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs font-semibold text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1px] bg-fuchsia-500 transition-all duration-300 group-hover:w-2" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Contact Institutionnel (Largeur 4/12) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
              Contact Desk
            </h4>
            <ul className="space-y-4 text-xs font-medium text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-violet-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Mbouda, Bametap, Douala <br />
                  <span className="text-slate-600">B.P. 13208 Yaoundé, Cameroun</span>
                </span>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-900/60 pt-3">
                <Phone size={14} className="text-violet-500 shrink-0" />
                <span className="tracking-wide text-slate-400">+237 659 375 114</span>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-900/60 pt-3">
                <Mail size={14} className="text-violet-500 shrink-0" />
                <span className="text-slate-400 break-all">grandluccommunityhealth@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- BARRE DE COOPÉRATION ET COPYRIGHT INTERIEURE --- */}
      <div className="border-t border-slate-900/60 py-8 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-slate-600 font-medium tracking-wide text-center md:text-left">
            © {currentYear} Grand Luc Community Health. All Rights Reserved. Built with corporate structure for global health.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-white transition-colors"
          >
            <span>Top of page</span>
            <div className="w-7 h-7 rounded-lg border border-slate-800 bg-slate-900/20 flex items-center justify-center transition-all duration-300 group-hover:border-slate-700 group-hover:-translate-y-0.5">
              <ArrowUp size={12} className="text-slate-400 group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}