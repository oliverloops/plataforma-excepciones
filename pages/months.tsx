import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
//UI Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//UI Components
import Button from "../components/Button";
import MonthCard from "../components/MonthCard";
import KilaLoader from "../components/KilaLoader";

function Months() {
  const [months, setMonths] = useState(null);

  const router = useRouter();

  useLayoutEffect(() => {
    fetch(`https://kila-plataforma.netlify.app/api/months`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(router.query.project_title),
    })
      .then((res) => res.json())
      .then((data) => setMonths(data));
  }, []);

  return (
    <>
      <Header projectData={router.query} />
      <div className="flex p-4 md:p-8">
        <Button text={"Ir a Inicio"} route={"/"} arrow={"left"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-8">
        {months === null ? (
          <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-4">
            <KilaLoader />
          </div>
        ) : (
          months.map((elem, id) => (
            <MonthCard
              key={id}
              month={id + 1}
              ica={elem.ica}
              route={"/rubros/select"}
              status={elem.status}
              query={JSON.stringify(router.query)}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Months;
