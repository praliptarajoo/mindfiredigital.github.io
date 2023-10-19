import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mindfire | FOSS",
  description:
    "Official GitHub Page for Mindfire Digital LLP. Explore our projects, contributions, and insights in technology, software development, and more. Join us in our journey to push the boundaries of innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
