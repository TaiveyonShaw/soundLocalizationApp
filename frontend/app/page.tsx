import Image from "next/image";
import reactLogo from "./../public/react.svg";
import viteLogo from "./../public/vite.svg";
import RetrieveData from "./components/RetrieveData/RetrieveData";
import Button from "./components/Button/Button";

const Home = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Image src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RetrieveData />
    </>
  );
};

export default Home;
