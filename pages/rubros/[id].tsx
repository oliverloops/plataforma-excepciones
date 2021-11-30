import { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GrDocumentDownload } from "react-icons/gr";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import CategoryButton from "../../components/CategoryButton";
import UploadButton from "../../components/UploadButton";
//Utils
import rubrosData from "../../utils/rubrosData";

export default function Rubro() {
  const router = useRouter();

  return (
    <>
      <Header projectData={router.query} />
      <div className="flex justify-between md:max-w-lg p-2 md:p-8">
        <CategoryButton
          text={"Regresar"}
          route={"/rubros/"}
          arrow={"left"}
          query={router.query}
          categories={false}
        />
        <CategoryButton
          text={"Rubros"}
          route={"/rubros/select"}
          arrow={""}
          query={router.query}
          categories={true}
        />

        {parseInt(String(router.query.id)) < 9 ? (
          <CategoryButton
            text={"Continuar"}
            route={"/rubros/"}
            arrow={"right"}
            query={router.query}
            categories={false}
          />
        ) : (
          <div className="w-32 md:w-28"></div>
        )}
      </div>
      <Content id={router.query.id} projectData={router.query} />
      <Footer />
    </>
  );
}

function Content({ id, projectData }) {
  const [title, setTitle] = useState("");

  function rubroFinder(id) {
    switch (id) {
      case "1":
        setTitle("Biótico");
        break;
      case "2":
        setTitle("Suelo");
        break;
      case "3":
        setTitle("Agua");
        break;
      case "4":
        setTitle("Aire");
        break;
      case "5":
        setTitle("Hidrología");
        break;
      case "6":
        setTitle("Manejo de Residuos");
        break;
      case "7":
        setTitle("Operación y Mantenimiento");
        break;
      case "8":
        setTitle("Abandono y Restauración");
        break;
      case "9":
        setTitle("Seguridad");
        break;
      default:
        return;
    }
  }

  useLayoutEffect(() => {
    rubroFinder(id);
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto px-4 py-8 md:p-8 md:py-0 gap-8">
      <p className="text-2xl font-bold col-start-1 text-center md:text-left pt-4">
        {title}
      </p>
      <Table rubro={title} projectData={projectData} />
      {/* <div className="col-start-1 row-start-2  md:col-start-2 md:row-start-2 bg-gray-200 rounded-xl md:w-64 md:h-60">
        <ul className="list-disc text-sm font-light p-4 px-8">
          <li>
            <p>
              Pueden subirse archivos de texto, documentos de excel, PDF e
              imagenes
            </p>
          </li>
          <li className="py-2">
            <p>Cada archivo debe ser menor a 10MB</p>
          </li>
          <li className="py-2">
            <p>
              Puede hacer click en los iconos que se encuentran a la izquierda
              para visualizar o descargar el archivo
            </p>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

function Table({ rubro, projectData }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`/api/categories`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: projectData.project_title,
        month: projectData.month,
        rubro: rubro,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== 0) {
          if (data[0].evidence !== null) {
            let ordered = data[0].evidence.split(",");
            setFiles(ordered);
          }
        }
      });
  }, [rubro]);

  //Method for DB query and store
  const uploadEvidenceToDb = (value) => {
    value.preventDefault();
    console.log(value.target.files[0].name);

    fetch(`/api/categories`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: projectData.project_title,
        month: projectData.month,
        rubro: rubro,
        files: `/Users/oliver/Downloads/${value.target.files[0].name}`,
      }),
    });
  };

  const tableContent = rubrosData(rubro);

  return (
    <table className="col-start-1 md:col-end-3 border-2 border-gray-400">
      <thead>
        <tr className="border-2 border-gray-400 bg-blue-100 text-lg">
          <th className="border-2 border-gray-400">MM</th>
          <th className="border-2 border-gray-400">Cumplimiento</th>
          <th className="border-2 border-gray-400">Evidencia</th>
        </tr>
      </thead>
      <tbody>
        {tableContent.map((item, id) => (
          <tr key={id} className="border-b-2 border-gray-400">
            <td className="px-3 py-4">
              <p className="text-left pr-8 pl-2">{item.mm}</p>
            </td>
            <td className="border-l-2 border-r-2 border-gray-400 py-4">
              <p className="px-4">{item.cumplimiento}</p>
            </td>
            <td className="flex justify-between items-center px-2 md:px-5 pt-5">
              <UploadButton upload={uploadEvidenceToDb} />
              <div className="flex flex-col items-center ml-4">
                <Link href={`${files[id]}`}>
                  <a target="_blank">
                    <GrDocumentDownload size={30} />
                  </a>
                </Link>
                <p className="text-xs font-medium text-center pt-2">
                  ver/descargar documento
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
