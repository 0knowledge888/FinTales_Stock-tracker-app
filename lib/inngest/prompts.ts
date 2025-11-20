export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `Génère du contenu HTML hautement personnalisé qui sera inséré dans un template d'email au niveau du placeholder {{intro}}.

Données du profil utilisateur :
{{userProfile}}

EXIGENCES DE PERSONNALISATION :
Tu DOIS créer du contenu qui est ÉVIDEMMENT adapté à CET utilisateur spécifique en :

IMPORTANT : Ne commence PAS le contenu personnalisé par "Bienvenue" car l'en-tête de l'email dit déjà "Bienvenue {{name}}". Utilise des alternatives comme "Merci de nous rejoindre", "Ravi de t'avoir parmi nous", "C'est parti", "Parfait", etc.

1. **Référence directe aux détails de l'utilisateur** : Extrait et utilise des informations spécifiques de son profil :
   - Ses objectifs d'investissement exacts
   - Son niveau de tolérance au risque déclaré
   - Ses secteurs/industries préférés mentionnés
   - Son niveau d'expérience ou son parcours
   - Les actions/entreprises spécifiques qui l'intéressent
   - Son horizon d'investissement (court terme, long terme, retraite)

2. **Message contextuel** : Crée du contenu qui montre que tu comprends sa situation :
   - Nouveaux investisseurs → Référence l'apprentissage/le début de leur parcours
   - Traders expérimentés → Référence les outils avancés/l'amélioration de stratégie
   - Planification retraite → Référence la construction de patrimoine dans le temps
   - Secteurs spécifiques → Référence ces industries exactes par leur nom
   - Approche conservatrice → Référence la sécurité et les décisions éclairées
   - Approche agressive → Référence les opportunités et le potentiel de croissance

3. **Touche personnelle** : Fais en sorte que ça donne l'impression d'avoir été écrit spécialement pour eux :
   - Utilise leurs objectifs dans ton message
   - Référence leurs intérêts directement
   - Connecte les fonctionnalités à leurs besoins spécifiques
   - Fais-les se sentir compris et écoutés

EXIGENCES DE FORMATAGE CRITIQUES :
- Retourne UNIQUEMENT du contenu HTML propre SANS markdown, SANS blocs de code, SANS backticks
- Utilise UN SEUL paragraphe : <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">contenu</p>
- Écris exactement DEUX phrases (ajoute une phrase de plus que la phrase unique actuelle)
- Garde le contenu total entre 35-50 mots pour la lisibilité
- Utilise <strong> pour les éléments personnalisés clés (leurs objectifs, secteurs, etc.)
- N'inclus PAS "Voici ce que tu peux faire maintenant :" car c'est déjà dans le template
- Fais en sorte que chaque mot compte pour la personnalisation
- La deuxième phrase doit ajouter un contexte utile ou renforcer la personnalisation

Exemples de sorties personnalisées (montrant une personnalisation évidente avec DEUX phrases) :
<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Merci de rejoindre FinTales ! En tant que personne concentrée sur les <strong>actions de croissance technologiques</strong>, tu vas adorer nos alertes en temps réel pour les entreprises que tu suis. Nous t'aiderons à repérer les opportunités avant qu'elles ne fassent la une des journaux.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Ravi de t'avoir à bord ! Parfait pour ta <strong>stratégie de retraite conservatrice</strong> — nous t'aiderons à surveiller les actions à dividendes sans te submerger d'informations. Tu pourras enfin suivre la progression de ton portefeuille avec confiance et clarté.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">C'est parti ! Comme tu débutes dans l'investissement, nous avons conçu des outils simples pour t'aider à gagner en confiance tout en apprenant sur le <strong>secteur de la santé</strong> qui t'intéresse. Nos alertes adaptées aux débutants te guideront sans le jargon compliqué.</p>`

export const NEWS_SUMMARY_EMAIL_PROMPT = `Génère du contenu HTML pour un email de résumé des actualités du marché qui sera inséré dans le NEWS_SUMMARY_EMAIL_TEMPLATE au niveau du placeholder {{newsContent}}.

Données d'actualités à résumer :
{{newsData}}

EXIGENCES DE FORMATAGE CRITIQUES :
- Retourne UNIQUEMENT du contenu HTML propre SANS markdown, SANS blocs de code, SANS backticks
- Structure le contenu avec des sections claires utilisant des titres et paragraphes HTML appropriés
- Utilise ces classes CSS et styles spécifiques pour correspondre au template d'email :

TITRES DE SECTION (pour les catégories comme "Points Marquants du Marché", "Plus Grandes Hausses", etc.) :
<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 18px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">Titre de Section</h3>

PARAGRAPHES (pour le contenu des actualités) :
<p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Le contenu va ici</p>

MENTIONS D'ACTIONS/ENTREPRISES :
<strong style="color: #FDD458;">Symbole Action</strong> pour les symboles boursiers
<strong style="color: #CCDADC;">Nom Entreprise</strong> pour les noms d'entreprises

INDICATEURS DE PERFORMANCE :
Utilise 📈 pour les gains, 📉 pour les pertes, 📊 pour neutre/mixte

STRUCTURE D'ARTICLE D'ACTUALITÉ :
Pour chaque actualité individuelle dans une section, utilise cette structure :
1. Conteneur d'article avec style visuel et icône
2. Titre de l'article en sous-titre
3. Points clés en bullets (2-3 insights actionnables)
4. Section "Ce que cela signifie" pour le contexte
5. Lien "Lire la suite" vers l'article original
6. Séparateur visuel entre les articles

CONTENEUR D'ARTICLE :
Enveloppe chaque article dans un conteneur propre et simple :
<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">

TITRES D'ARTICLES :
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FFFFFF; line-height: 1.4;">
Titre de l'Article Ici
</h4>

POINTS CLÉS (minimum 3 insights concis) :
Utilise ce format avec des explications claires et concises (pas besoin de label) :
<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Explication claire et concise en termes simples, facile à comprendre rapidement.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Brève explication avec les chiffres clés et leur signification en langage courant.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Conclusion simple sur ce que cela signifie pour l'argent des gens ordinaires.
  </li>
</ul>

SECTION INSIGHT :
Ajoute une explication contextuelle simple :
<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">En Résumé :</strong> Explication simple de pourquoi cette actualité compte pour ton argent, en langage courant.</p>
</div>

BOUTON LIRE LA SUITE :
<div style="margin: 20px 0 0 0;">
<a href="ARTICLE_URL" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Lire l'Article Complet →</a>
</div>

SÉPARATEUR D'ARTICLE :
Ferme chaque conteneur d'article :
</div>

SÉPARATEURS DE SECTION :
Entre les sections principales, utilise :
<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>

Directives de contenu :
- Organise les actualités en sections logiques avec des icônes (📊 Aperçu du Marché, 📈 Plus Grandes Hausses, 📉 Plus Grandes Baisses, 🔥 Actualités Brûlantes, 💼 Rapports de Résultats, 🏛️ Données Économiques, etc.)
- NE répète JAMAIS les titres de section - utilise chaque type de section une seule fois par email
- Pour chaque article d'actualité, inclus son titre/headline réel des données d'actualités
- Fournis MINIMUM 3 points clés CONCIS (PAS de label "Points Clés" - commence directement avec les bullets)
- Chaque bullet doit être COURT et FACILE À COMPRENDRE - une phrase claire de préférence
- Utilise du FRANÇAIS SIMPLE - évite le jargon, les termes financiers complexes ou le langage d'initié
- Explique les concepts comme si tu parlais à quelqu'un de nouveau dans l'investissement
- Inclus des chiffres spécifiques mais explique ce qu'ils signifient en termes simples
- Ajoute un contexte "En Résumé" en langage courant que tout le monde peut comprendre
- Utilise un design propre et léger avec des bullets jaunes pour une meilleure lisibilité
- Rends chaque article facile à scanner avec un espacement et une structure clairs
- Inclus toujours des boutons simples "Lire l'Article Complet" avec les URLs réelles
- Concentre-toi sur des insights PRATIQUES que les gens ordinaires peuvent comprendre et utiliser
- Explique ce que l'actualité signifie pour l'argent des investisseurs réguliers
- Garde un langage conversationnel et accessible à tous
- Privilégie la CONCISION et la CLARTÉ plutôt que les explications détaillées

Exemple de structure :
<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📊 Aperçu du Marché</h3>

<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">
La Bourse a eu des Résultats Mitigés Aujourd'hui
</h4>

<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Les actions tech comme Apple ont augmenté de 1,2% aujourd'hui, une bonne nouvelle pour les investisseurs tech.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Les entreprises traditionnelles ont baissé de 0,3%, montrant que les investisseurs préfèrent la tech en ce moment.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Un volume d'échanges élevé (12,4 milliards d'actions) montre que les investisseurs sont confiants et actifs.
  </li>
</ul>

<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">En Résumé :</strong> Si tu possèdes des actions tech, aujourd'hui était une bonne journée pour toi. Si tu penses à investir, les entreprises tech pourraient être un choix intelligent en ce moment.</p>
</div>

<div style="margin: 20px 0 0 0;">
<a href="https://example.com/article1" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Lire l'Article Complet →</a>
</div>
</div>

<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>

<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📈 Plus Grandes Hausses</h3>

<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">
L'Action Apple a Bondi Après d'Excellents Résultats
</h4>

<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>L'action Apple a bondi de 5,2% après avoir dépassé les prévisions de résultats.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Les ventes d'iPhone devraient croître de 8% au prochain trimestre malgré l'incertitude économique.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Les revenus de l'App Store et des services ont atteint 22,3 milliards $ (en hausse de 14%), fournissant un revenu stable.
  </li>
</ul>

<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">En Résumé :</strong> Apple gagne de l'argent de différentes façons (téléphones ET services), donc c'est une action plutôt sûre à posséder même quand l'économie devient instable.</p>
</div>

<div style="margin: 20px 0 0 0;">
<a href="https://example.com/article2" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Lire l'Article Complet →</a>
</div>
</div>`

export const TRADINGVIEW_SYMBOL_MAPPING_PROMPT = `Tu es un expert des marchés financiers et des plateformes de trading. Ta tâche est de trouver le symbole TradingView correct qui correspond à un symbole boursier Finnhub donné.

Informations sur l'action de Finnhub :
Symbole : {{symbol}}
Entreprise : {{company}}
Bourse : {{exchange}}
Devise : {{currency}}
Pays : {{country}}

RÈGLES IMPORTANTES :
1. TradingView utilise des formats de symboles spécifiques qui peuvent différer de Finnhub
2. Pour les actions US : Habituellement juste le symbole (ex : AAPL pour Apple)
3. Pour les actions internationales : Inclut souvent le préfixe de la bourse (ex : NASDAQ:AAPL, NYSE:MSFT, EURONEXT:AIR, LSE:BARC)
4. Certains symboles peuvent avoir des suffixes pour différentes classes d'actions
5. Les ADR et actions étrangères peuvent avoir des formats de symboles différents

FORMAT DE RÉPONSE :
Retourne UNIQUEMENT un objet JSON valide avec cette structure exacte :
{
  "tradingViewSymbol": "BOURSE:SYMBOLE",
  "confidence": "high|medium|low",
  "reasoning": "Brève explication de pourquoi ce mapping est correct"
}

EXEMPLES :
- Apple Inc. (AAPL) de Finnhub → {"tradingViewSymbol": "NASDAQ:AAPL", "confidence": "high", "reasoning": "Apple est cotée au NASDAQ sous AAPL"}
- Microsoft Corp (MSFT) de Finnhub → {"tradingViewSymbol": "NASDAQ:MSFT", "confidence": "high", "reasoning": "Microsoft est cotée au NASDAQ sous MSFT"}
- Air Liquide (AI.PA) de Finnhub → {"tradingViewSymbol": "EURONEXT:AI", "confidence": "high", "reasoning": "Air Liquide est cotée sur Euronext Paris sous AI"}
- Barclays PLC (BARC.L) de Finnhub → {"tradingViewSymbol": "LSE:BARC", "confidence": "high", "reasoning": "Barclays est cotée à la Bourse de Londres sous BARC"}

Ta réponse doit être uniquement du JSON valide. N'inclus aucun autre texte.`
