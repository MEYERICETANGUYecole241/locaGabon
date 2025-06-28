"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ChevronLeft, ChevronRight, MapPin, Users, Star, Award } from "lucide-react";

const images = [
  {
    src: "/gabonhome-.jpg",
    alt: "Maison moderne au Gabon",
    caption: "Maisons modernes et confortables"
  },
  {
    src: "/u.jpg",
    alt: "Appartement élégant",
    caption: "Appartements élégants en centre-ville"
  },
  {
    src: "/images.jpeg",
    alt: "Villa de luxe",
    caption: "Villas de luxe avec piscine"
  },
  {
    src: "/logements-gabon.jpg",
    alt: "Résidence sécurisée",
    caption: "Résidences sécurisées et modernes"
  },
  {
    src: "/téléchargement.jpeg",
    alt: "Studio meublé",
    caption: "Studios meublés pour jeunes professionnels"
  },
];

const stats = [
  { icon: <Users size={24} />, value: "500+", label: "Clients satisfaits" },
  { icon: <MapPin size={24} />, value: "15", label: "Villes couvertes" },
  { icon: <Star size={24} />, value: "4.8/5", label: "Note moyenne" },
  { icon: <Award size={24} />, value: "3 ans", label: "D'expérience" },
];

export default function A_propos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Défilement automatique du slider
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section avec animations gabonaises */}
<section className="relative px-4 py-16 bg-gradient-to-br from-blue-300 via-blue-400 via-blue-900 to-blue-500 text-center text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.1&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;2&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] bg-repeat'></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              À propos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse">
                LocaGabon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Votre partenaire de confiance pour la location de logements au Gabon.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-yellow-400 flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float-delayed"></div>
      </section>

      {/* Section principale avec slider amélioré */}
      <section ref={sectionRef} className="px-4 py-16 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          
          {/* Slider avancé */}
          <div className={`w-full lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="relative group">
              {/* Image principale */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                )}
                
                <Image
                  key={images[currentIndex].src}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold drop-shadow-lg">
                    {images[currentIndex].caption}
                  </p>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Play/Pause button */}
                <button
                  onClick={togglePlayPause}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label={isPlaying ? "Mettre en pause" : "Reprendre"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-6 gap-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`relative h-3 w-3 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Voir l'image ${i + 1}`}
                  >
                    {i === currentIndex && (
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              {isPlaying && (
                <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width: `${((Date.now() % 4000) / 4000) * 100}%`,
                      animation: 'progress 4s linear infinite'
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* Contenu textuel amélioré */}
          <div className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="space-y-6">
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p>
                    <strong className="text-blue-700 text-xl">LocaGabon</strong> révolutionne le marché
                    immobilier gabonais en offrant une plateforme moderne et intuitive qui connecte
                    propriétaires et locataires en toute simplicité.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p>
                    Notre mission est de démocratiser l&lsquo;accès au logement en proposant une interface
                    claire, des outils de recherche avancés et un accompagnement personnalisé pour
                    chaque utilisateur.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <p className="italic text-blue-800 font-medium">
                    &ldquo;Accessibilité, fiabilité et transparence sont les piliers de notre engagement
                    envers nos utilisateurs.&ldquo;
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3">
                {[
                  "Interface moderne et intuitive",
                  "Recherche avancée avec filtres",
                  "Vérification des propriétés",
                  "Support client 24/7",
                  "Processus sécurisé"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA amélioré */}
              <div className="pt-6">
                <Link
                  href="/logements"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Explorer les logements
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}