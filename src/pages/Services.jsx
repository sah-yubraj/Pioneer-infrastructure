import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { SERVICES, QUALITY_STANDARDS } from "../data/services";
import "../styles/Services.css";

export default function Services() {
  return (
    <div>
      <section className="services-hero">
        <div className="container">
          <div className="eyebrow section-eyebrow">What We Do</div>
          <h1 className="services-hero__heading">
            Services built for every phase of construction
          </h1>
          <p className="services-hero__sub">
            From first site assessment to final handover, our teams cover the full scope of
            residential, commercial, industrial, and civil construction work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((service) => (
            <div key={service.slug} id={service.slug} className="service-row">
              <div className="service-row__num">{service.num}</div>
              <div>
                <Icon name={service.icon} size={32} color="var(--orange)" />
                <h2 className="service-row__title">{service.title}</h2>
                <div className="eyebrow">{service.category}</div>
              </div>
              <p className="service-row__detail">{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container">
          <div className="eyebrow section-eyebrow">Our Approach</div>
          <h2 className="section-heading-light section-heading--spaced">
            Standards we don't compromise on
          </h2>
          <div className="standards-grid">
            {QUALITY_STANDARDS.map((std) => (
              <div key={std.title}>
                <Icon name={std.icon} size={32} color="var(--orange)" />
                <h3 className="standard__title">{std.title}</h3>
                <p className="standard__desc">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <h2 className="services-cta__heading">
            Not sure which service fits your project?
          </h2>
          <Link to="/contact" className="btn btn-primary">
            Talk to Our Team <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
