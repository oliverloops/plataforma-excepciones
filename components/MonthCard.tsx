import Link from "next/link";
import Image from "next/image";

export default function MonthCard(props: { month: number; route: string }) {
  return (
    <Link href={props.route}>
      <a>
        <div className="bg-white shadow-md rounded-xl">
          <Image
            className="rounded-t-xl"
            src={"/picachos.jpg"}
            width={260}
            height={68}
            alt="picachos banner"
          />
          <p className="">Mes {props.month}</p>
        </div>
      </a>
    </Link>
  );
}
