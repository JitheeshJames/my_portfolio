import React from "react";

export default function Projects({ projects }) {
  return (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <img src={proj.diagram} alt="Architecture" className="w-full mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-gray-600 mt-2">{proj.description}</p>
            <a href={proj.link} target="_blank" className="text-blue-600 hover:underline mt-2 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}