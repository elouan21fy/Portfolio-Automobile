import type { Metadata } from "next";
import "../legacy/css/main.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Portfolio automobile — Home",
  description: "Photographie Automobile · Nantes. Projets automobiles, car spotting, collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
