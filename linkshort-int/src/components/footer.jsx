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

      <div className={styles.linksList}>
        <div>
          <h3>Features</h3>
          <div>
            <span>Link Shortening</span>
            <span>Branded Links</span>
            <span>Analytics</span>
          </div>
        </div>
        <div>
          <h3>Resources </h3>
          <div>
            <span>Blog</span>
            <span>Developers</span>
            <span>Support</span>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <span>About</span>
            <span>Our Team</span>
            <span>Careers</span>
            <span>Contact</span>
          </div>
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
