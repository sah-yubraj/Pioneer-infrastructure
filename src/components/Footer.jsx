import { Link } from "react-router-dom";
import Icon from "./Icon";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "../data/constants";

const socialIcons = {
  fb: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  ig: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  tt: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">

          <div>
            <div className="footer__brand-name">
              {COMPANY.shortName}<span>.</span>
            </div>
            <p className="footer__tagline">
              Building Nepal's residential, commercial, and civil infrastructure with
              structural integrity and architectural ambition.
            </p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer__social-btn"
                >
                  {socialIcons[s.key]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow footer__col-label">Navigate</div>
            <ul className="footer__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow footer__col-label">Contact</div>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Icon name="pin" size={18} />
                <span>{COMPANY.address}</span>
              </li>
              <li className="footer__contact-item">
                <Icon name="phone" size={18} />
                <div>
                  <div>Call: {COMPANY.phone}</div>
                  <div className="footer__whatsapp">WhatsApp / Viber: {COMPANY.whatsapp}</div>
                </div>
              </li>
              <li className="footer__contact-item footer__contact-item--inline">
                <Icon name="mail" size={18} />
                <span>{COMPANY.email}</span>
              </li>
              <li className="footer__social-handles">
                Facebook, Instagram, TikTok: <span>Pioneer_01</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>{COMPANY.registration}</span>
        </div>
      </div>
    </footer>
  );
}
