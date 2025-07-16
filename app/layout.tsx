'use client';

import './globals.css';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [path]);

  return (
    <html lang="en">
      <head>
        <title>LensCraft | Camera Portfolio</title>
        <meta name="description" content="A professional camera portfolio showcasing photography work and creativity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-brand"><strong>LensCraft</strong></div>

          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </nav>

        {children}
      </body>
    </html>
  );
}
