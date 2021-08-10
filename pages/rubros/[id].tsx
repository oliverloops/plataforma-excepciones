import { GrDocumentText, GrDocumentDownload } from "react-icons/gr";
//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import Button from "../../components/Button";
import UploadButton from "../../components/UploadButton";

export default function Rubro() {
  return (
    <>
      <Header />
      <div className="flex justify-between md:max-w-lg p-2 md:p-8">
        <Button text={"Regresar"} route={"/rubros/select"} arrow={"left"} />
        <Button text={"Rubros"} route={"/rubros/select"} arrow={""} />
        <Button text={"Continuar"} route={"#"} arrow={"right"} />
      </div>
      <Content />
      <Footer />
    </>
  );
}

function Content() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto px-4 py-8 md:p-8 md:py-0 gap-8">
      <p className="text-2xl font-bold col-start-1 text-center md:text-left pt-4">
        Título de Rubro
      </p>
      <Table />
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
    </main>
  );
}

function Table() {
  const getFileName = (value) => {
    console.log("uploaded");
  };

  return (
    <table className="col-start-1 md:col-end-2 border-2 border-gray-400">
      <tr className="border-2 border-gray-400 bg-blue-100 text-lg">
        <th className="border-2 border-gray-400">MM</th>
        <th className="border-2 border-gray-400">Cumplimiento</th>
        <th className="border-2 border-gray-400">Evidencia</th>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">1</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">2</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">3</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">4</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">5</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
      <tr>
        <td className="px-3 md:px-12">
          <p className="text-center">6</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-4 md:px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md md:w-40 h-10 md:h-12 px-2">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td className="flex justify-between px-2 md:px-5 pt-5">
          <UploadButton getFileName={getFileName} />
          <GrDocumentText size={28} />
          <GrDocumentDownload size={28} />
        </td>
      </tr>
    </table>
  );
}
