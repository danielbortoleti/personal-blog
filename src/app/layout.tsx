import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Tech",
  description: "Your go-to source for insightful articles, tutorials, and the latest trends in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900 flex flex-col min-h-screen`}>
        <Container>
          <Header/>
          {children}
          <Footer/>
        </Container>
        </body>
    </html>
  );
}
