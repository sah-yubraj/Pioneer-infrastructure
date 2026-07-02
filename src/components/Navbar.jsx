import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "./Icon";
import { NAV_LINKS, COMPANY } from "../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`navbar${scrolled || open ? " navbar--scrolled" : ""}`}
    >
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          {COMPANY.shortName}
          <span className="navbar__logo-dot">.</span>
        </Link>

        <nav aria-label="Primary" className="navbar__nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Get a Quote
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="navbar__toggle"
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="container navbar__mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn btn-primary navbar__mobile-cta"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
