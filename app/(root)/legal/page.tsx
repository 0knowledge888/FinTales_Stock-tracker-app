export default function LegalPage() {
    return (
      <div className="min-h-screen p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3">Éditeur du site</h2>
            <p>
              Nom : [Greg Mouret]<br />
              Adresse : 2. Av du Blanchissage, 84000 Avignon<br />
              Email : hello@gregmouret.com
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, code) est la propriété 
              exclusive de FinTales, sauf mention contraire.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-3">Données personnelles</h2>
            <p>
              Pour plus d'informations sur le traitement de vos données personnelles, 
              consultez notre{" "}
              <a href="/privacy" className="text-blue-400 underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    );
  }
  