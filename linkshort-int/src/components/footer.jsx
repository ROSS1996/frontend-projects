import logo from "../assets/whitelogo.svg";

import {
  FaTwitter,
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />

      <div className="importantLinks">
        <div>
          <h3>Features</h3>
          <ul className="linksList">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h3>Resources </h3>
          <ul className="linksList">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul className="linksList">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="socials">
          <li>
            <FaFacebookSquare size={24} className="icon" />
          </li>
          <li>
            <FaTwitter size={24} className="icon" />
          </li>
          <li>
            <FaPinterest size={24} className="icon" />
          </li>
          <li>
            <FaInstagram size={24} className="icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
