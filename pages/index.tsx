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

  useEffect(() => {
    fetch("http://localhost:3000/api/basecards")
      .then((res) => res.json())
      .then((info) => {
        for (let i = 0; i < info[0].quantity; i++) {
          setTemplates((value) => [...value, i]);
        }
      });
  }, []);

  return (
    <>
      <div className="flex justify-center pt-8 pb-4">
        <Image src={"/kila_logo.png"} width={150} height={60} alt="Kila Logo" />
      </div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-y-8 justify-items-center p-5 md:p-12">
        {cards.map((elem, id) => (
          <ProjectCard key={id} title={elem.project_title} />
        ))}
        {templates === [] ? (
          <div>Loading...</div>
        ) : (
          templates.map((item, id) => <ProjectCard key={id} title={"Title"} />)
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  const data = await res.json();

  return {
    props: {
      cards: data,
    },
    revalidate: 10,
  };
};
