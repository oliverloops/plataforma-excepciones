import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

export default function CategoryButton(props: {
  text: unknown;
  route: string;
  arrow: string;
  query: any;
  categories: boolean;
}) {
  let finalPathName = "";

  if (props.categories) {
    finalPathName = props.route;
  } else if (props.text === "Continuar" && parseInt(props.query.id) <= 8) {
    finalPathName = props.route + (parseInt(props.query.id) + 1);
  } else if (props.text === "Regresar" && parseInt(props.query.id) > 1) {
    finalPathName = props.route + (parseInt(props.query.id) - 1);
  } else if (props.text === "Regresar" && parseInt(props.query.id) === 1) {
    finalPathName = props.route + "generales";
  }

  return (
    <Link
      href={{
        pathname: finalPathName,
        query: {
          contract_num: props.query.contract_num,
          project_title: props.query.project_title,
          exc_number: props.query.exc_number,
          month: props.query.month,
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
