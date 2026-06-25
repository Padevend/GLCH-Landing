import React, { useState, useEffect, useCallback, useRef } from "react";
import {
    MapPin,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    CalendarDays
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EventBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const autoPlayRef = useRef(() => {});
    const [Events, setEventsList] = useState([]);
    const navigate = useNavigate();

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
                    console.error("Erreur lors de la récupération des événements", err);
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

    const formatDay = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', { day: 'numeric' });
    };

    const formatMonth = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '');
    };

    return (
        <>
            {Events && Events.length >= 1 && (
                <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0516] overflow-hidden">
                    
                    {/* Sphères lumineuses d'arrière-plan pour accentuer le Glassmorphism */}
                    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        
                        {/* En-tête avec effet de ligne ultra-fine */}
                        <div className="flex items-end justify-between mb-12 border-b border-white/[0.06] pb-5">
                            <div className="flex items-center gap-3">
                                <div className="h-5 w-[3px] bg-gradient-to-b from-violet-400 to-fuchsia-500 rounded-full" />
                                <h2 className="text-white text-xl md:text-2xl font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                                    Événements <span className="text-violet-400 font-light font-sans">à venir</span>
                                </h2>
                            </div>
                            <button
                                onClick={() => navigate('/event')}
                                className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase group bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/[0.08]"
                            >
                                <span>L'agenda</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-violet-400" />
                            </button>
                        </div>

                        {/* Conteneur Principal Glassmorphism */}
                        <div
                            className="relative h-[560px] sm:h-[450px] md:h-[420px] w-full bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {/* Lueur d'ambiance interne au conteneur */}
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                            {Events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:flex-row items-stretch ${
                                        index === currentIndex ? "opacity-100 visible scale-100" : "opacity-0 invisible pointer-events-none scale-[0.98]"
                                    }`}
                                >
                                    {/* Zone gauche : Textes et Actions */}
                                    <div className="relative z-10 flex-1 p-6 sm:p-10 md:p-12 flex flex-col justify-between md:max-w-[55%]">
                                        <div>
                                            {/* Métadonnées Glass */}
                                            <div className="flex items-center gap-4 mb-6">
                                                {/* Badge Date Frosted Glass */}
                                                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.12] px-3.5 py-1.5 rounded-xl text-violet-300 backdrop-blur-md shadow-inner">
                                                    <CalendarDays size={13} className="text-violet-400" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                                                        {formatDay(event.date)} {formatMonth(event.date)}
                                                    </span>
                                                </div>

                                                {/* Localisation */}
                                                <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.04] px-3 py-1.5 rounded-xl text-gray-300 text-xs backdrop-blur-sm">
                                                    <MapPin size={13} className="text-fuchsia-400" />
                                                    <span className="font-medium tracking-wide">{event.place}</span>
                                                </div>
                                            </div>

                                            {/* Titre Épuré */}
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                                                {event.name}
                                            </h3>

                                            {/* Description avec opacité contrôlée */}
                                            <p className="text-gray-300/80 text-xs sm:text-sm md:text-base line-clamp-3 md:line-clamp-3 max-w-xl font-normal leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Bouton d'action principal */}
                                        <div className="mt-6 md:mt-0 pt-4">
                                            <a
                                                href={event.formLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-violet-950/50 hover:shadow-fuchsia-500/20 active:scale-[0.98]"
                                            >
                                                Réserver ma place
                                            </a>
                                        </div>
                                    </div>

                                    {/* Zone droite : Image masquée avec dégradé miroir */}
                                    <div className="relative flex-1 min-h-[160px] md:min-h-full overflow-hidden md:border-l border-white/[0.08]">
                                        <img
                                            src={`${PUBLIC_ROOT}/${event.cover}`}
                                            alt={event.name}
                                            className="w-full h-full object-cover transition-transform duration-[5s] ease-out"
                                            style={{ transform: index === currentIndex ? 'scale(1)' : 'scale(1.1)' }}
                                        />
                                        {/* Incrustation d'écrans pour fusionner l'image dans le verre */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0516] via-[#0a0516]/40 to-transparent md:bg-gradient-to-r md:from-[#0a0516] md:via-[#0a0516]/20" />
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0516]/80 hidden md:block" />
                                    </div>
                                </div>
                            ))}

                            {/* Barre de contrôles et pagination style "Dashboard" */}
                            <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between gap-4 z-20 pt-4 border-t border-white/[0.06] md:max-w-[48%]">
                                {/* Indicateurs linéaires en verre */}
                                <div className="flex gap-2 flex-1 max-w-[100px]">
                                    {Events.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-1 transition-all duration-500 rounded-full flex-1 ${
                                                i === currentIndex ? "bg-gradient-to-r from-violet-400 to-fuchsia-400" : "bg-white/[0.08] hover:bg-white/[0.2]"
                                            }`}
                                            aria-label={`Slide ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Flèches Frost Glass */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 text-gray-400 hover:text-white transition-all bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.1] rounded-xl border border-white/[0.08] backdrop-blur-md"
                                        aria-label="Précédent"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="p-2 text-gray-400 hover:text-white transition-all bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.1] rounded-xl border border-white/[0.08] backdrop-blur-md"
                                        aria-label="Suivant"
                                    >
                                        <ChevronRight size={16} />
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