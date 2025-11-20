import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from './fonts';
import NavBar from '@/components/layouts/navbar';
import FootBar from '@/components/layouts/footbar';

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
    <html
      lang='ko'
      className={pretendard.variable}
    >
      <body>
        <NavBar />
        <div className='px-9 md:px-28 lg:px-58 md:pt-11'>{children}</div>
        <FootBar />
      </body>
    </html>
  );
}
