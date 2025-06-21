'use client'

import { useState, useRef, useEffect } from "react";

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

  // Focus sur le champ nom au chargement et après envoi réussi
  useEffect(() => {
    if (!loading && !error && sent) {
      nameInputRef.current?.focus();
    }
  }, [loading, error, sent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null); // Supprime l'erreur quand on modifie le formulaire
  };

  // Validation simple de l'email
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
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
        setError("Une erreur s’est produite lors de l’envoi du message.");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10 px-4">
      <div className="w-full max-w-xl p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h1>

        {sent && !error && (
          <p
            className="text-green-700 bg-green-100 border border-green-400 p-3 rounded mb-6 text-center"
            role="alert"
          >
            ✅ Message envoyé avec succès !
          </p>
        )}

        {error && (
          <p
            className="text-red-700 bg-red-100 border border-red-400 p-3 rounded mb-6 text-center"
            role="alert"
          >
            ❌ {error}
          </p>
        )}

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Votre nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              ref={nameInputRef}
              placeholder="Votre nom"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={form.name}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Votre email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Votre email"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={form.email}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-semibold">
              Objet du message
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Objet du message"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={form.subject}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
              value={form.message}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded text-white transition-colors ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-800 hover:bg-blue-600"
            }`}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}

