// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "explainit.io",
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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4372906584866838"
        crossOrigin="anonymous"
      ></script>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4372906584866838"
          crossOrigin="anonymous"
        ></script>
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
