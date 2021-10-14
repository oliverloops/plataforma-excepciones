import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
//UI Layout
import Footer from "../layout/Footer";
//UI components
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

const Home = ({ cards }) => {
  const [templates, setTemplates] = useState([]);
  const [filteredItems, setFilteredItems] = useState("");

  useEffect(() => {
    fetch(`https://kila-plataforma.netlify.app/api/basecards`)
      .then((res) => res.json())
      .then((info) => {
        for (let i = 0; i < info[0].quantity; i++) {
          setTemplates((value) => [...value, i]);
        }
      });
  }, []);

  //Search Bar Input handler
  const getInput = (e) => {
    setFilteredItems(e.target.value.toLowerCase());
  };

  //Filter stored values on key event
  const filtered = cards.filter((items) => {
    return items.project_title.toLowerCase().includes(filteredItems);
  });

  return (
    <>
      <div className="flex justify-center pt-8 pb-4">
        <Image src={"/kila_logo.png"} width={150} height={60} alt="Kila Logo" />
      </div>
      <SearchBar getInput={getInput} />
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-y-8 justify-items-center p-5 md:p-12">
        {filtered.map((elem, id) => (
          <ProjectCard
            key={id}
            title={elem.project_title}
            compliance={elem.compliance}
          />
        ))}
        {templates === [] || filteredItems !== "" ? (
          <></>
        ) : (
          templates.map((item, id) => (
            <ProjectCard key={id} title={"Nuevo Proyecto"} compliance={null} />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://kila-plataforma.netlify.app/api/projects`);
  const data = await res.json();

  return {
    props: {
      cards: data,
    },
    revalidate: 10,
  };
};
