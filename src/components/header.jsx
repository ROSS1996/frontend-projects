import styles from "../assets/styles/Header.module.css";

import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.options}>
        <ul className={styles.linksList}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className={styles.account}>
          <button className={styles.login}>Login</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
