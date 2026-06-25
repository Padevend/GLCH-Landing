import React, { useEffect, useState } from "react";
import {
  MoveLeft,
  Calendar,
  MapPin,
  ArrowRight,
  Clock,
  Share2,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Event() {
  const [EventsList, setEventsList] = useState([]);

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
      fetch(`${SERVER_ROOT}/events`, {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data) => {
          setEventsList(Array.isArray(data) ? data : []);
        })
        .catch((err) => {
          console.error("Erreur lors de la récupération des événements:", err);
          setEventsList([]);
        });
    }

    getEventsList();
  }, [SERVER_ROOT]);

  const Shared = async (event) => {
    if(navigator.share) {
      await navigator.share({
        title: document.title,
        text: `Inscris-toi à l'événement : ${event.name} organisé par Grand Luc Community Health`,
        url: event.formLink,
      });
    } else {
      navigator.clipboard.writeText(event.formLink || event.form_link);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-slate-100">
      
      {/* --- EN-TÊTE ÉDITORIAL TRANSPARENT --- */}
      <header className="border-b border-slate-200/60 pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors mb-8 group"
          >
            <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour à l'accueil</span>
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Agenda Régional {new Date().getFullYear()}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none">
                PROGRAMMES & <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Événements</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed border-l-2 border-slate-200 pl-6">
                Prenez part à nos ateliers cliniques, conférences de sensibilisation et campagnes de proximité pour co-construire une culture de la prévention sanitaire.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* --- GRILLE PRINCIPALE / COMPOSANT SATELLITE --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {EventsList.length === 0 ? (
          <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-12 md:p-24 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-center mb-6 text-slate-400">
              <Calendar size={20} />
            </div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
              Aucun événement planifié
            </h3>
            <p className="text-slate-500 text-sm font-normal max-w-sm leading-relaxed">
              Nos équipes de coordination médicale préparent les prochaines sessions de dépistage et de prévention.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {EventsList.map((stack, index) => (
              <div
                key={stack.id || index}
                className="group bg-white rounded-[2.5rem] border border-slate-200/60 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(148,163,184,0.12)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image / Zone supérieure fixe */}
                  <div className="relative aspect-[16/10] w-full rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-200/40 mb-6">
                    <img
                      src={`${PUBLIC_ROOT}/${stack.cover}`}
                      className="object-cover h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-103"
                      alt={stack.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800";
                      }}
                    />

                    {/* Badge Calendrier Éditorial */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm border border-slate-200/40 flex flex-col items-center min-w-[55px]">
                      <span className="text-slate-900 text-base font-black leading-none font-mono">
                        {new Date(stack.date).getDate()}
                      </span>
                      <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mt-1">
                        {new Date(stack.date).toLocaleDateString("fr-FR", {
                          month: "short",
                        })}
                      </span>
                    </div>

                    {/* Partage Intuitif */}
                    <button
                      onClick={() => Shared(stack)}
                      className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md border border-slate-200/40 rounded-xl text-slate-500 hover:text-slate-900 transition-all shadow-sm"
                      aria-label="Partager l'événement"
                    >
                      <Share2 size={14} />
                    </button>
                  </div>

                  {/* Contenu textuel structuré */}
                  <div className="px-2">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-violet-600 transition-colors duration-300">
                      {stack.name}
                    </h3>

                    {/* Paramètres d'indexation (Meta) */}
                    <div className="space-y-2.5 mb-6 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-2.5 text-slate-500 text-xs font-medium">
                        <MapPin size={14} className="text-slate-400 shrink-0" />
                        <span className="truncate">{stack.place || "Lieu à confirmer"}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-500 text-xs font-medium">
                        <Clock size={14} className="text-slate-400 shrink-0" />
                        <span>À partir de 09:00 (WAT)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bouton d'action structurel bas de carte */}
                <div className="px-2 pb-2">
                  <a
                    href={stack.formLink || stack.form_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-50 text-slate-900 border border-slate-200/60 hover:bg-slate-950 hover:text-white hover:border-transparent px-5 py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  >
                    <span>S'inscrire au programme</span>
                    <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- BLOC APPEL À L'ACTION : SOLLICITATION ATELIER --- */}
      <section className="bg-white border-t border-slate-200/60 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-8 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase">
              Vous souhaitez organiser un atelier ?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
              Nous collaborons activement avec les praticiens de santé locaux et internationaux pour structurer des espaces d'apprentissage collectifs. Contactez notre comité d'éthique pour soumettre un projet.
            </p>
            <button className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-sm text-xs tracking-widest uppercase">
              <span>Soumettre une proposition</span>
              <ArrowUpRight size={14} className="text-slate-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}