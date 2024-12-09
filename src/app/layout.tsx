import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nft Website",
  description: "Nft Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/icons/hoobank.svg" type="image/<generated>" sizes="<generated>" />
      </head>
      <body className="w-full min-h-screen overflow-x-hidden min-w-[425px] relative">{children}</body>
    </html >
  );
}
