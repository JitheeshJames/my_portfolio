import React from "react";

export default function Experience({ experience }) {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {experience.map((job, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm text-left">
            <h3 className="text-lg font-semibold">{job.role} @ {job.company}</h3>
            <p className="text-sm text-gray-500">{job.years}</p>
            <p className="mt-2 text-gray-700">{job.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}