import { useState } from "react";
import { useRouter } from "next/router";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import CategoryButton from "../../components/CategoryButton";

export default function Generales() {
  const router = useRouter();

  return (
    <>
      <Header projectData={router.query} />
      <div className="flex justify-between md:max-w-lg p-2 md:p-8">
        <CategoryButton
          text={"Regresar"}
          route={"/rubros/select"}
          arrow={"left"}
          query={router.query}
          categories={true}
        />
        <CategoryButton
          text={"Rubros"}
          route={"/rubros/select"}
          arrow={""}
          query={router.query}
          categories={true}
        />
        <CategoryButton
          text={"Continuar"}
          route={"/rubros/1"}
          arrow={"right"}
          query={router.query}
          categories={true}
        />
      </div>
      <main className="md:pb-36">
        <Content />
      </main>
      <Footer />
    </>
  );
}

function Content() {
  const [option, setOption] = useState([]);

  const storeData = (event) => {
    setOption((val) => [...val, event.target.value]);
  };

  console.log(option);

  return (
    <form className="flex flex-col p-8 md:px-16">
      <label className="text-xl font-semibold py-8 md:py-4">
        Cátalogo General de Obra
      </label>
      <select
        onChange={(event) => storeData(event)}
        className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3 py-0.5"
      >
        <option>V1</option>
        <option>V2</option>
        <option>V3</option>
        <option>v4</option>
        <option>V5</option>
      </select>
      <label className="text-xl font-semibold py-8 md:py-4">Área</label>
      <select
        onChange={(event) => storeData(event)}
        className="border-2 bg-gray-200 border-gray-300 rounded-md  w-40 h-12 md:h-10 px-3 py-0.5"
      >
        <option>Frente 1</option>
        <option>Frente 2</option>
        <option>Frente 3</option>
        <option>Frente 4</option>
        <option>Frente 5</option>
      </select>
      <label className="text-xl font-semibold py-8 md:py-4">
        Coordenadas UTM Centroíde
      </label>
      <select
        onChange={(event) => storeData(event)}
        className="border-2 bg-gray-200 border-gray-300 rounded-md  w-40 h-12 md:h-10 px-3 py-0.5"
      >
        <option>Frente 1</option>
        <option>Frente 2</option>
        <option>Frente 3</option>
        <option>Frente 4</option>
        <option>Frente 5</option>
      </select>
    </form>
  );
}
