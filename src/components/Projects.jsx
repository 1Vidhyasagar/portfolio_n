import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="  py-5 py-lg-6 vh-100">
      <div className="container mt-5 ">
        <h2 className="text-center fw-bold text-dark mb-5 mb-lg-6 animate__animated animate__fadeInDown">
          <i className=" me-3 text-primary"></i>AI Projects
        </h2>

        <div className="row justify-content-center">
          {/* Project Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card  card-hover h-100 shadow-lg rounded-4 border-0  ">
              <div className="card-body  p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-primary mb-3 fs-5">
                  <i className="bi bi-file-earmark-check-fill me-2"></i>Resume
                  Scanner AI
                </h5>
                <p className="card-text text-muted flex-grow-1 mb-4">
                  Claude-based resume analyzer with export to PDF/Word.
                </p>
                <div className="d-flex justify-content-start flex-wrap gap-2 mt-auto">
                  <a
                    href="https://resume-scanner-ai-gamma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>Live
                  </a>
                  <a
                    href="https://github.com/1Vidhyasagar/resume-scanner-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-github me-1"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card card-hover h-100 shadow-lg rounded-4 border-0 ">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-primary mb-3 fs-5">
                  <i className="bi bi-film me-2"></i>AI Movie Genius
                </h5>
                <p className="card-text text-muted flex-grow-1 mb-4">
                  Suggests movies using Claude AI. MERN stack with Bootstrap.
                </p>
                <div className="d-flex justify-content-start flex-wrap gap-2 mt-auto">
                  <a
                    href="https://ai-movie-genius-real.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>Live
                  </a>
                  <a
                    href="https://github.com/1Vidhyasagar/ai_movie_genius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-github me-1"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className=" col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg rounded-4 border-0 card-hover">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-primary mb-3 fs-5">
                  <i className="bi bi-chat me-2"></i>AI Assistant Chat
                </h5>
                <p className="card-text text-muted flex-grow-1 mb-4">
                  Ask anything to get answers from Claude as like chat-gpt.
                </p>
                <div className="d-flex justify-content-start flex-wrap gap-2 mt-auto">
                  <a
                    href="https://ai-assistant-chat-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>Live
                  </a>
                  <a
                    href="https://github.com/1Vidhyasagar/ai_assistant_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm rounded-pill px-3 shadow-sm"
                  >
                    <i className="bi bi-github me-1"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
