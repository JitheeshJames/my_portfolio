import React from "react";

export default function Hero({ profile }) {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <h2 className="text-xl text-gray-700">{profile.title}</h2>
      <p className="max-w-2xl mx-auto mt-4 text-gray-600">{profile.summary}</p>
      <a
        href="/resume.pdf"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        download
      >
        Download Resume
      </a>
    </section>
  );
}