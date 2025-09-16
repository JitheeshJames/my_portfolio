import React from "react";

export default function Contact({ contact }) {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></p>
      <p>LinkedIn: <a href={contact.linkedin} target="_blank" className="text-blue-600 hover:underline">{contact.linkedin}</a></p>
      <p>GitHub: <a href={contact.github} target="_blank" className="text-blue-600 hover:underline">{contact.github}</a></p>
    </section>
  );
}