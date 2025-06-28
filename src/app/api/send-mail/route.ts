import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { titre, type, description, localisation, surface, prix } = data;

    await resend.emails.send({
      from: "tonemail@domaine.com", // ton adresse email vérifiée sur Resend
      to: "destinataire@example.com", // destinataire final
      subject: `Nouvelle annonce: ${titre}`,
      text: `
Titre : ${titre}
Type : ${type}
Description : ${description}
Localisation : ${localisation}
Surface : ${surface}
Prix : ${prix}
      `,
      html: `
        <h1>Nouvelle annonce de maison</h1>
        <p><strong>Titre :</strong> ${titre}</p>
        <p><strong>Type :</strong> ${type}</p>
        <p><strong>Description :</strong> ${description}</p>
        <p><strong>Localisation :</strong> ${localisation}</p>
        <p><strong>Surface :</strong> ${surface}</p>
        <p><strong>Prix :</strong> ${prix}</p>
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du mail" },
      { status: 500 }
    );
  }
}
