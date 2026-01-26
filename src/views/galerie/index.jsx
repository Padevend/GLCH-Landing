import { 
  MoveLeft,
  Calendar
} from "lucide-react";
import { NavLink } from "react-router-dom";
import GController from "#assets/gallery/index.jsx";


export default function GalerieIndex() {
  const categories = GController.getAll();
  
  return (
      <div className="bg-white min-h-screen">
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920')] bg-cover bg-center transition-transform duration-1000 scale-105 opacity-40"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/90 via-violet-900/60 to-white" />
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
            <NavLink 
              to="/" 
              className="inline-flex items-center gap-2 text-violet-200 hover:text-white transition-colors mb-6 group"
            >
              <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium tracking-wide">Back to Home</span>
            </NavLink>
            
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">COLLECTIONS</span>
            </h1>
            <p className="text-violet-100 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
              Select an album to explore our moments of community and hope.
            </p>
          </div>
        </section>
  
        <section className="py-16 md:py-24 container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category) => (
              <NavLink 
                key={category.slug}
                to={`/galerie/${category.slug}`}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-100"
              >
                <img 
                  src={category.placeholder} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-violet-300 text-xs font-bold uppercase tracking-widest mb-3">
                      <Calendar size={14} />
                      <span>{category.date}</span>
                    </div>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">{category.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base font-light line-clamp-2 mb-6 max-w-md">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-3 text-white font-bold group/btn">
                      <span className="bg-violet-600 px-6 py-2 rounded-full text-sm group-hover/btn:bg-violet-500 transition-colors">
                        View Album
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    );
}