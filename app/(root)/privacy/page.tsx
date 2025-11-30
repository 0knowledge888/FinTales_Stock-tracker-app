export default function PrivacyPage() {
    return (
      <div className="min-h-screen p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Collecte des données</h2>
            <p>
              FinTales collecte les données suivantes lors de votre inscription :
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Adresse email</li>
              <li>Nom d'utilisateur</li>
              <li>Données de watchlist (actions suivies)</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Vous fournir un accès personnalisé à votre compte</li>
              <li>Sauvegarder vos préférences de watchlist</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">3. Cookies</h2>
            <p>
              Nous utilisons des cookies essentiels pour :
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Maintenir votre session de connexion</li>
              <li>Sauvegarder vos préférences</li>
              <li>Améliorer la performance du site</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">4. Protection des données</h2>
            <p>
              Vos données sont stockées de manière sécurisée dans une base MongoDB 
              avec chiffrement. Nous ne partageons jamais vos données avec des tiers.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">5. Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : 
              <span className="text-blue-400"> contact@fintales.com</span>
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">6. Services tiers</h2>
            <p>
              FinTales utilise les services suivants :
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Finnhub API - Pour les données financières</li>
              <li>TradingView - Pour les graphiques</li>
              <li>Vercel - Pour l'hébergement</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">7. Modifications</h2>
            <p>
              Cette politique peut être mise à jour. La date de dernière modification 
              est indiquée ci-dessous.
            </p>
            <p className="mt-2 text-gray-400">
              Dernière mise à jour : 28 novembre 2025
            </p>
          </section>
        </div>
      </div>
    );
  }
  