import React from "react";
import * as snippets from "./snippets";
// import CodeBlock from "../CodeBlock";
import addCollab from "../../assets/add-collaborator.jpeg";
import clickSettings from "../../assets/click-settings.jpeg";
import collabSidebar from "../../assets/collab-sidebar.jpeg";
import * as styles from "../../styles";
import CodeBlock from "../CodeBlock";

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
        <div className="text-xl mt-12 text-center font-bold">
          4. Also don't forget to accept the invitation for collaboration that
          your friend has sent you
        </div>
      </div>

      <div className="friend-repo">
        <div className={styles.subheading}>
          3.2. Working on your friend's repo
        </div>
        <div className={`${styles.subsubheading} mt-16`}>
          3.2.1. Clone Command
        </div>
        <p className={styles.para}>
          The git clone command is used to create a copy of a specific
          repository or branch from a remote source to your local machine. It
          downloads all the files, branches, and commits, allowing you to work
          on the project locally.
        </p>

        <p className={styles.codeHead}>Simple clone</p>
        <CodeBlock codeText={snippets.clone} />

        <p className={styles.codeHead}>Clone with folder name </p>
        <CodeBlock codeText={snippets.cloneCustom} />
        <p className="text-xl mb-10">
          <strong>NOTE:</strong> This simply means that your friend's repository
          will be cloned under the name <em>my_folder</em>.
        </p>

        <div className={styles.subsubheading}>3.2.2. style.css</div>
        <p className={styles.para}>
          Create a file <em>style.css</em>{" "}
          <strong>(Strictly use this name for the file)</strong> in the root
          directory to apply styling to your friend's webapp. Copy all the
          contents from the following file into your friend's <em>style.css</em>
          .
        </p>

        <div className={styles.infoBox}>
          Psst! You need to copy everything from
          <a
            className="cursor-pointer mt-2 text-2xl text-sky-300 hover:text-sky-200"
            target="_blank"
            href="https://github.com/craniacshencil/temp-converter"
            rel="noreferrer noopener"
          >
            {" "}
            this file{" "}
          </a>
        </div>

        <p className={styles.para}>
          Now try running <em>git branch</em>. What?!?! There's already a git
          repository here. Running <em>git log</em> will also show you the
          history of commits.
        </p>
        <p className={styles.para}>
          Notice something weird? When we downloaded the zip of a repository (at
          the very first line of this doc) we had to create our own repository
          with <em>git init</em>. Well this is because your friend has already
          done that for you!
        </p>
        <p className={styles.para}>
          <strong>Downloading a zip of a repo: </strong>This only downloads the
          folder and not the repository.
          <br />
          <strong>Cloning a repository: </strong>This doesn't only download the
          folder but also the repository.
        </p>

        <p className={styles.para}>
          Since we have a repository already, you know the drill. Add the file,
          commit it and push it.
        </p>

        <p className={styles.para}>
          Wait, this isn't your repository, it isn't linked with your account
          but you still managed to successfully push changes to it, does git
          allow anyone to commit to any repository?
          <br />
          Is this allowed with every repository on Github?
        </p>
      </div>

      <div className="your-repo">
        <div className={styles.subheading}>3.3. Back to your repo</div>
        <p className={styles.para}>
          Time to <em>git log</em> and see the changes that your friend has
          made. What! Where are these changes? <em>style.css</em> is also
          nowhere to be seen. Where did we go wrong? All that work for nothing?
        </p>

        <p className={styles.para}>
          All those changes have been made in the remote repository which don't
          get reflected directly in our remote repository. We have two choices:
        </p>

        <div className={styles.subsubheading}>
          1. Fetch the changes and then merge them
        </div>

        <p className={styles.para}>
          What is the difference then? In the first case, with{" "}
          <em>fetch and merge</em>, firstly you have to fetch the changes
          meaning only your tracking branch will be updated i.e{" "}
          <em>orgin/main</em> not <em>main</em>
        </p>

        <p className={styles.codeHead}>Fetch Command</p>
        <CodeBlock codeText={snippets.fetch} />

        <p className={styles.para}>
          Here you can log your remote branch and take a look at the changes
          before merging them with your local branch
        </p>

        <p className={styles.codeHead}>Merge Command</p>
        <CodeBlock codeText={snippets.merge} />

        <div className="text-4xl my-14 text-center font-bold">OR</div>

        <div className={styles.subsubheading}>2. Pull the changes</div>
        <p className={styles.para}>
          With <em>pull</em> you are essentially performing <em>fetch</em> and{" "}
          <em>merge</em> in a single command
        </p>

        <p className={styles.codeHead}>Pull Command</p>
        <CodeBlock codeText={snippets.pull} />

        <div className={`${styles.subsubheading} mt-16`}>
          3.3.1. You have done it!
        </div>
        <p className={styles.para}>
          Our project is ready! Open up vscode run the live server and look at
          it!
        </p>
        <p className={styles.para}>
          But hey what if there was a secret code like an API key that we had to
          use in the app. We can't be pushing our api keys in the public someone
          can misuse them! Apart from an API key what if you had a feature that
          interacted with bank accounts, what would you do to make the app work,
          have it on github for others to work on, but still keep your
          credentials safe?
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
