"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {

const imagenes = [
  "/st-admin.PNG",
  "/st-kiosco.PNG",
  "/st-turno.PNG",
];

const [imagenActual, setImagenActual] = useState(0);


useEffect(() => {
  const intervalo = setInterval(() => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  }, 3000);

  return () => clearInterval(intervalo);
}, []);

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-3xl"></div>

<div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-fuchsia-900/20 blur-3xl"></div>

      <nav className="fixed top-0 w-full border-b border-purple-900/30 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <h1 className="text-lg md:text-xl font-bold text-purple-400">
            Rosa Sandoval
          </h1>

          <ul className="flex gap-4 text-sm md:gap-8">
            <li>
              <a href="#inicio" className="hover:text-purple-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-purple-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#habilidades" className="hover:text-purple-400">
                Habilidades
              </a>
            </li>
            <li className="hidden md:block">
            <a href="#certificaciones" className="hover:text-purple-400">
              Certificaciones
            </a>
          </li>

          <li className="hidden md:block">
            <a href="#contacto" className="hover:text-purple-400">
              Contacto
            </a>
          </li>
          </ul>
        </div>
      </nav>

      <section
  id="inicio"
  className="flex min-h-screen items-center justify-center px-6 pt-28 md:pt-0"
>
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">

    {/* FOTO */}
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-purple-600/30 blur-3xl"></div>

        <img
          src="/rosa.jpeg"
          alt="Rosa Sandoval"
          className="relative h-[380px] w-[280px] rounded-3xl border border-purple-500/40 object-cover shadow-[0_0_40px_rgba(168,85,247,0.35)]"
        />
      </div>
    </div>

    {/* CONTENIDO */}
    <div className="text-center md:text-left">
      <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
        Portfolio 2026
      </p>

      <h1
        className="text-4xl text-white md:text-7xl"
        style={{ fontFamily: "var(--font-great-vibes)" }}
      >
        Rosa Sandoval
      </h1>

      <h2 className="mt-4 text-2xl text-purple-400 md:text-5xl font-semibold">
        Ingeniera en Sistemas Computacionales
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Desarrollo aplicaciones web modernas, escalables y
        orientadas a resolver problemas reales mediante
        tecnología. Me apasiona crear soluciones que
        generen impacto y mejoren la experiencia de los usuarios.
      </p>

      <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
  <a
    href="#proyectos"
    className="rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700"
  >
    Ver Proyectos
  </a>

  <a
    href="/curriculum-rosa-sandoval.pdf"
    download
    className="rounded-xl border border-purple-500 px-8 py-4 font-semibold transition hover:bg-purple-500/10"
  >
    Descargar CV
  </a>
</div>

    </div>

  </div>
</section>

<section
  id="proyectos"
  data-aos="fade-up"
  className="mx-auto max-w-7xl px-6 py-16"
>
  <div className="mb-16 text-center">
    <p className="uppercase tracking-[0.3em] text-purple-400">
      Proyectos
    </p>

    <h2 className="mt-4 text-4xl font-bold">
      Mis Proyectos Destacados
    </h2>
  </div>

  {/* PROYECTO PRINCIPAL */}
  <div className="mb-10 overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-sm">
    <div className="grid md:grid-cols-2">
      
     <div className="flex flex-col items-center justify-center p-6">
        <img
          src={imagenes[imagenActual]}
          alt="Sistema de Turnos"
          className="max-h-[350px] w-full rounded-2xl border border-purple-500/20 object-contain shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
        />

        <div className="mt-2 flex gap-2">
          {imagenes.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === imagenActual
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-10">
        <h3 className="text-3xl font-bold">
          Sistema de Turnos
        </h3>

        <p className="mt-4 text-gray-400">
          Plataforma diseñada para gestionar citas y
          turnos de manera eficiente, mejorando la
          organización y atención de los usuarios.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm">
            Next.js
          </span>

          <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm">
            React
          </span>

          <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm">
            MySQL
          </span>
        </div>

       <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/RosaSandoval24/sistema-turnos"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple-600 px-5 py-3 transition hover:bg-purple-700"
          >
            GitHub
          </a>

          <button className="rounded-lg border border-purple-500 px-5 py-3">
            Demo privado
          </button>
        </div>
      </div>

    </div>
  </div>

  {/* PROYECTOS SECUNDARIOS */}
  <div className="grid gap-8 md:grid-cols-2">

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/40 to-black">
        To-Do app 
      </div>

      <h3 className="text-2xl font-bold">
        Gestor de Tareas (To-Do App) 
      </h3>

      <p className="mt-3 text-gray-400">
        Aplicación para gestionar tareas, 
        organizar actividades y almacenar 
        información localmente..
      </p>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/40 to-black">
        CV Builder
      </div>

      <h3 className="text-2xl font-bold">
        Generador de CV
      </h3>

      <p className="mt-3 text-gray-400">
        Aplicación para crear currículums 
        profesionales de forma dinámica y 
        exportarlos en formato PDF.
      </p>
    </div>

        </div>
  </section>

<section
  id="habilidades"
  data-aos="fade-up"
  className="mx-auto max-w-7xl px-6 pt-4 py-16"
>

</section>
  <div className="mb-16 text-center">
    <p className="uppercase tracking-[0.3em] text-purple-400">
      Habilidades
    </p>

    <h2 className="mt-4 text-4xl font-bold">
      Tecnologías y Herramientas
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      <h3 className="mb-6 text-2xl font-bold text-purple-400">
        Frontend
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      <h3 className="mb-6 text-2xl font-bold text-purple-400">
        Backend
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>Java</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>REST API</li>
        <li>JWT</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      <h3 className="mb-6 text-2xl font-bold text-purple-400">
        Bases de Datos
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>MySQL</li>
        <li>SQL</li>
      </ul>

    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
  <h3 className="mb-6 text-2xl font-bold text-purple-400">
    Herramientas 
  </h3>

  <ul className="space-y-3 text-gray-300">
    <li>Git</li>
    <li>GitHub</li>
    <li>VS Code</li>
    <li>Postman</li>
    <li>Vercel</li>
  </ul>
  </div>

</div>
<section

  id="certificaciones"
  data-aos="fade-up"
  className="mx-auto max-w-7xl px-6 py-16"
>
  <div className="mb-16 text-center">
    <p className="uppercase tracking-[0.3em] text-purple-400">
      Certificaciones
    </p>

    <h2 className="mt-4 mb-12 text-4xl font-bold">
      Formación y Especialización
    </h2>

<div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">

<div className="mb-4 flex justify-center">
  <FaGraduationCap className="text-5xl text-purple-400" />
</div>

  <p className="text-4xl text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">
    Universidad
  </p>

  <h3 className="mt-4 text-3xl font-bold">
    Instituto Tecnológico del Estado de Durango
  </h3>

  <p className="mt-3 text-gray-400">
    Especialidad: Seguridad Informática
  </p>
</div>

  </div>

  <div className="grid gap-8 md:grid-cols-2">

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
      <h3 className="mb-6 text-2xl font-bold text-purple-400">
        Ciberseguridad
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>Cybersecurity Essentials</li>
        <li>Junior Cybersecurity Analyst Career Path</li>
        <li>Introducción a la IA en Ciberseguridad</li>
        <li>ITDR: Identity Threat Detection and Response</li>
        <li>Protección de la Seguridad Industrial</li>
        <li>Protección de Datos Sensibles</li>
        <li>Análisis de Malware y Herramientas EDR</li>
        <li>Ransomware: Kit de Emergencia</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
      <h3 className="mb-6 text-2xl font-bold text-purple-400">
        Tecnología
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>HTML y CSS (1/2)</li>
        <li>HTML y CSS (2/2)</li>
        <li>Cloud Computing</li>
        <li>Fundamentals of Digital Marketing</li>
      </ul>
    </div>

  </div>
</section>

<section
  id="contacto"
  data-aos="fade-up"
  className="mx-auto max-w-5xl px-6 py-16 text-center"
>
  <p className="uppercase tracking-[0.3em] text-purple-400">
    Contacto
  </p>

  <h2 className="mt-4 text-5xl font-bold">
    ¿Trabajamos juntos?
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
    Estoy abierta a oportunidades laborales, proyectos freelance
    y colaboraciones relacionadas con desarrollo web y tecnología.
  </p>

  <div className="mt-12 flex flex-col gap-6">

    <a
      href="mailto:TU_CORREO@gmail.com"
      className="text-lg text-gray-300 transition hover:text-purple-400"
    >
      📧 sandovalsaldezrosaisabel@gmail.com
    </a>

    <a
      href="https://www.linkedin.com/in/rosa-isabel-sandoval-saldez-822674312"
      target="_blank"
      className="text-lg text-gray-300 transition hover:text-purple-400"
    >
      💼 www.linkedin.com/in/rosa-isabel-sandoval-saldez-822674312
    </a>

    <a
      href="https://github.com/RosaSandoval24"
      target="_blank"
      className="text-lg text-gray-300 transition hover:text-purple-400"
    >
      🐙 https://github.com/RosaSandoval24
    </a>

  </div>

  <div className="mt-12">
    <a
      href="mailto:sandovalsaldezrosaisabel@gmail.com"
      className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
    >
      Enviar Mensaje
    </a>
  </div>
</section>

<footer className="border-t border-purple-500/20 py-8">
  <div className="mx-auto max-w-7xl px-6 text-center">
    
    <h3
      className="text-3xl text-white"
      style={{ fontFamily: "var(--font-great-vibes)" }}
    >
      Rosa Sandoval
    </h3>

    <p className="mt-2 text-gray-400">
      Ingeniera en Sistemas Computacionales
    </p>

    <p className="mt-4 text-sm text-gray-500">
      © 2026 Rosa Sandoval. Todos los derechos reservados.
    </p>

  </div>
</footer>

    </main>
  );
}