import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Close navbar when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    const bsCollapse = document.getElementById("navbarNav");

    const handleLinkClick = () => {
      const collapse = new window.bootstrap.Collapse(bsCollapse, {
        toggle: false,
      });
      collapse.hide();
      setIsNavOpen(false);
    };

    navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, []);

  const handleTogglerClick = () => {
    const bsCollapse = document.getElementById("navbarNav");

    if (isNavOpen) {
      // Close navbar
      const collapse = new window.bootstrap.Collapse(bsCollapse, {
        toggle: false,
      });
      collapse.hide();
    } else {
      // Open navbar
      const collapse = new window.bootstrap.Collapse(bsCollapse, {
        toggle: false,
      });
      collapse.show();
    }

    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-lg py-2">
      <div className="container-fluid px-3 px-md-5">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#hero">
          <span className="creative-v-font fs-5">Vidhyasagar</span>
        </a>

        {/* Toggle Button with ✕ and ☰ */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleTogglerClick}
        >
          <span className="fs-2 text-white">{isNavOpen ? "✕" : "☰"}</span>
        </button>

        {/* Collapsible Nav */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center text-lg-start gap-2 gap-lg-3 mt-3 mt-lg-0">
            {[
              { id: "hero", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  className="nav-link text-white px-3 py-2 rounded-pill"
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
