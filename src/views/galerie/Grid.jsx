import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Calendar,
  MoveLeft
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GController from "#assets/gallery/index.jsx";

export default function GalerieView() {
  const [Images_assets, setImagesAssets] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  const loadImage = () => {
    const cat = GController.findBy("slug", slug);
    if (cat) {
      const images = GController.getImageInFolder(cat.folder);
      setImagesAssets(images);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadImage();
  }, [slug]);

  const openPreview = (index) => {
    setCurrentIndex(index);
    setIsPreview(true);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setIsPreview(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % Images_assets.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + Images_assets.length) % Images_assets.length
    );
  };

  const handleDownload = (e) => {
    e?.stopPropagation();
    const link = document.createElement("a");
    link.href = Images_assets[currentIndex];
    link.download = `GLCH_Gallery_${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-slate-900">
      
      {/* --- EN-TÊTE CHRONOLOGIQUE CLAIR --- */}
      <header className="border-b border-slate-200/60 pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <Link 
            to="/galerie" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors mb-8 group"
          >
            <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour aux collections</span>
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-violet-600 uppercase tracking-[0.2em] mb-3">
                <Calendar size={12} />
                <span>Exploration de l'album</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase leading-none">
                REPORTAGE <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">TERRAIN</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                "Capturing moments of hope, healing, and community strength. Chaque cliché témoigne de notre engagement."
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* --- GRILLE MAÇONNERIE PREMIUM (LIGHT MASONRY) --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full bg-slate-200 rounded-3xl h-64 break-inside-avoid" />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
            {Images_assets.map((src, index) => (
              <div
                key={index}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-200/60 p-3 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(148,163,184,0.12)] transition-all duration-500"
                onClick={() => openPreview(index)}
              >
                {/* Conteneur de l'image isolée */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src={src}
                    alt={`Gallery capture ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-103"
                  />
                  
                  {/* Micro overlay épuré au survol */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.03] transition-colors duration-500 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-md text-slate-900 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex items-center justify-center shadow-md border border-slate-200/40">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                {/* Petite légende technique sous le cadre pour accentuer le look "Expo" */}
                <div className="mt-3 flex items-center justify-between px-1 text-[10px] font-mono font-bold text-slate-400">
                  <span>GLCH_ARCHIVE_2026</span>
                  <span>#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- EXTRA-PREMIUM LIGHTBOX PREVIEW --- */}
      {isPreview && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-500"
          onClick={closePreview}
        >
          {/* Fermeture Épurée Haute */}
          <button
            className="absolute top-6 right-6 z-[110] text-slate-400 hover:text-white transition-colors bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20"
            onClick={closePreview}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          {/* Navigation Latérale Géométrique */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-slate-400 hover:text-white transition-colors bg-white/5 p-3.5 rounded-xl border border-white/5 hover:border-white/20 hidden md:flex"
            onClick={prevImage}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-slate-400 hover:text-white transition-colors bg-white/5 p-3.5 rounded-xl border border-white/5 hover:border-white/20 hidden md:flex"
            onClick={nextImage}
          >
            <ChevronRight size={22} />
          </button>

          {/* Conteneur d'affichage de la photo principale */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={Images_assets[currentIndex]}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] animate-in zoom-in-95 duration-300"
              alt="Visualisation archive"
            />

            {/* Légende Technique Inférieure du Lightbox */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl gap-4 border-t border-white/10 pt-6">
              <div className="text-center sm:text-left">
                <h4 className="text-white text-base font-bold tracking-tight">
                  Community Health Action Archive
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Grand Luc Community Health Operational Unit • Yaoundé, Cameroun
                </p>
              </div>

              {/* Actions de Téléchargement & Indexation */}
              <div className="flex items-center gap-5">
                <span className="text-slate-500 font-mono text-xs tracking-widest">
                  {currentIndex + 1} <span className="text-slate-700">/</span> {Images_assets.length}
                </span>
                <button
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 px-5 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all active:scale-[0.98]"
                  onClick={handleDownload}
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}