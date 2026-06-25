import { MoveLeft, Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useScripts from "../../hooks/useScript";

export default function Contact() {
  const [status, setSatus] = useState("none");
  const [isScriptsLoaded, isScriptsError] = useScripts([
    "https://js.api.here.com/v3/3.1/mapsjs-core.js",
    "https://js.api.here.com/v3/3.1/mapsjs-ui.js",
    "https://js.api.here.com/v3/3.1/mapsjs-service.js",
    "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js",
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
  ]);

  useEffect(() => {
    if (isScriptsLoaded && !isScriptsError) {
      window.emailjs.init({
        publicKey: "wGrUG5AwX4Y1ujRoA",
      });

      function initCard() {
        if (!document.getElementById("map")) return;
        
        const platform = new H.service.Platform({
          apiKey: import.meta.env.VITE_API_KEY,
        });

        const maptypes = platform.createDefaultLayers();
        const map = new H.Map(
          document.getElementById("map"),
          maptypes.vector.normal.map,
          {
            zoom: 14,
            center: { lat: 5.6257, lng: 10.25596 },
            pixelRatio: window.devicePixelRatio || 1
          }
        );

        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        H.ui.UI.createDefault(map, maptypes);

        const marker = new H.map.Marker({ lat: 5.6257, lng: 10.25596 });
        map.addObject(marker);

        window.addEventListener('resize', () => map.getViewPort().resize());
      }

      initCard();
    } else if (isScriptsError) {
      console.error("Failed to load one or more scripts.");
    }
  }, [isScriptsLoaded, isScriptsError]);

  const formSubmitted = (e) => {
    e.preventDefault();
    setSatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    let data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    window.emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data
      )
      .then(() => {
        setSatus("success");
        form.reset();
      })
      .catch(() => setSatus("failed"));
  };

  useEffect(() => {
    if (status !== "none" && status !== "loading") {
      const timer = setTimeout(() => {
        setSatus("none");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-slate-900 selection:bg-slate-100">
      
      {/* --- EN-TÊTE ÉDITORIAL TRANSPARENT --- */}
      <header className="border-b border-slate-200/60 pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors mb-8 group"
          >
            <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour à l'accueil</span>
          </NavLink>
          
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
                <span>Secrétariat Général</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none">
                CONTACTER LA <br />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">PERMANENCE.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed border-l-2 border-slate-200 pl-6">
                Une question sur nos programmes de santé communautaire ou nos ateliers ? Nos équipes médicales et administratives vous répondent sous 24 heures ouvrées.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* --- ZONE PRINCIPALE DE CONTENU --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INDEX INFORMATIONNEL & CARTE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4 mb-6">
                Coordonnées de l'Établissement
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center shrink-0 text-slate-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Siège National</h4>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                      Mbouda, Bametap, Douala,<br />
                      B.P. 13208 Yaoundé, Cameroun
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center shrink-0 text-slate-500">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ligne Directe</h4>
                    <p className="text-sm font-mono font-bold text-slate-900">(+237) 659 375 114</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center shrink-0 text-slate-500">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Courriel Médical</h4>
                    <p className="text-sm font-medium text-slate-800">grandluccommunityhealth@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center shrink-0 text-slate-500">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Accueil du Public</h4>
                    <p className="text-sm font-medium text-slate-800">Lun - Ven : 08:00 — 17:00 (WAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteneur Cartographique Épuré */}
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200/60 h-72 bg-slate-50 shadow-[0_4px_30px_rgba(0,0,0,0.01)]" id="map">
              {/* Le module Here Map s'injecte ici */}
            </div>
          </div>

          {/* COLONNE DROITE : DOSSIER DE SOUMISSION (Formulaire) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
            <div className="mb-8">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4 mb-2">
                Transmission Sécurisée
              </h3>
              <p className="text-xs text-slate-400 font-normal">
                Veuillez renseigner les champs requis pour l'indexation de votre demande auprès de nos services.
              </p>
            </div>

            <form onSubmit={formSubmitted} className="space-y-6">
              
              {/* Messages d'état d'envoi */}
              {status === "success" && (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-800 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Votre protocole d'information a été transmis avec succès.</span>
                </div>
              )}

              {status === "failed" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 p-4 rounded-xl text-red-800 text-sm font-medium">
                  <AlertCircle size={16} className="text-red-600 shrink-0" />
                  <span>Une anomalie réseau est survenue. Veuillez réitérer la transmission.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Identité Complète</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex: Dr. Jean-Noël"
                    required
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-950 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Adresse Courriel</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="adresse@domaine.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-950 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Téléphone Réseau</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+237 6xx xxx xxx"
                    required
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-950 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Objet de la Demande</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Ex: Coordination de projet"
                    required
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-950 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Descriptif de votre message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Formulez de manière concise votre requête à l'attention du secrétariat général..."
                  required
                  className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-950 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all duration-300 ${
                    status === "loading" 
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                    : "bg-slate-950 text-white hover:bg-slate-900"
                  }`}
                >
                  {status === "loading" ? (
                    <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmettre le message</span>
                      <Send size={12} className="text-slate-400" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>

    </div>
  );
}