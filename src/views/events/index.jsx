import React, { useEffect, useState } from "react";
import {
  MoveLeft,
  Calendar,
  MapPin,
  ArrowRight,
  Info,
  Clock,
  Share2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Event() {
  const [EventsList, setEventsList] = useState([]);
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
      // Data to be shared
      await navigator.share({
        title: document.title,
        text: `Inscrit toi a l'evenment : ${event.name} organiser par grand luc community health`,
        url: event.formLink,
      });
    } else {
      navigator.clipboard.writeText(stack.formLink);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] font-sans selection:bg-violet-100 selection:text-violet-900">
      {/* Hero Section Premium */}
      <section
        id="home"
        className="h-[50vh] md:h-[65vh] bg-violet-950 flex justify-center items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-violet-950/80 via-violet-900/40 to-[#F8F9FD]" />

        <img
          src="/image/background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white text-xs font-black tracking-[0.2em] uppercase">
              Agenda Santé 2024
            </span>
          </div>

          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            ÉVÉNEMENTS
          </h1>
          <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Participez à nos ateliers, conférences et programmes de prévention
            pour une communauté plus forte.
          </p>

          <div className="mt-12">
            <NavLink
              to="/"
              className="inline-flex items-center gap-3 bg-white text-violet-950 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <MoveLeft size={20} />
              RETOUR À L'ACCUEIL
            </NavLink>
          </div>
        </div>
      </section>

      {/* Grille d'Événements */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 pb-32 relative z-30">
        {EventsList.length === 0 ? (
          <div className="bg-white rounded-[3rem] p-20 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-6">
              <Calendar size={40} className="text-violet-200" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Aucun événement prévu
            </h3>
            <p className="text-gray-400 max-w-sm">
              Revenez bientôt pour découvrir nos prochaines initiatives de santé
              communautaire.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {EventsList.map((stack, index) => (
              <div
                key={stack.id || index}
                className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-violet-200/40 transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-2"
              >
                {/* Media Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`${PUBLIC_ROOT}/${stack.cover}`}
                    className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-700"
                    alt={stack.name}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge de date flottant */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex flex-col items-center min-w-[60px]">
                    <span className="text-violet-700 text-lg font-black leading-none">
                      {new Date(stack.date).getDate()}
                    </span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {new Date(stack.date).toLocaleDateString("fr-FR", {
                        month: "short",
                      })}
                    </span>
                  </div>

                  <button
                    onClick={() => Shared(stack)}
                    className="absolute top-5 right-5 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-violet-600 transition-all"
                  >
                    <Share2 size={18} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 text-[10px] font-black uppercase tracking-wider rounded-lg">
                      {stack.place || "Lieu à confirmer"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-violet-700 transition-colors">
                    {stack.name}
                  </h3>

                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <MapPin size={16} className="text-violet-500" />
                      </div>
                      <span className="text-sm font-medium">{stack.place}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Clock size={16} className="text-violet-500" />
                      </div>
                      <span className="text-sm font-medium">
                        À partir de 09:00
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <a
                      href={stack.formLink || stack.form_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-violet-50 text-violet-700 hover:bg-violet-600 hover:text-white px-6 py-4 rounded-2xl font-black transition-all group/btn"
                    >
                      S'INSCRIRE
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section Contact/Info rapide */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-violet-50 rounded-[3rem] p-10 md:p-16 border border-violet-100">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Vous souhaitez organiser un atelier ?
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Nous collaborons avec des professionnels de santé pour
              sensibiliser la communauté. Contactez-nous pour proposer un
              projet.
            </p>
            <button className="bg-violet-900 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-black transition-all">
              NOUS CONTACTER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
