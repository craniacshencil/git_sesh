import "./App.css";
import BasicCommands from "./sections/basic/BasicCommands";
import GithubConnect from "./sections/remote/GithubConnect";
import Collaboration from "./sections/collab/Collaboration";
import Readme from "./sections/readme/Readme";
import Pages from "./sections/pages/Pages";
import Activity from "./sections/activity/Activity";
import Theory from "./sections/theory/Theory";
import githubLogo from "./assets/github-mark-white.svg";
import gitLogo from "./assets/git.svg";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="z-50 fixed flex justify-between items-center border-b-2 border-white backdrop-blur-sm m-0 p-0 h-16 w-full">
        <Nav />
        <div className="fancy-bold text-sky-300 text-3xl pr-5">
          Kickstart your coding with Git and Github
        </div>
      </div>
      <div
        style={{ zIndex: -100 }}
        className="git-carry fixed top-5 right-5 w-1/2"
      >
        <img
          className="relative left-20 bottom-20 opacity-10 w-full"
          src={gitLogo}
        />
      </div>
      <div
        style={{ zIndex: -100 }}
        className="github-carry fixed top-5 right-5 w-screen"
      >
        <img
          className="relative bottom-5 left-5 opacity-10 rotate-45 w-1/2"
          src={githubLogo}
        />
      </div>

      <div className="flex justify-center max-w-screen-xl mx-auto m-0 mb-20 pt-20">
        <h1 className="text-center text-7xl fancy-bold">
          Kickstart your coding with Git and Github
        </h1>
      </div>
      <main className="flex flex-col max-w-screen-xl mx-auto px-2">
        <div id="theory">
          <Theory />
        </div>
        <div id="basic">
          <BasicCommands />
        </div>
        <div id="github">
          <GithubConnect />
        </div>
        <div id="collab">
          <Collaboration />
        </div>
        <div id="readme">
          <Readme />
        </div>
        <div id="pages">
          <Pages />
        </div>
        <div id="activity">
          <Activity />
        </div>
      </main>
    </>
  );
}

export default App;
