"use client";

import React, { useState } from "react";
import { logements } from "@/lib/logements";
import Image from "next/image";


export default function RechercheLogementPage() {
  const [type, setType] = useState("");
  const [etat, setEtat] = useState("");
  const [search, setSearch] = useState("");


  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleEtatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEtat(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  const filteredLogements = logements.filter((logement) => {
    const matchType = type ? logement.type === type : true;
    const matchEtat = etat ? logement.etat === etat : true;
    const matchSearch =
      logement.titre.toLowerCase().includes(search.toLowerCase()) ||
      logement.localisation.toLowerCase().includes(search.toLowerCase());
    return matchType && matchEtat && matchSearch;
  });

  const getEtatBadgeStyle = (etat: string) => {
    switch (etat) {
      case "disponible":
        return "bg-green-100 text-green-700";
      case "pris":
        return "bg-red-100 text-red-700";
      case "en négociation":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Recherche de logements</h1>

      {/* Filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Rechercher par titre ou localisation"
          value={search}
          onChange={handleSearchChange}
          className="flex-1 p-2 border rounded bg-white"
        />
        <select value={type} onChange={handleTypeChange} className="p-2 border rounded bg-white">
          <option value="">Tous les types</option>
          <option value="studio">Studio</option>
          <option value="appartement">Appartement</option>
          <option value="villa">Villa</option>
        </select>
        <select value={etat} onChange={handleEtatChange} className="p-2 border rounded bg-white">
          <option value="">Tous les états</option>
          <option value="disponible">Disponible</option>
          <option value="pris">Déjà pris</option>
          <option value="en négociation">En négociation</option>
        </select>
      </div>

      {/* Résultats */}
      {filteredLogements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLogements.map((logement, index) => {
            const numeroLogement = index + 1;
            return (
              <div key={logement.id} className="border rounded-lg shadow-md p-4 bg-white">
                <div className="relative w-full h-60 rounded overflow-hidden">
  <Image
    src={logement.image}
    alt={logement.titre}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 400px"
  />
</div>

                <div className="flex justify-between items-center mt-2">
                  <h2 className="text-xl font-semibold">
                    #{numeroLogement} – {logement.titre}
                  </h2>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${getEtatBadgeStyle(
                      logement.etat
                    )}`}
                  >
                    {logement.etat}
                  </span>
                </div>
                <p>{logement.description}</p>
                <p><strong>Localisation:</strong> {logement.localisation}</p>
                <p><strong>Surface:</strong> {logement.surface}</p>
                <p className="text-blue-700 font-bold">{logement.prix}</p>

                {/* Bouton Réserver */}
               <button
  onClick={() => {
    const message = `Bonjour, je souhaite réserver le logement numéro ${numeroLogement}.`;
    const phoneNumber = "241065510946"; // Remplace avec ton numéro WhatsApp (indicatif + numéro sans le "+")

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
>
  Réserver ce logement
</button>

              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Aucun logement ne correspond à votre recherche.</p>
      )}
    </div>
  );
}
