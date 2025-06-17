"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";



const images = [
  "/gabonhome-.jpg",
  "/u.jpg",
  "/images.jpeg",
   "/logements-gabon.jpg",
   "/téléchargement.jpeg"
];

export default function A_propos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Titre principal */}
      <section className="px-6 py-6 bg-blue-50 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
          À propos de LocaGabon
        </h1>
      </section>

      {/* Section principale */}
      <section className="px-6 py-6 bg-blue-50">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* 👉 Colonne image avec slider */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-[500px] h-[350px] rounded-xl overflow-hidden shadow-md">
              <Image
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Petits points de navigation */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === currentIndex ? "bg-blue-800" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Voir image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Colonne texte */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>LocaGabon</strong> est une plateforme moderne de location immobilière, conçue pour simplifier 
              la recherche de logements. Que vous soyez propriétaire ou locataire, notre objectif est de vous offrir 
              une expérience fluide, sécurisée et transparente. Grâce à notre interface intuitive, trouvez facilement 
              un logement adapté à vos besoins ou mettez votre bien en location en quelques clics. Nous croyons en 
              une location accessible, humaine et connectée.
            </p>

            <div className="flex justify-center">
            <Link href="/logements"  
              className="bg-blue-900 text-white px-6 py-3 rounded-full animate-pulse hover:bg-blue-200 hover:text-black transition-colors duration-300">
    Explorer les logements
  
</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
