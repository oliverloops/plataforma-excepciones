import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

export default function RubroCard(props: {
  route: string;
  rubro: string;
  percentage: number;
}) {
  return (
    <Link href={props.route}>
      <a>
        <div className="bg-white shadow-md rounded-xl md:w-64 h-36 hover:shadow-xl">
          <Image
            className="rounded-t-xl"
            src={"/sierra_de_lobos.png"}
            width={280}
            height={55}
            alt="Sierra de Lobos banner"
          />
          <span className="flex flex-col px-4 md:py-2">
            <span className="flex items-center">
              <p className="text-xl font-semibold pr-2">{props.rubro}</p>
              <FaLeaf className="text-gray-300" size={18} />
            </span>
          </span>
          <div className="h-px bg-gray-200"></div>
          <div className="flex text-xs font-light px-4 py-3">
            Cargado - {props.percentage}%
          </div>
        </div>
      </a>
    </Link>
  );
}
