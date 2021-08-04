import { GoSearch } from "react-icons/go";

export default function SearchBar() {
  return (
    <form className="flex justify-center">
      <Search />
    </form>
  );
}

function Search() {
  return (
    <div className="container">
      <textarea placeholder=" Buscar ej. Nombre del proyecto" />
      <span className="py-1.5 px-4">
        <GoSearch className="search" size={23} />
      </span>
    </div>
  );
}
