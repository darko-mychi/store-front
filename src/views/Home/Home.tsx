import { useTitle } from "@/utils/hooks";

const Home = () => {
  useTitle("Home");

  return (
    <div className="page home-page">
      Home page
    </div>
  );
};

export default Home;
