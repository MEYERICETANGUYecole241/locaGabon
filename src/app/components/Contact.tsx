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
        "Ice",        // 👉 Remplace par ton Service ID
        "template_g6i6qqp",       // 👉 Remplace par ton Template ID
        form.current,
        "xI7KcSX8UlP9aCxQj"      // 👉 Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log("Message envoyé avec succès :", result.text);
          form.current?.reset();
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
        }
      );
  };

  return (
    <main className="p-6 bg-blue-5O">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg ">
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          className="w-full p-2 border rounded bg-blue-100"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          className="w-full p-2 border rounded bg-blue-100"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          className="w-full p-2 border rounded bg-blue-100"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="w-full p-2 border rounded h-32 bg-blue-100"
          required
        />
        <button
          type="submit" className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}

