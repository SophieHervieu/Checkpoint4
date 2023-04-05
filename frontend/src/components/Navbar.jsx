import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/tattooartist">
          <li>Tatoueurs</li>
        </Link>
        <Link to="/city">
          <li>Villes</li>
        </Link>
        <Link to="/">
          <li>
            <img src={Logo} alt="dessin de pivoine" />
          </li>
        </Link>
        <li>Styles</li>
        <li>À propos</li>
      </ul>
    </div>
  );
}
