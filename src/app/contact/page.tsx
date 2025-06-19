
'use client'

import { useState, useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const result = await res.json(); // Si tu retournes un texte ou un JSON
      console.log("Message envoyé avec succès :", result);
      alert("✅ Votre message a été envoyé avec succès !");
      formRef.current?.reset();
      setForm({ name: "", email: "", subject: "", message: "" });
      setSent(true);
    } else {
      alert("❌ Une erreur s’est produite lors de l’envoi du message.");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10">
      <div className="w-full max-w-xl p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>

        {sent && (
          <p className="text-green-600 mb-4">✅ Message envoyé avec succès !</p>
        )}

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
          <input
            name="name"
            placeholder="Votre nom"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Votre email"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            name="subject"
            placeholder="Objet du message"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
 