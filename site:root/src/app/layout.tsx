import { Blubberfish } from "@lib/react/icons";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlubberFish",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen min-h-screen from-blue-800 to-violet-900 bg-gradient-to-br text-white">
          <div className="w-full max-w-sm mx-auto pt-16">
            <header className="mx-6 mb-8">

            <Blubberfish className="h-24 opacity-85 backdrop-blur" />
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
