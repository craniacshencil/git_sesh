import * as snippets from "./snippets";
import CodeBlock from "../../components/CodeBlock";
import * as styles from "../../styles";
import cmdGui from "../../assets/memes/1_1cmdVGui.webp";
import badCommit from "../../assets/memes/1_4badCommit.webp";
import commitThink from "../../assets/memes/1_4commitThink.webp";
import CustomCheckbox from "../../components/CustomCheckbox";
const BasicCommands = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>1. Basic git commands</div>
      <div className={styles.infoBox}>
        Psst! You need to download
        <a
          className="cursor-pointer mt-2 text-2xl text-sky-300 hover:text-sky-200"
          target="_blank"
          href="https://github.com/craniacshencil/temp-converter"
          rel="noreferrer noopener"
        >
          {" "}
          this folder{" "}
        </a>
        to continue
      </div>

      <div className="init-meme-section flex gap-10 items-center my-7">
        <img
          className={`${styles.imgTransition} self-start`}
          src={cmdGui}
          width={300}
          alt="cmd-gui"
        />
        <div className="init-command">
          <div className={styles.subheading}>1.1. Init</div>
          <p className={styles.para}>
            This command creates a new Git repository in your current folder.
            It's like starting a new project where Git will keep track of all
            your changes.
          </p>

          <p className={styles.codeHead}>1. Initialize a repository</p>
          <CodeBlock
            codeText={snippets.gitInit}
            imp={true}
            outText={snippets.gitInitOut}
          />
          <p className={styles.para}>
            <strong>NOTE</strong>: This will create a <em>.git</em> folder in
            your directory
          </p>
        </div>
      </div>

      <div className="status-command">
        <div className={styles.subheading}>1.2. Status</div>
        <p className={styles.para}>
          This command shows you the current state of your project. It tells you
          which files have changed and which ones are ready to be saved.
        </p>

        <p className={styles.codeHead}>2. Check status of all files</p>
        <CodeBlock
          codeText={snippets.gitStatus}
          imp={true}
          outText={snippets.gitStatusOut}
        />

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

        <p className={styles.codeHead}>3. Add a specific file </p>
        <CodeBlock
          codeText={snippets.gitAddFile}
          imp={true}
          outText={snippets.gitAddFileOut}
        />

        <div className={styles.infoBox}>
          Psst! You need to go commit now!
          <a
            className="cursor-pointer mt-2 text-2xl text-sky-300 hover:text-sky-200"
            href="#commit-with-message"
          >
            {" "}
            run this command{" "}
          </a>
          to continue
        </div>

        <p className={styles.codeHead}>Add a specific folder</p>
        <CodeBlock
          codeText={snippets.gitAddDir}
          imp={false}
          outText={snippets.gitAddDirOut}
        />

        <p className={styles.codeHead}>
          5. You can add all your unsaved files from the root of your project
        </p>
        <CodeBlock
          codeText={snippets.gitAddAll}
          imp={true}
          outText={snippets.gitAddAllOut}
        />

        <div className={styles.infoBox}>
          Psst! You need to go commit again!
          <a
            className="cursor-pointer mt-2 text-2xl text-sky-300 hover:text-sky-200"
            href="#commit-with-desc"
          >
            {" "}
            run this new command{" "}
          </a>
        </div>
      </div>

      <div className="commit-command">
        <div className={styles.subheading}>1.4. Commit</div>
        <p className={styles.para}>
          This command saves a snapshot of the current state of your project.
          It's like taking a photo of your project at a certain point in time,
          so you can look back at it later.
        </p>

        <div className="init-meme-section flex gap-10 items-center my-7">
          <img
            className={styles.imgTransition}
            src={commitThink}
            width={300}
            alt="cmd-gui"
          />
          <img
            className={styles.imgTransition}
            src={badCommit}
            width={800}
            alt="cmd-gui"
          />
        </div>

        <p id="commit-with-message" className={styles.codeHead}>
          4. Commit with a message{" "}
          <em className="text-sky-200">
            (Run this one after adding index.html)
          </em>
        </p>

        <CodeBlock
          codeText={snippets.commitWithMessage}
          imp={true}
          outText={snippets.commitWithMessageOut}
        />

        <p id="commit-with-desc" className={styles.codeHead}>
          6. Commit with a message and a description
          <em className="text-sky-200">
            {" "}
            (Run this one after adding all files)
          </em>
        </p>

        <CodeBlock
          codeText={snippets.commitWithDescription}
          imp={true}
          outText={snippets.commitWithDescriptionOut}
        />

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
            3. Keep your commit title upto 50 characters max, talk in detail in
            the description
          </div>
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

        <p className={styles.codeHead}>7. Default log</p>
        <CodeBlock
          codeText={snippets.log}
          imp={true}
          outText={snippets.logOut}
        />
        <p className={styles.codeHead}>8. Oneline log</p>
        <CodeBlock
          codeText={snippets.onelineLog}
          imp={true}
          outText={snippets.onelineLogOut}
        />
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

      <div className="diff-command">
        <div className={styles.subheading}>1.6. Diff</div>
        <p className={styles.para}>
          The <em>diff</em> command shows changes between the working directory
          and the index, or between different commits. It highlights
          line-by-line differences, helping to review code changes before
          committing. This command is essential for tracking modifications and
          ensuring code quality in Git repositories.
        </p>

        <p className={styles.para}>
          As mentioned above, make changes in one of your files and run git
          diff. (If you can see colors in the terminal) The green lines mention
          the addtions that you've done in the file after the commit.
          Conversely, the red lines represent the deletions that you've made in
          the file since the commit.
        </p>

        <p className={styles.codeHead}>9. Simple diff command</p>
        <CodeBlock
          codeText={snippets.diff}
          imp={true}
          outText={snippets.diffOut}
        />

        <div className="activity-section mb-10">
          <div className={styles.subheading}>1.7. Activity-1</div>
          <p className="py-7 text-3xl text-sky-200 fancy-bold">
            Time for a test, Lets see <em>git diff</em> in action!
          </p>
          <div className="first-activity-steps flex flex-col gap-2">
            <CustomCheckbox labelName="Remove the goofy line (last line) from the README.md" />
            <CustomCheckbox labelName="Write your own line in README.md" />
            <CustomCheckbox labelName='"diff" the file to see the modifications since last commit (tell us what you see)' />
            <CustomCheckbox labelName='"add" the file to your local repository' />
            <CustomCheckbox labelName='Make a "commit" with an appropriate message' />
            <CustomCheckbox labelName='Confirm the commit by looking at the "log"' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicCommands;
