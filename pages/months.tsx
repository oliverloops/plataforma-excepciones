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
      <div className="grid md:grid-cols-4 grid-rows-auto gap-10 px-8 py-4">
        <MonthCard month={1} route={"#"} />
        <MonthCard month={2} route={"#"} />
        <MonthCard month={3} route={"#"} />
        <MonthCard month={4} route={"#"} />
        <MonthCard month={5} route={"#"} />
        <MonthCard month={6} route={"#"} />
        <MonthCard month={7} route={"#"} />
        <MonthCard month={8} route={"#"} />
      </div>
      <Footer />
    </>
  );
}
