import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { useState } from "react";

export default function RubroCard(props: {
  route: string;
  rubro: string;
  percentage: number;
  query: any;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    switch (props.percentage) {
      case 16:
        setProgress(20.6667);
        break;
      case 32:
        setProgress(41.3334);
        break;
      case 48:
        setProgress(62);
        break;
      case 64:
        setProgress(82.6668);
        break;
      case 80:
        setProgress(103.3335);
        break;
      case 96:
        setProgress(124);
        break;
      // case 70:
      //   setProgress(86.4);
      //   break;
      // case 80:
      //   setProgress(98.8);
      //   break;
      // case 90:
      //   setProgress(111.6);
      //   break;
      // case 100:
      //   setProgress(124);
      //   break;
      default:
        setProgress(0);
        break;
    }
  }, [progress, setProgress]);

  return (
    <Link
      href={{
        pathname: props.route,
        query: {
          contract_num: props.query.contract_num,
          project_title: props.query.project_title,
          exc_number: props.query.exc_number,
          month: props.query.month,
          rubro: props.rubro,
        },
      }}
    >
      <a>
        <div className="bg-white shadow-md rounded-xl md:w-64 h-32 md:h-36 hover:shadow-xl">
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
          <div className="flex justify-between text-xs font-light px-4 py-3">
            <div className="border-2 border-gray-300 rounded-full h-4 w-32">
              <div
                style={{ width: `${progress}px` }}
                className={`bg-blue-400 ${
                  props.percentage < 96 ? "rounded-l-full" : "rounded-full"
                } h-3 z-10`}
              ></div>
            </div>
            Cargado - {props.percentage === 96 ? 100 : props.percentage}%
          </div>
        </div>
      </a>
    </Link>
  );
}
