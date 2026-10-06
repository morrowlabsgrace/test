import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Antigravity | 차세대 자율형 AI 코딩 에이전트",
  description: "개발의 중력을 거스르는 자율형 코딩 AI. 계획 수립, 터미널 제어, 브라우저 시각 검증까지 스스로 수행하는 Google DeepMind 기술 기반의 차세대 소프트웨어 엔지니어링 에이전트.",
  keywords: ["Antigravity", "AI Coding Agent", "Google DeepMind", "Autonomous Software Engineering", "자율형 코딩 AI"],
  authors: [{ name: "Google DeepMind Antigravity Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Antigravity | 차세대 자율형 AI 코딩 에이전트",
    description: "개발의 모든 마찰과 중력을 없애다. 스스로 계획하고 터미널을 조작하는 자율 코딩 AI",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
