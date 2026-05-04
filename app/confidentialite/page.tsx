export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Règles de confidentialité
        </h1>

        <p className="mb-4 text-gray-700">
          La présente politique de confidentialité explique comment notre
          application collecte, utilise et protège les données personnelles des
          utilisateurs.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Données collectées
        </h2>
        <p className="text-gray-700">
          Nous pouvons collecter certaines informations telles que le numéro de
          téléphone, les informations de compte, les annonces publiées, les
          images ajoutées et les données nécessaires au bon fonctionnement du
          service.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Utilisation des données
        </h2>
        <p className="text-gray-700">
          Ces données sont utilisées uniquement pour permettre la création de
          compte, la publication d’annonces, la gestion des utilisateurs, la
          sécurité de l’application et l’amélioration du service.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Partage des données
        </h2>
        <p className="text-gray-700">
          Nous ne vendons pas les données personnelles des utilisateurs. Les
          données peuvent être partagées uniquement lorsque cela est nécessaire
          pour fournir le service ou lorsque la loi l’exige.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Sécurité
        </h2>
        <p className="text-gray-700">
          Nous mettons en place des mesures raisonnables pour protéger les
          données contre l’accès non autorisé, la perte ou la modification.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Suppression des données
        </h2>
        <p className="text-gray-700">
          L’utilisateur peut demander la suppression de son compte et de ses
          données personnelles via la page dédiée :
          <a
            href="/suppression-donnees"
            className="ml-1 font-medium text-blue-600 underline"
          >
            Demande de suppression des données
          </a>.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold">
          Contact
        </h2>
        <p className="text-gray-700">
          Pour toute question, vous pouvez nous contacter à :
          <strong> postmaster@elamane.net</strong>
        </p>
      </div>
    </main>
  );
}