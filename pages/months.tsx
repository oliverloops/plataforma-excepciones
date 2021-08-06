//UI Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//UI Components
import Button from "../components/Button";
import MonthCard from "../components/MonthCard";

export default function Months() {
  return (
    <>
      <Header />
      <div className="flex p-4 md:p-8">
        <Button text={"Ir a Inicio"} route={"/"} arrow={"left"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-4">
        <MonthCard month={1} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={2} ica={2} route={"#"} status={"No Autorizado"} />
        <MonthCard month={3} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={4} ica={2} route={"#"} status={"En Proceso"} />
        <MonthCard month={5} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={6} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={7} ica={2} route={"#"} status={"En Proceso"} />
        <MonthCard month={8} ica={2} route={"#"} status={"No Autorizado"} />
        <MonthCard month={9} ica={2} route={"#"} status={"No Autorizado"} />
        <MonthCard month={10} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={11} ica={2} route={"#"} status={"Autorizado"} />
        <MonthCard month={12} ica={2} route={"#"} status={"En Proceso"} />
      </div>
      <Footer />
    </>
  );
}
