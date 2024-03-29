import { useState, useEffect } from "react";
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
  //Responsable Ambiental
  const [responsable, setResponsable] = useState("");
  //Residente de la obra
  const [residente, setResidente] = useState("");
  //Supervisor de la obra
  const [supervisor, setSupervisor] = useState("");
  //Supervisión ambiental
  const [supAmbiental, setSupAmbiental] = useState("");
  //Catalogo general de la obra
  const [catalogo, setCatalogo] = useState("");
  //Coordenadas UTM centroíde
  const [centroide, setCentroide] = useState("");
  //Trabajadores con seguro
  const [trabajadores, setTrabajadores] = useState("");
  //Área
  const [area, setArea] = useState("");
  //Número de trabajadores
  const [numeroTrab, setNumeroTrab] = useState("");
  //Fecha de entrega
  const [entrega, setEntrega] = useState("");
  //Contenedor de todos los campos
  const [fields, setFields] = useState({});

  //console.log(projectData);
  const getInput = () => {
    setFields({
      responsable: responsable,
      residente: residente,
      supervisor: supervisor,
      supAmbiental: supAmbiental,
      catalogo: catalogo,
      centroide: centroide,
      trabajadores: trabajadores,
      area: area,
      numeroTrab: numeroTrab,
      entrega: entrega,
    });
  };

  useEffect(() => {
    setFields({
      responsable: responsable,
      residente: residente,
      supervisor: supervisor,
      supAmbiental: supAmbiental,
      catalogo: catalogo,
      centroide: centroide,
      trabajadores: trabajadores,
      area: area,
      numeroTrab: numeroTrab,
      entrega: entrega,
    });
  }, [
    responsable,
    setResponsable,
    residente,
    setResidente,
    supervisor,
    setSupervisor,
    supAmbiental,
    setSupAmbiental,
    catalogo,
    setCatalogo,
    centroide,
    setCentroide,
    trabajadores,
    setTrabajadores,
    area,
    setArea,
    numeroTrab,
    setNumeroTrab,
    entrega,
    setEntrega,
  ]);

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
            onChange={(event) => setResponsable(event.target.value)}
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
            onChange={(event) => setResidente(event.target.value)}
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
            onChange={(event) => setSupervisor(event.target.value)}
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
            onChange={(event) => setSupAmbiental(event.target.value)}
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
            onChange={(event) => setCatalogo(event.target.value)}
          />
          <label htmlFor="area" className="text-xl font-semibold py-8 md:py-4">
            Coordenadas UTM Centroíde
          </label>
          <input
            className="bg-gray-50  border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
            type="text"
            placeholder="Ingrese la información"
            onChange={(event) => setCentroide(event.target.value)}
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
            onChange={(event) => setTrabajadores(event.target.value)}
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
          onChange={(event) => setArea(event.target.value)}
        />
        <label htmlFor="area" className="text-xl font-semibold py-8 md:py-4">
          Número de trabajadores
        </label>
        <input
          className="bg-gray-50 border-gray-500 border-2 rounded-lg md:w-80 h-12 px-2"
          type="text"
          placeholder="Ingrese la información"
          onChange={(event) => setNumeroTrab(event.target.value)}
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
          onChange={(event) => setEntrega(event.target.value)}
        />
      </div>
      <div className="md:row-start-3 pt-14 pb-8 md:pb-0">
        <UploadButton
          data={fields}
          getInput={getInput}
          projectData={projectData}
        />
      </div>
    </form>
  );
};

const UploadButton = ({ data, getInput, projectData }) => {
  const uploadForm = (event) => {
    event.preventDefault();
    getInput();
    fetch(`/api/generals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        values: data,
        project: projectData.project_title,
        month: projectData.month,
        rubro: projectData.rubro,
      }),
    });

    console.log(data);
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
