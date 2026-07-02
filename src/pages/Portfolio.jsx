import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <div>
      <section className="portfolio-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Selected Work</div>
          <h1 className="portfolio-hero__heading">
            Projects across the Kathmandu Valley and beyond
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="portfolio-filters"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`filter-btn${filter === cat ? " filter-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="portfolio-empty">No projects in this category yet.</p>
          ) : (
            <div className="portfolio-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
