import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

export default function RubroCard(props: { route: string; rubro: string }) {
  return (
    <Link href={props.route}>
      <a>
        <div className="bg-white shadow-md rounded-xl w-40 md:w-60 sm:h-36">
          <Image
            className="rounded-t-xl"
            src={"/sierra_de_lobos.png"}
            width={260}
            height={70}
            alt="Sierra de Lobos banner"
          />
          <span className="flex flex-col px-4 md:py-2">
            <span className="flex items-center">
              <p className="text-xl font-bold pr-2">{props.rubro}</p>
              <FaLeaf className="text-gray-300" size={18} />
            </span>
          </span>
        </div>
      </a>
    </Link>
  );
}
