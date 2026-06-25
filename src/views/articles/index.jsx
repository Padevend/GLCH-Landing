import { Disc, Layers, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ArticleCard from "../../componnent/articles/card";

export default function ArticlesView() {
    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        async function getArticles() {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_ROOT}/article`, {
                    method: "GET",
                });
                const data = await response.json();
                setArticles(Array.isArray(data.features) ? data.features : []);
            } catch {
                setArticles([]);
            }
        }

        getArticles();
    }, []);
    
    return (
        <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32">
            
            {/* --- EN-TÊTE ÉDITORIAL HAUT DE GAMME --- */}
            <header className="border-b border-slate-200/60 pt-32 pb-16 bg-white mb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 items-end">
                        
                        {/* Zone Intitulé & Titre Principal */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
                                <Layers size={12} className="text-violet-600" />
                                <span>Actualités & Savoirs</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none">
                                Explorer nos <br />
                                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">publications.</span>
                            </h1>
                        </div>
                        
                        {/* Descriptif d'Accompagnement Asymétrique */}
                        <div className="lg:col-span-5 lg:pb-2">
                            <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed border-l-2 border-slate-200 pl-6 max-w-md">
                                Une bibliothèque scientifique et citoyenne de ressources documentées pour accompagner votre bien-être et soutenir la prévention au quotidien.
                            </p>
                        </div>

                    </div>
                </div>
            </header>

            {/* --- FLUX / GRILLE DE CONTENU --- */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8">
                {Articles.length === 0 ? (
                    
                    /* État vide institutionnel */
                    <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-12 md:p-24 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col items-center text-center max-w-2xl mx-auto">
                        <div className="w-14 h-14 bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-center mb-6 text-slate-300">
                          <Disc size={20} className="animate-spin" style={{ animationDuration: '6s' }} />
                        </div>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                            Mise à jour de la bibliothèque
                        </h2>
                        <p className="text-slate-500 text-sm font-normal max-w-sm leading-relaxed">
                            Nos praticiens et rédacteurs peaufinent les prochaines fiches de santé publique. Revenez très bientôt.
                        </p>
                    </div>
                ) : (
                    
                    /* Grille de cartes configurée */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
                        {Articles.map((item, idx) => (
                            <ArticleCard key={idx} article={item} index={idx} />
                        ))}
                    </div>
                )}
            </main>

        </div>
    );
}