import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/logo.png";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

export default function MaterialNavbar({ children }) {
  const [routes, setRoutes] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Extraction des routes depuis les enfants
    const route_tab = [];
    const childrenArray = children.props.children;
    
    if (Array.isArray(childrenArray)) {
      childrenArray.forEach((key) => {
        if (key.props?.handle?.name) {
          route_tab.push({
            name: key.props.handle.name,
            path: key.props.path,
          });
        }
      });
    }
    setRoutes(route_tab);
  }, [children]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <ToastContainer />

      {/* --- NAVBAR (Desktop & Mobile Header) --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 h-16 md:h-20 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} className="h-10 md:h-12 w-auto" alt="GLCH Logo" />
            <span className="text-xl md:text-2xl font-black tracking-tight text-gray-800">GLCH</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                    ? "bg-violet-600 text-white shadow-md shadow-violet-200" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
            <a href="https://platform.glchcommunity.online" className="ml-4 px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-transform active:scale-95">
              GET STARTED
            </a>
          </div>

          {/* Mobile Burger Button */}
          <button 
            onClick={toggleNav}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (Full Screen Overlay) --- */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${isNavOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 ${isNavOpen ? "opacity-100" : "opacity-0"}`}
          onClick={toggleNav}
        />
        
        {/* Sidebar Content */}
        <aside 
          className={`absolute right-0 top-0 bottom-0 w-full max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-300">
            <div className="flex items-center gap-2">
              <img src={Logo} className="h-10" alt="Logo" />
              <span className="font-bold text-xl">GLCH</span>
            </div>
            <button onClick={toggleNav} className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-4">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                onClick={toggleNav}
                className={({ isActive }) =>
                  `flex items-center p-4 rounded-2xl text-xl font-semibold transition-colors ${
                    isActive 
                    ? "bg-violet-50 text-violet-700" 
                    : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-300 w-full relative flex">
            <a href="https://platform.glchcommunity.online" className="text-center w-full py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-lg">
              GET STARTED
            </a>
          </div>
        </aside>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      <Footer routes={routes} />
    </div>
  );
}