import React from "react";

export default function Architecture({ projects }) {
  return (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Architecture Gallery</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((proj, idx) => (
          <img key={idx} src={proj.diagram} alt="Architecture Diagram" className="w-64 rounded-lg shadow"/>
        ))}
      </div>
    </section>
  );
}