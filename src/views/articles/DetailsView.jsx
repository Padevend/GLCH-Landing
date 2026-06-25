import { useNavigate, useParams } from "react-router-dom";
import { useSmartQuery } from "../../hooks/query";
import {
    Calendar,
    Clock,
    Share2,
    ArrowLeft,
    MessageCircle,
    ChevronLeft,
    Tag,
    ShieldAlert
} from 'lucide-react';
import { share, shortText } from "../../libs/helpers";

export default function DetailsView() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, error } = useSmartQuery(`article-${slug}`, async () => {
        let response = await fetch(`${import.meta.env.VITE_SERVER_ROOT}/article/${slug}`, {
            method: "GET",
        });
        if (response.ok) {
            let article = await response.json();
            return article.result;
        }
    });

    if (isLoading) return <ArticleSkeleton />;

    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
            <div className="text-center p-12 bg-white rounded-[2.5rem] border border-slate-200/60 max-w-md shadow-sm">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-100">
                    <ArrowLeft size={20} />
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Erreur système</h2>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">Le document d'information médicale demandé n'a pas pu être chargé.</p>
                <button 
                    onClick={() => window.history.back()} 
                    className="w-full px-6 py-3.5 bg-slate-950 text-white rounded-xl text-xs font-bold tracking-widest uppercase transition-colors hover:bg-slate-900"
                >
                    Retourner au journal
                </button>
            </div>
        </div>
    );

    const formattedDate = new Date(data.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const publicRoot = import.meta.env.VITE_SERVE_PUBLIC_ROOT || "";
    const imageUrl = `${publicRoot}/${data.thumbnail}`;

    return (
        <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pt-30">
            
            {/* --- BARRE DE NAVIGATION FLUIDE (Plein écran) --- */}
            <nav className="sticky top-0 z-20 w-full">
                <div className="max-w-[90%] xl:max-w-[1440px] mx-auto h-16 flex items-center justify-between px-4">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors group"
                    >
                        <ChevronLeft size={16} className="transform transition-transform duration-300 group-hover:-translate-x-0.5" />
                        <span>Fermer la lecture</span>
                    </button>
                    
                    <button 
                        onClick={() => {
                            share({
                                title: data.title,
                                text: `${shortText(data.content, 100)}`,
                                url: window.location.href
                            })
                        }}
                        className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-400 hover:text-slate-950 transition-colors"
                        aria-label="Partager la publication"
                    >
                        <Share2 size={14} />
                    </button>
                </div>
            </nav>

            {/* --- DISPOSITION GRAND ESPACE (Max-Width 90% ou 1440px) --- */}
            <div className="max-w-[90%] xl:max-w-[1440px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* COLONNE GAUCHE PRINCIPALE (8/12 - Consacrée à la lecture immersive) */}
                    <article className="lg:col-span-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                        
                        {/* En-tête Interne Rapide */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-violet-100">
                                <span>{data.type || "REVUE DE SANTÉ"}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase leading-none">
                                {data.title}
                            </h1>
                        </div>

                        {/* Image d'illustration qui prend tout le conteneur étendu */}
                        <div className="aspect-[21/9] w-full rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-200/60 mb-10">
                            <img
                                src={imageUrl || "/image/background.jpg"}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Corps de texte élargi et optimisé */}
                        <div
                            className="prose prose-slate max-w-none 
                                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-headings:uppercase prose-headings:mt-8
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg prose-p:font-normal prose-p:mb-6
                                prose-strong:text-slate-900 prose-strong:font-black
                                prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-600 prose-li:text-base"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </article>

                    {/* COLONNE DROITE COLLÉE AU DÉFILEMENT (4/12 - Métadonnées & Actions) */}
                    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                        
                        {/* Fiche d'Authentification Documentaire */}
                        <div className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4 mb-4">
                                Métadonnées Officielles
                            </h3>
                            
                            <div className="space-y-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                                <div className="flex items-center gap-3">
                                    <Calendar size={14} className="text-slate-400" />
                                    <span>Publié : {formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={14} className="text-slate-400" />
                                    <span>Lecture : ~8 Minutes</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                                <div className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold text-xs">
                                    AS
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase tracking-tight">Comité de Rédaction</p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Grand Luc Community</p>
                                </div>
                            </div>
                        </div>

                        {/* Boîte d'Indexation de Mots-Clés */}
                        <div className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                            <div className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mb-4">
                                <Tag size={12} className="text-slate-400" />
                                <span>Indexation Lexicale</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Prévention", "Communauté", "Bien-être", "Santé"].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 text-slate-500 rounded-xl text-xs font-medium hover:border-slate-950 hover:text-slate-950 transition-colors cursor-pointer">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bloc Action Directe Permanence */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                                <ShieldAlert size={14} />
                                <span>Avertissement Légal</span>
                            </div>
                            <p className="text-slate-400 text-xs font-normal leading-relaxed mb-6">
                                Ce document fait office de vulgarisation sanitaire et ne remplace en aucun cas les directives d'un médecin traitant.
                            </p>
                            <button 
                                onClick={() => navigate("/contact")} 
                                className="w-full py-3.5 bg-white text-slate-950 hover:bg-slate-50 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            >
                                Contacter la permanence
                            </button>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}

const ArticleSkeleton = () => (
    <div className="min-h-screen bg-[#fafafa] animate-pulse">
        <div className="h-16 bg-white border-b border-slate-100" />
        <div className="max-w-[90%] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
                <div className="h-10 bg-slate-200 rounded-2xl w-3/4" />
                <div className="aspect-[21/9] bg-slate-200 rounded-[1.8rem]" />
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-5/6" />
            </div>
            <div className="lg:col-span-4 h-64 bg-slate-200 rounded-[2rem]" />
        </div>
    </div>
);