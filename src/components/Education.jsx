import React from "react";

export default function Education({ education }) {
  return (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="max-w-2xl mx-auto">
        {education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution} ({edu.year})</p>
          </div>
        ))}
      </div>
    </section>
  );
}