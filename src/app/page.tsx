

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 sm:p-12">
      
      {/* Sección de Introducción */}
      <section className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-white mb-3">Misael Valencia</h1>
        <p className="text-xl text-gray-400">
          Ingeniero en Tecnologías Computacionales | Desarrollo de Software y Videojuegos
        </p>
      </section>

      {/* Sección Sobre Mí */}
      <section className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Sobre Mí</h2>
        <p className="text-lg text-gray-300">
          Soy un estudiante de Ingeniería en Tecnologías Computacionales con un fuerte enfoque en el desarrollo de software, videojuegos y soluciones tecnológicas innovadoras.
          Actualmente, continúo expandiendo mis conocimientos en C++ y diseño de sistemas, con el objetivo de crear aplicaciones y experiencias interactivas que resuelvan problemas del mundo real.
        </p>
      </section>

      {/* Sección de Proyectos */}
      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-4xl font-semibold text-center text-white mb-6">Proyectos Destacados</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Juego en Unreal Engine 5</h3>
            <p className="text-gray-300">
              Desarrollo de un videojuego en Unreal Engine 5 utilizando Blueprints y C++, explorando mecánicas de jugabilidad y optimización de entornos 3D.
            </p>
            <a 
              href="https://github.com/misaelvalencia/unreal-game" 
              target="_blank" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Ver en GitHub
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Gestión de Base de Datos</h3>
            <p className="text-gray-300">
              Diseño y desarrollo de una base de datos para gestionar clientes y ventas utilizando MySQL y optimización con consultas avanzadas.
            </p>
            <a 
              href="https://github.com/misaelvalencia/database-project" 
              target="_blank" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Ver en GitHub
            </a>
          </div>

          {/* Proyecto 3 (Espacio reservado) */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-2">Proyecto en Desarrollo</h3>
            <p className="text-gray-400">
              Espacio reservado para un próximo proyecto que se incluirá en el portafolio.
            </p>
          </div>

          {/* Proyecto 4 (Espacio reservado) */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-2">Proyecto en Desarrollo</h3>
            <p className="text-gray-400">
              Espacio reservado para un próximo proyecto que se incluirá en el portafolio.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto - Diseño más profesional */}
      <section className="mt-16 w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Contacto</h2>
        <p className="text-lg text-gray-300">Si deseas contactarme, puedes hacerlo a través de:</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:misavalmad@gmail.com" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 text-lg">
            Correo Electrónico
          </a>
          <a href="https://www.linkedin.com/in/misael-valencia-madrigal-444168248/" className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-lg">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Misael Valencia - Todos los derechos reservados.
      </footer>
    </div>
  );
}
