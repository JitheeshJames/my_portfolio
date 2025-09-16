import React from "react";

export default function Skills({ skills }) {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-200 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}