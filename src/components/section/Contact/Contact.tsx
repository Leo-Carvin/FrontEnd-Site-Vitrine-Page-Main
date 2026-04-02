"use client";   

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const coordonnees = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        lines: ["123 Avenue des Technologies", "75001 Paris, France"],
    },
    {
        icon: <FaPhone />,
        title: "Téléphone",
        lines: ["+33 1 23 45 67 89"],
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        lines: ["contact@cyneris.fr"],
    },
    {
        icon: <FaClock />,
        title: "Horaires",
        lines: ["Lundi – Vendredi", "9h00 – 18h00"],
    },
];

const champsObligatoires = ["nom", "prenom", "email", "telephone", "message"] as const;

export default function Contact() {
    const [form, setForm] = useState({
        nom: "", prenom: "", email: "", telephone: "", entreprise: "", message: "",
    });
    const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const valider = () => {
        const newErrors: Partial<Record<string, string>> = {};

        champsObligatoires.forEach((champ) => {
            if (!form[champ].trim()) {
                newErrors[champ] = "Ce champ est obligatoire";
            }
        });

        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Adresse email invalide";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!valider()) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch {
            setStatus("error");
        }
    };

    const inputClass = (champ: string) =>
        `border rounded-lg px-4 py-2 text-sm outline-none transition ${
            errors[champ]
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-[var(--color-2)]"
        }`;

    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20" id="contact">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-black mb-6">Envoyez-nous un message</h2>

                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">Nom <span className="text-red-500">*</span></label>
                                <input name="nom" onChange={handleChange} type="text" placeholder="Votre nom" className={inputClass("nom")} />
                                {errors.nom && <p className="text-red-500 text-xs">{errors.nom}</p>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">Prénom <span className="text-red-500">*</span></label>
                                <input name="prenom" onChange={handleChange} type="text" placeholder="Votre prénom" className={inputClass("prenom")} />
                                {errors.prenom && <p className="text-red-500 text-xs">{errors.prenom}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">Email <span className="text-red-500">*</span></label>
                            <input name="email" onChange={handleChange} type="email" placeholder="votre@email.com" className={inputClass("email")} />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">Téléphone <span className="text-red-500">*</span></label>
                            <input name="telephone" onChange={handleChange} type="tel" placeholder="+33 6 00 00 00 00" className={inputClass("telephone")} />
                            {errors.telephone && <p className="text-red-500 text-xs">{errors.telephone}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">Entreprise <span className="text-gray-400">(optionnel)</span></label>
                            <input name="entreprise" onChange={handleChange} type="text" placeholder="Nom de votre entreprise" className={inputClass("entreprise")} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">Message <span className="text-red-500">*</span></label>
                            <textarea name="message" onChange={handleChange} rows={5} placeholder="Décrivez votre projet ou votre demande..." className={`${inputClass("message")} resize-none`} />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                        </div>

                        <p className="text-gray-400 text-xs">Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires</p>

                        <button
                            onClick={handleSubmit}
                            disabled={status === "loading"}
                            className="w-full bg-[var(--color-5)] hover:bg-[var(--color-3)] text-white font-semibold py-3 rounded-lg transition mt-2 disabled:opacity-50"
                        >
                            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                        </button>

                        {status === "success" && <p className="text-green-500 text-sm text-center">Message envoyé avec succès !</p>}
                        {status === "error" && <p className="text-red-500 text-sm text-center">Une erreur est survenue. Réessayez.</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6">
                        <h2 className="text-2xl font-bold text-black">Nos coordonnées</h2>

                        {coordonnees.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-2)] flex items-center justify-center text-white text-lg shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-black">{item.title}</p>
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-gray-500 text-sm">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <hr className="border-gray-100" />

                        <div className="flex items-center gap-3 text-gray-600 text-sm">
                            <FaCheckCircle className="text-[var(--color-1)] shrink-0" />
                            Nous vous répondons généralement sous 24h.
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46574.57848220079!2d5.948058149442043!3d43.14839490916402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9198ebad34181%3A0x40819a5fd8fc7c0!2sLa%20Valette-du-Var!5e0!3m2!1sfr!2sfr!4v1775132444109!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}