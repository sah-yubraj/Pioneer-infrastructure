import Icon from "./Icon";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <Icon name="quote" size={28} color="var(--orange)" />
      <p className="testimonial-card__quote">{testimonial.quote}</p>
      <div>
        <div className="testimonial-card__name">{testimonial.name}</div>
        <div className="testimonial-card__role">{testimonial.role}</div>
      </div>
    </div>
  );
}
