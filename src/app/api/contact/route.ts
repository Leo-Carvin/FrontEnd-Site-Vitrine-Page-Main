import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { nom, prenom, email, telephone, entreprise, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire Cyneris" <${process.env.MAIL_USER}>`, 
      replyTo: email,                                           
      to: process.env.MAIL_USER,
      subject: `Nouveau message de ${nom} ${prenom}`,
      html: `
        <h2>Nouveau contact depuis le site</h2>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Entreprise :</strong> ${entreprise || "Non renseignée"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}