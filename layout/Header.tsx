import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-cols-2 md:grid-rows-auto gap-8 md:gap-0 p-4 py-8 md:p-8">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3">
        <Link href="/">
          <a>
            <Image
              src={"/kila_logo.png"}
              width={160}
              height={60}
              alt="Kila Logo"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-3/4 justify-between col-start-2 row-start-1 row-end-2">
        <p className="font-semibold text-md md:text-lg">No. de Contrato</p>
        <p className="font-semibold text-md md:text-lg">No. de Excepción</p>
      </div>
      <p className="col-start-1 col-span-2 md:col-start-2 row-start-2 pt-2 md:pt-0 font-semibold text-xl text-center md:text-left">
        Nombre de la Obra
      </p>
    </div>
  );
}
