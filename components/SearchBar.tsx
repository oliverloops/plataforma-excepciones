export default function SearchBar() {
  return (
    <form className="flex justify-center">
      <Search />
    </form>
  );
}

function Search() {
  return (
    <>
      <input type="text" placeholder="Buscar" />
    </>
  );
}
