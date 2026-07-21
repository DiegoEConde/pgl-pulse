import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import "@/styles/variables.css";
import "@/styles/animations.css";

import "@/styles/globals.css";
import "@/styles/layout.css";

import "@/styles/header.css";
import "@/styles/navigation.css";
import "@/styles/workspace.css";

import "@/styles/dashboard.css";
import "@/styles/stat-card.css";
import "@/styles/panel.css";
import "@/styles/alert-center.css";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

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
        <html lang="es" className={ibmPlexSans.className}>
            <body>
                {children}
            </body>
        </html>
    );
}