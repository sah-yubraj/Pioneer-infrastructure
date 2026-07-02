import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import StatCounter from "../components/StatCounter";
import { MILESTONES, TEAM } from "../data/testimonials";
import "../styles/About.css";

export default function About() {
  return (
    <div>
      <section className="about-hero">
        <div className="container">
          <div className="eyebrow section-eyebrow">About Pioneer</div>
          <h1 className="about-hero__heading">
            Engineers and builders, working from the same set of drawings
          </h1>
          <p className="about-hero__sub">
            Pioneer Infrastructure was founded on the belief that great construction in Nepal
            requires structural engineering and architectural design to happen in the same room,
            not in separate firms passing drawings back and forth.
          </p>
          <div className="about-hero__stats">
            <StatCounter value="42" suffix="+" label="Projects Delivered" />
            <StatCounter value="98" suffix="%" label="On-Time Completion" />
            <StatCounter value="2" label="Years in Operation" />
            <StatCounter value="15" suffix="+" label="Engineering Specialists" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          <div>
            <div className="eyebrow section-eyebrow">Our Mission</div>
            <h2 className="mission-grid__heading">Build for the ground it stands on</h2>
            <p className="mission-grid__body">
              Nepal's terrain and seismic activity demand a different baseline than most
              construction standards assume. We start every project with a structural and
              geological assessment specific to its site, not a generic template scaled to fit.
            </p>
            <p className="mission-grid__body">
              That approach has shaped everything from how we source materials to how we train
              our site teams, and it's why clients return to us for projects where the margin
              for error is small.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
            alt="Construction site with structural framework"
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="eyebrow section-eyebrow">Our Story</div>
          <h2 className="section-heading-dark section-heading--spaced">How we got here</h2>
          <div className="milestones">
            {MILESTONES.map((m) => (
              <div key={m.title} className="milestone">
                <div className="milestone__year">{m.year}</div>
                <div>
                  <h3 className="milestone__title">{m.title}</h3>
                  <p className="milestone__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow section-eyebrow">Leadership</div>
          <h2 className="section-heading-dark section-heading--spaced">
            The team behind the build
          </h2>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card">
                <h3 className="team-card__name">{member.name}</h3>
                <div className="eyebrow team-card__role">{member.role}</div>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <h2 className="about-cta__heading">Want to work with us?</h2>
          <Link to="/contact" className="btn btn-navy">
            Get in Touch <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
