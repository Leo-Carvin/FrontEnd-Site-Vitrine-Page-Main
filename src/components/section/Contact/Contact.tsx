"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle, FaShieldAlt, FaLock } from "react-icons/fa";

// Composant pour les champs texte
const FormField = ({ label, name, type = "text", placeholder, value, error, onChange, required = false, isTextArea = false }: any) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {isTextArea ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} 
        className={`w-full p-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-1)] outline-none ${error ? "border-red-500" : "border-gray-300"}`} rows={5} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} 
        className={`w-full p-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-1)] outline-none ${error ? "border-red-500" : "border-gray-300"}`} />
    )}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", telephone: "", entreprise: "", besoin: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    const requiredFields = ["nom", "prenom", "email", "message", "besoin"];
    const newErrors: Record<string, string> = {};
    
    requiredFields.forEach(f => {
      if (!form[f as keyof typeof form].trim()) newErrors[f] = "Ce champ est obligatoire";
    });
    
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Adresse email invalide";
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form) 
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="bg-[#F4F6FA] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* Formulaire (3/5) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <div>
            <span className="text-[var(--color-1)] text-xs font-bold uppercase tracking-widest">Audit gratuit</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-1">Décrivez votre besoin</h2>
            <p className="text-gray-500 text-sm">Notre expert vous répond sous 4h avec un diagnostic personnalisé.</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Quel est votre besoin principal ? <span className="text-red-500">*</span></label>
              <select 
                name="besoin" 
                value={form.besoin} 
                onChange={handleChange} 
                className={`w-full p-3 rounded-lg border text-gray-900 focus:ring-2 focus:ring-[var(--color-1)] outline-none cursor-pointer ${errors.besoin ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">— Sélectionnez une option —</option>
                {["Pentest / Test d'intrusion", "Audit de sécurité", "Data Science", "Développement sécurisé", "Autre"].map(b => <option key={b} value={b}>{b}</option>)}
              </select>
              {errors.besoin && <p className="text-red-500 text-xs">{errors.besoin}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Nom" name="nom" value={form.nom} onChange={handleChange} error={errors.nom} required placeholder="Dupont" />
              <FormField label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} error={errors.prenom} required placeholder="Jean" />
            </div>

            <FormField label="Email professionnel" name="email" value={form.email} onChange={handleChange} error={errors.email} required placeholder="jean.dupont@entreprise.fr" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Téléphone" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
              <FormField label="Entreprise" name="entreprise" value={form.entreprise} onChange={handleChange} placeholder="Nom de votre société" />
            </div>

            <FormField label="Votre message" name="message" isTextArea value={form.message} onChange={handleChange} error={errors.message} required placeholder="Détails du projet..." />
          </div>

          <button 
            onClick={handleSubmit} 
            disabled={status === "loading"} 
            className="w-full bg-[var(--color-2)] hover:bg-[var(--color-1)] text-white font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-70"
          >
            {status === "loading" ? "Envoi en cours…" : "🔍 Demander mon audit gratuit"}
          </button>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm text-center font-medium">
              ✅ Message envoyé avec succès ! Nous revenons vers vous sous 4h.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center font-medium">
              ❌ Une erreur est survenue. Réessayez ou contactez-nous à <a href="mailto:contact@cyneris.fr" className="underline">contact@cyneris.fr</a>
            </div>
          )}
        </div>

        {/* Colonne droite (2/5) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
            <h3 className="font-extrabold text-lg text-gray-900">Nos coordonnées</h3>
            {[ 
              {icon: FaMapMarkerAlt, t: "Adresse", v: "LE NOBE – 270 Avenue Jean d'Ormesson, 83160 La Valette-du-Var"}, 
              {icon: FaEnvelope, t: "Email", v: "contact@cyneris.fr"}, 
              {icon: FaClock, t: "Horaires", v: "Lun–Ven | 9h00 – 18h00"} 
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-3 bg-[var(--color-2)] text-white rounded-xl h-fit"><item.icon /></div>
                <div><p className="font-semibold text-gray-900">{item.t}</p><p className="text-gray-500 text-sm">{item.v}</p></div>
              </div>
            ))}
            <hr />
            <div className="space-y-3 text-sm text-gray-600">
              {[ {icon: FaCheckCircle, l: "Réponse sous 4h"}, {icon: FaLock, l: "100% Confidentiel"}, {icon: FaShieldAlt, l: "Sans engagement"} ].map((g, i) => (
                <div key={i} className="flex items-center gap-3"><g.icon className="text-[var(--color-1)]"/> {g.l}</div>
              ))}
            </div>
          </div>

          {/* Carte */}
          <div className="rounded-2xl overflow-hidden shadow-sm h-56 lg:h-auto lg:flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1065.0670760872815!2d6.009954744567516!3d43.13714543601496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c919a695c6c399%3A0x4bf7ed709ad69050!2sSMAGEX!5e1!3m2!1sfr!2sfr!4v1777298315463!5m2!1sfr!2sfr"
              width="100%"
              height="300vh"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Cyneris – La Valette-du-Var"
            />
          </div>
        </div>
      </div>
    </section>
  );
}