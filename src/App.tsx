import "./App.css";
import BasicCommands from "./sections/basic/BasicCommands";
import GithubConnect from "./sections/remote/GithubConnect";
import Collaboration from "./sections/collab/Collaboration";
import Gitignore from "./sections/gitignore/Gitignore";
import Pages from "./sections/pages/Pages";
import Activity from "./sections/activity/Activity";
import Theory from "./sections/theory/Theory";
import githubLogo from "./assets/github-mark-white.svg";
import gitLogo from "./assets/git.svg";
import navIcon from "./assets/nav.svg";
import { useState } from "react";

function App() {
  const [navState, setnavState] = useState<string>("hidden");
  function showNav() {
    setnavState("block");
  }
  function hideNav() {
    setnavState("hidden");
  }
  const navEntry =
    "nav-entry border-b-2 border-zinc-700 p-2 hover:bg-gray-300 hover:text-gray-800";

  return (
    <>
      <div
        className="z-50 fixed fancy-bold cursor-pointer flex gap-3 text-2xl left-10 fcursor-pointer !hover:bg-gray-300 !hover:text-gray-800 rounded-md border-b-2 border-white py-1 px-3"
        onMouseOver={showNav}
      >
        <img src={navIcon} width={20} height={20} alt="nav-icon"></img>
        Nav
        <div
          className={` ${navState} bg-zinc-900 opacity-100 border-2 border-gray-500 p-3 rounded-md flex flex-col gap-1 fixed left-1 top-20 text-xl fancy-regular drop-shadow-xl ease-in-out duration:300`}
          onMouseLeave={hideNav}
        >
          <div className={navEntry}>
            <a href="#theory" className="block p-0 m-0 w-full h-full">
              0. Theory and Git Setup
            </a>
          </div>
          <div className={navEntry}>
            <a href="#basic" className="block p-0 m-0 w-full h-full">
              1. Basic Git Commands
            </a>
          </div>
          <div className={navEntry}>
            <a href="#github" className="block p-0 m-0 w-full h-full">
              2. Connecting to Github
            </a>
          </div>
          <div className={navEntry}>
            <a href="#collab" className="block p-0 m-0 w-full h-full">
              3. Collaborating using Github
            </a>
          </div>
          <div className={navEntry}>
            <a href="#gitignore" className="block p-0 m-0 w-full h-full">
              4. Exploring .gitignore & README.md
            </a>
          </div>
          <div className={navEntry}>
            <a href="#pages" className="block p-0 m-0 w-full h-full">
              5. Deploying with Github pages
            </a>
          </div>
          <div className={navEntry}>
            <a href="#activity" className="block p-0 m-0 w-full h-full">
              6. Fork & Final Activity
            </a>
          </div>
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

      <div className="flex justify-center m-0 mb-20">
        <h1 className="text-center text-7xl fancy-bold">
          Kickstart your coding with Git and Github
        </h1>
      </div>
      <main className="flex flex-col">
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
        <div id="gitignore">
          <Gitignore />
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
