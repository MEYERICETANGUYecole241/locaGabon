// components/services.tsx
"use client";

export type Logement = {
  id: number;
  image: string;
  titre: string;
  description: string;
  localisation: string;
  surface: string;
  prix: string;
};

export const logements: Logement[] = [
  {
    id: 1,
    image: "/gabonhome-.jpg",
    titre: "Maison à Akanda",
    description: "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs.",
    localisation: "Akanda",
    surface: "120 m²",
    prix: "300 000 FCFA / mois",
  },
  {
    id: 2,
    image: "/logements-gabon.jpg",
    titre: "Villa à Owendo",
    description: "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
    localisation: "Owendo",
    surface: "250 m²",
    prix: "600 000 FCFA / mois",
  },
  {
    id: 3,
    image: "/i.jpg",
    titre: "Studio à Bellevue",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
    localisation: "Bellevue",
    surface: "35 m²",
    prix: "150 000 FCFA / mois",
  },
];

export const getLogementById = (id: number): Logement | undefined => {
  return logements.find((logement) => logement.id === id);
};
