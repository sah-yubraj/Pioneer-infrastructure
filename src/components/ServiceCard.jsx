import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className={`service-card${service.dark ? " service-card--dark" : ""}`}
    >
      <div className="service-card__top">
        <Icon name={service.icon} size={32} color="var(--orange)" />
        <span className="service-card__num">{service.num}</span>
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__summary">{service.summary}</p>
      <div className="service-card__cta">
        Learn more <Icon name="arrowRight" size={16} />
      </div>
    </Link>
  );
}
