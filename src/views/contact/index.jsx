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
      // Initialize EmailJS
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

        // Interaction behavior and UI
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        H.ui.UI.createDefault(map, maptypes);

        // Marker
        const marker = new H.map.Marker({ lat: 5.6257, lng: 10.25596 });
        map.addObject(marker);

        // Resize listener
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/image/background.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-violet-900/60 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 text-violet-200 hover:text-white transition-colors mb-6 group"
          >
            <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide tracking-widest uppercase text-xs">Return Home</span>
          </NavLink>
          
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">TOUCH</span>
          </h1>
          <p className="text-violet-100 text-lg md:text-2xl font-light italic max-w-2xl leading-relaxed">
            Have questions about our community health programs? We're here to help you and your family.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-violet-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-violet-200 relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-violet-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-violet-200 leading-relaxed">
                      Mbouda, Bametap, Douala,<br />
                      B.P. 13208 Yaoundé, Cameroun
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-violet-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-violet-200 text-xl font-semibold">( +237 ) 659 375 114</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-violet-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-violet-200 font-medium">grandluccommunityhealth@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-violet-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-violet-200">Mon - Fri: 08:00 AM - 05:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 h-80 bg-gray-100" id="map">
              {/* Map will be initialized here */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-2 md:p-6">
              <div className="mb-10">
                <h3 className="text-violet-800 font-bold uppercase tracking-widest text-sm mb-4">Send a message</h3>
                <h2 className="text-4xl font-black text-gray-900 mb-6">How can we help you?</h2>
                <div className="w-16 h-1.5 bg-violet-600 rounded-full"></div>
              </div>

              <form onSubmit={formSubmitted} className="space-y-6">
                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 p-4 rounded-2xl text-green-700 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 size={20} />
                    <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {status === "failed" && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 p-4 rounded-2xl text-red-700 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle size={20} />
                    <span className="font-medium">Oops! Something went wrong. Please try again later.</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+237 6xx xxx xxx"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Membership inquiry"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can assist you..."
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-violet-600 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full md:w-auto px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-violet-200 active:scale-95 ${
                    status === "loading" 
                    ? "bg-gray-400 cursor-not-allowed text-white" 
                    : "bg-violet-800 text-white hover:bg-violet-900 hover:-translate-y-1"
                  }`}
                >
                  {status === "loading" ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}