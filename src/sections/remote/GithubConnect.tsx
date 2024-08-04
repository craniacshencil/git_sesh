import React from "react";
import * as snippets from "./snippets";
import CodeBlock from "../CodeBlock";
import * as styles from "../../styles";
import createRepo from "../../assets/create-repo.jpeg";
import copyLink from "../../assets/copy-link.jpeg";

const GithubConnect: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>2. Connecting to Github</div>

      <div className="create-repo">
        <div className={styles.subheading}>
          2.1. Create a Github repo(without a README.md)
        </div>
        <div className="flex justify-center">
          <img
            className="m-5 rounded-md drop-shadow-2xl"
            src={createRepo}
            alt="create-repo-image"
            width={400}
            height={300}
          />
          <div className={`${styles.para} self-center`}>
            Create a repository from the sidebar on homepage
            <br />
            named{" "}
            <strong>
              <em>firstName-temp-converter</em>
            </strong>
            <br />
            <strong>(Stick to this name & Make sure you are logged in!)</strong>
          </div>
        </div>
      </div>

      <div className="add-remote-repo">
        <div className={styles.subheading}>
          2.2. Connecting to our remote repo
        </div>
        <p className={styles.para}>
          Here we are basically taking our local repository that we have been
          working on and publishing it as a remote repository. This is where
          other people/teammates can look at your work. Also in case you end up
          deleting your project from your machine, you can always get back your
          work from here.
        </p>

        <div className="remote-repo-link">
          <div className={styles.subsubheading}>
            2.1.1. Get your remote repo link from here
          </div>
          <div className="flex justify-center">
            <img
              className="m-5 rounded-md drop-shadow-2xl"
              src={copyLink}
              alt="copy-link-image"
              width={400}
              height={300}
            />
            <div className={`${styles.para} self-center`}>
              This <em>https</em> link points to your remote repository, which
              right now is empty.
              <br />
            </div>
          </div>

          <p className={styles.codeHead}>Add remote repository</p>
          <CodeBlock codeText={snippets.addRemote} />

          <p className={styles.codeHead}>Verify remote repository</p>
          <CodeBlock codeText={snippets.verifyRemote} />

          <p className={styles.para}>
            So now we have successfully connected to our remote repository! We
            can now make changes in our local repository that can be{" "}
            <strong>pushed</strong> to this remote repository.
          </p>
        </div>

        <div className="main-branch-bit">
          <p className={styles.codeHead}>
            (OPTIONAL) Rename our branch to main
          </p>
          <CodeBlock codeText={snippets.modifyMain} />
          <p className={styles.para}>
            <strong>NOTE:</strong> <em>-M</em> is the <strong>Modify</strong>{" "}
            flag, here we are changing the name of our branch to <em>main</em>{" "}
            from <em>master</em>. However this was done because back in the day
            the default git branch was named <em>master</em> now the default
            branch is <em>main</em>, making this command redundant. But running
            this command will not create any issues nonetheless.
          </p>

          <p className={styles.codeHead}>(OPTIONAL) Check your branch's name</p>
          <CodeBlock codeText={snippets.branchName} />
        </div>

        <div className="push-to-repo">
          <p className={styles.codeHead}>Push your commits to the repo</p>
          <CodeBlock codeText={snippets.pushUpstream} />
          <p className={styles.para}>
            <strong>NOTE:</strong> <em>-u</em> is the{" "}
            <strong>--set-upstream</strong> flag, here we are telling git that
            the <em>main</em> branch of our remote repository should
            mirror/track the branch of our local repository that we are pushing
            from, which also happens to be <em>main</em>. We use this command
            only once because now git knows what our local branch should
            correspond to, and it remembers it for us! So for all the commits
            that you plan on pushing from this point onwards on would look like
            this:
          </p>

          <p className={styles.codeHead}>
            Push your new commits from this point onwards
          </p>
          <CodeBlock codeText={snippets.push} />
        </div>
      </div>
    </section>
  );
};

export default GithubConnect;
