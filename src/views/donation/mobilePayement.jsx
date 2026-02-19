import React, { useState } from "react";
import { 
  Heart, 
  User, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  CreditCard,
  Loader2,
  ArrowRight,
  Info,
  Smartphone,
  Globe
} from "lucide-react";
import axios from "axios";


const AVAILABLE_COUNTRIES = [
  { code: "CM", name: "Cameroon" },
  { code: "BJ", name: "Benin" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "RW", name: "Rwanda" },
  { code: "UG", name: "Uganda" },
  { code: "KE", name: "Kenya" },
];

// --- Composant Principal ---
export default function DonationView() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    amount: 5000,
    phone: "", 
    country: "CM",
    service: "MTN",
    customer: {
      email: "",
      phone: "",
      town: "",
      region: "",
      country: "Cameroon",
      first_name: "",
      last_name: "",
      address: ""
    },
    donorType: "individual",
    companyName: "",
    additionalInfo: ""
  });

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      customer: {
        ...prev.customer,
        [name]: value
      }
    }));
  };

  const handleRootChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "country") {
      const countryObj = AVAILABLE_COUNTRIES.find(c => c.code === value);
      setFormData(prev => ({ 
          ...prev, 
          country: value,
          customer: {
            ...prev.customer,
            country: countryObj ? countryObj.name : prev.customer.country
          }
      }));
    } else {
      setFormData(prev => ({ 
          ...prev, 
          [name]: name === "amount" ? Number(value) : value 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      amount: formData.amount,
      phone: formData.phone,
      country: formData.country,
      service: formData.service,
      customer: formData.customer
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_ROOT}/donate`, payload)
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Erreur de soumission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl shadow-violet-100 border border-violet-50 animate-in fade-in zoom-in duration-700">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Merci pour votre générosité !</h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Votre don de <span className="font-bold text-violet-600">{formData.amount.toLocaleString()} FCFA</span> a bien été pris en compte. Un email de confirmation a été envoyé au <span className="font-semibold">{formData.customer.email}</span>.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-violet-200"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6 lg:px-24 font-sans text-slate-900 selection:bg-violet-100 selection:text-violet-600">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-violet-100 text-violet-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Heart size={12} className="fill-current" />
            <span>Impact Social & Médical</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Votre soutien <br className="hidden md:block" />
            <span className="text-violet-600">change tout.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Un geste simple pour financer des équipements médicaux et sauver des vies dans nos communautés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <form id="donation-form" onSubmit={handleSubmit} className="space-y-6">
              
              {/* Informations Personnelles */}
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 transition-all hover:border-violet-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Identité du Donateur</h3>
                    <p className="text-xs text-slate-400 font-medium">Informations pour le reçu fiscal</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Prénom</label>
                    <input required type="text" name="first_name" value={formData.customer.firstName} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all placeholder:text-slate-300" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom</label>
                    <input required type="text" name="last_name" value={formData.customer.lastName} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all placeholder:text-slate-300" placeholder="Dupont" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input required type="email" name="email" value={formData.customer.email} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all placeholder:text-slate-300" placeholder="email@exemple.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone de contact</label>
                    <input required type="tel" name="phone" value={formData.customer.phone} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all placeholder:text-slate-300" placeholder="+237 ..." />
                  </div>
                </div>
              </div>

              {/* Localisation */}
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 transition-all hover:border-violet-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Localisation</h3>
                    <p className="text-xs text-slate-400 font-medium">Adresse de résidence actuelle</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Adresse complète</label>
                    <input required type="text" name="address" value={formData.customer.address} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all" placeholder="Rue, Quartier, Porte..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Ville</label>
                    <input required type="text" name="town" value={formData.customer.town} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all" placeholder="Douala" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Région</label>
                    <input required type="text" name="region" value={formData.customer.region} onChange={handleCustomerChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-violet-600 focus:ring-4 focus:ring-violet-50 transition-all" placeholder="Littoral" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Pays de résidence</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input readOnly type="text" name="country" value={formData.customer.country} className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-12 pr-5 py-3.5 outline-none text-slate-500 font-semibold cursor-not-allowed" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] flex gap-5 items-start">
                <div className="bg-violet-600 p-2.5 rounded-lg shrink-0">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Nous utilisons un chiffrement de bout en bout pour protéger vos transactions. 
                  En faisant un don, vous soutenez directement nos programmes d'assistance médicale. 
                  Aucun frais caché n'est appliqué sur votre contribution.
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-6">
            
            {/* Montant Card */}
            <div className="bg-violet-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-violet-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
                <CreditCard size={20} className="text-violet-200" /> Montant du don
              </h3>
              <div className="relative">
                <input 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleRootChange}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:bg-white focus:text-violet-600 focus:border-white font-black text-3xl transition-all" 
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-sm opacity-50 pointer-events-none">FCFA</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {[2000, 5000, 10000, 25000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, amount: val }))}
                    className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${formData.amount === val ? "bg-white text-violet-600" : "bg-white/10 hover:bg-white/20"}`}
                  >
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Paiement Mobile Card */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg font-bold mb-10 flex items-center gap-3 text-slate-900">
                <Smartphone size={20} className="text-violet-600" /> Mode de Paiement
              </h3>
              
              <div className="space-y-8">
                {/* Choix du Pays de paiement (Root country code) */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Zone Géographique</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <select 
                      name="country" 
                      value={formData.country} 
                      onChange={handleRootChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-5 py-4 outline-none focus:border-violet-600 transition-all font-bold text-sm appearance-none"
                    >
                      {AVAILABLE_COUNTRIES.map(c => (
                        <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Opérateurs */}
                <div className="grid grid-cols-3 gap-3">
                  {["MTN", "ORANGE", "AIRTEL"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, service: s }))}
                      className={`h-16 rounded-xl flex items-center justify-center font-black text-[10px] border-2 transition-all ${formData.service === s ? "border-violet-600 bg-violet-50 text-violet-600 shadow-sm" : "border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Numéro de prélèvement */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Numéro Mobile Money</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-violet-600" size={18} />
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleRootChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-5 py-4 outline-none focus:bg-white focus:border-violet-600 transition-all font-bold tracking-[0.15em] placeholder:tracking-normal placeholder:text-slate-300" 
                      placeholder="6xxxxxxxx"
                    />
                  </div>
                </div>
              </div>

              {/* Note d'information */}
              <div className="mt-10 p-5 bg-violet-50 rounded-2xl flex gap-4 border border-violet-100/50">
                <Info size={18} className="text-violet-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-violet-900/70 leading-relaxed font-semibold">
                  Une boîte de dialogue apparaîtra sur votre téléphone pour valider la transaction avec votre code secret.
                </p>
              </div>

              {/* Submit Button */}
              <button 
                form="donation-form"
                disabled={isLoading}
                className="w-full mt-10 bg-slate-900 hover:bg-violet-600 text-white py-5 rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl shadow-slate-100 flex items-center justify-center gap-3 disabled:opacity-50 group active:scale-95"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    CONFIRMER MON DON
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}