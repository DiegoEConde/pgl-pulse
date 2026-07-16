import type { Metadata } from "next";
import "./globals.css";
import "../styles/layout.css";
import "../styles/header.css";
import "../styles/navigation.css";
import "../styles/workspace.css";

export const metadata: Metadata = {
  title: "PGL Pulse",
  description: "Sistema de gestión PGL Pulse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}