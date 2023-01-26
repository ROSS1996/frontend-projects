import styles from "../assets/styles/Footer.module.css";
import logo from "../assets/logo.svg";

import {
  FaTwitter,
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.importantLinks}>
        <div>
          <h3>Features</h3>
          <ul className={styles.linksList}>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h3>Resources </h3>
          <ul className={styles.linksList}>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul className={styles.linksList}>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={styles.socials}>
          <li>
            <FaFacebookSquare size={24} className={styles.socialsIcons} />
          </li>
          <li>
            <FaTwitter size={24} className={styles.socialsIcons} />
          </li>
          <li>
            <FaPinterest size={24} className={styles.socialsIcons} />
          </li>
          <li>
            <FaInstagram size={24} className={styles.socialsIcons} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
