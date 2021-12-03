import React, { useState, useEffect } from "react";
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

function Select() {
  const [leaf, setLeaf] = useState(false);
  const [blocks, setBlocks] = useState(null);
  //Estado para el progreso del rubro general
  const [generalProg, setGeneralProg] = useState(0);

  const router = useRouter();
  //console.log(router.query);

  const categories = {
    generales: "Generales",
    biotico: "Biótico",
    suelo: "Suelo",
    aire: "Aire",
    agua: "Agua",
    hidrologia: "Hidrología",
    residuos: "Manejo de Residuos",
    operacion: "Operación y Mantenimiento",
    abandono: "Abandono y Restauración",
    seguridad: "Seguridad",
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

  useEffect(() => {
    fetch("/api/generals", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: router.query.project_title,
        month: router.query.month,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGeneralProg(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/categories`, {
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
                percentage={generalProg}
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

export default React.memo(Select);
