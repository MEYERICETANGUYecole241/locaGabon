// Types
export type Logement = {
  id: number;
  image: string;
  titre: string;
  description: string;
  localisation: string;
  surface: string;
  prix: string;
  type: string;
  etat: string; 
};

// Données des logements
export const logements: Logement[] = [
  {
    id: 1,
    image: "/gabonhome-.jpg",
    titre: "Maison à Akanda",
    type: "appartement",
    description: "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs.",
    localisation: "Akanda",
    surface: "120 m²",
    prix: "300 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 2,
    image: "/logements-gabon.jpg",
    titre: "Villa à Owendo",
    type: "villa",
    description: "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
    localisation: "Owendo",
    surface: "250 m²",
    prix: "600 000 FCFA / mois",
    etat: "pris"
  },
  {
    id: 3,
    image: "/i.jpg",
    titre: "Studio à Bellevue",
    type: "studio",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
    localisation: "Bellevue",
    surface: "35 m²",
    prix: "150 000 FCFA / mois",
    etat: "en négociation"
  },
  {
    id: 4,
    image: "/image.png",
    titre: "Appartement à Libreville Centre",
    type: "appartement",
    description: "Appartement 2 chambres au cœur de Libreville, proche des commerces.",
    localisation: "Libreville Centre",
    surface: "85 m²",
    prix: "250 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 5,
    image: "/image2.png",
    titre: "Villa de luxe à Nzeng-Ayong",
    type: "villa",
    description: "Villa haut de gamme avec 5 chambres, piscine, et vue panoramique.",
    localisation: "Nzeng-Ayong",
    surface: "350 m²",
    prix: "800 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 6,
    image: "/image3.png",
    titre: "Studio moderne à PK5",
    type: "studio",
    description: "Studio récemment rénové avec kitchenette équipée et balcon.",
    localisation: "PK5",
    surface: "40 m²",
    prix: "180 000 FCFA / mois",
    etat: "en négociation"
  },
  {
    id: 7,
    image: "/image copy 8.png",
    titre: "Appartement familial à Lalala",
    type: "appartement",
    description: "Appartement 4 chambres avec terrasse, idéal pour familles nombreuses.",
    localisation: "Lalala",
    surface: "140 m²",
    prix: "350 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 8,
    image: "/image copy 9.png",
    titre: "Villa jumelée à Avorbam",
    type: "villa",
    description: "Villa jumelée avec jardin, cuisine américaine et salle de sport.",
    localisation: "Avorbam",
    surface: "200 m²",
    prix: "500 000 FCFA / mois",
    etat: "pris"
  },
  {
    id: 9,
    image: "/image copy 10.png",
    titre: "Studio cosy à Louis",
    type: "studio",
    description: "Petit studio avec salle de bain privée et espace bureau.",
    localisation: "Louis",
    surface: "30 m²",
    prix: "120 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 10,
    image: "/image copy 5.png",
    titre: "Penthouse à Batterie IV",
    type: "appartement",
    description: "Penthouse avec vue mer, ascenseur privé, et matériaux de luxe.",
    localisation: "Batterie IV",
    surface: "300 m²",
    prix: "1 200 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 11,
    image: "/image copy 6.png",
    titre: "Maison traditionnelle à Angondjé",
    type: "maison",
    description: "Maison en matériaux durables, idéale pour location de longue durée.",
    localisation: "Angondjé",
    surface: "100 m²",
    prix: "280 000 FCFA / mois",
    etat: "en négociation"
  },
  {
    id: 12,
    image: "/image copy 7.png",
    titre: "Studio étudiant à Campus UOB",
    type: "studio",
    description: "Studio fonctionnel proche de l’université, avec wifi et sécurité.",
    localisation: "Campus UOB",
    surface: "25 m²",
    prix: "100 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 13,
    image: "/image copy 3.png",
    titre: "Appartement rénové à Glass",
    type: "appartement",
    description: "Appartement moderne avec 3 chambres, cuisine ouverte et balcon.",
    localisation: "Glass",
    surface: "110 m²",
    prix: "270 000 FCFA / mois",
    etat: "pris"
  },
  {
    id: 14,
    image: "/image copy 4.png",
    titre: "Maison coloniale à Baraka",
    type: "maison",
    description: "Ancienne maison coloniale avec charme d’époque et grand jardin.",
    localisation: "Baraka",
    surface: "180 m²",
    prix: "400 000 FCFA / mois",
    etat: "disponible"
  },
  {
    id: 15,
    image: "/image copy 2.png",
    titre: "Studio terrasse à Likouala",
    type: "studio",
    description: "Studio avec grande terrasse, lumineux et bien aéré.",
    localisation: "Likouala",
    surface: "38 m²",
    prix: "160 000 FCFA / mois",
    etat: "en négociation"
  }
];
