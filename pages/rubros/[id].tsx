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
      <table className="col-start-1 md:col-end-2 border-2 border-gray-400">
        <tr className="border-2 border-gray-400 text-lg">
          <th className="border-2 border-gray-400">MM</th>
          <th className="border-2 border-gray-400">Cumplimiento</th>
          <th className="border-2 border-gray-400">Evidencia</th>
        </tr>
        <tr>
          <td className="border-2 border-gray-400">
            <ul className="flex flex-col items-center">
              <li className="py-4 text-lg">1</li>
              <li className="py-4 text-lg">2</li>
              <li className="py-4 text-lg">3</li>
              <li className="py-4 text-lg">4</li>
              <li className="py-4 text-lg">5</li>
              <li className="py-4 text-lg">6</li>
            </ul>
          </td>
          <td className="border-2 border-gray-400">
            <ul className="flex flex-col items-center">
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
              <li>
                <select className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5">
                  <option>Opción 1</option>
                  <option>Opción 2</option>
                  <option>Opción 3</option>
                </select>
              </li>
            </ul>
          </td>
          <td className="border-2 border-gray-400">
            <ul className="flex flex-col items-center">
              <li>
                <input type="file" title="Subir" />
              </li>
              <li>
                <input type="file" title="Subir" />
              </li>
              <li>
                <input type="file" title="Subir" />
              </li>
              <li>
                <input type="file" title="Subir" />
              </li>
              <li>
                <input type="file" title="Subir" />
              </li>
              <li>
                <input type="file" title="Subir" />
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <div className="md:col-start-2 md:row-start-2  bg-gray-200 rounded-xl w-60 h-40">
        <ul className="list-disc text-sm font-light p-4">
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
