import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { RiSendPlaneFill } from "react-icons/ri";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import RubroCard from "../../components/RubroCard";
import KilaLoader from "../../components/KilaLoader";

export default function Select() {
  const [leaf, setLeaf] = useState(false);
  const [blocks, setBlocks] = useState(null);

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
    project_title: router.query.project_title,
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
    })
      .then((res) => res.json())
      .then((result) => setBlocks(result));
  }, []);

  return (
    <>
      <Header projectData={router.query} />
      <div className="flex justify-between md:max-w-lg p-2 md:p-8">
        <BackButton
          text={"Regresar"}
          route={"/months"}
          arrow={"left"}
          query={router.query}
        />

        <Button
          text={!leaf ? "Enviar a Evaluación" : <RiSendPlaneFill size={30} />}
          route={"#"}
          arrow={""}
        />
        <Button text={"Observaciones"} route={"#"} arrow={""} />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-8">
        {blocks === null ? (
          <div className="md:col-start-2 row-start-2 md:row-start-4">
            <KilaLoader />
          </div>
        ) : (
          blocks.map((elem, id) =>
            elem.category === "Generales" ? (
              <RubroCard
                key={id}
                rubro={elem.category}
                percentage={elem.progress}
                route={"/rubros/generales"}
                query={router.query}
              />
            ) : (
              <RubroCard
                key={id}
                rubro={elem.category}
                percentage={elem.progress}
                route={`/rubros/${id}`}
                query={router.query}
              />
            )
          )
        )}
      </div>
      <Footer />
    </>
  );
}
