"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/gabonhome-.jpg",
  "/u.jpg",
  "/images.jpeg",
  "/logements-gabon.jpg",
  "/téléchargement.jpeg",
];

export default function A_propos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique du slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱️ Un rythme plus naturel

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Titre principal */}
      <section className="px-4 py-10 bg-blue-50 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          À propos de <span className="text-yellow-500">LocaGabon</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Votre solution simple et moderne pour la location de logements au Gabon.
        </p>
      </section>

      {/* Section avec image + texte */}
      <section className="px-4 py-10 bg-blue-50">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">

          {/* Slider image */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
              <Image
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority
              />
            </div>

            {/* Points de navigation */}
            <div className="flex justify-center mt-4 gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`h-3 w-3 rounded-full transition-all ${
                    i === currentIndex ? "bg-blue-900 scale-125" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Voir l'image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Texte descriptif */}
          <div className="w-full md:w-1/2 text-gray-800 text-lg space-y-5 leading-relaxed">
            <p>
              <strong className="text-blue-900">LocaGabon</strong> est une plateforme intuitive qui facilite la
              recherche et la mise en location de biens immobiliers au Gabon. Elle est pensée pour
              répondre aux besoins des locataires comme des propriétaires.
            </p>

            <p>
              Grâce à notre interface claire, vous trouvez rapidement un logement adapté à vos attentes
              ou vous mettez votre bien en location en toute confiance.
            </p>

            <p>
              <span className="italic text-gray-600">Accessibilité, fiabilité et transparence</span> sont les maîtres mots de notre service.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/logements"
                className="inline-block bg-blue-800 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 animate-bounce"
              >
                Explorer les logements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
