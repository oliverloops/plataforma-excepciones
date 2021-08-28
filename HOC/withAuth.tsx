import { useRouter } from "next/router";

const withAuth = (ChildComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("accesToken");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      return <ChildComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
