import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
//UI Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//UI Components
import Button from "../components/Button";
import RubroCard from "../components/RubroCard";

export default function Rubros() {
  const [leaf, setLeaf] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768 && !leaf) {
        setLeaf(true);
      } else {
        setLeaf(false);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between md:w-2/5 p-4 md:p-8">
        <Button text={"Regresar"} route={"/months"} arrow={"left"} />
        <Button
          text={!leaf ? "Enviar a Evaluación" : <RiSendPlaneFill size={30} />}
          route={"#"}
          arrow={""}
        />
        <Button text={"Observaciones"} route={"#"} arrow={""} />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-8">
        <RubroCard rubro={"Generales"} route={"#"} />
        <RubroCard rubro={"Atm"} route={"#"} />
        <RubroCard rubro={"Ruido"} route={"#"} />
        <RubroCard rubro={"RSU"} route={"#"} />
        <RubroCard rubro={"RME"} route={"#"} />
        <RubroCard rubro={"RP"} route={"#"} />
        <RubroCard rubro={"Flora"} route={"#"} />
        <RubroCard rubro={"Fauna"} route={"#"} />
        <RubroCard rubro={"Arbolado"} route={"#"} />
      </div>
      <Footer />
    </>
  );
}
