import "./globals.css";
import FcmInitializer from "@/components/FcmInitializer";

export const metadata = {
  title: "bi3li",
  description: "Plateforme d'annonces en Mauritanie",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-[#f6f7fb] text-slate-900">

        {/* 🔔 INITIALISATION FCM */}
        <FcmInitializer />

        {children}
      </body>
    </html>
  );
}