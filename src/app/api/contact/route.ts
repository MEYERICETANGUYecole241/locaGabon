
// api/contact/route.ts


import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('Initialisation de la route /api/contact');

export async function POST(req: Request) {
  console.log('Requête POST reçue sur src/app/api/contact/route.ts');
  
  try {
    const body = await req.json();
    console.log('Corps de la requête:', JSON.stringify(body, null, 2));
    
    const { name, email, message } = body;

    // Validation des champs
    if (!name || !email || !message) {
      console.error('Champs manquants:', { name, email, message });
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Tous les champs sont obligatoires' 
        }), 
        { status: 400 }
      );
    }

    console.log('Envoi de l\'email à Resend...');
    
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `Nouveau message de ${name}`,
      html: `
        <h3>Message de ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // console.log('Email envoyé avec succès:', data);
    return new Response(JSON.stringify({ 
      success: true,
      data 
    }), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      } 
    });
    
  } catch (error: unknown) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Vérifier si l'erreur provient de Resend
    if (error instanceof Error) {
      console.error('Détails de l\'erreur Resend:', error.message);
    }
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Erreur lors de l\'envoi du message',
      details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
