import React from "react";

export default function Skills() {
  const skillsData = [
    { name: "React", icon: "bi bi-brilliance text-info" }, // Changed to a general "spark" or "brilliance" icon
    { name: "Node.js", icon: "bi bi-box-fill text-success" }, // Changed to a general "box" or "container" icon
    { name: "Express.js", icon: "bi bi-lightning-fill text-muted" }, // Changed to a general "lightning" icon
    { name: "MongoDB", icon: "bi bi-database-fill text-dark" },
    { name: "Claude API", icon: "bi bi-robot text-primary" },
    { name: "OpenAI", icon: "bi bi-cpu-fill text-secondary" },
    { name: "Docker", icon: "bi bi-box-seam-fill text-info" },
    { name: "GitHub Actions", icon: "bi bi-git text-dark" },
    { name: "Playwright", icon: "bi bi-browser-chrome text-success" },
    { name: "Jest", icon: "bi bi-stars text-danger" }, // Changed to a general "stars" icon
  ];

  return (
    <section
      id="skills"
      className=" py-5 py-lg-6 bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mt-5 ">
        <h2 className="text-center fw-bold text-dark mb-5 mb-lg-6 animate__animated animate__fadeInDown">
          <i className="bi bi-brain me-3 text-primary"></i>My Skills
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="col animate__animated animate__fadeInUp "
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="card card-hover h-100 shadow rounded-4 border-0 ">
                <div className="card-body text-center p-4">
                  <i
                    className={`${skill.icon} fs-1 mb-3`}
                    style={{ display: "block" }}
                  ></i>
                  <h5 className="fw-bold text-dark mb-0">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
