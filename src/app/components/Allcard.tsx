import ProductCard from "./ProductCard";

export default function Allcards() {
  const logements = [
    {
      image: "/akanda.jpg",
      titre: "Maison à Akanda",
      description:
        "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs. Eau en permanence.",
    },
    {
      image: "/logements-gabon.jpg",
      titre: "Villa à Owendo",
      description:
        "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
    },
    {
      image: "/images.jpeg",
      titre: "Studio à Bellevue",
      description:
        "Studio meublé à louer, idéal pour une personne seule ou un couple.",
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
          />
        ))}
      </div>
    </div>
  );
}
