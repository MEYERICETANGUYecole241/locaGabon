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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    alert("Votre demande a été envoyée avec succès !");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10">
      <div className="w-full max-w-xl p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-900 text-center">Réserver un logement</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Nom complet"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          />
          <select
            name="logement"
            value={form.logement}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          >
            <option value="">Choisir un logement</option>
            <option value="studio">Studio</option>
            <option value="appartement">Appartement</option>
            <option value="villa">Villa</option>
          </select>
          <div className="flex gap-4">
            <input
              type="date"
              name="dateArrivee"
              value={form.dateArrivee}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              required
            />
            <input
              type="date"
              name="dateDepart"
              value={form.dateDepart}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Informations supplémentaires"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24 bg-white"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
          >
            Réserver
          </button>
        </form>
      </div>
    </div>
  );
}
