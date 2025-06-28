import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
   <header
      role="banner"
      aria-label="Section principale de recherche de logement"
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('/image copy.png')` }} 
    >
      {/* Overlay avec gradient gabonais */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-green-900/30 to-yellow-900/20"></div>
      
      {/* Motifs géométriques africains subtils */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 bg-green-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white opacity-30" 
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>

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
        
        {/* Citation gabonaise */}
        <div className="mt-4 border-l-4 border-yellow-400 pl-4">
          <p className="text-white/80 text-sm italic">
            &rdquo;Akiba&rdquo; - L&apos;hospitalité est notre tradition
          </p>
        </div>

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


