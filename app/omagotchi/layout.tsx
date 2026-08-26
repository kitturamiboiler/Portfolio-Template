import type { Metadata } from "next";

const title = "Omagotchi Case Study · m00n";
const description = "기획 문서와 GitHub 이슈, 구현 코드를 문제–판단–결과의 흐름으로 연결한 오마고치 프론트엔드 케이스스터디입니다.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "article",
    title,
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [],
  },
};

export default function OmagotchiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
