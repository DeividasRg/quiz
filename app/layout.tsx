import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ContextWrapper from "@/lib/ContextWrapper";

const figTree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mellow flow - Personalized alcohol free plan",
  description: "Get your personalized alcohol free plan",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figTree.className} bg-[#F9F6F4] text-[#303030]`}
    >
      <body className="h-[640px]">
        <ContextWrapper>
          <Header />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
