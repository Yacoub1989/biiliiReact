export default function SupportPage() {
return ( <main className="min-h-screen bg-gray-50 px-6 py-12"> <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm"> <h1 className="mb-6 text-3xl font-bold text-gray-900">
Support El Gazera </h1>

    <p className="mb-4 text-gray-700">
      Bienvenue sur la page d’assistance officielle de l’application El Gazera.
    </p>

    <p className="mb-4 text-gray-700">
      El Gazera est une plateforme de marketplace et d’annonces permettant
      d’acheter, vendre et publier des annonces partout en Mauritanie.
    </p>

    <h2 className="mt-6 mb-2 text-xl font-semibold">
      Contact
    </h2>

    <p className="text-gray-700">
      Pour toute question, problème technique ou demande d’assistance,
      contactez-nous à :
    </p>

    <p className="mt-2 text-gray-700">
      <strong>Email :</strong>{" "}
      <a
        href="mailto:postmaster@elamane.net"
        className="text-blue-600 hover:underline"
      >
        postmaster@elamane.net
      </a>
    </p>

    <h2 className="mt-6 mb-2 text-xl font-semibold">
      Assistance disponible
    </h2>

    <ul className="list-disc space-y-2 pl-6 text-gray-700">
      <li>Création et connexion au compte</li>
      <li>Publication d’annonces</li>
      <li>Modification ou suppression d’annonces</li>
      <li>Problèmes liés aux images</li>
      <li>Signalement de contenu inapproprié</li>
      <li>Questions relatives à l’utilisation de l’application</li>
    </ul>

    <h2 className="mt-6 mb-2 text-xl font-semibold">
      Politique de confidentialité
    </h2>

    <p className="text-gray-700">
      Consultez notre politique de confidentialité :
    </p>

    <p className="mt-2">
      <a
        href="https://www.elgazra.com/confidentialite"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://www.elgazra.com/confidentialite
      </a>
    </p>

    <h2 className="mt-6 mb-2 text-xl font-semibold">
      Suppression des données
    </h2>

    <p className="text-gray-700">
      Pour demander la suppression de votre compte et de vos données :
    </p>

    <p className="mt-2">
      <a
        href="https://www.elgazra.com/suppression-donnees"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://www.elgazra.com/suppression-donnees
      </a>
    </p>
  </div>
</main>
);
}
