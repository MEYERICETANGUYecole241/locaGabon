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
    alert("Votre demande a été envoyée avec succès !");
  };

  return (
    <div className="w-full md:w-1/2 p-6 bg-blue-100">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Réserver un logement</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input type="text " name="fullName" placeholder="Nom complet " value={form.fullName} onChange={handleChange} className="w-full p-2 border rounded bg-white" required />
        <input type="email" name="email" placeholder="Adresse email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded bg-white" required />
        <input type="tel" name="phone" placeholder="Numéro de téléphone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded bg-white" required />
        <select name="logement" value={form.logement} onChange={handleChange} className="w-full p-2 border rounded bg-white" required>
          <option value="bg-white">Choisir un logement</option>
          <option value="studio">Studio</option>
          <option value="appartement">Appartement</option>
          <option value="villa">Villa</option>
        </select>
        <div className="flex gap-4 bg-white">
          <input type="date" name="dateArrivee" value={form.dateArrivee} onChange={handleChange} className="w-full p-2 border rounded " required />
          <input type="date" name="dateDepart" value={form.dateDepart} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <textarea name="message" placeholder="Informations supplémentaires" value={form.message} onChange={handleChange} className="w-full p-2 border rounded h-24 bg-white" />
        <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600">
          Réserver
        </button>
      </form>
    </div>
  );
}
