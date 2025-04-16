// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explainit.io",
  description: "Understand anything, at your level.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Explain complex topics in simple terms for any age. Make learning easy!"
      />
      <link rel="icon" href="/favicon.ico" />
      <head>
        <script
          defer
          data-domain="explainit.io"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-start p-6">
        {children}
      </body>
    </html>
  );
}
