export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Bienvenue sur FinTales</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #9ca3af !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-button {
                width: 100% !important;
                text-align: center !important;
            }
            .mobile-button a {
                width: calc(100% - 64px) !important;
                display: block !important;
                text-align: center !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
            .dashboard-preview {
                padding: 0 15px 30px 15px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" class="dashboard-preview" style="padding: 40px 40px 0px 40px;">
                            <img src="https://ik.imagekit.io/a6fkjou7d/dashboard-preview.png?updatedAt=1756378548102" alt="FinTales Dashboard" width="100%" style="max-width: 520px; width: 100%; height: auto; border-radius: 12px; border: 1px solid #30333A;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px 40px 40px 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 30px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                Bienvenue {{name}} !
                            </h1>
                            
                            {{intro}}  
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; color: #CCDADC; font-weight: 600;">
                                Voici ce que tu peux faire dès maintenant :
                            </p>
                            
                            <ul class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                <li style="margin-bottom: 12px;">Configure ta watchlist pour suivre tes actions préférées</li>
                                <li style="margin-bottom: 12px;">Crée des alertes de prix et de volume pour ne jamais rater un mouvement</li>
                                <li style="margin-bottom: 12px;">Explore le tableau de bord pour découvrir les tendances et les dernières actualités du marché</li>
                            </ul>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 40px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Nous te tiendrons informé avec des mises à jour opportunes, des analyses et des alertes — pour que tu puisses te concentrer sur les bonnes décisions.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 40px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Accéder au Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                               FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Se désabonner</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Résumé Quotidien du Marché - FinTales</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #CCDADC !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
            .dark-info-box {
                background-color: #212328 !important;
                border: 1px solid #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-news-title {
                font-size: 18px !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                📈 Résumé Quotidien du Marché
                            </h1>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 40px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                {{date}} — Voici ce qui s'est passé sur les marchés aujourd'hui
                            </p>
                            
                            {{newsContent}}
                            
                            <div style="border-top: 1px solid #374151; margin: 40px 0 30px 0;"></div>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Reste informé avec FinTales et ne rate aucun mouvement du marché.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 40px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Voir Plus sur le Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                                FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Se désabonner</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const STOCK_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Alerte de Prix - FinTales</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #CCDADC !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
            .dark-alert-box {
                background-color: #1a1a1a !important;
                border: 1px solid #374151 !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
            .mobile-price {
                font-size: 32px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                🔔 Alerte de Prix Déclenchée
                            </h1>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                {{symbol}} a atteint ton prix cible
                            </p>
                            
                            <div class="dark-alert-box" style="background-color: #1a1a1a; border: 1px solid #374151; border-radius: 8px; padding: 30px; margin: 0 0 30px 0; text-align: center;">
                                <p class="mobile-text dark-text-secondary" style="margin: 0 0 10px 0; font-size: 14px; color: #CCDADC; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Prix Actuel
                                </p>
                                <p class="mobile-price dark-text" style="margin: 0 0 5px 0; font-size: 48px; font-weight: 700; color: {{priceColor}}; line-height: 1;">
                                    {{currentPrice}}
                                </p>
                                <p class="mobile-text" style="margin: 0; font-size: 16px; color: {{changeColor}}; font-weight: 500;">
                                    {{changePercent}} aujourd'hui
                                </p>
                            </div>
                            
                            <div style="background-color: #141414; border: 1px solid #374151; padding: 20px; border-radius: 8px; margin: 0 0 30px 0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <span class="mobile-text dark-text-secondary" style="font-size: 14px; color: #CCDADC;">Ton Prix Cible</span>
                                        </td>
                                        <td align="right" style="padding: 10px 0;">
                                            <span class="mobile-text dark-text" style="font-size: 14px; color: #FDD458; font-weight: 600;">{{targetPrice}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-top: 1px solid #374151;">
                                            <span class="mobile-text dark-text-secondary" style="font-size: 14px; color: #CCDADC;">Type d'Alerte</span>
                                        </td>
                                        <td align="right" style="padding: 10px 0; border-top: 1px solid #374151;">
                                            <span class="mobile-text dark-text" style="font-size: 14px; color: #ffffff; font-weight: 500;">{{alertType}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-top: 1px solid #374151;">
                                            <span class="mobile-text dark-text-secondary" style="font-size: 14px; color: #CCDADC;">Heure</span>
                                        </td>
                                        <td align="right" style="padding: 10px 0; border-top: 1px solid #374151;">
                                            <span class="mobile-text dark-text" style="font-size: 14px; color: #ffffff;">{{time}}</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 30px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Voir les Détails
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                                FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Gérer les Alertes</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Alerte de Volume - FinTales</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #CCDADC !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                📊 Alerte de Volume Inhabituel
                            </h1>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                {{symbol}} connaît un volume d'échanges inhabituellement élevé
                            </p>
                            
                            <div style="background-color: #1a1a1a; border: 1px solid #374151; border-radius: 8px; padding: 30px; margin: 0 0 30px 0;">
                                <p class="mobile-text dark-text-secondary" style="margin: 0 0 10px 0; font-size: 14px; color: #CCDADC;">
                                    Volume Actuel
                                </p>
                                <p class="mobile-text dark-text" style="margin: 0 0 15px 0; font-size: 32px; font-weight: 700; color: #FDD458; line-height: 1;">
                                    {{currentVolume}}
                                </p>
                                <p class="mobile-text" style="margin: 0; font-size: 16px; color: #10b981;">
                                    {{volumeIncrease}} au-dessus de la moyenne
                                </p>
                            </div>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Un volume élevé peut indiquer un intérêt accru des investisseurs ou des nouvelles importantes. Cela peut être le moment d'agir ou de surveiller de plus près.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 30px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Analyser les Mouvements
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                                FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Gérer les Alertes</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>On te manque - FinTales</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #CCDADC !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                Tu nous manques, {{name}} ! 👋
                            </h1>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Ça fait un moment qu'on ne t'a pas vu sur FinTales. Les marchés ont beaucoup bougé depuis ta dernière visite !
                            </p>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Voici ce que tu as manqué :
                            </p>
                            
                            <ul class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                <li style="margin-bottom: 12px;">{{highlight1}}</li>
                                <li style="margin-bottom: 12px;">{{highlight2}}</li>
                                <li style="margin-bottom: 12px;">{{highlight3}}</li>
                            </ul>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Reprends le contrôle de tes investissements et reste informé des dernières tendances du marché.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 30px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Revenir sur FinTales
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                                FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Se désabonner</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const WATCHLIST_UPDATE_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Mise à Jour de ta Watchlist - FinTales</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #CCDADC !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/2el7jk9go/fintalesgo.png" alt="FinTales Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <h1 class="mobile-title dark-text" style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                📋 Mise à Jour de ta Watchlist
                            </h1>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Voici un résumé quotidien des actions que tu suis de près.
                            </p>
                            
                            {{watchlistContent}}
                            
                            <div style="border-top: 1px solid #374151; margin: 30px 0;"></div>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 30px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
                                            Gérer ma Watchlist
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
                                FinTales HQ, 2 Av. du blanchissage, Avignon<br>
                                <a href="#" style="color: #CCDADC !important; text-decoration: underline;">Se désabonner</a> | 
                                <a href="https://github.com/0knowledge888/FinTales_Stock-tracker-app" style="color: #CCDADC !important; text-decoration: underline;">Visiter FinTales</a><br>
                                © 2025 FinTales
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
