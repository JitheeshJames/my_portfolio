import React from "react";

export default function Certifications({ certifications }) {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside max-w-xl mx-auto text-left">
        {certifications.map((cert, idx) => (
          <li key={idx} className="mb-2">{cert}</li>
        ))}
      </ul>
    </section>
  );
}