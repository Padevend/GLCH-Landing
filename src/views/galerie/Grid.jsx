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
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import GController from "#assets/gallery/index.jsx";

export default function GalerieView() {
  const [Images_assets, setImagesAssets] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  const loadImage = () => {
    const cat = GController.findBy("slug", slug);
    const images = GController.getImageInFolder(cat.folder);
    setImagesAssets(images);
    setIsLoading(false);
  };

  useEffect(() => {
    loadImage();
  }, []);

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
      (prev) => (prev - 1 + Images_assets.length) % Images_assets.length,
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
    <div className="bg-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-violet-900/60 to-transparent" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-violet-200 hover:text-white transition-colors mb-6 group"
          >
            <MoveLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium tracking-wide">Back to Home</span>
          </NavLink>

          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">
              GALLERY
            </span>
          </h1>
          <p className="text-violet-100 text-lg md:text-2xl font-light italic max-w-2xl">
            "Capturing moments of hope, healing, and community strength since
            2021."
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 container mx-auto px-6 lg:px-24">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {Images_assets.map((src, index) => (
              <div
                key={index}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => openPreview(index)}
              >
                <img
                  src={src}
                  alt={`Event ${src}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                      <Calendar size={12} />
                      <span>Event 2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-lg">
                        Community Outreach
                      </h3>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Premium Lightbox Preview */}
      {isPreview && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-500"
          onClick={closePreview}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
            onClick={closePreview}
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full hover:bg-white/10 hidden md:flex"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full hover:bg-white/10 hidden md:flex"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={Images_assets[currentIndex]}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              alt="Preview"
            />

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-white text-2xl font-bold">
                  Community Health Event
                </h4>
                <p className="text-gray-400 text-sm">
                  Yaoundé, Cameroon • October 2023
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">
                  {currentIndex + 1} / {Images_assets.length}
                </span>
                <button
                  className="flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-violet-900/40"
                  onClick={handleDownload}
                >
                  <Download size={20} />
                  <span>DOWNLOAD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
