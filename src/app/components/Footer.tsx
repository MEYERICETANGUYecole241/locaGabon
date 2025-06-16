import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Logo + Slogan */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">LocaGabon</h2>
          <p className="text-sm mt-1">trouvez simplement, vivez sereinement</p>
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
