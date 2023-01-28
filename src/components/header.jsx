import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

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

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburgerMenu">
      {open ? (
        <RiCloseFill
          size={24}
          className={`hamburger`}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <RiMenuFill
          size={24}
          className={`hamburger`}
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <nav className="mobile-menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <hr />
          <div>
            <span>Login</span>
            <span>Sign Up</span>
          </div>
        </nav>
      )}
    </div>
  );
}

export default function Header(props) {
  const { windowDimensions } = props;

  return (
    <header>
      <img src={logo} alt="Logo" />
      {windowDimensions.width <= 800 ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
}
