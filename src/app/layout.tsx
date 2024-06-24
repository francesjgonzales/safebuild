import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "SafeBuild",
  description: "Construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body m-10">
        <Navbar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
