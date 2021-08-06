import Link from "next/link";
import Image from "next/image";

export default function MonthCard(props: {
  month: number;
  route: string;
  ica: number;
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
            <p className="text-lg font-bold">Mes {props.month}</p>
            <span className="flex">
              <p className="text-lg font-medium">ICA: {props.ica}</p>
              <p>Autorizado</p>
            </span>
          </span>
        </div>
      </a>
    </Link>
  );
}
