import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { AppProviders } from "@/components/app-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "iBuild Hackathon",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`min-h-screen ${inter.className}`}>
        <AppProviders>
            {children}
        </AppProviders>
        </body>
        </html>
    );
}
