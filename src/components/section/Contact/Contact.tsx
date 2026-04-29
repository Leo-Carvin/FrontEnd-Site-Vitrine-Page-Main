"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle, FaShieldAlt, FaLock } from "react-icons/fa";

// En local  → http://localhost:4000
// En prod   → URL Vercel du backend, à mettre dans .env.local :
//             NEXT_PUBLIC_BACKEND_URL=https://cyneris-backend.vercel.app
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "/api";

const FormField = ({
  label, name, type = "text", placeholder, value, error, onChange, required = false, isTextArea = false,
}: {
  label: string; name: string; type?: string; placeholder: string;
  value: string; error?: string; onChange: (e: any) => void;
  required?: boolean; isTextArea?: boolean;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
      {!required && <span className="text-gray-400 font-normal"> (optionnel)</span>}
    </label>
    {isTextArea ? (
      <textarea
        name={name} value={value} onChange={onChange} placeholder={placeholder} rows={5}
        className={`w-full p-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-1)] outline-none resize-none ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"}`}
      />
    ) : (
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className={`w-full p-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-1)] outline-none ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"}`}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({
    nom: "", prenom: "", email: "", telephone: "", entreprise: "", besoin: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    const required = ["nom", "prenom", "email", "message", "besoin"];
    const newErrors: Record<string, string> = {};
    required.forEach((f) => {
      if (!form[f as keyof typeof form].trim()) newErrors[f] = "Ce champ est obligatoire";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Adresse email invalide";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    try {
      // Si NEXT_PUBLIC_BACKEND_URL est défini → backend séparé
      // Sinon → API Route Next.js locale (/api/contact)
      const url = BACKEND_URL === "/api"
        ? "/api/contact"
        : `${BACKEND_URL}/api/contact`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="bg-[#F4F6FA] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* ── Formulaire (3/5) ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <div>
            <span className="text-[var(--color-1)] text-xs font-bold uppercase tracking-widest">
              Audit gratuit · Sans engagement
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-1">Décrivez votre besoin</h2>
            <p className="text-gray-500 text-sm mt-1">
              Notre expert vous répond sous 4h avec un diagnostic personnalisé.
            </p>
          </div>

          <div className="space-y-4">
            {/* Sélecteur besoin */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Quel est votre besoin principal ? <span className="text-red-500">*</span>
              </label>
              <select
                name="besoin" value={form.besoin} onChange={handleChange}
                className={`w-full p-3 rounded-lg border text-gray-900 focus:ring-2 focus:ring-[var(--color-1)] outline-none cursor-pointer bg-white ${errors.besoin ? "border-red-500 bg-red-50" : "border-gray-300"}`}
              >
                <option value="">— Sélectionnez une option —</option>
                {["Pentest / Test d'intrusion", "Audit de sécurité", "Data Science", "Développement sécurisé", "Autre"].map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              {errors.besoin && <p className="text-red-500 text-xs">{errors.besoin}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Nom" name="nom" value={form.nom} onChange={handleChange} error={errors.nom} required placeholder="Dupont" />
              <FormField label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} error={errors.prenom} required placeholder="Jean" />
            </div>

            <FormField label="Email professionnel" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required placeholder="jean.dupont@entreprise.fr" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
              <FormField label="Entreprise" name="entreprise" value={form.entreprise} onChange={handleChange} placeholder="Nom de votre société" />
            </div>

            <FormField
              label="Votre message" name="message" isTextArea value={form.message}
              onChange={handleChange} error={errors.message} required
              placeholder="Contexte, périmètre, urgence, contraintes… Plus vous êtes précis, plus notre diagnostic sera pertinent."
            />
          </div>

          <p className="text-gray-400 text-xs">
            Les champs <span className="text-red-500">*</span> sont obligatoires.
          </p>

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full bg-[var(--color-2)] hover:bg-[var(--color-1)] text-white font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "⏳ Envoi en cours…" : "🔍 Demander mon audit gratuit"}
          </button>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
              <p className="text-green-700 font-semibold text-sm">✅ Message envoyé avec succès !</p>
              <p className="text-green-600 text-xs mt-1">
                Un email de confirmation vous a été envoyé. Notre équipe vous répond sous 4h.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
              <p className="text-red-600 font-semibold text-sm">Une erreur est survenue.</p>
              <p className="text-red-500 text-xs mt-1">
                Réessayez ou contactez-nous à{" "}
                <a href="mailto:contact@cyneris.fr" className="underline font-medium">contact@cyneris.fr</a>
              </p>
            </div>
          )}
        </div>

        {/* ── Colonne droite (2/5) ── */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
            <h3 className="font-extrabold text-lg text-gray-900">Nos coordonnées</h3>
            {[
              { icon: FaMapMarkerAlt, t: "Adresse",  v: "LE NOBE – 270 Avenue Jean d'Ormesson\n83160 La Valette-du-Var" },
              { icon: FaEnvelope,     t: "Email",    v: "contact@cyneris.fr" },
              { icon: FaClock,        t: "Horaires", v: "Lun–Ven | 9h00 – 18h00" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-3 bg-[var(--color-2)] text-white rounded-xl h-fit shrink-0">
                  <item.icon />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.t}</p>
                  {item.v.split("\n").map((line, j) => (
                    <p key={j} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <hr className="border-gray-100" />
            <div className="space-y-3 text-sm text-gray-600">
              {[
                { icon: FaCheckCircle, l: "Réponse sous 4h" },
                { icon: FaLock,        l: "100% Confidentiel" },
                { icon: FaShieldAlt,   l: "Sans engagement" },
              ].map((g, i) => (
                <div key={i} className="flex items-center gap-3">
                  <g.icon className="text-[var(--color-1)] shrink-0" /> {g.l}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "260px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3582.3583743742415!2d6.008893126610006!3d43.13861283556001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLE%20NOBEL%20270%20AVENUE%20JEAN%20D&#39;ORMESSON%20%2C%2083160%20LA%20VALETTE-DU-VAR!5e1!3m2!1sfr!2sfr!4v1777384150937!5m2!1sfr!2sfr"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              title="Cyneris – La Valette-du-Var"
            />
          </div>
        </div>

      </div>
    </section>
  );
}