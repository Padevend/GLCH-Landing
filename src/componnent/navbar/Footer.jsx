import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ routes }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section: Newsletter & Social */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-6 py-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              Join our newsletter
            </h3>
            <p className="mt-2 text-gray-400">
              Stay updated with our latest health tips, community news, and
              medical prevention strategies.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-72 px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
            <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center font-black text-white text-xl">
                G
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                GLCH
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering communities through social medicine, mutual assistance,
              and a new vision of preventive healthcare in Africa.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-4">
              {routes.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-violet-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Legal & Privacy
            </h4>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Membership Rules",
                "Cookie Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-violet-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-violet-500 shrink-0" />
                <span>
                  Mbouda, Bametap, Douala, B.P. 13208 Yaoundé, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-violet-500 shrink-0" />
                <span>+237 659 375 114</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-violet-500 shrink-0" />
                <span>grandluccommunityhealth@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {currentYear} Grand Luc Community Health. All Rights Reserved.
            Built with heart for the community.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUpCircle
              size={20}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
