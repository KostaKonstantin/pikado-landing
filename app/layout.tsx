import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pikado — Darts League Management",
  description:
    "Pikado is the all-in-one platform for managing darts leagues, tournaments, and players.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
