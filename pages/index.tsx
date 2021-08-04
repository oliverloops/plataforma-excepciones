import { GetStaticProps } from "next";
import Image from "next/image";
//UI components
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

const Home = ({ props }) => {
  return (
    <>
      <div className="flex justify-center pt-8 pb-4">
        <Image src={"/kila_logo.png"} width={150} height={60} alt="Kila Logo" />
      </div>
      <SearchBar />
      <div className="p-4 md:p-12">
        <ProjectCard />
      </div>
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/hello")
//   const data = res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
