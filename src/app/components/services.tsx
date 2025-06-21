"use client";

import React from "react";
import { Home, ShieldCheck, KeyRound, Users } from "lucide-react";

const services = [
  {
    icon: <Home size={36} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    titre: "Location de logements",
    description:
      "Trouvez une large gamme de maisons, appartements, studios ou villas disponibles à la location, partout au Gabon.",
  },
  {
    icon: <ShieldCheck size={36} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    titre: "Sécurité et fiabilité",
    description:
      "Nos logements sont certifiés et inspectés pour garantir votre sécurité et votre confort, avec un service client dédié.",
  },
  {
    icon: <KeyRound size={36} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    titre: "Gestion de biens",
    description:
      "Confiez-nous la gestion locative de votre bien immobilier : mise en location, gestion des loyers et assistance complète.",
  },
  {
    icon: <Users size={36} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    titre: "Accompagnement personnalisé",
    description:
      "Nos experts vous assistent dans la recherche d’un logement adapté à vos besoins et à votre budget.",
  },
];

export default function Services() {
  return (
    <section
      className="bg-blue-50 py-16 px-6 md:px-12"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Nos services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            role="region"
            aria-labelledby={`service-title-${index}`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3
              id={`service-title-${index}`}
              className="text-xl font-semibold mb-2 text-gray-800"
            >
              {service.titre}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
