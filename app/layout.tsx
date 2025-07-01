import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'مركز النور - أكبر مركز عربي لاختبار وعلاج التوحد',
  description: 'مركز النور المتخصص في تشخيص وعلاج اضطراب طيف التوحد للأطفال. اختبارات شاملة، برامج علاج متطورة، ودعم كامل للأسر.',
  keywords: 'التوحد، اختبار التوحد، علاج التوحد، طيف التوحد، أطفال التوحد، تشخيص التوحد',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased bg-slate-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}