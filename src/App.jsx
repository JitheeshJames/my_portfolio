import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Hero profile={profile} />
      <Skills skills={profile.skills} />
      <Projects projects={profile.projects} />
      <Experience experience={profile.experience} />
      <Education education={profile.education} />
      <Certifications certifications={profile.certifications} />
      <Architecture projects={profile.projects} />
      <Contact contact={profile.contact} />
    </div>
  );
}

export default App;