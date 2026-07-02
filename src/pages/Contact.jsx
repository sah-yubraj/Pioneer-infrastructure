import { useState } from "react";
import Icon from "../components/Icon";
import { COMPANY, SOCIAL_LINKS } from "../data/constants";
import "../styles/Contact.css";

const SERVICE_OPTIONS = [
  "Residential Construction",
  "Commercial Development",
  "Industrial Facilities",
  "Civil Infrastructure",
  "Technical Consulting",
  "Other",
];

const socialIcons = {
  fb: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  ig: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  tt: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  ),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Tell us about your project.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Get in Touch</div>
          <h1 className="contact-hero__heading">Let's talk about your project</h1>
          <p className="contact-hero__sub">
            Tell us a little about what you're building and we'll get back to you within one
            business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Contact Details</div>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <Icon name="pin" size={22} color="var(--orange)" />
                <div>
                  <div className="contact-info-item__label">Office</div>
                  <div className="contact-info-item__value">{COMPANY.address}</div>
                </div>
              </li>
              <li className="contact-info-item">
                <Icon name="phone" size={22} color="var(--orange)" />
                <div>
                  <div className="contact-info-item__label">Call</div>
                  <div className="contact-info-item__value">{COMPANY.phone}</div>
                  <div className="contact-info-item__sub">WhatsApp / Viber: {COMPANY.whatsapp}</div>
                </div>
              </li>
              <li className="contact-info-item">
                <Icon name="mail" size={22} color="var(--orange)" />
                <div>
                  <div className="contact-info-item__label">Email</div>
                  <div className="contact-info-item__value">{COMPANY.email}</div>
                </div>
              </li>
            </ul>

            <div className="contact-social-heading">FIND US ON SOCIAL</div>
            <div className="contact-social-list">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  {socialIcons[s.key]}
                  {s.label}: <strong>Pioneer_01</strong>
                </a>
              ))}
            </div>

            <div className="contact-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                alt="Pioneer Infrastructure office"
              />
            </div>
          </div>

          <div className="contact-form-box">
            {submitted ? (
              <div className="contact-success" role="status">
                <Icon name="check" size={40} color="var(--orange)" />
                <h2 className="contact-success__heading">Message sent</h2>
                <p className="contact-success__body">
                  Thanks, {form.name.split(" ")[0]}. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input id="name" type="text" value={form.name} onChange={update("name")} className="form-input" aria-invalid={!!errors.name} />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone (optional)</label>
                    <input id="phone" type="tel" value={form.phone} onChange={update("phone")} className="form-input" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update("email")} className="form-input" aria-invalid={!!errors.email} />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-field">
                  <label htmlFor="service" className="form-label">Service Needed</label>
                  <select id="service" value={form.service} onChange={update("service")} className="form-select">
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field form-field--last">
                  <label htmlFor="message" className="form-label">Project Details</label>
                  <textarea id="message" rows={5} value={form.message} onChange={update("message")} className="form-textarea" aria-invalid={!!errors.message} />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
