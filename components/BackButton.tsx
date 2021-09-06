import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

export default function BackButton(props: {
  text: unknown;
  route: string;
  arrow: string;
  query: any;
}) {
  console.log(props.query.month);

  return (
    <Link
      href={{
        pathname: props.route,
        query: {
          contract_num: props.query.contract_num,
          project_title: props.query.project_title,
          exc_number: props.query.exc_number,
        },
      }}
    >
      <a>
        <button
          style={{ backgroundColor: "#8CBA6E" }}
          className="text-white rounded-lg h-12 md:h-10"
        >
          <span className="flex justify-evenly items-center text-xl md:text-lg px-2">
            {props.arrow === "left" && <BsArrowLeft size={28} />}
            {props.text === "Rubros" ? (
              <>
                <p className="md:pl-2 pr-1 md:pr-2">{props.text}</p>{" "}
                <span className="md:pr-2">
                  <FaLeaf size={20} />
                </span>
              </>
            ) : (
              props.text
            )}
            {props.arrow === "right" && <BsArrowRight size={28} />}
          </span>
        </button>
      </a>
    </Link>
  );
}
