import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
  const { nom, prenom, email, telephone, entreprise, besoin, message } =
    await req.json();

  // Validation serveur
  if (!nom?.trim() || !prenom?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ success: false, error: "Champs manquants" }, { status: 400 });
  }

  // ── Mail interne reçu par Cyneris ──────────────────────────────────────
  const internalHtml = `
<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f6fa;margin:0;padding:0}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}
  .head{background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:28px 32px}
  .head h1{color:#fff;margin:0;font-size:20px;font-weight:700}
  .head span{color:#60a5fa;font-size:13px}
  .badge{display:inline-block;background:#2563eb;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;margin-top:8px;text-transform:uppercase;letter-spacing:.05em}
  .body{padding:28px 32px}
  .field{margin-bottom:18px}
  .field label{display:block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px}
  .field p{margin:0;font-size:15px;color:#111827}
  .bbadge{display:inline-block;background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:8px;padding:4px 12px;font-size:13px;font-weight:600}
  .msgbox{background:#f8fafc;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:14px 16px;color:#1f2937;font-size:14px;line-height:1.6}
  hr{border:none;border-top:1px solid #e5e7eb;margin:24px 0}
  .foot{background:#f9fafb;padding:16px 32px;font-size:12px;color:#9ca3af;text-align:center}
  .btn{display:inline-block;margin-top:20px;background:#2563eb;color:#fff;text-decoration:none;padding:10px 22px;border-radius:8px;font-size:13px;font-weight:700}
</style></head><body>
<div class="wrap">
  <div class="head">
    <h1>📬 Nouveau contact – Cyneris</h1>
    <span>Formulaire site web</span><br/>
    ${besoin ? `<span class="badge">${besoin}</span>` : ""}
  </div>
  <div class="body">
    <div class="field"><label>Contact</label><p>${nom} ${prenom}</p></div>
    <div class="field"><label>Email</label><p><a href="mailto:${email}" style="color:#2563eb">${email}</a></p></div>
    ${telephone ? `<div class="field"><label>Téléphone</label><p>${telephone}</p></div>` : ""}
    ${entreprise ? `<div class="field"><label>Entreprise</label><p>${entreprise}</p></div>` : ""}
    ${besoin ? `<div class="field"><label>Besoin principal</label><p><span class="bbadge">${besoin}</span></p></div>` : ""}
    <hr/>
    <div class="field"><label>Message</label><div class="msgbox">${message.replace(/\n/g, "<br/>")}</div></div>
    <a href="mailto:${email}" class="btn">↩ Répondre à ${prenom}</a>
  </div>
  <div class="foot">Cyneris · 270 Avenue Jean d'Ormesson · 83160 La Valette-du-Var<br/>Envoyé depuis le formulaire de contact de cyneris.fr</div>
</div>
</body></html>`;

  // ── Mail de confirmation envoyé à l'utilisateur ────────────────────────
  const confirmHtml = `
<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f6fa;margin:0;padding:0}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}
  .head{background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:28px 32px;text-align:center}
  .head h1{color:#fff;margin:0;font-size:22px;font-weight:700}
  .head p{color:#93c5fd;margin:8px 0 0;font-size:14px}
  .body{padding:32px;color:#374151;font-size:15px;line-height:1.7}
  .hl{background:#eff6ff;border-radius:10px;padding:16px 20px;margin:20px 0;color:#1e40af;font-size:14px}
  .steps{margin:20px 0;padding:0;list-style:none}
  .steps li{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;font-size:14px}
  .num{background:#2563eb;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;margin-top:2px}
  .cta{text-align:center;margin:28px 0 0}
  .cta a{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:700}
  .foot{background:#f9fafb;padding:16px 32px;font-size:12px;color:#9ca3af;text-align:center}
</style></head><body>
<div class="wrap">
  <div class="head">
    <h1>✅ Demande bien reçue !</h1>
    <p>Cyneris · Cabinet IT Cybersécurité & Data</p>
  </div>
  <div class="body">
    <p>Bonjour <strong>${prenom} ${nom}</strong>,</p>
    <p>Nous avons bien reçu votre demande${besoin ? ` concernant <strong>${besoin}</strong>` : ""} et nous vous en remercions.</p>
    <div class="hl">🕐 Notre équipe vous contacte <strong>sous 4 heures</strong> avec un premier diagnostic personnalisé.</div>
    <p>Voici ce qui va se passer :</p>
    <ul class="steps">
      <li><span class="num">1</span><span>Analyse de votre demande par un expert certifié <strong>OSCP & ISO 27001</strong></span></li>
      <li><span class="num">2</span><span>Prise de contact pour cadrer votre besoin et définir le périmètre</span></li>
      <li><span class="num">3</span><span>Remise d'un <strong>audit gratuit</strong> avec recommandations prioritaires</span></li>
    </ul>
    <p style="color:#6b7280;font-size:13px">En cas d'urgence, écrivez-nous directement à <a href="mailto:contact@cyneris.fr" style="color:#2563eb">contact@cyneris.fr</a></p>
    <div class="cta"><a href="https://cyneris.fr">Visiter cyneris.fr</a></div>
  </div>
  <div class="foot">Cyneris · 270 Avenue Jean d'Ormesson · 83160 La Valette-du-Var<br/>Vous recevez ce mail car vous avez soumis le formulaire de contact de cyneris.fr</div>
</div>
</body></html>`;

  try {
    await Promise.all([
      // Mail interne → toi
      transporter.sendMail({
        from: `"Formulaire Cyneris" <${process.env.MAIL_USER}>`,
        replyTo: email,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: `[Cyneris]${besoin ? ` [${besoin}]` : ""} Nouveau message de ${nom} ${prenom}`,
        html: internalHtml,
      }),
      // Confirmation → utilisateur
      transporter.sendMail({
        from: `"Cyneris" <${process.env.MAIL_USER}>`,
        to: email,
        subject: `✅ Cyneris a bien reçu votre demande – réponse sous 4h`,
        html: confirmHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}