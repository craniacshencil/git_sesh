import React from "react";
import * as styles from "../../styles";
import ignoreCeption from "../../assets/memes/4_1mess.png";
import nodeModules from "../../assets/memes/forgotIgnore.jpg";

const Readme: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-7">
      <div className={styles.heading}>4. Exploring .gitignore & README.md</div>
      <p className="text-xl">
        But hey what if there was a secret code like an API key that we had to
        use in the app.
        <br className="my-2" />
        We can't be pushing our api keys in the public someone can misuse them!
        <br className="my-2" />
        Apart from an API key what if you had a feature that interacted with
        bank accounts, what would you do to make the app work, have it on github
        for others to work on, but still keep your credentials safe?
      </p>
      <div className="gitignore-bit">
        <div className={styles.subheading}>4.1. .gitignore in action</div>
        <p className={styles.para}>
          The <em>.gitignore</em> file specifies intentionally untracked files
          to be ignored by Git, preventing them from being included in version
          control. It helps manage files like build artifacts, dependency
          directories, and sensitive information such as configuration files.
          Each line in a .gitignore file represents a pattern that matches files
          and directories to be excluded from tracking.
        </p>
        <p className="flex flex-col gap-2">
          <div className="text-xl">
            1. Add a <em>top_secret.txt</em> file in your folder <br />
          </div>
          <div className="text-xl">
            2. Add it, and check its git status, what does it say? <br />
          </div>
          <div className="text-xl">
            3. Create a <em>.gitignore</em> file{" "}
            <strong>(Yes literally the file name is ".gitignore")</strong>
          </div>
        </p>

        <p className={styles.para}>
          <strong>NOTE</strong>: It is best practice to have your{" "}
          <em>.gitignore</em> in your root directory. However you can also add
          it in other directories within the repo.
        </p>

        <div className="flex justify-center gap-10 mb-7">
          <img
            className={`${styles.imgTransition} m-5 `}
            src={ignoreCeption}
            alt="ignore-ception-image"
            width={1200}
          />
          <img
            className={`${styles.imgTransition} m-5 `}
            src={nodeModules}
            alt="node-modules-image"
            width={400}
          />
        </div>

        <p className={styles.subsubheading}>
          4.1.1. A few Examples of <em>.gitignore</em> files serving different
          purposes{" "}
        </p>
        <p className="flex flex-col gap-2">
          <div className="text-xl">
            1. For libraries i.e dependency directories (also see patterns like
            '*' in here):
            <a
              className="cursor-pointer mt-2 text-xl text-sky-300 hover:text-sky-200"
              target="_blank"
              href="https://github.com/craniacshencil/medal-poll/blob/main/frontend/.gitignore"
              rel="noreferrer noopener"
            >
              {" "}
              right here
            </a>
          </div>

          <div className="text-xl">
            2. For configuration files with sensitive information:
            <a
              className="cursor-pointer mt-2 text-xl text-sky-300 hover:text-sky-200"
              target="_blank"
              href="https://github.com/craniacshencil/medal-poll/blob/main/backend/.gitignore"
              rel="noreferrer noopener"
            >
              {" "}
              right here
            </a>
          </div>

          <div className="text-xl">
            3. For compiled-files, or any other files that get dynamically
            generated like database migrations:
            <a
              className="cursor-pointer mt-2 text-xl text-sky-300 hover:text-sky-200"
              target="_blank"
              href="https://github.com/craniacshencil/java_training/blob/main/.gitignore"
              rel="noreferrer noopener"
            >
              {" "}
              right here
            </a>
          </div>
        </p>
      </div>

      <div className="readme-bit">
        <div className={styles.subheading}>4.2. About README.md</div>
        <p className={styles.para}>
          A <em>README.md</em> file on GitHub serves as the primary
          documentation for a project, providing an overview and essential
          details about the repository. Written in Markdown format, it typically
          includes sections like project description, installation instructions,
          usage examples, and contributing guidelines. This helps users and
          contributors understand the purpose and functionality of the project
          quickly.
        </p>
        <p className={styles.para}>
          Additionally, a well-crafted <em>README.md</em> enhances the
          repository's professionalism and accessibility, making it more
          appealing to potential users and collaborators. It can also include
          badges for build status, dependencies, and other metrics, adding a
          visual summary of the project's health and activity. Overall, a
          comprehensive <em>README.md</em> is a crucial component of any GitHub
          repository
        </p>
      </div>
    </section>
  );
};

export default Readme;
