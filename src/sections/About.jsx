import React, { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);

  const goNext = () => {
    containerRef.current?.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  const goPrev = () => {
    containerRef.current?.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-x-auto snap-x snap-mandatory scroll-smooth relative"
    >
      <div className="flex w-[400vw] h-screen">
        {/* === Slide 1: About Me === */}
        <div className="flex-shrink-0 w-screen flex flex-col items-center justify-center px-6 snap-start relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400 text-center">
            About Me
          </h2>

          <p className="max-w-3xl text-gray-300 text-lg md:text-xl mb-8 leading-relaxed text-center">
            Mahasiswa aktif Semester 6 Program Studi Rekayasa Keamanan Siber Politeknik Negeri Cilacap.
            Memiliki minat kuat di bidang arsitektur keamanan dan berfokus sebagai calon Blue Team Engineer,
            dengan keahlian pada IDS, IPS, NGFW, dan Linux. Aktif mengerjakan project mandiri
            untuk mendalami konfigurasi firewall, tuning IDS/IPS, segmentasi jaringan, dan analisis log real-time.
            Bertanggung jawab, manajemen waktu baik, dan solid kerja tim.
          </p>

          <div className="flex gap-4 mb-10">
            <a
              href="/CV_AditSetyaNugroho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Lihat CV
            </a>
            <a
              href="/CV_AditSetyaNugroho.pdf"
              download="CV_AditSetyaNugroho.pdf"
              className="px-5 py-2 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Download CV
            </a>
          </div>


                {/* ✅ Quote di bawah project */}
      <p className="mt-12 text-center italic text-gray-400 max-w-xl">
        “I secure, I defend, I adapt.”
      </p>

          <button
            onClick={goNext}
            className="absolute bottom-10 right-10 px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Next →
          </button>
        </div>

        {/* === Slide 2: PENGALAMAN KERJA === */}
        <div className="flex-shrink-0 w-screen flex flex-col justify-center items-center px-8 snap-start relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400 text-center">
            PENGALAMAN KERJA
          </h2>
          <div className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed space-y-2 text-left">
            <p className="font-semibold">2019 – 2023</p>
            <p className="font-semibold">Internship Cyber Security Engineer</p>
            <p className="italic">Feb 2025 – Juni 2025</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mengembangkan dan mengoptimasi Next Generation Firewall (NGFW) berbasis Linux</li>
              <li>Melakukan konfigurasi dan tuning SNORT sebagai sistem IDS/IPS</li>
              <li>Membuat dan mengelola YARA Rules untuk deteksi malware dan file berbahaya</li>
              <li>Menerapkan konfigurasi proxy server dengan SSL inspection pada lingkungan Linux</li>
              <li>Melakukan troubleshooting dan hardening sistem keamanan jaringan</li>
              <li>Menganalisis log keamanan dan melakukan segmentasi jaringan untuk mitigasi risiko</li>
            </ul>
          </div>

          <div className="flex justify-between w-full max-w-3xl mt-10">
            <button
              onClick={goPrev}
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Next →
            </button>
          </div>
        </div>

        {/* === Slide 3: PENGALAMAN PRAKTIKUM === */}
        <div className="flex-shrink-0 w-screen flex flex-col justify-center items-center px-8 snap-start relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400 text-center">
            PENGALAMAN PRAKTIKUM
          </h2>
          <div className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-left">
            <div>
              <p className="font-semibold">Praktikum Penetration Testing</p>
              <p className="italic">Juni 2024 – Des 2024</p>
              <ul className="list-disc list-inside">
                <li>Menggunakan nmap untuk melakukan scanning port yang terbuka</li>
                <li>Melakukan serangan SQL Injection untuk memperoleh informasi database</li>
                <li>Melakukan eksploitasi kerentanan menggunakan Metasploit</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Praktikum Pengujian Perangkat Lunak</p>
              <p className="italic">Nov 2023 – Jan 2024</p>
              <ul className="list-disc list-inside">
                <li>Perancangan Test Case pengujian perangkat lunak</li>
                <li>Melakukan pengujian perangkat lunak manual (Fungsional Testing)</li>
                <li>Melaporkan hasil temuan pengujian dan bug</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Praktikum Keamanan Jaringan</p>
              <p className="italic">Juni 2024 – Des 2024</p>
              <ul className="list-disc list-inside">
                <li>Mengkonfigurasi kontrol akses jaringan, port dan jenis protokol</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between w-full max-w-3xl mt-10">
            <button
              onClick={goPrev}
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Next →
            </button>
          </div>
        </div>

        {/* === Slide 4: PENGALAMAN ORGANISASI === */}
        <div className="flex-shrink-0 w-screen flex flex-col justify-center items-center px-8 snap-start relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400 text-center">
            PENGALAMAN ORGANISASI
          </h2>
          <div className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-left">
            <p className="font-semibold">Koordinator Komisi 3, BPM Politeknik Negeri Cilacap</p>
            <p className="italic">Nov 2023 – Des 2024</p>
            <ul className="list-disc list-inside">
              <li>Melakukan manajemen keuangan organisasi mahasiswa dan unit kegiatan mahasiswa</li>
              <li>Melakukan persidangan 6 bulan sekali untuk mempertanggungjawabkan keuangan kegiatan mahasiswa</li>
            </ul>
          </div>

          <div className="flex justify-start w-full max-w-3xl mt-10">
            <button
              onClick={goPrev}
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
