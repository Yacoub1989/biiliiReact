export default function SuppressionDonneesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Demande de suppression des données
        </h1>

        <p className="mb-4 text-gray-700">
          Vous pouvez demander la suppression de votre compte et des données
          personnelles associées à votre utilisation de l’application.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Données concernées
        </h2>
        <p className="text-gray-700">
          La suppression peut inclure votre compte utilisateur, votre numéro de
          téléphone, vos annonces, vos images et les informations associées à
          votre profil.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Comment faire la demande ?
        </h2>
        <p className="text-gray-700">
          Envoyez un email à :
          <strong> contact@elgazra.com</strong>
        </p>

        <p className="mt-4 text-gray-700">
          Merci d’indiquer dans votre message :
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>Votre numéro de téléphone utilisé dans l’application</li>
          <li>Le nom de votre compte, si disponible</li>
          <li>La phrase : “Je souhaite supprimer mes données”</li>
        </ul>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Délai de traitement
        </h2>
        <p className="text-gray-700">
          Votre demande sera traitée dans un délai raisonnable après
          vérification de votre identité.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Données conservées
        </h2>
        <p className="text-gray-700">
          Certaines données peuvent être conservées temporairement si elles sont
          nécessaires pour respecter des obligations légales, prévenir la fraude
          ou résoudre un litige.
        </p>
      </div>
    </main>
  );
}