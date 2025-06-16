import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <header
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('image.svg')` }} // À adapter selon ton image
    >
      {/* Overlay noir semi-transparent */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenu centré */}
      <div className="relative text-center px-6 max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Trouvez votre futur logement facilement
        </h1>

        <p className="text-white text-lg md:text-xl leading-relaxed">
          Découvrez des chambres, studios, appartements et maisons à louer dans votre ville, avec tous les équipements qu’il vous faut.
        </p>

        <p className="italic text-white/80">
          Simple. Rapide. Fiable. Avec <strong>LocaGabon</strong>.
        </p>

        <Link href="/recherche">
          <button className="shadow-md animate-pulse hover:bg-yellow-600 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-md">
            Rechercher un logement
          </button>
        </Link>
      </div>
    </header>
  )
}


