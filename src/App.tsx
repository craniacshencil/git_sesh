import "./App.css";
import BasicCommands from "./sections/basic/BasicCommands";
import GithubConnect from "./sections/remote/GithubConnect";
import Collaboration from "./sections/collab/Collaboration";
import * as styles from "./styles";

function App() {
  return (
    <>
      <div className="flex justify-center m-0 mb-20">
        <h1 className="text-center text-7xl fancy-bold">
          Kickstart your coding with Git and Github
        </h1>
      </div>
      <main className="flex flex-col">
        <BasicCommands />
        <GithubConnect />
        <Collaboration />
      </main>
    </>
  );
}

export default App;
