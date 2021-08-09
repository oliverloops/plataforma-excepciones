//UI Layout
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//UI Components
import Button from "../../components/Button";

export default function Rubro() {
  return (
    <>
      <Header />
      <div className="flex justify-between  md:w-2/6 p-4 md:p-8">
        <Button text={"Regresar"} route={"/rubros/select"} arrow={"left"} />
        <Button text={"Rubros"} route={"#"} arrow={""} />
        <Button text={"Continuar"} route={"#"} arrow={"right"} />
      </div>
      <Content />
      <Footer />
    </>
  );
}

function Content() {
  return (
    <main className="grid md:grid-cols-2 grid-rows-auto p-8">
      <p className="text-2xl font-bold col-start-1 pt-4 pb-8">
        Título de Rubro
      </p>
      <Table />
      <div className="md:col-start-2 md:row-start-2 justify-self-center bg-gray-200 rounded-xl md:w-64 md:h-36">
        <ul className="list-disc text-sm font-light p-4 px-8">
          <li>
            Pueden subirse archivos de texto, documentos de excel, PDF e
            imagenes
          </li>
          <li className="py-2">Cada archivo debe ser menor a 10MB</li>
        </ul>
      </div>
    </main>
  );
}

function Table() {
  return (
    <table className="col-start-1 md:col-end-2 border-2 border-gray-400">
      <tr className="border-2 border-gray-400 bg-blue-100 text-lg">
        <th className="border-2 border-gray-400">MM</th>
        <th className="border-2 border-gray-400">Cumplimiento</th>
        <th className="border-2 border-gray-400">Evidencia</th>
      </tr>
      <tr>
        <td className="px-12">
          <p className="text-center">1</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
      <tr>
        <td className="px-12">
          <p className="text-center">2</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
      <tr>
        <td className="px-12">
          <p className="text-center">3</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
      <tr>
        <td className="px-12">
          <p className="text-center">4</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
      <tr>
        <td className="0 px-12">
          <p className="text-center">5</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
      <tr>
        <td className="px-12">
          <p className="text-center">6</p>
        </td>
        <td className="border-l-2 border-r-2 border-gray-400 px-12 py-4">
          <select className="border-2 bg-gray-200 border-gray-300 rounded-md w-40 h-12 md:h-10 px-3">
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </td>
        <td>
          <input type="file" title="Subir" />
        </td>
      </tr>
    </table>
  );
}
