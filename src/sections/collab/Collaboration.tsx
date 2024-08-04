import React from "react";
// import * as snippets from "./snippets";
// import CodeBlock from "../CodeBlock";
import addCollab from "../../assets/add-collaborator.jpeg";
import clickSettings from "../../assets/click-settings.jpeg";
import collabSidebar from "../../assets/collab-sidebar.jpeg";
import * as styles from "../../styles";

const Collaboration: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>3. Collaborating using Github</div>
      <div className="add-collaborator">
        <div className={styles.subheading}>3.1. Adding a collaborator</div>
        <p className={styles.para}>
          Adding collaborators is pretty easy, github is a place for
          collaboration and the best software is often a combined result of
          great engineers working in unison with the same goal in mind.
        </p>

        <div className="image-steps flex flex-col">
          <div className="first-image flex justify-center gap-14">
            <img
              className="mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2"
              src={clickSettings}
              alt="click-settings-image"
            />
            <div className="text-xl self-center font-bold">
              1. Go to your repository and open the settings tab
            </div>
          </div>

          <div className="second-image flex justify-center gap-10">
            <img
              className="mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2"
              src={collabSidebar}
              alt="collab-sidebar-image"
            />
            <div className="text-xl self-center font-bold">
              2. Open the collaborators section from the sidebar
            </div>
          </div>

          <div className="third-image flex justify-center gap-10">
            <img
              className="mt-5 mb-2 mx-0 rounded-md self-center drop-shadow-2xl w-1/2"
              src={addCollab}
              alt="add-collab-image"
            />
            <div className="text-xl self-center font-bold m-0 basis-5/12">
              3. Click the add collaborators button you might be prompted to
              enter your password or maybe even 2FA. After that you will be able
              to add a collaborator by searching with their username.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
