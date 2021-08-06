import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Button(props: {
  text: string;
  route: string;
  arrow: string;
}) {
  return (
    <Link href={props.route}>
      <a>
        <button
          style={{ backgroundColor: "#8CBA6E" }}
          className="text-white rounded-lg h-10 w-32"
        >
          <span className="flex justify-evenly items-center text-lg px-2">
            {props.arrow === "left" && <BsArrowLeft size={30} />}
            {props.text}
            {props.arrow === "right" && <BsArrowRight size={30} />}
          </span>
        </button>
      </a>
    </Link>
  );
}
