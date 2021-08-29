import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { RiSendPlaneFill } from "react-icons/ri";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import Button from "../../components/Button";
import RubroCard from "../../components/RubroCard";

export default function Select() {
  const [leaf, setLeaf] = useState(false);
  const router = useRouter();

  const categories = {
    generales: "Generales",
    atm: "Atm",
    ruido: "Ruido",
    rsu: "RSU",
    rme: "RME",
    rp: "RP",
    flora: "Flora",
    fauna: "Fauna",
    arbolado: "Arbolado",
    month: router.query.month,
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768 && !leaf) {
        setLeaf(true);
      } else {
        setLeaf(false);
      }
    }
  }, []);

  useLayoutEffect(() => {
    fetch("http://localhost:3000/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categories),
    });
  }, []);

  return (
    <>
      <Header projectData={router.query} />
      <div className="flex justify-between md:max-w-lg p-2 md:p-8">
        <Button text={"Regresar"} route={"/months"} arrow={"left"} />
        <Button
          text={!leaf ? "Enviar a Evaluación" : <RiSendPlaneFill size={30} />}
          route={"#"}
          arrow={""}
        />
        <Button text={"Observaciones"} route={"#"} arrow={""} />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-8">
        <RubroCard
          rubro={"Generales"}
          percentage={100}
          route={"/rubros/generales"}
        />
        <RubroCard rubro={"Atm"} percentage={80} route={"#"} />
        <RubroCard rubro={"Ruido"} percentage={10} route={"#"} />
        <RubroCard rubro={"RSU"} percentage={70} route={"#"} />
        <RubroCard rubro={"RME"} percentage={40} route={"#"} />
        <RubroCard rubro={"RP"} percentage={40} route={"#"} />
        <RubroCard rubro={"Flora"} percentage={50} route={"#"} />
        <RubroCard rubro={"Fauna"} percentage={30} route={"#"} />
        <RubroCard rubro={"Arbolado"} percentage={70} route={"#"} />
      </div>
      <Footer />
    </>
  );
}
