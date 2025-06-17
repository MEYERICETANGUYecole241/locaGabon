"use client";

import ProductCard from "./ProductCard";



export default function Allcards() {
  const logements = [
    {
    image: "/gabonhome-.jpg",
    titre: "Maison à Akanda",
    description: "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs.",
    localisation: "Akanda",
    surface: "120 m²",
    prix: "300 000 FCFA / mois",
  },

   {
    image: "/logements-gabon.jpg",
    titre: "Villa à Owendo",
    description: "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
    localisation: "Owendo",
    surface: "250 m²",
    prix: "600 000 FCFA / mois",
  },

   {
    image: "/i.jpg",
    titre: "Studio à Bellevue",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
    localisation: "Bellevue",
    surface: "35 m²",
    prix: "150 000 FCFA / mois",
  },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="flex flex-wrap gap-6 justify-start">
        {logements.map((logement, index) => (
          <ProductCard
  key={index}
  image={logement.image}
  titre={logement.titre}
  description={logement.description}
  localisation={logement.localisation}
  surface={logement.surface}
  prix={logement.prix}
/>
        ))}
      </div>
    </div>
  );
}
