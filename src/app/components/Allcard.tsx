"use client";

import ProductCard from "./ProductCard";
import { useState, useMemo } from "react";

// 💡 Déclarer les logements en dehors du composant
const logements = [
  {
    id: 1,
    image: "/gabonhome-.jpg",
    titre: "Maison à Akanda",
    description: "3 chambres, salon, cuisine, 3 douches dont une pour visiteurs.",
    localisation: "Akanda",
    surface: "120 m²",
    prix: "300 000 FCFA / mois",
    priceNumeric: 300000,
  },
  {
    id: 2,
    image: "/logements-gabon.jpg",
    titre: "Villa à Owendo",
    description: "Villa moderne avec 4 chambres, piscine, jardin et parking sécurisé.",
    localisation: "Owendo",
    surface: "250 m²",
    prix: "600 000 FCFA / mois",
    priceNumeric: 600000,
  },
  {
    id: 3,
    image: "/u.jpg",
    titre: "Studio à Bellevue",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
    localisation: "Bellevue",
    surface: "35 m²",
    prix: "150 000 FCFA / mois",
    priceNumeric: 150000,
  },
  {
    id: 4,
    image: "/imageZ.png",
    titre: "Studio à Bellevue",
    description: "Studio meublé à louer, idéal pour une personne seule ou un couple.",
    localisation: "Bellevue",
    surface: "35 m²",
    prix: "150 000 FCFA / mois",
    priceNumeric: 150000,
  },
];

export default function Allcards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const locations = [...new Set(logements.map((l) => l.localisation))];

  const filteredAndSortedLogements = useMemo(() => {
    const filtered = logements.filter((logement) => {
      const matchesSearch =
        searchTerm === "" ||
        logement.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        logement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        logement.localisation.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = locationFilter === "" || logement.localisation === locationFilter;

      const matchesPrice =
        priceFilter === "" ||
        (priceFilter === "low" && logement.priceNumeric < 250000) ||
        (priceFilter === "medium" && logement.priceNumeric >= 250000 && logement.priceNumeric < 500000) ||
        (priceFilter === "high" && logement.priceNumeric >= 500000);

      return matchesSearch && matchesLocation && matchesPrice;
    });

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortBy === "location") {
      filtered.sort((a, b) => a.localisation.localeCompare(b.localisation));
    }

    return filtered;
  }, [searchTerm, priceFilter, locationFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setPriceFilter("");
    setLocationFilter("");
    setSortBy("default");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50/30 to-indigo-100 min-h-screen relative overflow-hidden">
      {/* Motifs géométriques gabonais en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-600 rotate-45"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border border-blue-600 rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-16 h-16 bg-yellow-400/30 rotate-45"></div>
        <div className="absolute bottom-20 right-40 w-40 h-40 border border-green-600" 
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>
      <div className="bg-gradient-to-r from-blue-100 via-green-50 to-blue-100 shadow-sm border-b border-blue-200/50 relative">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Logements disponibles</h1>
            <p className="text-gray-600">Trouvez votre logement idéal parmi nos {logements.length} offres récentes</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un logement..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Location */}
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Toutes les villes</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              {/* Price */}
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tous les prix</option>
                <option value="low">Moins de 250k FCFA</option>
                <option value="medium">250k - 500k FCFA</option>
                <option value="high">Plus de 500k FCFA</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Trier par</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="location">Localisation</option>
              </select>
            </div>

            {(searchTerm || priceFilter || locationFilter || sortBy !== "default") && (
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {filteredAndSortedLogements.length} résultat
                  {filteredAndSortedLogements.length > 1 ? "s" : ""} trouvé
                  {filteredAndSortedLogements.length > 1 ? "s" : ""}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Effacer les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredAndSortedLogements.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun logement trouvé</h3>
            <p className="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Voir tous les logements
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedLogements.map((logement) => (
              <ProductCard key={logement.id} {...logement} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
