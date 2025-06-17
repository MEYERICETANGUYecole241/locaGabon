"use client";



import Image from "next/image";
import { useState } from "react";
import Details from "./Details";

type Props = {
  image: string;
  titre: string;
  description: string;
  localisation: string;
  surface: string;
  prix: string;
};

export default function ProductCard({
  image,
  titre,
  description,
  localisation,
  surface,
  prix,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
      {showDetails ? (
        <Details
          image={image}
          titre={titre}
          description={description}
          localisation={localisation}
          surface={surface}
          prix={prix}
          onRetour={() => setShowDetails(false)}
        />
      ) : (
        <>
          <Image
            src={image}
            alt={titre}
            width={400}
            height={250}
            className="rounded-lg mb-2 mx-auto h-[250px] object-cover w-full"
          />
          <h1 className="text-center font-semibold mb-2 text-lg">{titre}</h1>
          <p className="text-gray-600 text-justify">{description}</p>
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowDetails(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Détails
            </button>
          </div>
        </>
      )}
    </div>
  );
}
