import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
        About Me
      </h2>
      <p className="text-gray-300 max-w-2xl">
        Hai! Saya Adit Setya Nugroho, seorang pengembang dan IT Security
        enthusiast. Saya fokus pada pengembangan sistem keamanan jaringan
        dan web. Mari bekerja sama untuk membangun solusi yang aman,
        handal, dan modern.
      </p>
    </section>
  );
}
