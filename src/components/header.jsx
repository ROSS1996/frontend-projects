import { RiMenuFill } from "react-icons/ri";

import logo from "../assets/logo.svg";

function DesktopMenu() {
  return (
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
  );
}

export default function Header(props) {
  const { windowDimensions } = props;

  return (
    <header>
      <img src={logo} alt="Logo" />
      {windowDimensions.width <= 800 ? (
        <RiMenuFill size={24} className="hamburger" />
      ) : (
        <DesktopMenu />
      )}
    </header>
  );
}
