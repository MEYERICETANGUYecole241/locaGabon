import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
   <header
      role="banner"
      aria-label="Section principale de recherche de logement"
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('/image.svg')` }} // ✅ assure-toi que le chemin est correct (public/image.svg)
    >
      {/* Overlay noir semi-transparent */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Contenu centré */}
     <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Trouvez votre futur logement facilement
        </h1>

       <p className="text-white text-base md:text-xl leading-relaxed">
          Découvrez des chambres, studios, appartements et maisons à louer dans votre ville, avec tous les équipements qu’il vous faut.
        </p>

        <p className="italic text-white/90">
          Simple. Rapide. Fiable. Avec <strong className="text-yellow-400">LocaGabon</strong>.
        </p>

        <Link href="/logements">
           <button
            className="shadow-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-white px-6 py-3 rounded-full font-semibold transition duration-300 animate-fade-in"
          >
            🔍 Rechercher un logement
          </button>
        </Link>
      </div>
    </header>
  )
}


