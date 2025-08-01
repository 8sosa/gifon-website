'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>GEOINT Symposium 2026 | 2024 Annual Report</span>
        <div>
          {/* <Link href="#">Newsletter</Link> */}
          {/* <Link href="#">Become a Member</Link> */}
          {/* <Link href="#">Sign in / Create account</Link> */}
        </div>
      </div>

      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Gifon" width={1000} height={1000} />
        </Link>

        <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/membership" onClick={closeMenu}>Membership</Link>
          <Link href="/events" onClick={closeMenu}>Events</Link>
          {/* <Link href="/community" onClick={closeMenu}>Community</Link> */}
          {/* <Link href="/resources" onClick={closeMenu}>Resources</Link> */}
          <Link href="/news" onClick={closeMenu}>News</Link>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}
