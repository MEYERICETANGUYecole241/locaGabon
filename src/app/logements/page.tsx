// app/services/page.tsx
import React from "react";
import { logements } from "@/lib/logements";

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Nos logements disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logements.map((logement) => (
          <div key={logement.id} className="border rounded-lg shadow-md p-4">
            <img src={logement.image} alt={logement.titre} className="w-full h-60 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{logement.titre}</h2>
            <p>{logement.description}</p>
            <p><strong>Localisation:</strong> {logement.localisation}</p>
            <p><strong>Surface:</strong> {logement.surface}</p>
            <p className="text-blue-700 font-bold">{logement.prix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

