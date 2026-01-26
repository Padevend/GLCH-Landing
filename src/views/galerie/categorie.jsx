import React, { useState, useEffect } from "react";
import { 
  ArrowDownToLine, 
  Eye, 
  MoveLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download,
  Maximize2,
  Calendar,
  Layers
} from "lucide-react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

// Configuration des catégories (Albums)
const GALLERY_CATEGORIES = [
    {
        "slug": "photo-dinner-2025",
        "title": "Gala Dinner 2025",
        "placeholder": "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
        "description": "A delightful dinner setting with elegant tableware and ambient lighting.",
        "folder": "dinner_2026",
        "date": "Janvier 2025",
        "images": [
          "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
          "https://images.unsplash.com/photo-1522336572468-97b06e8ef143",
          "https://images.unsplash.com/photo-1544025162-d76694265947"
        ]
    },
    {
        "slug": "photo-community",
        "title": "Community Gathering",
        "placeholder": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        "description": "A vibrant community gathering with diverse people and activities.",
        "folder": "community",
        "date": "Octobre 2024",
        "images": [
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
          "https://images.unsplash.com/photo-1520242739010-44e95bde329e",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        ]
    },
    {
        "slug": "health-outreach",
        "title": "Health & Healing",
        "placeholder": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
        "description": "Providing medical support and care to the local community.",
        "folder": "health",
        "date": "Août 2024",
        "images": [
          "https://images.unsplash.com/photo-1584515933487-779824d29309",
          "https://images.unsplash.com/photo-1505751172177-51ad18671ae3",
          "https://images.unsplash.com/photo-1527613426441-4da17471b66d",
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
        ]
    }
];

/**
 * COMPOSANT : GalerieIndex
 * Affiche la sélection des catégories sous forme de cartes premium
 */
const GalerieIndex = () => {
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
          {GALLERY_CATEGORIES.map((category) => (
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
};

/**
 * COMPOSANT : GalerieView
 * Affiche les images d'un album spécifique
 */
const GalerieView = ({ slug }) => {
  const navigate = useNavigate();
  const [isPreview, setIsPreview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Recherche de la catégorie et de ses images associées
  const category = GALLERY_CATEGORIES.find(cat => cat.slug === slug) || GALLERY_CATEGORIES[0];
  const images = category.images || [];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [slug]);

  const openPreview = (index) => {
    setCurrentIndex(index);
    setIsPreview(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setIsPreview(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = (e) => {
    e?.stopPropagation();
    // Simulation du téléchargement
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `GLCH_${category.folder}_${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110 opacity-50"
          style={{ backgroundImage: `url(${category.placeholder})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-violet-900/60 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <button 
            onClick={() => navigate('/galerie')}
            className="inline-flex items-center gap-2 text-violet-200 hover:text-white transition-colors mb-6 group"
          >
            <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide">Back to Collections</span>
          </button>
          
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
            {category.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">{category.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-violet-100 text-lg md:text-2xl font-light italic max-w-2xl">
            "{category.description}"
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-6 lg:px-24">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => openPreview(index)}
              >
                <img 
                  src={`${src}?auto=format&fit=crop&w=800&q=80`} 
                  alt="" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-medium text-sm">View Fullscreen</span>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Preview */}
      {isPreview && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10" onClick={closePreview}>
          <button className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white bg-white/10 p-3 rounded-full" onClick={closePreview}><X size={32} /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white hidden md:flex" onClick={prevImage}><ChevronLeft size={40} /></button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white hidden md:flex" onClick={nextImage}><ChevronRight size={40} /></button>

          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={`${images[currentIndex]}?auto=format&fit=contain&w=1600&q=90`} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" alt="Preview" />
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-white text-2xl font-bold">{category.title}</h4>
                <p className="text-gray-400 text-sm">{category.date} • {currentIndex + 1} / {images.length}</p>
              </div>
              <button className="flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-violet-900/40" onClick={handleDownload}>
                <Download size={20} /><span>DOWNLOAD</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * COMPOSANT PRINCIPAL : Galerie
 * Gère le routage entre l'index et la vue détaillée
 */
export default function Galerie() {
  const { slug } = useParams();

  // Si un slug est présent, on affiche l'album, sinon on affiche l'index des catégories
  if (slug) {
    return <GalerieView slug={slug} />;
  }

  return <GalerieIndex />;
}