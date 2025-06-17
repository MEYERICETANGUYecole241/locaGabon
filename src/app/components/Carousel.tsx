"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

type Logement = {
  image: string;
  titre: string;
  description: string;
};

const logements: Logement[] = [
  {
    image: "/images/akanda.jpg",
    titre: "Maison à Akanda",
    description: "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs.",
  },
  {
    image: "/images/owendo.jpg",
    titre: "Villa à Owendo",
    description: "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
  },
  {
    image: "/images/bellevue.jpg",
    titre: "Studio à Bellevue",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((current) => (current === 0 ? logements.length - 1 : current - 1));
  };

  const next = () => {
    setIndex((current) => (current === logements.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6 gap-4">
      <ProductCard
        image={logements[index].image}
        titre={logements[index].titre}
        description={logements[index].description}
      />

      <div className="flex gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Précédent
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
