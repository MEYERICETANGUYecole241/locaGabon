"use client";

import { useState } from "react";
import { Home, MapPin, Square, DollarSign, FileText, Camera, Send, Sparkles } from "lucide-react";

export default function FormulaireBailleur() {
  const [form, setForm] = useState({
    titre: "",
    description: "",
    localisation: "",
    surface: "",
    prix: "",
    type: "",
  });

  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    // Vérification des champs requis
    if (!form.titre || !form.type || !form.description || !form.localisation || !form.surface || !form.prix) {
      setStatus("❌ Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    // Simulation d'un délai pour l'animation
    await new Promise(resolve => setTimeout(resolve, 1000));

    const message = `
📢 *Nouvelle annonce de location immobilière :*

🏷️ *Titre* : ${form.titre}
🏠 *Type* : ${form.type}
📝 *Description* : ${form.description}
📍 *Localisation* : ${form.localisation}
📐 *Surface* : ${form.surface}
💵 *Prix* : ${form.prix}

📸 Une image est disponible dans le formulaire.

#LocaGabon
    `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "241065510946";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setStatus(
      "✅ Annonce envoyée par WhatsApp. Merci de joindre manuellement l'image dans la conversation."
    );

    setForm({
      titre: "",
      description: "",
      localisation: "",
      surface: "",
      prix: "",
      type: "",
    });
    setImageBase64(null);
    setIsSubmitting(false);
  };

  const inputFields = [
    { name: "titre", label: "Titre de l'annonce", icon: Home, type: "text", placeholder: "Villa moderne avec piscine..." },
    { name: "type", label: "Type de bien", icon: Sparkles, type: "text", placeholder: "Villa, Appartement, Studio..." },
    { name: "localisation", label: "Localisation", icon: MapPin, type: "text", placeholder: "Libreville, Owendo..." },
    { name: "surface", label: "Surface", icon: Square, type: "text", placeholder: "120 m²" },
    { name: "prix", label: "Prix", icon: DollarSign, type: "text", placeholder: "300 000 FCFA / mois" },
  ];

  return (
    <div className="min-h-screen bg-blue-100 from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header avec animation */}
        <div className="text-center mb-8 animate-fade-in text-blue-700">
         <div className="inline-flex items-center justify-center mb-4 animate-pulse">
  <Home className="w-10 h-10 text-indigo-600 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
         </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-blue-700 mb-2">
            LocaGabon
          </h1>
          <p className="text-gray-600 text-lg">Publiez votre annonce immobilière en un clic</p>
        </div>

        {/* Formulaire principal */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 transition-all duration-300 hover:shadow-3xl">
          <div className="space-y-6">
            {/* Champs de saisie */}
            {inputFields.map((field, index) => {
              const Icon = field.icon;
              return (
                <div key={field.name} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-indigo-500" />
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}

            {/* Description */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-500" />
                Description détaillée
              </label>
              <div className="relative">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Décrivez votre bien : équipements, proximité, avantages..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:border-gray-300 resize-none"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Upload d'image */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-indigo-500" />
                Photo du bien (optionnelle)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-400 transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50"
                >
                  <Camera className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Cliquez pour ajouter une photo</span>
                </label>
              </div>
            </div>

            {/* Aperçu de l'image */}
            {imageBase64 && (
              <div className="relative rounded-xl overflow-hidden shadow-lg animate-fade-in">
                <img
                  src={imageBase64}
                  alt="Aperçu"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-medium">
                  Aperçu de votre photo
                </div>
              </div>
            )}
           
            {/* Bouton de soumission */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Publier sur WhatsApp
                </>
              )}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Message de statut */}
            {status && (
              <div className={`p-4 border rounded-xl animate-fade-in ${
                status.includes('❌') 
                  ? 'bg-red-50 border-red-200 text-red-700' 
                  : 'bg-green-50 border-green-200 text-green-700'
              }`}>
                <p className="font-medium text-center">{status}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">Propulsé par LocaGabon - Votre partenaire immobilier</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}