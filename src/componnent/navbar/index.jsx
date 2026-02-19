import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/image/logo.png";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

export default function MaterialNavbar({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const routes = [
    { name: "home", path: "/" },
    { name: "galerie", path: "/galerie" },
    { name: "events", path: "/event" },
    { name: "contact", path: "/contact" }
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <ToastContainer />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-sm border-b border-slate-100 z-40 h-16 md:h-20 flex items-center shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={Logo} className="h-10 md:h-12 w-auto relative z-10" alt="GLCH Logo" />
              {/* Subtle accent pulse under logo */}
              <div className="absolute inset-0 bg-violet-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-800">
              GLCH<span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-slate-50 p-1.5 rounded-2xl mr-4 border border-slate-100">
              {routes.map((route, index) => (
                <NavLink
                  key={index}
                  to={route.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-violet-600 shadow-sm shadow-violet-100 ring-1 ring-slate-200"
                        : "text-slate-500 hover:text-violet-600 hover:bg-white/50"
                    }`
                  }
                >
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Link to="/donate" className="px-5 py-2.5 text-slate-600 text-sm font-bold hover:text-violet-600 transition-colors">
                Sustain
              </Link>
              <a 
                href="https://platform.glchcommunity.online" 
                className="px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)] hover:bg-violet-700 hover:shadow-[0_8px_25px_-4px_rgba(124,58,237,0.6)] transition-all active:scale-95"
              >
                GET STARTED
              </a>
            </div>
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={toggleNav}
            className="md:hidden p-2.5 text-slate-600 bg-slate-50 hover:bg-violet-50 hover:text-violet-600 rounded-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR --- */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${isNavOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isNavOpen ? "opacity-100" : "opacity-0"}`}
          onClick={toggleNav}
        />

        {/* Sidebar Content */}
        <aside
          className={`absolute right-0 top-0 bottom-0 w-full bg-white shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isNavOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center gap-2">
              <img src={Logo} className="h-8" alt="Logo" />
              <span className="font-black text-xl tracking-tighter">GLCH<span className="text-violet-600">.</span></span>
            </div>
            <button onClick={toggleNav} className="p-2 text-slate-400 hover:text-violet-600 bg-slate-50 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                onClick={toggleNav}
                className={({ isActive }) =>
                  `flex items-center px-4 py-4 rounded-xl text-lg font-bold transition-all ${
                    isActive
                      ? "bg-violet-50 text-violet-600 ring-1 ring-violet-100"
                      : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"
                  }`
                }
              >
                {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
             <Link 
              to="/donate" 
              onClick={toggleNav}
              className="text-center w-full py-3.5 text-slate-600 font-bold hover:text-violet-600 transition-colors"
            >
              Sustain
            </Link>
            <a 
              href="https://platform.glchcommunity.online" 
              className="text-center w-full py-4 bg-violet-600 text-white font-black rounded-xl shadow-lg shadow-violet-200 active:scale-[0.98] transition-transform"
            >
              GET STARTED
            </a>
          </div>
        </aside>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer routes={routes} />
    </div>
  );
}