import React from "react";
import * as snippets from "./snippets";
import addCollab from "../../assets/add-collaborator.jpeg";
import clickSettings from "../../assets/click-settings.jpeg";
import collabSidebar from "../../assets/collab-sidebar.jpeg";
import * as styles from "../../styles";
import CodeBlock from "../../components/CodeBlock";
import CustomCheckbox from "../../components/CustomCheckbox";

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
            <div className="text-xl self-center font-bold">
              1. Go to your repository and open the settings tab
            </div>
            <img
              className={`${styles.imgTransition} skew-y-3 mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2`}
              src={clickSettings}
              alt="click-settings-image"
            />
          </div>

          <div className="second-image flex justify-center gap-10">
            <img
              className={`${styles.imgTransition} -skew-y-3 mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2`}
              src={collabSidebar}
              alt="collab-sidebar-image"
            />
            <div className="text-xl self-center font-bold">
              2. Open the collaborators section from the sidebar
            </div>
          </div>

          <div className="third-image flex justify-center gap-10">
            <div className="text-xl self-center font-bold m-0 basis-5/12">
              3. Click the add collaborators button you might be prompted to
              enter your password or maybe even 2FA. After that you will be able
              to add a collaborator by searching with their username.
            </div>
            <img
              className={`${styles.imgTransition} skew-y-3 mt-5 mb-2 mx-0 rounded-md self-center drop-shadow-2xl w-1/2`}
              src={addCollab}
              alt="add-collab-image"
            />
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
        <br className="my-3" />
        <div className={styles.subsubheading}>3.2.1. Clone Command</div>

        <div className={styles.warningBox}>
          Get out of your repository!! Clone outside of your repository!!
        </div>

        <p className={styles.codeHead}>
          1. Get out of your repository (Do this once only!)
        </p>
        <CodeBlock
          codeText={snippets.backwardCd}
          imp={true}
          outText={snippets.backwardCdOut}
        />

        <p className={styles.para}>
          The git clone command is used to create a copy of a specific
          repository or branch from a remote source to your local machine. It
          downloads all the files, branches, and commits, allowing you to work
          on the project locally.
        </p>

        <p className={styles.codeHead}>2. Simple clone</p>
        <CodeBlock
          codeText={snippets.clone}
          imp={true}
          outText={snippets.cloneOut}
        />

        <p className={styles.codeHead}>Clone with folder name </p>
        <CodeBlock
          codeText={snippets.cloneCustom}
          imp={false}
          outText={snippets.cloneCustomOut}
        />
        <p className={styles.para}>
          <strong>NOTE:</strong> This simply means that your friend's repository
          will be cloned under the name <em>my_folder</em>.
        </p>

        <div className={styles.subsubheading}>3.2.2. style.css</div>

        <div className={styles.warningBox}>
          Get inside your friend's repository
        </div>

        <p className={styles.codeHead}>3. Enter friend's directory</p>
        <CodeBlock
          codeText={snippets.cdFriend}
          imp={true}
          outText={snippets.cdFriendOut}
        />

        <p className={styles.codeHead}>4. Create a file style.css</p>
        <CodeBlock
          codeText={snippets.createStyles}
          imp={true}
          outText={snippets.createStylesOut}
        />
        <p className={styles.para}>
          {" "}
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
            href="https://github.com/craniacshencil/temp-style/blob/main/style.css"
            rel="noreferrer noopener"
          >
            {" "}
            this file{" "}
          </a>
        </div>

        <p className="text-2xl fancy-regular text-sky-200 my-7">
          Now try looking at the branches. What?!?! There's already a git
          repository here. Also look at the history of commits.
        </p>

        <div className="minor-self-evaluation flex-col gap-2">
          <CustomCheckbox labelName="What branches exist in the repository?" />
          <CustomCheckbox labelName="Look at the commit history" />
        </div>
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

        <p className="text-2xl text-sky-200 fancy-regular mb-4">
          Since we have a repository already, you know the drill. Add the file,
          commit it and push it.
        </p>

        <div className="minor-self-evaluation-2 flex-col gap-2">
          <CustomCheckbox labelName='"add" the styles.css file' />
          <CustomCheckbox labelName='"commit" with an appropriate message' />
          <CustomCheckbox labelName='"push" changes to the repository belonging to your friend' />
        </div>

        <p className={styles.para}>
          Wait, this isn't your repository, it isn't linked with your account
          but you still managed to successfully push changes to it, does git
          allow anyone to commit to any repository?
          <br />
          Is this allowed with every repository on Github?
        </p>
      </div>

      <div className="your-repo">
        <div className={`${styles.subheading} mb-5`}>
          3.3. Back to your repo
        </div>

        <CustomCheckbox labelName="Check your commit history to see your friend's changes" />

        <p className={styles.para}>
          Time to see the changes that your friend has made. What! Where are
          these changes? <em>style.css</em> is also nowhere to be seen. Where
          did we go wrong? All that work for nothing?
        </p>

        <p className={styles.para}>
          Chill out and open your github account and see the repository, it
          might answer your questions
        </p>

        <p className={styles.para}>
          All those changes have been made in the remote repository which don't
          get reflected directly in our remote repository. We have two choices:
        </p>

        <div className={styles.subsubheading}>
          1. Fetch the changes and then merge them
        </div>

        <p className={styles.codeHead}> Notice the state of branches</p>
        <CodeBlock
          codeText={snippets.logBeforeFetch}
          imp={false}
          outText={snippets.logBeforeFetchOut}
        />

        <p className={styles.para}>
          What is the difference then? In the first case, with{" "}
          <em>fetch and merge</em>, firstly you have to fetch the changes
          meaning only your tracking branch will be updated i.e{" "}
          <em>orgin/main</em> not <em>main</em>
        </p>

        <p className={styles.codeHead}>Fetch Command</p>
        <CodeBlock
          codeText={snippets.fetch}
          imp={false}
          outText={snippets.fetchOut}
        />

        <p className={styles.codeHead}>Logging after fetch</p>
        <CodeBlock
          codeText={snippets.logAfterFetch}
          imp={false}
          outText={snippets.logAfterFetchOut}
        />

        <p className={styles.para}>
          {" "}
          Wait, the new commit is nowhere to be seen! Notice, how the{" "}
          <em>origin/main</em> tag from the previous <em>git log</em> has also
          disappeared. The fetch was successful but where is our friend's commit
          now?
        </p>

        <p className={styles.para}>
          With this method we can log our remote branch and take a look at the
          changes before merging them with our local branch
        </p>

        <p className={styles.codeHead}>Logging after fetch</p>
        <CodeBlock
          codeText={snippets.specialLog}
          imp={false}
          outText={snippets.specialLogOut}
        />

        <p className={styles.codeHead}>Merge Command</p>
        <CodeBlock
          codeText={snippets.merge}
          imp={false}
          outText={snippets.mergeOut}
        />

        <div className="text-4xl my-14 text-center font-bold">OR</div>

        <div className={styles.subsubheading}>2. Pull the changes</div>
        <p className={styles.para}>
          With <em>pull</em> you are essentially performing <em>fetch</em> and{" "}
          <em>merge</em> in a single command
        </p>

        <p className={styles.codeHead}>5. Pull Command</p>
        <CodeBlock
          codeText={snippets.pull}
          imp={true}
          outText={snippets.pullOut}
        />

        <div className={`${styles.subheading} mt-14`}>
          3.4. You have done it!{" "}
          <em className="line-through text-green-300">(or have you?)</em>
        </div>
        <p className={styles.para}>
          Our project is ready! Open up vscode run the live server and look at
          it!
        </p>

        <p className="text-sky-200 text-3xl fancy-bold my-5">
          You have forgotten to give yourself and your friend credits in the
          footer.
        </p>
        <div className="collab-activity flex flex-col gap-5 mb-7">
          <div className="friend-wrapper">
            <CustomCheckbox labelName="Friend's repo part" />
            <div className="friend-part-activity ml-10 mt-2 flex flex-col gap-2">
              <CustomCheckbox labelName="Enter your friend's repository" />
              <CustomCheckbox labelName="In index.html, change the names to include your and your friend's name" />
              <CustomCheckbox labelName='"add" the file' />
              <CustomCheckbox labelName='"commit" to the repository' />
              <CustomCheckbox labelName='"push" to the repository' />
            </div>
          </div>
          <div className="your-wrapper">
            <CustomCheckbox labelName="Your repo part" />
            <div className="friend-part-activity ml-10 mt-2 flex flex-col gap-3">
              <CustomCheckbox labelName="Enter your own repository" />
              <CustomCheckbox labelName="Fetch and merge your friend's changes" />
              <CustomCheckbox labelName="Show us your running site!" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
