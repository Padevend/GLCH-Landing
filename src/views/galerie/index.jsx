import { 
  MoveLeft,
  Calendar,
  ArrowUpRight
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import GController from "#assets/gallery/index.jsx";

export default function GalerieIndex() {
  const categories = GController.getAll();
  
  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-slate-900">
      
      {/* --- EN-TÊTE ÉDITORIAL CLAIR (STYLE MUSÉE / ARCHIVE) --- */}
      <header className="border-b border-slate-200/60 pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Fil d'ariane / Bouton Retour minimaliste */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors mb-8 group"
          >
            <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour à l'accueil</span>
          </Link>
          
          {/* Grille de titre asymétrique */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none">
                Notre Capsule <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Visuelle</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed border-l-2 border-slate-200 pl-6">
                Explorez nos archives documentées. Chaque album retrace une action terrain, un moment de communion ou une victoire sanitaire pour notre communauté.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* --- GRILLE D'ALBUMS HAUT DE GAMME (EXPOSITION LIGHT) --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16">
          {categories.map((category, index) => (
            <NavLink 
              key={category.slug}
              to={`/galerie/${category.slug}`}
              className="group flex flex-col justify-between bg-white border border-slate-200/60 p-5 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(148,163,184,0.12)] transition-all duration-500"
            >
              <div>
                {/* Conteneur de l'image (Aspect Ratio Institutionnel) */}
                <div className="relative aspect-[16/10] w-full rounded-[1.8rem] overflow-hidden bg-slate-100 border border-slate-200/40 mb-6">
                  <img 
                    src={category.placeholder} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-102"
                  />
                  {/* Voile de survol ultra-léger */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.02] transition-colors duration-500" />
                </div>

                {/* Métadonnées style catalogue */}
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 px-2">
                  <Calendar size={12} className="text-slate-300" />
                  <span>{category.date}</span>
                  <span className="text-slate-200">•</span>
                  <span>Collection 0{index + 1}</span>
                </div>

                {/* Titre & Description de l'album */}
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-violet-600 transition-colors duration-300 mb-3 px-2">
                  {category.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-6 px-2">
                  {category.description}
                </p>
              </div>

              {/* Pied de carte d'exploration permanent */}
              <div className="mx-2 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-slate-950 transition-colors duration-300">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Consulter l'album</span>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </main>

    </div>
  );
}