import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Atkinson_Hyperlegible, Noto_Sans_KR } from "next/font/google";

// 영문 폰트
const atkinsonMono = Atkinson_Hyperlegible({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

// 한글 폰트
const notoSansKR = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "League of Legend Project",
  description: "Information about League of Legend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${atkinsonMono.className} ${notoSansKR.className}`}
    >
      <body className="bg-black text-white">
        <NavBar />
        <main className="container w-screen">{children}</main>
      </body>
    </html>
  );
}
