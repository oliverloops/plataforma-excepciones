import { useState } from "react";
import Image from "next/image";

export default function ProjectCard() {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      className={`bg-white shadow-md rounded-xl ${
        !open && "md:max-h-80"
      } md:w-80 xl:w-96`}
    >
      <Image
        className="rounded-t-xl"
        width={385}
        height={90}
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
          className="border-2 border-gray-300 rounded-md md:w-3/4 text-sm px-1 py-0.5"
          placeholder="Ingresa tu nombre de usuario"
        />
        <label className="text-sm py-1">Contraseña</label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded-md md:w-3/4 text-sm px-1 py-0.5"
          placeholder="Ingresa tu contraseña"
        />
      </form>
      <div className="w-full h-px bg-gray-200"></div>
      {open ? (
        <></>
      ) : (
        <p
          style={{ color: "#8CBA6E" }}
          className="cursor-pointer text-center text-xs underline p-2"
          onClick={openForm}
        >
          Click para abrir formulario
        </p>
      )}
      {open && <ExtendedForm openForm={openForm} />}
    </div>
  );
}

function ExtendedForm({ openForm }) {
  return (
    <>
      <form className="grid grid-cols-auto grid-rows-auto gap-2 px-4 py-2 pb-4">
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">No. de contrato</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm md:w-3/4 px-1 py-0.5"
          />
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Nombre de la obra</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm w-full px-1 py-0.5"
          />
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">Tipo de obra</label>
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
            <option>Opción 4</option>
            <option>Opción 5</option>
          </select>
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Supervisor interno</label>
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
            <option>Opción 4</option>
            <option>Opción 5</option>
          </select>
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">No. de excepción</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm md:w-3/4 px-1 py-0.5"
          />
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Contratista</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm md:w-full px-1 py-0.5"
          />
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">Período (meses)</label>
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
            <option>Opción 1</option>
            <option>Opción 2</option>
          </select>
        </div>
      </form>
      <p
        style={{ color: "#8CBA6E" }}
        className="cursor-pointer text-center text-xs underline p-2"
        onClick={openForm}
      >
        Cerrar formulario
      </p>
    </>
  );
}
