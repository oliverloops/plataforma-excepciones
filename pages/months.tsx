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
      <div className="grid md:grid-cols-4 grid-rows-auto px-8 py-4">
        <MonthCard />
        <MonthCard />
        <MonthCard />
        <MonthCard />
        <MonthCard />
        <MonthCard />
        <MonthCard />
        <MonthCard />
      </div>
      <Footer />
    </>
  );
}
