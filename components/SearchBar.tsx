import { GoSearch } from "react-icons/go";

export default function SearchBar({ getInput }) {
  return (
    <form className="flex justify-center pt-3 pb-8 md:pb-0">
      <Search getInput={getInput} />
    </form>
  );
}

function Search({ getInput }) {
  return (
    <div className="container">
      <textarea
        placeholder=" Buscar ej. Nombre del proyecto"
        onChange={(e) => getInput(e)}
      />
      <span className="py-1.5 px-4">
        <GoSearch className="search" size={20} />
      </span>
    </div>
  );
}
