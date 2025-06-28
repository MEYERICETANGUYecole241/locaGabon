"use client";

import Image from "next/image";
import { ArrowLeft, MapPin, Square, Euro } from "lucide-react";

type Props = {
  image: string;
  titre: string;
  description: string;
  localisation: string;
  surface: string;
  prix: string;
  onRetour: () => void;
};

export default function Details({
  image,
  titre,
  description,
  localisation,
  surface,
  prix,
  onRetour,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full mx-auto transition-all duration-300 hover:shadow-2xl">
      {/* Header avec bouton retour */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onRetour}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 group"
          aria-label="Retour à la liste"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm font-medium">Retour</span>
        </button>
      </div>

      {/* Image avec overlay gradient */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={titre}
          width={600}
          height={300}
          className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Titre */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
        {titre}
      </h2>

      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Informations détaillées */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Localisation
            </span>
            <p className="text-gray-900 font-medium">{localisation}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Square className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Surface
            </span>
            <p className="text-gray-900 font-medium">{surface}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <Euro className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
              Prix
            </span>
            <p className="text-xl font-bold text-blue-700">{prix}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRetour}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Voir d&apos;autres biens
        </button>
      </div>
    </div>
  );
}