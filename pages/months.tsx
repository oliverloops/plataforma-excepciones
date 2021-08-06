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
      <div className="flex p-8">
        <Button text={"Ir a Inicio"} route={"/"} arrow={"left"} />
      </div>
      <div className="grid md:grid-cols-4 grid-rows-auto justify-items-center gap-y-8 px-8 py-4">
        <MonthCard month={1} ica={2} route={"#"} />
        <MonthCard month={2} ica={2} route={"#"} />
        <MonthCard month={3} ica={2} route={"#"} />
        <MonthCard month={4} ica={2} route={"#"} />
        <MonthCard month={5} ica={2} route={"#"} />
        <MonthCard month={6} ica={2} route={"#"} />
        <MonthCard month={7} ica={2} route={"#"} />
        <MonthCard month={8} ica={2} route={"#"} />
      </div>
      <Footer />
    </>
  );
}
