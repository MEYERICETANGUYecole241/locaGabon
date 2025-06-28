import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-green-900 to-blue-900 text-white mt-16 border-t border-yellow-400/20 relative overflow-hidden">
      {/* Motifs gabonais en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-20 h-20 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border border-green-400 rounded-full"></div>
        <div className="absolute top-20 right-40 w-12 h-12 bg-yellow-400/30 rotate-45"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        
        {/* Logo + Slogan avec motifs gabonais */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
              <div className="flex flex-col gap-0.5">
                <div className="w-3 h-0.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-0.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-0.5 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">LocaGabon</h2>
          </div>
          <p className="text-sm mt-1 text-blue-200">trouvez simplement, vivez sereinement</p>
          <p className="text-xs mt-2 text-green-300 italic">"Akiba na bobendi" - L'hospitalité gabonaise</p>
        </div>

        {/* Liens de navigation rapide */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="/logements" className="hover:underline">Logements</a>
          <a href="/favoris" className="hover:underline">Favoris</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/confidentialite" className="hover:underline">Confidentialité</a>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-4 mb-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-[#3b5998]"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2]"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#0077b5]"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#e1306c]"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-white/80">
          &copy; {new Date().getFullYear()} LocaGabon. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
