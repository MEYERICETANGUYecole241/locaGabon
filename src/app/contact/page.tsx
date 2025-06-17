"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_xxx",     // ← Remplace par ton Service ID
        "template_yyy",    // ← Remplace par ton Template ID
        form.current,
        "public_key_zzz"   // ← Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log("Message envoyé avec succès :", result.text);
          form.current?.reset();
          alert("Votre message a été envoyé avec succès !");
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          alert("Une erreur est survenue lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10">
      <div className="w-full max-w-xl p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-900 text-center">Contactez-nous</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            className="w-full p-2 border rounded h-32 bg-white"
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
