import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/image/logo.png";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import { Menu, X, Globe, Heart } from "lucide-react";

export default function MaterialNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const routes = [
    { name: "accueil", path: "/" },
    { name: "galerie", path: "/galerie" },
    { name: "événements", path: "/event" },
    { name: "articles", path: "/article" },
    { name: "contact", path: "/contact" },
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Détection du défilement pour ajuster l'effet de verre sur fond clair
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50/50">
      <ToastContainer />

      {/* --- FLOATING LIGHT GLASS NAVBAR --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-5 transition-all duration-300">
        <nav 
          className={`mx-auto max-w-7xl h-16 md:h-20 flex items-center justify-between px-6 rounded-2xl border transition-all duration-500 ${
            isScrolled 
              ? "bg-white/95 border-white/60 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(148,163,184,0.15)] ring-1 ring-slate-200/20" 
              : "bg-white/95 border-white/20 backdrop-blur-md shadow-sm"
          }`}
        >
          {/* Section Logo Professionnelle */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center">
              <img src={Logo} className="h-9 md:h-11 w-auto relative z-10" alt="GLCH Logo" />
              <div className="absolute inset-0 bg-violet-200/40 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-wider text-slate-900 uppercase">
                GLCH<span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold -mt-1 hidden sm:inline">
                Community Health
              </span>
            </div>
          </Link>

          {/* Centre : Menu Principal Capsule Light Glass */}
          <div className="hidden md:flex items-center">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-white text-violet-600 shadow-sm border border-slate-200/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </div>

          {/* Droite : Boutons d'actions épurés */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/donate" 
              className="flex items-center gap-1.5 px-4 py-2 text-slate-600 text-xs font-bold tracking-widest uppercase hover:text-fuchsia-600 transition-colors group"
            >
              <Heart size={14} className="text-fuchsia-500 group-hover:fill-fuchsia-500 transition-all" />
              <span>Soutenir</span>
            </Link>
            <a
              href="https://platform.glchcommunity.online"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow-md shadow-violet-600/10 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.98] transition-all duration-300"
            >
              <Globe size={14} />
              <span>E-Platform</span>
            </a>
          </div>

          {/* Bouton Mobile Minimal Thème Clair */}
          <button
            onClick={toggleNav}
            className="md:hidden p-2 text-slate-600 bg-white/60 hover:bg-slate-100 hover:text-slate-900 rounded-xl border border-slate-200/50 shadow-sm transition-all"
            aria-label="Menu"
          >
            {isNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* --- SCREEN SIDEBAR MOBILE LIGHT GLASSMORPHISM --- */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${isNavOpen ? "visible" : "invisible"}`}>
        {/* Voile d'ombrage flouté clair */}
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${isNavOpen ? "opacity-100" : "opacity-0"}`}
          onClick={toggleNav}
        />

        {/* Panneau latéral en verre clair */}
        <aside
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white/90 border-l border-slate-200/40 backdrop-blur-2xl p-6 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col justify-between ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Haut Menu Mobile */}
            <div className="flex justify-between items-center pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={Logo} className="h-8" alt="Logo" />
                <span className="font-extrabold text-lg tracking-wider text-slate-900">GLCH<span className="text-violet-600">.</span></span>
              </div>
              <button 
                onClick={toggleNav} 
                className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100/80 border border-slate-200/50 rounded-xl"
              >
                <X size={18} />
              </button>
            </div>

            {/* Liens Menu Mobile */}
            <nav className="mt-8 flex flex-col gap-1.5">
              {routes.map((route, index) => (
                <NavLink
                  key={index}
                  to={route.path}
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase transition-all ${
                      isActive
                        ? "bg-violet-50 text-violet-600 border border-violet-100/50"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  {route.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bas Menu Mobile Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <Link
              to="/donate"
              onClick={toggleNav}
              className="flex items-center justify-center gap-2 w-full py-3 text-slate-600 text-xs font-bold tracking-widest uppercase hover:text-slate-900 transition-colors"
            >
              <Heart size={14} className="text-fuchsia-500" />
              <span>Soutenir l'ONG</span>
            </Link>
            <a
              href="https://platform.glchcommunity.online"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow-md shadow-violet-600/10"
            >
              <Globe size={14} />
              <span>Accéder à l'E-Platform</span>
            </a>
          </div>
        </aside>
      </div>

      {/* --- ZONE PRINCIPALE DE CONTENU CLAIR --- */}
      <main className="flex-grow bg-slate-50/50">
        <Outlet />
      </main>

      <Footer routes={routes} />
    </div>
  );
}