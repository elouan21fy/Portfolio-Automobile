import type { Metadata } from "next";
import "../legacy/css/main.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Automotive Portfolio — Home",
  description: "Automotive Photography · Nantes. Automotive projects, car spotting, collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
