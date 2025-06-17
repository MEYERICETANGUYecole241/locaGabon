"use client";

import Image from "next/image";

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
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <Image
        src={image}
        alt={titre}
        width={600}
        height={300}
        className="rounded-lg mb-4 mx-auto object-cover h-[250px] w-full"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">{titre}</h2>
      <p className="text-gray-700 mb-2"><strong>Description :</strong> {description}</p>
      <p className="text-gray-700 mb-1"><strong>Localisation :</strong> {localisation}</p>
      <p className="text-gray-700 mb-1"><strong>Surface :</strong> {surface}</p>
      <p className="text-gray-700 mb-4"><strong>Prix :</strong> {prix}</p>

      <button
        onClick={onRetour}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
      >
        Retour
      </button>
    </div>
  );
}
