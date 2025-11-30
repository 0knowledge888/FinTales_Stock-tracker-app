"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      declineButtonText="Refuser"
      enableDeclineButton
      cookieName="fintales-cookie-consent"
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid #333",
        padding: "20px",
      }}
      buttonStyle={{
        background: "#FFC107",
        color: "#000",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px",
        fontWeight: "bold",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #666",
        color: "#fff",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px",
      }}
      expires={365}
    >
      Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
      En continuant, vous acceptez notre{" "}
      <a href="/privacy" style={{ color: "#FFC107", textDecoration: "underline" }}>
        politique de confidentialité
      </a>
      .
    </CookieConsent>
  );
}
