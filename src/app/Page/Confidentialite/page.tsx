import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

export default function Confidentialite() {
  return (
    <>
    < Header />
    <main className="mt-20 bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Politique de Confidentialité</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Qui sommes-nous ?</h2>
          <p>Nous sommes la société [Nom de votre entreprise]. Nous nous engageons à protéger la vie privée des utilisateurs de notre site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Collecte des données personnelles</h2>
          <p>Nous collectons les données que vous nous transmettez volontairement via nos formulaires de contact :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nom, prénom, entreprise, adresse email, numéro de téléphone.</li>
            <li>Données de navigation (via les cookies, sous réserve de votre accord).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Finalité de la collecte</h2>
          <p>Vos données sont traitées pour :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Répondre à vos demandes de contact ou de devis.</li>
            <li>Améliorer le fonctionnement du site.</li>
            <li>Gérer nos relations commerciales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Destinataires des données</h2>
          <p>Vos données personnelles sont destinées exclusivement à <strong>[Nom de votre entreprise]</strong>. Nous ne vendons ni ne louons vos données à des tiers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Durée de conservation</h2>
          <p>Les données collectées via le formulaire sont conservées pendant une durée maximale de 3 ans après votre dernier contact avec nous, sauf obligation légale contraire.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données, ainsi qu'un droit d'opposition.</p>
          <p className="mt-2">Pour exercer ces droits, contactez-nous à : <strong>[Email de contact pour les données]</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p>Lors de votre navigation, des cookies peuvent être déposés sur votre terminal sous réserve de votre consentement. Vous pouvez les gérer ou les refuser via le bandeau de consentement affiché lors de votre première visite.</p>
        </section>
      </div>
    </main>
    < Footer />
    </>
  );
}