import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import StatCounter from "../components/StatCounter";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import "../styles/Home.css";
import TestimonialCard from "../components/TestimonialCard";
import { SERVICES, QUALITY_STANDARDS } from "../data/services";
import { PROJECTS } from "../data/projects";
import { TESTIMONIALS } from "../data/testimonials";

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <div className="container hero__inner">
          <div className="eyebrow hero__eyebrow">
            Building Nepal's Future, One Structure at a Time
          </div>
          <h1 className="hero__heading">
            Engineering the foundations of tomorrow's Nepal
          </h1>
          <p className="hero__sub">
            From luxury residences to civil infrastructure, Pioneer Infrastructure delivers
            seismic-resilient construction with architectural ambition across the Kathmandu
            Valley and beyond.
          </p>
          <div className="hero__actions">
            <Link to="/portfolio" className="btn btn-primary">
              View Our Work <Icon name="arrowRight" size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Start a Project
            </Link>
          </div>
          <div className="hero__stats">
            <StatCounter value="42" suffix="+" label="Projects Delivered" />
            <StatCounter value="98" suffix="%" label="On-Time Completion" />
            <StatCounter value="2" label="Years in Operation" />
            <StatCounter value="15" suffix="+" label="Engineering Specialists" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow section-eyebrow">Who We Are</div>
            <h2 className="section-heading-dark">
              A construction partner built for Nepal's terrain
            </h2>
            <p className="section-body">
              Pioneer Infrastructure was founded to address a gap in the market: contractors who
              treat seismic engineering as a regulatory checkbox rather than the foundation of
              every design decision. We design and build with the Kathmandu Valley's geology,
              climate, and density in mind from day one.
            </p>
            <p className="section-body section-body--spaced">
              Our in-house team covers structural engineering, architecture, and site operations,
              so every project moves from blueprint to handover under one accountable roof.
            </p>
            <Link to="/about" className="btn btn-outline-dark">
              More About Us <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div className="intro-grid__img">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80"
              alt="Engineers reviewing structural blueprints on site"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow section-eyebrow">What We Do</div>
              <h2 className="section-heading-dark">Our Services</h2>
            </div>
            <Link to="/services" className="btn btn-outline-dark">
              All Services <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div className="services-grid">
            {SERVICES.slice(0, 3).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container">
          <div className="eyebrow section-eyebrow">Why Pioneer</div>
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow section-eyebrow">Selected Work</div>
              <h2 className="section-heading-dark">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline-dark">
              Full Portfolio <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="eyebrow section-eyebrow">Client Voices</div>
          <h2 className="section-heading-dark section-heading--spaced">
            What our clients say
          </h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container">
          <h2 className="cta-banner__heading">Have a site in mind?</h2>
          <p className="cta-banner__sub">
            Tell us about your project and we'll get back to you within one business day.
          </p>
          <Link to="/contact" className="btn btn-navy">
            Get a Free Consultation <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
