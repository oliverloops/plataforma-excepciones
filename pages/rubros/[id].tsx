import { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GrDocumentText, GrDocumentDownload } from "react-icons/gr";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import CategoryButton from "../../components/CategoryButton";
import UploadButton from "../../components/UploadButton";

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
        {parseInt(String(router.query.id)) < 8 ? (
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
        setTitle("Atm");
        break;
      case "2":
        setTitle("Ruido");
        break;
      case "3":
        setTitle("RSU");
        break;
      case "4":
        setTitle("RME");
        break;
      case "5":
        setTitle("RP");
        break;
      case "6":
        setTitle("Flora");
        break;
      case "7":
        setTitle("Fauna");
        break;
      case "8":
        setTitle("Arbolado");
        break;
      default:
        return;
        break;
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
      <div className="col-start-1 row-start-2  md:col-start-2 md:row-start-2 bg-gray-200 rounded-xl md:w-64 md:h-60">
        <ul className="list-disc text-sm font-light p-4 px-8">
          <li>
            Pueden subirse archivos de texto, documentos de excel, PDF e
            imagenes
          </li>
          <li className="py-2">Cada archivo debe ser menor a 10MB</li>
          <li className="py-2">
            Puede hacer click en los iconos que se encuentran a la izquierda
            para visualizar o descargar el archivo
          </li>
        </ul>
      </div>
    </div>
  );
}

function Table({ rubro, projectData }) {
  const [compliance, setCompliance] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/categories`, {
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

  const storeEvidence = (event) => {
    if (compliance.length < 6) {
      setCompliance((val) => [...val, event.target.value]);
    } else if (compliance.length >= 6 && event.target.name === "1") {
      let temp = compliance;
      temp[0] = event.target.value;
      setCompliance(temp);
    } else if (compliance.length >= 6 && event.target.name === "2") {
      let temp = compliance;
      temp[1] = event.target.value;
      setCompliance(temp);
    } else if (compliance.length >= 6 && event.target.name === "3") {
      let temp = compliance;
      temp[2] = event.target.value;
      setCompliance(temp);
    } else if (compliance.length >= 6 && event.target.name === "4") {
      let temp = compliance;
      temp[3] = event.target.value;
      setCompliance(temp);
    } else if (compliance.length >= 6 && event.target.name === "5") {
      let temp = compliance;
      temp[4] = event.target.value;
      setCompliance(temp);
    } else if (compliance.length >= 6 && event.target.name === "6") {
      let temp = compliance;
      temp[5] = event.target.value;
      setCompliance(temp);
    } else {
      return;
    }
  };

  //Method for DB query and store
  const uploadEvidenceToDb = (value) => {
    value.preventDefault();
    console.log(value.target.files[0].name);

    fetch(`http://localhost:3000/api/categories`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        complianceData: compliance,
        project: projectData.project_title,
        month: projectData.month,
        rubro: rubro,
        files: `/Users/oliver/downloads/${value.target.files[0].name}`,
      }),
    });
  };

  return (
    <table className="col-start-1 md:col-end-2 border-2 border-gray-400">
      <thead>
        <tr className="border-2 border-gray-400 bg-blue-100 text-lg">
          <th className="border-2 border-gray-400">MM</th>
          <th className="border-2 border-gray-400">Cumplimiento</th>
          <th className="border-2 border-gray-400">Evidencia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">1</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="1"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[0]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">2</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="2"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[1]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">3</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="3"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[2]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">4</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="4"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[3]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">5</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="5"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[4]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
        <tr>
          <td className="px-3 md:px-12">
            <p className="text-center">6</p>
          </td>
          <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
            <select
              name="6"
              onChange={storeEvidence}
              className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2"
            >
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </td>
          <td className="flex justify-between px-2 md:px-5 pt-5">
            <UploadButton upload={uploadEvidenceToDb} />
            {/* <GrDocumentText size={28} /> */}
            <Link href={`${files[5]}`}>
              <a target="_blank">
                <GrDocumentDownload size={30} />
              </a>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
