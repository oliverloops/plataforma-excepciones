import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-white shadow-md rounded-lg md:w-80">
      <Image
        className="rounded-t-lg"
        width={370}
        height={82}
        src={"/sierra_santa_rosa.jpeg"}
        alt="Sierra de Santa Rosa"
      />
      <span className="flex items-center justify-between px-4 py-2">
        <p className="text-xl font-semibold">Title</p>
        <p className="text-xs">
          Cumplimiento Ambiental: <span className="font-bold">X</span>
        </p>
      </span>
      <form className="flex flex-col px-4 py-2 pb-4">
        <label className="text-sm py-1">Usuario</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded text-sm px-1 py-0.5"
          placeholder="Ingresa tu nombre de usuario"
        />
        <label className="text-sm py-1">Contraseña</label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded text-sm px-1 py-0.5"
          placeholder="Ingresa tu contraseña"
        />
      </form>
      <div className="w-full h-px bg-gray-200"></div>
      <p
        style={{ color: "#8CBA6E" }}
        className="cursor-pointer text-center text-xs underline p-2"
      >
        Click para abrir formulario
      </p>
    </div>
  );
}
