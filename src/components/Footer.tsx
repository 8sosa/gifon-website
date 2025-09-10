import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  const menuItems = [
    // {
    //   label: 'Home',
    //   href: '/',
    // },
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Programs',
      href: '/programs'
    },
    // {
    //   label: 'Critical Infrastructure Support',
    //   href: '/infrastructure'
    // },
    // {
    //   label: 'Policies',
    //   href: '/policies'
    // },
    // {
    //   label: 'Groups & Forums',
    //   href: '/forums'
    // },
    {
      label: 'Publications',
      href: '/publications'
    },
    {
      label: 'Membership',
      href: '/membership'
    },
    // {
    //   label: 'Media Resources',
    //   href: '/media'
    // },
    // {
    //   label: 'Events',
    //   href: '/events'
    // },
    {
      label: 'Get Involved',
      href: '/get-involved'
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Column 1 (spans half width) */}
        <div className={styles.col1}>
          <Image src="/logo.png" alt="GIFON Logo" width={160} height={40} />
        </div>
        <div className={styles.footerRight}>
          {/* Column 2 */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul>
              <li>12 RICHARD CLAPPERTON,</li>
              <li>OFF MAMAN NASIR, ASOKORO DISTRICT,</li>
              <li>FCT, ABUJA NIGERIA.</li>
              <li>Director General: +234 707 739 6612</li>
              <li>Membership/Outreach: +234 707 726 9829</li>
              <li>Secretariat: +234 707 721 1243</li>
              <li>Email: secretariat@gifon.org.ng</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
            {menuItems.map(item => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.col}>
            <h4>Connect With Us</h4>
            <ul className='flex flex-row justify-between'>
              <li><a href="#"><FaXTwitter size={16}/></a></li>
              <li><a href="#"><FaLinkedinIn size={16}/></a></li>
              <li><a href="#"><FaFacebookF size={16}/></a></li>
              <li><a href="#"><FaYoutube size={16}/></a></li>
              <li><a href="#"><FaInstagram size={16}/></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} GIFON. All rights reserved.</p>
      </div>
    </footer>
  );
}
