//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import Button from "../../components/Button";

export default function Rubro() {
  return (
    <>
      <Header />
      <div className="flex justify-between  md:w-2/6 p-4 md:p-8">
        <Button text={"Regresar"} route={"/rubros/select"} arrow={"left"} />
        <Button text={"Rubros"} route={"#"} arrow={""} />
        <Button text={"Continuar"} route={"#"} arrow={"right"} />
      </div>
      <Content />
      <Footer />
    </>
  );
}

function Content() {
  return (
    <main className="grid md:grid-cols-2 grid-rows-auto p-8">
      <p className="text-2xl font-bold col-start-1">Título de Rubro</p>
    </main>
  );
}
