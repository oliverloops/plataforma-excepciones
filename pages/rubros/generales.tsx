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
        <Content projectData={router.query} />
      </main>
      <Footer />
    </>
  );
}

const Content = ({ projectData }) => (
  <>
    <div className="text-center md:px-16 py-8 md:py-4">
      <p className="font-semibold text-md md:text-lg">
        <span className="font-light">Nombre del Contratista:</span>{" "}
        {projectData.contratist}
      </p>
      <p className="font-semibold text-md md:text-lg">
        <span className="font-light">Período de ejecución:</span>{" "}
        {projectData.month}
      </p>
    </div>
    <Form projectData={projectData} />
  </>
);

const Form = ({ projectData }) => {
  const [option, setOption] = useState([]);

  console.log(projectData);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 px-8  md:px-16">
      <div className="md:row-start-1 md:col-start-1 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <label htmlFor="catalogo" className="text-xl font-semibold py-4">
            Responsable Ambiental
          </label>
          <input
            className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <label htmlFor="catalogo" className="text-xl font-semibold py-4">
            Residente de la Obra
          </label>
          <input
            className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <label htmlFor="catalogo" className="text-xl font-semibold py-4">
            Supervisor de Obra
          </label>
          <input
            className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <label htmlFor="catalogo" className="text-xl font-semibold py-4">
            Supervición Ambiental
          </label>
          <input
            className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
      </div>
      <div className="md:row-start-2 md:col-start-1">
        <div className="md:col-start-1 flex flex-col">
          <label htmlFor="catalogo" className="text-xl font-semibold py-4">
            Cátalogo General de Obra
          </label>
          <input
            className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese la información"
          />
          <label htmlFor="area" className="text-xl font-semibold py-8 md:py-4">
            Coordenadas UTM Centroíde
          </label>
          <input
            className="bg-gray-50  border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese la información"
          />
          <label
            htmlFor="coordenadas"
            className="text-xl font-semibold py-8 md:py-4"
          >
            Trabajadores con seguro
          </label>
          <input
            className="bg-gray-50  border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese la información"
          />
        </div>
      </div>
      <div className="md:row-start-2 md:col-start-2 flex flex-col">
        <label
          htmlFor="catalogo"
          className="text-xl font-semibold py-8 md:py-4"
        >
          Área
        </label>
        <input
          className="bg-gray-50  border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
          type="text"
          placeholder="Ingrese la información"
        />
        <label htmlFor="area" className="text-xl font-semibold py-8 md:py-4">
          Número de trabajadores
        </label>
        <input
          className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
          type="text"
          placeholder="Ingrese la información"
        />
        <label
          htmlFor="coordenadas"
          className="text-xl font-semibold py-8 md:py-4"
        >
          Fecha de entrega
        </label>
        <input
          className="bg-gray-50  border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
          type="text"
          placeholder="Ingrese la información"
        />
      </div>
      <div className="md:row-start-3 pt-14 pb-8 md:pb-0">
        <UploadButton data={option} projectData={projectData} />
      </div>
    </form>
  );
};

const UploadButton = ({ data, projectData }) => {
  const uploadForm = () => {
    event.preventDefault();
    fetch(`/api/categories`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        values: data,
        project: projectData.project_title,
        month: projectData.month,
        rubro: projectData.rubro,
      }),
    });
  };

  return (
    <button
      style={{ backgroundColor: "#8CBA6E" }}
      className="text-white w-full md:w-72 rounded-lg h-14"
      onClick={uploadForm}
    >
      <span className="flex justify-evenly font-semibold items-center text-xl md:text-lg px-2">
        Subir
      </span>
    </button>
  );
};
