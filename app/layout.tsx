import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "m00n · Frontend Developer";
const siteDescription = "오마고치의 게임 시스템 기획부터 React Island, 디자인 시스템, BFF 연동까지 설계한 프론트엔드 개발자 m00n의 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://m00n-frontend.legend3204.chatgpt.site"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    title: siteTitle,
    description: "Useful interfaces. Thoughtful code.",
    images: [{ url: "/assets/og.png", width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: "Useful interfaces. Thoughtful code.",
    images: ["/assets/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
