import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-10 text-yellow-400">
        My Security Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        <div className="p-8 border border-gray-700 rounded-lg hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl mb-2">Custom Linux Firewall</h3>
          <p className="text-gray-400">
            Designed & implemented a Next-Gen Firewall with honeypot integration,
            DPI, and rule-based blocking.
          </p>
        </div>
        <div className="p-8 border border-gray-700 rounded-lg hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl mb-2">Squid Proxy Inspector</h3>
          <p className="text-gray-400">
            Real-time unsafe website detection with HTTP scoring and keyword filtering
            from Squid logs.
          </p>
        </div>
        <div className="p-8 border border-gray-700 rounded-lg hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl mb-2">VPN Server & Routing</h3>
          <p className="text-gray-400">
            Setup of secure VPN server, custom NAT, routing, and traffic segmentation
            using iptables & bash scripting.
          </p>
        </div>
        <div className="p-8 border border-gray-700 rounded-lg hover:scale-105 transform transition duration-300">
          <h3 className="text-2xl mb-2">Threat Hunting Rules</h3>
          <p className="text-gray-400">
            Maintained & updated custom Snort & YARA rules for advanced malware &
            intrusion detection.
          </p>
        </div>
      </div>

      {/* ✅ Quote di bawah project */}
      <p className="mt-12 text-center italic text-gray-400 max-w-xl">
        "Every line of code and every rule you craft today is the shield for tomorrow’s digital frontier."
      </p>
    </section>
  );
}
