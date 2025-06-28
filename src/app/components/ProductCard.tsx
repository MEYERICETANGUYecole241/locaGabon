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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 max-w-sm w-full overflow-hidden group hover:scale-[1.02] transform border border-blue-100/50 hover:border-blue-200">
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
          {/* Image Container with Loading State */}
          <div className="relative h-[250px] w-full overflow-hidden rounded-t-xl">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
            
            {imageError ? (
              <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-500">
                <svg className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Image non disponible</span>
              </div>
            ) : (
              <Image
                src={image}
                alt={titre}
                width={400}
                height={250}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            )}
            
            {/* Prix Badge avec motif gabonais */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg border-2 border-yellow-400/30">
              {prix}
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
            
            {/* Location Badge avec style gabonais */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-700/90 to-blue-700/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center border border-yellow-400/30">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {localisation}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h1 className="font-bold text-lg text-gray-900 line-clamp-2">{titre}</h1>
            </div>
            
            {/* Surface Info */}
            <div className="flex items-center text-gray-600 text-sm mb-3">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {surface}
            </div>
            
            <p className="text-gray-600 text-sm text-justify line-clamp-3 leading-relaxed mb-4">
              {description}
            </p>
            
            {/* Action Button avec style gabonais */}
            <button
              onClick={() => setShowDetails(true)}
              className="w-full bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 hover:from-blue-700 hover:via-green-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg border border-yellow-400/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Voir les détails
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {/* Effet de vague */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}