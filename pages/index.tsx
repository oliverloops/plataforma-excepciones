import { GetStaticProps } from "next";

const Home = ({ props }) => {
  return (
    <>
      <h1>Plataforma Excepciones!</h1>
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
