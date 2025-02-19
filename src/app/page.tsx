import { FaPython, FaJsSquare, FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import { SiCplusplus, SiUnrealengine, SiTailwindcss, SiMysql, SiVercel } from "react-icons/si";

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

    </div>
  );
}
