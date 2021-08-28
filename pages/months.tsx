//UI Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//UI Components
import Button from "../components/Button";
import MonthCard from "../components/MonthCard";
//HOC components
import withAuth from "../HOC/withAuth";

function Months({ data }) {
  return (
    <>
      <Header />
      <div className="flex p-4 md:p-8">
        <Button text={"Ir a Inicio"} route={"/"} arrow={"left"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto justify-items-center gap-y-8 px-4 md:px-8 py-8">
        {data.map((elem, id) => (
          <MonthCard
            month={id + 1}
            ica={elem.ica}
            route={"/rubros/select"}
            status={"Autorizado"}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Months;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/months");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
