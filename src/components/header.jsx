import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <div className="options">
        <ul className="linksList">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="account">
          <button id="login">Login</button>
          <button id="signUp">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
