import { useState } from "react";
import Projects from "../components/Projects";

function ProjectsPage() {
  const [showModal, setShowModal] =
    useState(false);

  return (
    <>
      <Projects />

      <button
        onClick={() => setShowModal(true)}
      >
        View Project Details
      </button>

      {showModal && (
        <div>
          <h2>Portfolio Website</h2>

          <p>
            Built using React and Vite.
          </p>

          <button
            onClick={() =>
              setShowModal(false)
            }
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;