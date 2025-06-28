"use client";

import React, { useState, useEffect, useRef } from "react";
import { Home, ShieldCheck, KeyRound, Users, ArrowRight, CheckCircle, Star, Clock } from "lucide-react";

const services = [
  {
    icon: <Home size={36} />,
    titre: "Location de logements",
    description: "Trouvez une large gamme de maisons, appartements, studios ou villas disponibles à la location, partout au Gabon.",
    features: ["Plus de 500 logements", "Recherche géolocalisée", "Visite virtuelle", "Prix transparents"],
    color: "from-blue-500 to-blue-600",
    delay: "0s"
  },
  {
    icon: <ShieldCheck size={36} />,
    titre: "Sécurité et fiabilité",
    description: "Nos logements sont certifiés et inspectés pour garantir votre sécurité et votre confort, avec un service client dédié.",
    features: ["Vérification des propriétés", "Assurance incluse", "Support 24/7", "Garanties légales"],
    color: "from-green-500 to-green-600",
    delay: "0.1s"
  },
  {
    icon: <KeyRound size={36} />,
    titre: "Gestion de biens",
    description: "Confiez-nous la gestion locative de votre bien immobilier : mise en location, gestion des loyers et assistance complète.",
    features: ["Gestion complète", "Collecte des loyers", "Maintenance incluse", "Reporting mensuel"],
    color: "from-purple-500 to-purple-600",
    delay: "0.2s"
  },
  {
    icon: <Users size={36} />,
    titre: "Accompagnement personnalisé",
    description: "Nos experts vous assistent dans la recherche d'un logement adapté à vos besoins et à votre budget.",
    features: ["Conseiller dédié", "Aide aux démarches", "Négociation de prix", "Suivi post-location"],
    color: "from-orange-500 to-orange-600",
    delay: "0.3s"
  },
];

const testimonials = [
  {
    name: "Marie Ngoma",
    role: "Locataire",
    comment: "Service exceptionnel ! J'ai trouvé mon appartement en moins d'une semaine.",
    rating: 5,
    image: "M"
  },
  {
    name: "Paul Obame",
    role: "Propriétaire",
    comment: "LocaGabon gère parfaitement mes biens. Je recommande vivement !",
    rating: 5,
    image: "P"
  },
  {
    name: "Sarah Mintsa",
    role: "Locataire",
    comment: "Interface moderne et équipe très professionnelle. Parfait !",
    rating: 5,
    image: "S"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  // Auto-rotation des services mis en avant
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-6 md:px-12 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
            >
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes pour tous vos besoins immobiliers au Gabon
            </p>
          </div>

          {/* Service Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Service Rapide</h3>
              <p className="text-gray-600 text-sm">Réponse en moins de 2h</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Qualité Garantie</h3>
              <p className="text-gray-600 text-sm">98% de satisfaction client</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Sans Engagement</h3>
              <p className="text-gray-600 text-sm">Consultation gratuite</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg p-8 text-center transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                animationDelay: service.delay,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="region"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                {activeService === index && (
                  <div className="absolute -inset-2 border-2 border-blue-400 rounded-2xl animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <h3
                id={`service-title-${index}`}
                className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors"
              >
                {service.titre}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              {/* Features List */}
              <div className={`space-y-2 mb-6 transform transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-500">
                    <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`group/btn inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-70'
              }`}>
                En savoir plus
                <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Ce que disent nos clients
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm italic">&#34;{testimonial.comment}&#34;</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="bg-gradient-to-r from-blue-500 to-indigo-700 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Rejoignez des centaines de clients satisfaits et trouvez votre logement idéal dès aujourd&#39;hui.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}