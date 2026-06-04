export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-3xl"></div>

<div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-fuchsia-900/20 blur-3xl"></div>

      <nav className="fixed top-0 w-full border-b border-purple-900/30 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-purple-400">
            Rosa Sandoval
          </h1>

          <ul className="flex gap-8 text-sm">
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
            <li>
              <a href="#contacto" className="hover:text-purple-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
  id="inicio"
  className="flex min-h-screen items-center justify-center px-6"
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
    <div>
      <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
        Portfolio 2026
      </p>

      <h1
        className="text-5xl text-white md:text-7xl"
        style={{ fontFamily: "var(--font-great-vibes)" }}
      >
        Rosa Sandoval
      </h1>

      <h2 className="mt-4 text-3xl text-purple-400 md:text-5xl font-semibold">
        Ingeniera en Sistemas Computacionales
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Desarrollo aplicaciones web modernas, escalables y
        orientadas a resolver problemas reales mediante
        tecnología. Me apasiona crear soluciones que
        generen impacto y mejoren la experiencia de los usuarios.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700">
          Ver Proyectos
        </button>

        <button className="rounded-xl border border-purple-500 px-8 py-4 font-semibold transition hover:bg-purple-500/10">
          Descargar CV
        </button>
      </div>
    </div>

  </div>
</section>

<section
  id="proyectos"
  className="mx-auto max-w-7xl px-6 py-32"
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
      
      <div className="flex h-[350px] items-center justify-center bg-gradient-to-br from-purple-900/40 to-black">
        <span className="text-2xl font-bold text-purple-300">
          Sistema de Turnos
        </span>
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
          <button className="rounded-lg bg-purple-600 px-5 py-3">
            GitHub
          </button>

          <button className="rounded-lg border border-purple-500 px-5 py-3">
            Demo
          </button>
        </div>
      </div>

    </div>
  </div>

  {/* PROYECTOS SECUNDARIOS */}
  <div className="grid gap-8 md:grid-cols-2">

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8">
      <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/40 to-black">
        Uniformes Escolares
      </div>

      <h3 className="text-2xl font-bold">
        Tienda de Uniformes Escolares
      </h3>

      <p className="mt-3 text-gray-400">
        Sitio web enfocado en la presentación y venta
        de uniformes escolares.
      </p>
    </div>

    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8">
      <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/40 to-black">
        Susticorp
      </div>

      <h3 className="text-2xl font-bold">
        Sitio Web Corporativo
      </h3>

      <p className="mt-3 text-gray-400">
        Desarrollo de sitio web empresarial para
        presentar servicios e información corporativa.
      </p>
    </div>

  </div>
</section>

    </main>
  );
}