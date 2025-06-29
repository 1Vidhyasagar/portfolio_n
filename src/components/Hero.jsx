import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column flex-lg-row justify-content-center align-items-center bg-light  "
      style={{ minHeight: "100vh", paddingTop: "40px" }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center px-lg-5 ">
        <div className=" col-12 col-lg-6 text-center text-lg-start  mb-lg-0 p-4 pe-lg-5">
          <h1 className="display-4 fw-bold text-dark  animate__animated animate__fadeInDown">
            Hi, I'm <span1 className="text-primary">Vidhyasagar Myana</span1>
          </h1>
          <h3 className="text-secondary mt-3 mb-4 fs-4">
            Full Stack AI Developer
          </h3>
          <p className="lead text-muted mb-5">
            After 8 years in Civil Engineering, I transitioned into Full Stack
            AI Development with real-world AI-powered apps using Claude, MERN,
            and Docker.
          </p>
          <a
            href="/Vidhyasagar_Resume.pdf"
            className="btn btn-outline-dark btn-lg shadow-lg animate__animated animate__fadeInUp"
            download
          >
            <i className="bi bi-file-earmark-arrow-down-fill me-2"></i>
            Download Resume
          </a>
        </div>

        <div className="col-12 col-lg-6 text-center ps-lg-5 ">
          <img
            src="/profile.jpg"
            alt="My Photo"
            className="img-fluid shadow-lg   mx-auto d-block opacity-25 "
            style={{
              maxWidth: "300px",
              height: "70vh",
              objectFit: "cover",
              // Apply the V-shaped clip-path
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 80%)", // Adjust points for desired V-shape
            }}
          />
        </div>
      </div>
    </section>
  );
}
