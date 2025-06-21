"use client";

import { useState } from "react";
import Image from "next/image";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Pour l'instant on n'envoie pas l'image (pas d'hébergement),
    // tu peux l'envoyer plus tard via un service externe

    const payload = {
      ...form,
      // imageBase64, // si tu veux envoyer la base64 à l'API (pas recommandé)
    };

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Email envoyé avec succès !");
        setForm({
          titre: "",
          description: "",
          localisation: "",
          surface: "",
          prix: "",
          type: "",
        });
        setImageBase64(null);
      } else {
        setStatus("Erreur : " + data.error);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      setStatus("Erreur inattendue lors de l'envoi de l'email.");
    }
    // Ajout d'un bloc catch pour gérer les erreurs inattendues
   
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Envoyer une annonce par email</h2>

      <label className="block mb-2">
        Titre :
        <input
          type="text"
          name="titre"
          value={form.titre}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Type :
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Description :
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Localisation :
        <input
          type="text"
          name="localisation"
          value={form.localisation}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Surface :
        <input
          type="text"
          name="surface"
          value={form.surface}
          onChange={handleChange}
          required
          placeholder="ex: 120 m²"
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Prix :
        <input
          type="text"
          name="prix"
          value={form.prix}
          onChange={handleChange}
          required
          placeholder="ex: 300 000 FCFA / mois"
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-4">
        Image de l&apos;habitation :
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
      </label>

      {imageBase64 && (
        <div className="relative w-full h-48 mb-4">
  <Image
    src={imageBase64}
    alt="Aperçu"
    layout="fill"
    objectFit="cover"
    className="rounded"
  />
</div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Envoyer par email
      </button>

      {status && <p className="mt-4">{status}</p>}
    </form>
  );
}
