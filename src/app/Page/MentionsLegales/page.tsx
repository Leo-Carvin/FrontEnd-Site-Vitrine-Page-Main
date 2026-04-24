import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

export default function MentionsLegales() {
  return (
    <>
    < Header />
    
    <main className="mt-20 bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Mentions Légales</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informations sur l'éditeur</h2>
          <p>Le présent site est édité par la société <strong>[Nom de votre entreprise]</strong>.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Forme juridique : [ex: SAS / SARL / Auto-entrepreneur]</li>
            <li>Capital social : [Montant du capital] €</li>
            <li>Siège social : [Adresse complète du siège]</li>
            <li>Immatriculation : RCS [Ville] n° [Numéro SIRET ou RCS]</li>
            <li>Numéro de TVA intracommunautaire : [Votre numéro]</li>
            <li>Contact : [Email de contact] | [Téléphone]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Responsable de publication</h2>
          <p>Le directeur de la publication est <strong>[Nom du dirigeant]</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
          <p>Ce site est hébergé par la société <strong>Vercel Inc.</strong></p>
          <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
          <p>Pour contacter Vercel : privacy@vercel.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
          <p>La structure générale, ainsi que les logiciels, textes, images animées ou fixes, sons, savoir-faire, dessins, graphismes et tout autre élément composant le site sont la propriété exclusive de [Nom de votre entreprise]. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant, est interdite.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
          <p>Les informations fournies sur le site sont communiquées à titre indicatif. [Nom de votre entreprise] met tout en œuvre pour offrir des outils disponibles et vérifiés, mais ne saurait être tenu pour responsable des erreurs ou d'une absence de disponibilité des informations.</p>
        </section>
      </div>
    </main>
    < Footer />
    </>
  );
}