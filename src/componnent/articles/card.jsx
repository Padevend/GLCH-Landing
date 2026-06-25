import { Calendar, ArrowUpRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { shortText } from '../../libs/helpers';

export default function ArticleCard({ article, index }) {
    const navigate = useNavigate();

    // Gestion sécurisée de l'URL racine
    const getRoot = () => {
        try {
            return import.meta.env.VITE_SERVE_PUBLIC_ROOT || '';
        } catch {
            return '';
        }
    };

    const formattedDate = new Date(article.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return (
        <div 
            onClick={() => navigate(`/article/${article.slug}`)} 
            className="group bg-white rounded-[2.5rem] border border-slate-200/60 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(148,163,184,0.12)] transition-all duration-500 flex flex-col justify-between cursor-pointer col-span-1"
        >
            <div>
                {/* --- CONTENEUR IMAGE ISOLÉ --- */}
                <div className="relative aspect-[16/10] w-full rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-200/40 mb-6">
                    <img
                        src={`${getRoot()}/${article.thumbnail}`}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-103"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'; }}
                    />
                    
                    {/* Voile de survol ultra-léger */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.02] transition-colors duration-500" />
                    
                    {/* Badge Catégorie Minimaliste */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200/40 text-[9px] font-black uppercase tracking-wider rounded-xl shadow-sm">
                            {article.type || 'SANTÉ'}
                        </span>
                    </div>
                </div>

                {/* --- SECTION DES TEXTES ÉDITORIAUX --- */}
                <div className="px-2">
                    {/* Métadonnées Chronologiques */}
                    <div className="flex items-center gap-4 mb-3 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-slate-300" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={12} className="text-slate-300" />
                            <span>5 min read</span>
                        </div>
                    </div>

                    {/* Titre de l'article */}
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-violet-600 transition-colors duration-300 line-clamp-2">
                        {article.title}
                    </h3>

                    {/* Extrait du contenu */}
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-6 line-clamp-3">
                        {shortText(article.content, 120)}
                    </p>
                </div>
            </div>

            {/* --- PIED DE CARTE STRUCTUREL --- */}
            <div className="mx-2 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-slate-950 transition-colors duration-300">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Lire l'article</span>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </div>
    );
};