import React from "react";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      role: "Quality Analyst",
      company: "GUVI",
      duration: "2023–Present",
      description: "QA + tech role reviewing MERN content & assisting learners",
      icon: "bi bi-award-fill text-warning", // Bootstrap icon for this entry
    },
    {
      id: 2,
      role: "Civil Engineering",
      company: "Various Roles", // Clarified for better presentation
      duration: "2017–2023",
      description:
        "Project execution, stakeholder management, transition into tech",
      icon: "bi bi-building-fill text-info", // Bootstrap icon for this entry
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white py-5 py-lg-6 d-flex flex-column justify-content-center align-items-center" // Responsive padding, flex column for content
      style={{ minHeight: "100vh" }} // Ensures section takes at least full viewport height
    >
      <div className="container">
        <h2 className="text-center  fw-bold text-dark mb-5 mb-lg-6 animate__animated animate__fadeInDown">
          <i className=" me-3 text-primary"></i>My
          Experience
        </h2>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {" "}
            {/* Constrain content width on large screens */}
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className="card  shadow-lg border-0 rounded-4 mb-4 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="card-body p-4 d-flex align-items-start">
                  {" "}
                  {/* Use flexbox for icon and text alignment */}
                  <i
                    className={`${item.icon} fs-2 me-4 flex-shrink-0`}
                    style={{ minWidth: "40px" }}
                  ></i>{" "}
                  {/* Icon styling and spacing */}
                  <div>
                    <h5 className="card-title fw-bold text-primary mb-1">
                      {item.role}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.company}{" "}
                      <span className="fw-normal">({item.duration})</span>
                    </h6>
                    <p className="card-text text-dark">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
