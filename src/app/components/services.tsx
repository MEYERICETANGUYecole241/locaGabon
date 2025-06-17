"use client";

import React from "react";
import { Home, ShieldCheck, KeyRound, Users } from "lucide-react";

const services = [
  {
    icon: <Home size={32} />,
    titre: "Location de logements",
    description:
      "Trouvez une large gamme de maisons, appartements, studios ou villas disponibles à la location, partout au Gabon.",
  },
  {
    icon: <ShieldCheck size={32} />,
    titre: "Sécurité et fiabilité",
    description:
      "Nos logements sont certifiés et inspectés pour garantir votre sécurité et votre confort, avec un service client dédié.",
  },
  {
    icon: <KeyRound size={32} />,
    titre: "Gestion de biens",
    description:
      "Confiez-nous la gestion locative de votre bien immobilier : mise en location, gestion des loyers et assistance complète.",
  },
  {
    icon: <Users size={32} />,
    titre: "Accompagnement personnalisé",
    description:
      "Nos experts vous assistent dans la recherche d’un logement adapté à vos besoins et à votre budget.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Nos services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-blue-600">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.titre}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
