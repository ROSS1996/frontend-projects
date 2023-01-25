import styles from "../assets/styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div>
        <span>Features</span> <span>Pricing</span> <span>Resources</span>
      </div>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}
