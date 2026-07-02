import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="project-card">
      <div className="project-card__img-wrap">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="project-card__img"
        />
      </div>
      <div className="project-card__overlay" />
      <div className="project-card__badges">
        <span className="project-card__badge">{project.cat}</span>
        {project.status === "ongoing" && (
          <span className="project-card__badge project-card__badge--ongoing">ONGOING</span>
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__location">{project.location}</p>
          </div>
          <Icon name="arrowUpRight" size={20} />
        </div>
      </div>
    </Link>
  );
}
