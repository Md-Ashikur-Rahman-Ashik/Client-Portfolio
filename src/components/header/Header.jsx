import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to={"/index.html"} className="nav__logo">
          Saiful
        </Link>

        <div className="nav__menu">
          <ul className="nav__list grid">
            {/* First list item */}
            <li className="nav__item">
              <a href={"#home"} className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            {/* Second list item */}
            <li className="nav__item">
              <a href={"#about"} className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            {/* Third list item */}
            <li className="nav__item">
              <a href={"#skills"} className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            {/* Fourth list item */}
            <li className="nav__item">
              <a href={"#services"} className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            {/* Fifth list item */}
            <li className="nav__item">
              <a href={"#portfolio"} className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            {/* Sixth list item */}
            <li className="nav__item">
              <a href={"#contact"} className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
