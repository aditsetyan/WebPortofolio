import React from "react";

export default function Contact() {
  return (
    <section 
    id="contact"
    className="h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
      <p className="text-gray-400 mb-4">aditsetyan884@gmail.com</p>
      <a
        href="mailto:aditsetyan884@gmail.com"
        className="px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-800 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
