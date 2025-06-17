"use client";

import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    logement: "",
    dateArrivee: "",
    dateDepart: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);

    // Tu peux intégrer ici EmailJS, MailJS ou autre service
    // ex: emailjs.sendForm(...) ou un fetch vers une API backend

    alert("Votre demande a été envoyée avec succès !");
  };

  return (
    <main className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Réserver un logement</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Nom complet"
          value={form.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Numéro de téléphone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="logement"
          value={form.logement}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Choisir un type de logement</option>
          <option value="studio">Studio</option>
          <option value="appartement">Appartement</option>
          <option value="villa">Villa</option>
          <option value="colocation">Colocation</option>
        </select>

        <div className="flex space-x-4">
          <input
            type="date"
            name="dateArrivee"
            value={form.dateArrivee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="dateDepart"
            value={form.dateDepart}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Informations supplémentaires (facultatif)"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
        />

        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Envoyer la demande
        </button>
      </form>
    </main>
  );
}
