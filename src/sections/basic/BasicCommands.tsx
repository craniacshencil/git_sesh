import * as snippets from "./snippets";
import CodeBlock from "../CodeBlock";
import * as styles from "../../styles";
const BasicCommands = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>1. Basic git commands</div>

      <div className="init-command">
        <div className={styles.subheading}>1.1. Init</div>
        <p className={styles.para}>
          This command creates a new Git repository in your current folder. It's
          like starting a new project where Git will keep track of all your
          changes.
        </p>

        <p className={styles.codeHead}>Initialize a repository</p>
        <CodeBlock codeText={snippets.gitInit} />
        <p className={styles.para}>
          <strong>NOTE</strong>: This will create a <em>.git</em> folder in your
          directory
        </p>
      </div>

      <div className="status-command">
        <div className={styles.subheading}>1.2. Status</div>
        <p className={styles.para}>
          This command shows you the current state of your project. It tells you
          which files have changed and which ones are ready to be saved.
        </p>

        <p className={styles.codeHead}>Check status of all files</p>
        <CodeBlock codeText={snippets.gitStatus} />

        <p className={styles.para}>
          <div className={styles.subsubheading}>1.2.1. File statuses:</div>
          <div className="flex gap-2 flex-col">
            <div>
              <strong>Untracked files: </strong>These files are new and have
              never been a part of the repository
            </div>
            <div>
              <strong>Changes not staged for commit: </strong>These files are
              from a previous <em>commit</em> and have been a part of the
              repository, they have changed since the previous commit and will{" "}
              <strong>NOT</strong> be commited unless you <em>add</em> them
            </div>
          </div>
        </p>
      </div>

      <div className="add-command">
        <div className={styles.subheading}>1.3. Add</div>
        <p className={styles.para}>
          This command tells Git to start keeping track of changes to a file.
          You use it to add files to your "staging area" before you save a
          snapshot of your project.
        </p>

        <p className={styles.codeHead}>Add a specific file </p>
        <CodeBlock codeText={snippets.gitAddFile} />

        <p className={styles.codeHead}>Add a specific folder</p>
        <CodeBlock codeText={snippets.gitAddDir} />

        <p className={styles.codeHead}>You can add all your unsaved files</p>
        <CodeBlock codeText={snippets.gitAddAll} />

        <p className={styles.codeHead}>
          In case you've added a untracked file that you didn't want to add
        </p>
        <CodeBlock codeText={snippets.gitRestore} />

        <p className={styles.codeHead}>
          In case you've added a tracked file that you didn't want to add
        </p>
        <CodeBlock codeText={snippets.gitRestoreStaged} />
      </div>

      <div className="commit-command">
        <div className={styles.subheading}>1.4. Commit</div>
        <p className={styles.para}>
          This command saves a snapshot of the current state of your project.
          It's like taking a photo of your project at a certain point in time,
          so you can look back at it later.
        </p>

        <p className={styles.codeHead}>Simplest commit</p>
        <CodeBlock codeText={snippets.commit} />

        <p className={styles.codeHead}>Commit with a message</p>
        <CodeBlock codeText={snippets.commitWithMessage} />

        <p className={styles.codeHead}>
          Commit with a message and a description
        </p>
        <CodeBlock codeText={snippets.commitWithDescription} />

        <div className={styles.subsubheading}>Bad Commits</div>
        <p className={styles.para}>
          Commits should be descriptive, on reading the commit you should be
          able to know what changes have been made. When something breaks and
          you have no idea when it has broken, good commit messages can be your
          saviour.
        </p>

        <div className="my-5 flex flex-col gap-2 text-xl">
          <div>1. Make small and many commits</div>
          <div>2. Always commit when you have added something meaningful</div>
          <div>
            3. Use an Imperative tone and start your commits with a verb
          </div>
          <div>
            4. Alternatively, you can stick to a commit methodology like: &nbsp;
            <a
              className="cursor-pointer text-sky-300 hover:text-sky-200"
              target="_blank"
              href="https://www.conventionalcommits.org/en/v1.0.0/"
              rel="noreferrer noopener"
            >
              Conventional Commits
            </a>
          </div>
          <div>
            <strong>BONUS: </strong>An{" "}
            <a
              className="cursor-pointer text-sky-300 hover:text-sky-200"
              target="_blank"
              href="https://www.theodinproject.com/lessons/foundations-commit-messages"
              rel="noreferrer noopener"
            >
              Odin Project
            </a>{" "}
            article for good commits
          </div>
        </div>

        <div>
          <div className={styles.subsubheading}>Some Examples:</div>
          <a
            className="cursor-pointer block mt-2 text-xl text-sky-300 hover:text-sky-200"
            target="_blank"
            href="https://github.com/craniacshencil/got-to-do/commits/main/"
            rel="noreferrer noopener"
          >
            How good commits look like
          </a>
          <a
            className="cursor-pointer block mt-2 text-xl text-sky-300 hover:text-sky-200"
            target="_blank"
            href="https://github.com/craniacshencil/newbazaar/commits/main/?after=7ca775727c1292c909f5e5d9026ee57f11c231c8+34"
            rel="noreferrer noopener"
          >
            How bad commits look like
          </a>
        </div>
      </div>

      <div className="log-command">
        <div className={styles.subheading}>1.5. Log</div>
        <p className={styles.para}>
          This command shows a list of all the snapshots (commits) you've taken.
          It's like a history of your project, showing all the changes you've
          made over time.
        </p>

        <p className={styles.codeHead}>Default log</p>
        <CodeBlock codeText={snippets.log} />
        <p className={styles.codeHead}>Oneline log</p>
        <CodeBlock codeText={snippets.onelineLog} />
        <div className={styles.para}>
          <strong>NOTE</strong>: To get out of logs hit <em>q</em> on your
          keyboard, git log follows{" "}
          <a
            className="cursor-pointer mt-2 text-xl text-sky-300 hover:text-sky-200"
            target="_blank"
            href="https://en.wikipedia.org/wiki/Vim_(text_editor)"
            rel="noreferrer noopener"
          >
            vim
          </a>{" "}
          bindings
        </div>
      </div>
    </section>
  );
};

export default BasicCommands;
