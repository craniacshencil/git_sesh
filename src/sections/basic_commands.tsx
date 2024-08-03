import * as snippets from "./snippets";
import CodeBlock from "../Code-block";
const BasicCommands = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className="p-1 border-b-2 border-white text-4xl fancy-regular">
        1. Basic git commands
      </div>

      <div className="init-command">
        <div className="pl-1 p-2 border-b-2 border-white text-3xl fancy-regular">
          1.1. Init
        </div>
        <p className="mt-10 text-2xl">
          This command creates a new Git repository in your current folder. It's
          like starting a new project where Git will keep track of all your
          changes.
        </p>
        <CodeBlock codeText={snippets.gitInit} />
        <p className="mt-10 text-2xl">
          <strong>NOTE</strong>: This will create a <em>.git</em> folder in your
          directory
        </p>
      </div>

      <div className="status-command">
        <div className="pl-1 p-2 border-b-2 border-white text-3xl fancy-regular">
          1.2. Status
        </div>
        <p className="mt-3 text-2xl">
          This command shows you the current state of your project. It tells you
          which files have changed and which ones are ready to be saved.
        </p>
      </div>

      <div className="add-command">
        <div className="pl-1 p-2 border-b-2 border-white text-3xl fancy-regular">
          1.3. Add
        </div>
        <p className="mt-10 text-2xl">
          This command tells Git to start keeping track of changes to a file.
          You use it to add files to your "staging area" before you save a
          snapshot of your project.
        </p>

        <p className="mt-10 text-2xl">You can add a specific file </p>
        <CodeBlock codeText={snippets.gitAddFile} />

        <p className="mt-10 text-2xl">You can add a specific folder</p>
        <CodeBlock codeText={snippets.gitAddDir} />

        <p className="mt-10 text-2xl">You can add all your unsaved files</p>
        <CodeBlock codeText={snippets.gitAddAll} />
      </div>

      <div className="commit-command">
        <div className="pl-1 p-2 border-b-2 border-white text-3xl fancy-regular">
          1.4. Commit
        </div>
        <p className="mt-3 text-2xl">
          This command saves a snapshot of the current state of your project.
          It's like taking a photo of your project at a certain point in time,
          so you can look back at it later.
        </p>
      </div>

      <div className="log-command">
        <div className="pl-1 p-2 border-b-2 border-white text-3xl fancy-regular">
          1.5. Log
        </div>
        <p className="mt-3 text-2xl">
          This command shows a list of all the snapshots (commits) you've taken.
          It's like a history of your project, showing all the changes you've
          made over time.
        </p>
      </div>
    </section>
  );
};

export default BasicCommands;
