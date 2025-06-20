import ModalRoot from "@/components/modals/ModalRoot";
import { StoreProvider } from "@/providers/MobXProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Emotion board",
    description: "An interactive emotion board to track, visualize, and manage your feelings. Add, drag, and comment on emotions with local storage support and mobile-friendly design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${robotoSans.className}  antialiased`}
            >
                <StoreProvider>
                    <ModalRoot />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
