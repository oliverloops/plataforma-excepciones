import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-auto p-8">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3">
        <Link href="/">
          <a>
            <Image
              src={"/kila_logo.png"}
              width={150}
              height={60}
              alt="Kila Logo"
            />
          </a>
        </Link>
      </div>
      <div className="flex w-3/4 justify-between col-start-2 row-start-1 row-end-2">
        <p className="font-semibold text-lg">No. de Contrato</p>
        <p className="font-semibold text-lg">No. de Excepción</p>
      </div>
      <p className="col-start-2 row-start-2 font-semibold text-lg">
        Nombre de la Obra
      </p>
    </div>
  );
}
