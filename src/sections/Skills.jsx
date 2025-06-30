import React from "react";
import { Shield, Terminal, Code, Lock, Network } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Linux Hardening (Debian/Ubuntu)", icon: <Terminal size={24} /> },
    { name: "Custom Bash Firewall Scripting", icon: <Code size={24} /> },
    { name: "Python for Security Automation", icon: <Code size={24} /> },
    { name: "iptables & NFQUEUE Custom Rules", icon: <Shield size={24} /> },
    { name: "OpenVPN & Routing Segmentation", icon: <Network size={24} /> },
    { name: "Snort IDS/IPS Rules Tuning", icon: <Shield size={24} /> },
    { name: "YARA Malware Ruleset Development", icon: <Shield size={24} /> },
    { name: "Squid Proxy & Access Control", icon: <Lock size={24} /> },
    { name: "Deep Packet Inspection (DPI)", icon: <Network size={24} /> },
    { name: "MITM Proxy Testing", icon: <Shield size={24} /> },
    { name: "Log Analysis & Threat Hunting", icon: <Terminal size={24} /> },
  ];

  return (
    <section 
    id="skills"
    className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4 px-6 py-4 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
