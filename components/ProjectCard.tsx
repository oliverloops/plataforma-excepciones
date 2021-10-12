import { useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//Context API for extended form
const formContext = createContext({});

export default function ProjectCard({ title, compliance }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  //function to expand card
  const openForm = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      className={`bg-white shadow-md rounded-xl ${
        !open && "md:max-h-96"
      } md:w-80 xl:w-96`}
    >
      <Image
        className="rounded-t-xl"
        width={385}
        height={90}
        src={"/sierra_santa_rosa.jpeg"}
        alt="Sierra de Santa Rosa"
      />
      <span className="flex items-center justify-between px-4 py-2">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xs">
          Cumplimiento Ambiental:{" "}
          <span className="font-bold">
            {compliance === undefined || compliance === null ? "-" : compliance}
          </span>
        </p>
      </span>
      <form className="flex flex-col px-4 py-2 pb-4">
        <label className="text-sm py-1">Usuario</label>
        <input
          required
          type="text"
          className="border-2 border-gray-300 rounded-md md:w-3/4 text-sm px-1 py-0.5"
          placeholder="Ingresa tu nombre de usuario"
          onChange={(input) => setUsername(input.target.value)}
        />
        <label className="text-sm py-1">Contraseña</label>
        <input
          required
          type="password"
          className="border-2 border-gray-300 rounded-md md:w-3/4 text-sm px-1 py-0.5"
          placeholder="Ingresa tu contraseña"
          onChange={(input) => setPass(input.target.value)}
        />
        <div className="flex justify-center mb-2">
          {!open && (
            <SubmitButton
              username={username}
              password={pass}
              projectTitle={title}
              form={"not expanded"}
            />
          )}
        </div>
      </form>
      <div className="w-full h-px bg-gray-200"></div>
      {open ? (
        <></>
      ) : (
        <p
          style={{ color: "#8CBA6E" }}
          className="cursor-pointer text-center text-xs underline p-2"
          onClick={openForm}
        >
          Click para abrir formulario
        </p>
      )}
      {open && (
        <ExtendedForm
          open={open}
          openForm={openForm}
          username={username}
          password={pass}
          projectTitle={title}
        />
      )}
    </div>
  );
}

function ExtendedForm({ open, openForm, username, password, projectTitle }) {
  //Hooks state managers
  const [contractNum, setContractNum] = useState(0);
  //Nombre de la obra
  const [title, setTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [supervisor, setSupervisor] = useState("");
  //Número de excepción
  const [excNumber, setExcNumber] = useState(0);
  const [contratist, setContratist] = useState("");
  //Fechas
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  let formData = {
    owner: username,
    contractNum: contractNum,
    title: title,
    projectType: projectType,
    supervisor: supervisor,
    excNumber: excNumber,
    contratist: contratist,
    initialDate: initialDate,
    finalDate: finalDate,
  };

  return (
    <>
      <form className="grid grid-cols-auto md:grid-cols-2 grid-rows-auto gap-2 px-4 pt-2">
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">No. de contrato</label>
          <input
            type="number"
            className="border-2 border-gray-300 rounded-md text-sm w-36 md:w-3/4 px-1 py-0.5"
            onChange={(input) => setContractNum(input.target.value)}
          />
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Nombre de la obra</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm w-full px-1 py-0.5"
            onChange={(input) => setTitle(input.target.value)}
          />
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">Tipo de obra</label>
          <select
            onChange={(input) => setProjectType(input.target.value)}
            className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 px-1 py-0.5"
          >
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
            <option>Opción 4</option>
            <option>Opción 5</option>
          </select>
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Supervisor interno</label>
          <select
            onChange={(input) => setSupervisor(input.target.value)}
            className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-3/4 md:w-auto px-1 py-0.5"
          >
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
            <option>Opción 4</option>
            <option>Opción 5</option>
          </select>
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">No. de excepción</label>
          <input
            type="number"
            className="border-2 border-gray-300 rounded-md text-sm w-36 md:w-3/4 px-1 py-0.5"
            onChange={(input) => setExcNumber(input.target.value)}
          />
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Contratista</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md text-sm md:w-full px-1 py-0.5"
            onChange={(input) => setContratist(input.target.value)}
          />
        </div>
        <div className="col-start-1 col-end-2">
          <label className="text-sm py-1">Período Inicial</label>
          <input
            type="date"
            name="project-date"
            className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-full md:w-full px-1 py-0.5"
            onChange={(input) => setInitialDate(input.target.value)}
          />
        </div>
        <div className="col-start-2">
          <label className="text-sm py-1">Período Final</label>
          <input
            type="date"
            name="project-date"
            className="border-2 bg-gray-200 border-gray-300 rounded-md text-sm w-full md:w-full px-1 py-0.5"
            onChange={(input) => setFinalDate(input.target.value)}
          />
        </div>
      </form>
      <formContext.Provider value={{ formData }}>
        <div className="flex justify-center mb-2">
          {open && (
            <SubmitButton
              username={username}
              password={password}
              projectTitle={title}
              form={"expanded"}
            />
          )}
        </div>
      </formContext.Provider>
      <p
        style={{ color: "#8CBA6E" }}
        className="cursor-pointer text-center text-xs underline p-2"
        onClick={openForm}
      >
        Cerrar formulario
      </p>
    </>
  );
}

function SubmitButton({ username, password, projectTitle, form }) {
  //Context consumer
  const consumer = useContext(formContext);

  //Route with URL object
  const router = useRouter();

  //function to validate user access
  const validateAccess = (event) => {
    event.preventDefault();
    if (form === "not expanded") {
      validateUser();
    } else {
      uploadProjectData();
    }
  };

  const validateUser = async () => {
    await fetch("http://localhost:3000/api/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        projectTitle: projectTitle,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          router.push({
            pathname: "/months",
            query: JSON.parse(data.body),
          });
        }
      });
  };

  const uploadProjectData = () => {
    validateUser();
    fetch("http://localhost:3000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ consumer }),
    });
  };

  return (
    <input
      className="py-2 mx-20 px-14 mt-4 text-white font-medium cursor-pointer rounded-lg"
      style={{ backgroundColor: "#8CBA6E" }}
      type="submit"
      value="Ingresar"
      onClick={validateAccess}
    />
  );
}
