import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from './fonts';

export const metadata: Metadata = {
  title: 'ryeong',
  description: 'web portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
