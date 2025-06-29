import React from "react";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      type: "Email",
      value: "vidhyasagarmyana9598@gmail.com",
      link: "mailto:vidhyasagarmyana9598@gmail.com",
      icon: "bi bi-envelope-fill",
      color: "text-info",
    },
    {
      id: 2,
      type: "GitHub",
      value: "github.com/1Vidhyasagar",
      link: "https://github.com/1Vidhyasagar",
      icon: "bi bi-github",
      color: "text-light",
    },
    {
      id: 3,
      type: "LinkedIn",
      value: "My LinkedIn Profile",
      link: "https://linkedin.com/in/vidhyasagar-myana-530a08236",
      icon: "bi bi-linkedin",
      color: "text-primary",
    },
  ];

  return (
    <>
      {/* 📫 Contact Section */}
     
      <section
        id="contact"
        className="bg-dark text-white d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        {/* 💬 Contact Content */}
        <div className="container text-center flex-grow-1 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-5 animate__animated animate__fadeInDown">
            <i className="me-3 text-primary"></i>Contact Me
          </h2>

          <div className="row justify-content-center g-4">
            {contactInfo.map((item, index) => (
              <div
                key={item.id}
                className="col-12 col-md-6 col-lg-4 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="card h-100 bg-secondary bg-gradient border-0 shadow-lg rounded-4">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <i className={`${item.icon} ${item.color} fs-1`}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-2">{item.type}</h5>
                    <p className="card-text text-white-50">{item.value}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm rounded-pill px-3"
                    >
                      <i className="bi bi-arrow-right-circle-fill me-2"></i>
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Sticky Footer */}
        <footer className="bg-black text-white-50 text-center py-1 mt-auto">
          <small>
            © {new Date().getFullYear()} Vidhyasagar Myana — Full Stack AI
            Developer 🚀
          </small>
        </footer>
      </section>
      
    </>
  );
}
