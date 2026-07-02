import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="container not-found">
      <div className="not-found__code">404</div>
      <h1 className="not-found__heading">Page not found</h1>
      <p className="not-found__sub">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home <Icon name="arrowRight" size={16} />
      </Link>
    </div>
  );
}
