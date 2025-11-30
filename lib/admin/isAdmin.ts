import { getAuthInstance } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Liste des emails admin (à mettre dans .env en production)
const ADMIN_EMAILS = [
  process.env.ADMIN_EMAIL || "mouretgreg@gmail.com",
];

export async function checkAdminAccess() {
  const auth = await getAuthInstance();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  if (!ADMIN_EMAILS.includes(session.user.email)) {
    redirect("/"); // Redirige si pas admin
  }

  return session.user;
}
