import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI System",
  description: "UI system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
