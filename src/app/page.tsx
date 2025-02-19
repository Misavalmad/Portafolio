import { FaPython, FaJsSquare, FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import { SiCplusplus, SiUnrealengine, SiTailwindcss, SiMysql, SiVercel, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 sm:p-12">
      
      {/* Sección de Introducción */}
      <section className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-white">Misael Valencia</h1>
        <p className="text-xl text-gray-400">
          Ingeniero en Tecnologías Computacionales | Desarrollo de Software y Videojuegos
        </p>
      </section>

      {/* Sección de Habilidades con Iconos */}
      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-4xl font-semibold text-center text-white mb-6">Habilidades</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaPython className="text-yellow-400 text-6xl" />
            <p className="mt-2 text-lg">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-500 text-6xl" />
            <p className="mt-2 text-lg">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-yellow-300 text-6xl" />
            <p className="mt-2 text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiUnrealengine className="text-gray-300 text-6xl" />
            <p className="mt-2 text-lg">Unreal Engine</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-6xl" />
            <p className="mt-2 text-lg">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-blue-400 text-6xl" />
            <p className="mt-2 text-lg">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600 text-6xl" />
            <p className="mt-2 text-lg">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-gray-400 text-6xl" />
            <p className="mt-2 text-lg">Bases de Datos</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-red-500 text-6xl" />
            <p className="mt-2 text-lg">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <SiVercel className="text-white text-6xl" />
            <p className="mt-2 text-lg">Vercel</p>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-4xl font-semibold text-center text-white mb-6">Proyectos Destacados</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Juego en Unreal Engine 5</h3>
            <p className="text-gray-300">
              Desarrollo de un videojuego en Unreal Engine 5 utilizando Blueprints y C++.
            </p>
            <a 
              href="https://github.com/misaelvalencia/unreal-game" 
              target="_blank" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Ver en GitHub
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Gestión de Base de Datos</h3>
            <p className="text-gray-300">
              Diseño y desarrollo de una base de datos para gestionar clientes y ventas con MySQL.
            </p>
            <a 
              href="https://github.com/misaelvalencia/database-project" 
              target="_blank" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="mt-16 w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Contacto</h2>
        <p className="text-lg text-gray-300">Contáctame:</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:misavalmad@gmail.com" 
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 text-lg flex items-center gap-2"
          >
            <MdEmail className="text-xl" /> Correo Electrónico
          </a>
          <a 
            href="https://www.linkedin.com/in/misael-valencia-madrigal-444168248/" 
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-lg flex items-center gap-2"
          >
            <SiLinkedin className="text-xl" /> LinkedIn
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
