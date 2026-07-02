import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import { PROJECTS } from "../data/projects";
import "../styles/ProjectDetails.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container project-not-found">
        <h1 className="project-not-found__heading">Project not found</h1>
        <p className="project-not-found__sub">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/portfolio" className="btn btn-outline-dark">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section
        className="project-detail-hero"
        style={{
          background: `linear-gradient(180deg, rgba(15,27,45,0.3), rgba(15,27,45,0.92)), url(${project.img}) center/cover`,
        }}
      >
        <div className="container project-detail-hero__inner">
          <Link to="/portfolio" className="project-detail-hero__back">
            <Icon name="arrowRight" size={14} className="icon-flip" />
            Back to Portfolio
          </Link>
          <span className="project-detail-hero__cat">{project.cat}</span>
          <h1 className="project-detail-hero__heading">{project.title}</h1>
          <p className="project-detail-hero__meta">
            {project.location} &middot; {project.year}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container project-detail-grid">
          <div>
            <div className="eyebrow section-eyebrow">Overview</div>
            <p className="project-detail-body">{project.detail}</p>
            {project.gallery.length > 1 && (
              <div className="project-detail-gallery">
                {project.gallery.map((src, i) => (
                  <img key={i} src={src} alt={`${project.title} photo ${i + 1}`} />
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-sidebar">
            <div className="eyebrow section-eyebrow">Project Details</div>
            <dl className="project-detail-dl">
              <div>
                <dt>Status</dt>
                <dd>{project.status === "ongoing" ? "Ongoing" : "Completed"}</dd>
              </div>
              <div>
                <dt>Scale</dt>
                <dd>{project.stats.area}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{project.stats.duration}</dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>{project.stats.client}</dd>
              </div>
            </dl>
            <Link to="/contact" className="btn btn-primary btn-full project-detail-cta">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
