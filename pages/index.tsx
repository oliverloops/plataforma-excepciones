import { GetStaticProps } from "next";
import Image from "next/image";
//UI Layout
import Footer from "../layout/Footer";
//UI components
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="flex justify-center pt-8 pb-4">
        <Image src={"/kila_logo.png"} width={150} height={60} alt="Kila Logo" />
      </div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-y-8 justify-items-center p-5 md:p-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/database");
  const data = await res.json();

  console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
