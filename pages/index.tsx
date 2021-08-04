import { GetStaticProps } from "next";
import Image from "next/image";
//UI components
import SearchBar from "../components/SearchBar";

const Home = ({ props }) => {
  return (
    <>
      <div className="flex justify-center pt-8 pb-4">
        <Image src={"/kila_logo.png"} width={180} height={75} alt="Kila Logo" />
      </div>
      <SearchBar />
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
