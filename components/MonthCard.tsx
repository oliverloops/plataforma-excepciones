import Link from "next/link";
import Image from "next/image";

export default function MonthCard(props: {
  month: number;
  route: string;
  ica: number;
  status: string;
}) {
  return (
    <Link href={props.route}>
      <a>
        <div className="bg-white shadow-md rounded-xl w-60">
          <Image
            className="rounded-t-xl"
            src={"/picachos.jpg"}
            width={260}
            height={70}
            alt="picachos banner"
          />
          <span className="flex flex-col px-4 py-2">
            <p className="text-xl font-bold">Mes {props.month}</p>
            <span className="flex justify-between">
              <p className="text-lg font-medium">ICA: {props.ica}</p>
              <p className="flex items-center font-light">
                <div
                  className={`${
                    props.status == "Autorizado"
                      ? "bg-green-400"
                      : props.status == "En Proceso"
                      ? "bg-yellow-400"
                      : props.status == "No Autorizado" && "bg-red-400"
                  } rounded-full w-3 h-3`}
                ></div>
                <span className="text-sm pl-2">{props.status}</span>
              </p>
            </span>
          </span>
        </div>
      </a>
    </Link>
  );
}
