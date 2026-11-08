import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "pocket. | 나의 가계부",
  description: "지출부터 남은 예산까지, 한눈에 확인하는 나의 가계부",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main>
          <header className="topbar">
            <Link href="/" className="brand">pocket<span>.</span></Link>
            <span className="save-status">나의 소비 기록</span>
          </header>
          {children}
          <footer>내 소비를 기록하는 가장 작은 습관.</footer>
        </main>
      </body>
    </html>
  );
}
