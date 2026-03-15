'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/keystatic');

  return (
    <>
      {!isAdminRoute && <Navigation />}
      <main className={isAdminRoute ? undefined : 'min-h-screen'}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
