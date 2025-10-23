import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";


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
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Gifon" width={600} height={600} className={styles.logoPng}/>
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold green">GIFON</h1>
              <span className="text-xl font-semibold green">Geospatial Intelligence Foundation of Nigeria</span>
            </div>
          </Link>
        </div>
        <div className={styles.footerRight}>
          {/* Column 2 */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul className='w-max'>
              <li>12 RICHARD CLAPPERTON, OFF MAMAN NASIR</li>
              <li>ASOKORO DISTRICT, FCT, ABUJA NIGERIA.</li>
              <li className='flex flex-row w-full justify-between'>
                <p>Director General:</p>
                <p>+234 707 739 6612</p>
              </li>
              <li className='flex flex-row w-full justify-between'>
                <p>Outreach:</p>
                <p>+234 707 726 9829</p>
              </li>
              <li className='flex flex-row w-full justify-between'>
                <p>Research:</p>
                <p>+234 707 739 6196</p>
              </li>
              <li className='flex flex-row w-full justify-between'>
                <p>Secretariat:</p>
                <p>+234 707 721 1243</p>
              </li>
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
            <ul className='flex flex-col justify-between'>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaXTwitter size={16}/>
                    <h2>X</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaLinkedinIn size={16}/>
                    <h2>LinkedIn</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaFacebookF size={16}/>
                    <h2>Facebook</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaYoutube size={16}/>
                    <h2>Youtube</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaInstagram size={16}/>
                    <h2>Instagram</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex flex-row justify-start items-center gap-4'> 
                    <FaWhatsapp size={16}/>
                    <h2>Whatsapp</h2>
                  </div>
                </a>
              </li>
            </ul>
            <button className={styles.shareBtn}><IoShareSocial /> SHARE THIS PAGE</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} GIFON. All rights reserved.</p>
      </div>
    </footer>
  );
}
