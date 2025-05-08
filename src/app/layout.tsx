import type { Metadata } from "next";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { routes } from "@/components/routes";

export const metadata: Metadata = {
    title: "NGPS",
    description: "A nest generation positioning system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="wrapper">
                    <Sidebar routes={routes} />
                    <div className="main-panel h-full">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
