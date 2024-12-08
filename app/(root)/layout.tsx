import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Header from "@/components/ui/shared/Header";
import Footer from "@/components/ui/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
