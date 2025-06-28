'use client'

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, AlertCircle,} from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  // Animation pour les messages de succès/erreur
  const [showAlert, setShowAlert] = useState(false);

  // Focus sur le champ nom au chargement et après envoi réussi
  useEffect(() => {
    if (!loading && !error && sent) {
      nameInputRef.current?.focus();
    }
  }, [loading, error, sent]);

  // Gestion des animations d'alerte
  useEffect(() => {
    if (sent || error) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        if (sent) {
          setSent(false);
          setShowAlert(false);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sent, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Supprime les erreurs quand on modifie le formulaire
    if (error) setError(null);
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  };

  // Validation améliorée
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!form.name.trim()) {
      errors.name = "Le nom est requis";
    } else if (form.name.trim().length < 2) {
      errors.name = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (!form.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Veuillez entrer une adresse email valide";
    }
    
    if (!form.subject.trim()) {
      errors.subject = "L'objet est requis";
    } else if (form.subject.trim().length < 3) {
      errors.subject = "L'objet doit contenir au moins 3 caractères";
    }
    
    if (!form.message.trim()) {
      errors.message = "Le message est requis";
    } else if (form.message.trim().length < 10) {
      errors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      // Simulation d'envoi (remplacez par votre vraie API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Message envoyé avec succès :", result);
        setSent(true);
        formRef.current?.reset();
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi du message :", err);
      setError("Impossible de contacter le serveur. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ 
    id, 
    name, 
    type = "text", 
    placeholder, 
   isTextarea = false,
    rows = 5 
  }: {
    id: string;
    name: string;
    type?: string;
    placeholder: string
    isTextarea?: boolean;
    rows?: number;
  }) => {
    const hasError = fieldErrors[name];
    
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 flex items-center gap-2">
          
          {placeholder}
        </label>
        <div className="relative">
          {isTextarea ? (
            <textarea
              id={id}
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              className={`w-full p-3 pl-4 border-2 rounded-lg bg-white transition-all duration-200 resize-none focus:outline-none ${
                hasError 
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              rows={rows}
              required
              value={form[name as keyof typeof form]}
              disabled={loading}
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              ref={name === 'name' ? nameInputRef : undefined}
              placeholder={placeholder}
              onChange={handleChange}
              className={`w-full p-3 pl-4 border-2 rounded-lg bg-white transition-all duration-200 focus:outline-none ${
                hasError 
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              required
              value={form[name as keyof typeof form]}
              disabled={loading}
            />
          )}
        </div>
        {hasError && (
          <p className="text-sm text-red-600 flex items-center gap-1 animate-pulse">
            <AlertCircle size={14} />
            {hasError}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Contactez-nous
          </h1>
          <p className="text-gray-600 text-lg">
            Nous sommes là pour vous aider. Envoyez-nous un message !
          </p>
        </div>

        {/* Alerts */}
        {(sent || error) && showAlert && (
          <div className={`mb-6 p-4 rounded-lg border-l-4 transition-all duration-500 transform ${
            sent 
              ? 'bg-green-50 border-green-400 text-green-700' 
              : 'bg-red-50 border-red-400 text-red-700'
          } ${showAlert ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
            <div className="flex items-center gap-3">
              {sent ? (
                <CheckCircle className="text-green-600" size={20} />
              ) : (
                <AlertCircle className="text-red-600" size={20} />
              )}
              <div>
                <p className="font-medium">
                  {sent ? "Message envoyé avec succès !" : "Erreur"}
                </p>
                {error && <p className="text-sm mt-1">{error}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="name"
                name="name"
                placeholder="Votre nom"
             
              />
              
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Votre email"
             
              />
            </div>

            <InputField
              id="subject"
              name="subject"
              placeholder="Objet du message"
            
            />

            <InputField
              id="message"
              name="message"
              placeholder="Votre message"
            
              isTextarea={true}
              rows={6}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                loading 
                  ? "bg-gray-400 cursor-not-allowed transform scale-95" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 active:scale-95"
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      </div>
    </div>
  );
}