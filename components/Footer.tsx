import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-sm text-gray-400">
        <Link href="/privacy" className="hover:text-white">
          Politique de confidentialité
        </Link>
        <Link href="/legal" className="hover:text-white">
          Mentions légales
        </Link>
        <span>© 2025 FinTales. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
