import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

export default function RubroCard(props: {
  route: string;
  rubro: string;
  percentage: number;
  query: any;
}) {
  return (
    <Link
      href={{
        pathname: props.route,
        query: {
          contract_num: props.query.contract_num,
          project_title: props.query.project_title,
          exc_number: props.query.exc_number,
          month: props.query.month,
          contratist: props.query.contratist,
          rubro: props.rubro,
        },
      }}
    >
      <a>
        <div className="bg-white shadow-md rounded-xl w-auto md:w-64 h-42 hover:shadow-xl">
          <Image
            className="rounded-t-xl"
            src={"/sierra_de_lobos.png"}
            width={280}
            height={55}
            alt="Sierra de Lobos banner"
          />
          <span className="flex flex-col px-4 md:py-2">
            <span className="flex items-center">
              <p className="md:text-xl font-semibold pr-2">{props.rubro}</p>
              <FaLeaf className="text-gray-300" size={18} />
            </span>
          </span>
          <div className="h-px bg-gray-200"></div>
          {
            <div className="flex justify-between text-xs font-light px-4 py-3">
              <div
                style={{ width: 128 }}
                className="border-2 border-gray-300 rounded-full h-4"
              >
                <div
                  style={{
                    width: `${
                      props.percentage > 0 ? props.percentage + 24 : 0
                    }px`,
                  }}
                  className={`bg-blue-400 ${
                    props.percentage < 100 ? "rounded-l-full" : "rounded-full"
                  } h-3 z-10`}
                ></div>
              </div>
              Cargado - {props.percentage}%
            </div>
          }
        </div>
      </a>
    </Link>
  );
}
