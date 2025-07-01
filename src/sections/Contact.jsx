import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-black text-white px-6"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
        Let's Connect
      </h2>

      <p className="text-gray-400 mb-8 text-center max-w-xl">
        Saya selalu terbuka untuk diskusi, kolaborasi, atau project baru.
        Jangan ragu untuk menghubungi saya melalui email atau social media di bawah ini:
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <a
            href="mailto:aditsetyan884@gmail.com"
            className="hover:text-yellow-400"
          >
            aditsetyan884@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Linkedin size={20} />
          <a
            href="https://www.linkedin.com/in/aditsetyanugroho/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            linkedin.com/in/aditsetyanugroho
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Github size={20} />
          <a
            href="https://github.com/aditsetyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            github.com/aditsetyan
          </a>
        </div>
      </div>

      <a
        href="mailto:aditsetyan884@gmail.com"
        className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
      >
        Say Hello!
      </a>
    </section>
  );
}
