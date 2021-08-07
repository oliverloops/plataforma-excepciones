import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
//UI Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//UI Components
import Button from "../components/Button";

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
      <Footer />
    </>
  );
}
