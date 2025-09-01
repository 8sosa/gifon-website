import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoSection}>
          <Image src="/logo.png" alt="GIFON Logo" width={160} height={40} />
        </div>

        
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} GIFON.</p>
        <p>All rights reserved.</p>
        {/* Optional: Social icons */}
        {/* <div className={styles.socials}>
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        </div> */}
      </div>
    </footer>
  );
}
