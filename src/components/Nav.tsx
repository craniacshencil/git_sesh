import { useState } from "react";
import navIcon from "../assets/nav.svg";
const Nav: React.FC = () => {
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
        className="z-50 fancy-bold cursor-pointer flex gap-3 text-2xl left-10 fcursor-pointer !hover:bg-gray-300 !hover:text-gray-800 rounded-md py-1 px-3"
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
            <a href="#readme" className="block p-0 m-0 w-full h-full">
              4. .gitignore & README.md
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
    </>
  );
};

export default Nav;
