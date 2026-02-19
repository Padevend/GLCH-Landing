import React, { useState, useEffect, useCallback, useRef } from "react";
import {
    Calendar,
    MapPin,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function EventBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const autoPlayRef = useRef();
    const [Events, setEventsList] = useState([]);
    const navigate = useNavigate();

    // Gestion des variables d'environnement avec fallback pour le mode aperçu
    const SERVER_ROOT =
        typeof import.meta !== "undefined" && import.meta.env
            ? import.meta.env.VITE_SERVER_ROOT
            : process.env.VITE_SERVER_ROOT || "";

    const PUBLIC_ROOT =
        typeof import.meta !== "undefined" && import.meta.env
            ? import.meta.env.VITE_SERVE_PUBLIC_ROOT
            : process.env.VITE_SERVE_PUBLIC_ROOT || "";

    useEffect(() => {
        function getEventsList() {
            fetch(`${SERVER_ROOT}/events?limit=5`, {
                method: "GET",
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setEventsList(Array.isArray(data) ? data : []);
                })
                .catch((err) => {
                    console.error("Erreur lors de la récupération des événements");
                });
        }

        getEventsList();
    }, [SERVER_ROOT]);

    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        if (Events.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % Events.length);
    }, [Events.length]);

    const prevSlide = () => {
        if (Events.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + Events.length) % Events.length);
    };

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const play = () => autoPlayRef.current();
        const interval = setInterval(play, 8000);
        return () => clearInterval(interval);
    }, []);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextSlide();
        if (distance < -minSwipeDistance) prevSlide();
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short'
        });
    };

    return (
        <>
            {(Events && Events.length >= 1) && (
                <section className="py-10 md:py-16 px-4 md:px-6 lg:px-24 bg-[#0f0a1f] overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        {/* En-tête simplifié */}
                        <div className="flex items-center justify-between mb-8 md:mb-10">
                            <h2 className="text-white text-xl md:text-3xl font-light tracking-tight uppercase">
                                Incoming <span className="font-bold text-violet-400">Events</span>
                            </h2>
                            <button
                                onClick={() => navigate('/event')}
                                className="text-violet-300 hover:text-white transition-colors flex items-center gap-2 text-xs md:text-sm font-medium group"
                            >
                                <span className="hidden sm:inline">Voir tout l'agenda</span>
                                <span className="sm:hidden">Voir tout</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Carousel Minimaliste - Hauteur augmentée sur mobile pour le confort */}
                        <div
                            className="relative h-[480px] sm:h-[400px] md:h-[350px] w-full group"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {Events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center ${index === currentIndex ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                                        }`}
                                >
                                    {/* Fond avec overlay subtil */}
                                    <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                                        <img
                                            src={`${PUBLIC_ROOT}/${event.cover}`}
                                            alt={event.name}
                                            className="w-full h-full object-cover opacity-25 scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0f0a1f]/20 via-[#0f0a1f]/20 md:via-[#0f0a1f]/50 to-[#0f0a1f]/50 md:to-transparent" />
                                    </div>

                                    {/* Contenu textuel épuré */}
                                    <div className="relative z-10 w-full md:w-2/3 p-6 sm:p-8 md:p-12">
                                        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 text-violet-300/80 text-[10px] md:text-sm font-medium">
                                            <span className="bg-violet-500/30 backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase tracking-wider text-violet-100">
                                                {formatDate(event.date)}
                                            </span>
                                            <div className="flex items-center gap-1 bg-[#0f0a1f]/40 px-2 py-1 rounded-lg">
                                                <MapPin size={12} className="md:size-[14px]" />
                                                <span>{event.place}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 md:mb-4 leading-tight">
                                            {event.name}
                                        </h3>

                                        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 md:mb-8 line-clamp-3 md:line-clamp-2 max-w-xl font-light leading-relaxed">
                                            {event.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
                                            <a
                                                href={event.formLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 md:py-3 rounded-xl md:rounded-full font-bold transition-all text-center shadow-[0_10px_20px_rgba(139,92,246,0.2)] active:scale-95 text-sm"
                                            >
                                                S'inscrire
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation discrète réadaptée mobile */}
                            <div className="absolute bottom-6 md:bottom-8 left-6 right-6 md:left-auto md:right-8 flex items-center justify-between md:justify-end gap-4 z-20">
                                <div className="flex gap-1.5">
                                    {Events.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-1 transition-all duration-300 rounded-full ${i === currentIndex ? "w-6 md:w-8 bg-violet-500" : "w-1.5 md:w-2 bg-white/20"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="flex gap-1 md:gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 text-white/40 hover:text-white transition-colors bg-white/5 md:bg-transparent rounded-full"
                                    >
                                        <ChevronLeft size={18} md:size={20} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        //disabled={currentIndex === Events.length-1}
                                        className="p-2 text-white/40 hover:text-white transition-colors bg-white/5 md:bg-transparent rounded-full"
                                    >
                                        <ChevronRight size={18} md:size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}