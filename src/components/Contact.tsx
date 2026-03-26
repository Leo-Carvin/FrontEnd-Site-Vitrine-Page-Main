"use client";

import { useState } from "react";
import SuccesForm from "../data/ValidationForm";
import { CTAServices } from './CTA';



export default function Contact() {
    const inputStyle = "mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3";
    const labelStyle = "block text-sm font-medium text-gray-700";

    const [message, setMessage] = useState("");

    const ValideClick = (e: any) => {
    const form = e.currentTarget.closest("form");

    if (!form) return;

    if (!form.checkValidity()) {
      setMessage(SuccesForm.error);
      return;
    }

    setMessage(SuccesForm.success);

    form.reset();
  };


return (
    <div id="contact" className="pt-30 bg-[#171717] px-5 md:px-20 pb-30">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Contactez-nous</h2>

        <p className="text-center text-white mb-20">
        Vous avez des questions ou souhaitez discuter de votre projet ? N'hésitez pas à nous contacter !
        </p>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
            <div className="flex gap-2 justify-between">
            <div>
                <label htmlFor="name" className={labelStyle}>Nom *</label>
                <input type="text" required id="name" name="name" className={inputStyle} placeholder="Dupont" />
            </div>
            <div>
                <label htmlFor="firstName" className={labelStyle}>Prénom *</label>
                <input type="text" required id="firstName" name="firstName" className={inputStyle} placeholder="Jean" />
            </div>
            </div>

            <div>
            <label htmlFor="email" className={labelStyle}>Email *</label>
            <input type="email" required id="email" name="email" className={inputStyle} placeholder="DupondJean@gmail.com" />
            </div>

            <div>
            <label htmlFor="telephone" className={labelStyle}>Téléphone *</label>
            <input type="tel" required id="telephone" name="telephone" className={inputStyle} placeholder="06 12 34 56 78" />
            </div>

            <div>
            <label htmlFor="message" className={labelStyle}>Message *</label>
            <textarea required id="message" name="message" rows={4} className={inputStyle} placeholder="Votre message ici..." />
            </div>

            {message && (
            <p className="text-black text-center text-sm">{message}</p>
            )}

            <button
            type="submit"          
            onClick={ValideClick}    
            className="w-full flex justify-center py-2 px-4 rounded-[50px] text-sm font-medium text-white bg-[radial-gradient(farthest-corner_at_40px_40px,_#2e5cff_0%,_#e722f1_100%)] hover:scale-105 hover:shadow-[5px_5px_15px_purple] transition-all duration-300"
            >
            Envoyer
            </button>

        </form>
        </div>
    </div>
);
}