// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explainit.io",
  description: "Understand anything, at your level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-start p-6">
        {children}
      </body>
    </html>
  );
}
