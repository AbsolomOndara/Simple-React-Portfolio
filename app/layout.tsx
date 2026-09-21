import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Software Engineer",
  description: "Software engineer building thoughtful interfaces, reliable systems, and products people enjoy using.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
