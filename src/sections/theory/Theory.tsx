import React from "react";
import * as styles from "../../styles";
import * as snippets from "./snippets";
import gitJit from "../../assets/memes/0_0gitJit.webp";
import intro from "../../assets/memes/0_0intro.jpg";
import drive from "../../assets/memes/0_1drive.png";
import wordFiles from "../../assets/memes/0_4drivefile.png";
import whyGit from "../../assets/whyGit.jpeg";
import gitVGithub from "../../assets/gitVsGithub.jpeg";
import gitGithubMeme from "../../assets/memes/0_5gitVsGithub.webp";
import CodeBlock from "../../components/CodeBlock";
const Theory: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>0. Theory & Git Setup</div>
      <div className="flex justify-around">
        <img
          className={`${styles.imgTransition}`}
          src={gitJit}
          width={450}
          height={400}
          alt="git-jit"
        />
        <img
          className={`${styles.imgTransition}`}
          src={intro}
          width={600}
          alt="not-really-that-simple"
        />
      </div>
      <div className={styles.subheading}>0.1. Setup</div>
      <div className="setup-section">
        <p className="text-2xl fancy-bold text-sky-200">
          Open git bash and enter the following commands. For the entirety
          session we'll be using git bash.
        </p>

        <div className={styles.codeHead}>
          1. Git config for commiting and connecting to GitHub
        </div>

        <CodeBlock
          codeText={snippets.config}
          imp={true}
          outText={snippets.configOut}
        />

        <div className={styles.codeHead}>2. Verify username</div>
        <CodeBlock
          codeText={snippets.username}
          imp={true}
          outText={snippets.usernameOut}
        />

        <div className={styles.codeHead}>3. Verify email</div>
        <CodeBlock
          codeText={snippets.email}
          imp={true}
          outText={snippets.emailOut}
        />
      </div>
      <div className="theory-section">
        <div className={styles.subheading}>0.2. Why not Drive?</div>
        <div className="drive-section flex flex-col gap-10 items-center my-7">
          <img
            className={`${styles.imgTransition}`}
            src={drive}
            width={960}
            height={300}
            alt="drive-shenanigans"
          />
          <img
            className={`${styles.imgTransition}`}
            src={wordFiles}
            width={960}
            height={300}
            alt="drive-shenanigans"
          />
        </div>
        <div className={styles.subheading}>0.3. Why Git?</div>
        <div className="text-3xl fancy-bold my-7">
          It is a tool designed to help developers track changes to files over
          time.
        </div>

        <div className="drive-section flex flex-col gap-10 items-center my-7">
          <img
            className={`${styles.imgTransition}`}
            src={whyGit}
            width={960}
            alt="drive-shenanigans"
          />
        </div>

        <div className={styles.subheading}>0.4. What is a Repository?</div>
        <div className={styles.para}>
          It is not like a normal folder, which only keeps track of the latest
          state of all the files present in it. It is an <b>extension</b>
          of a normal folder, that keeps track of all the changes made by taking
          a snapshot of our folder. It not only allows us to look at these
          snapshots, but also to revert back to these snapshots.
        </div>
        <div className={styles.subheading}>0.5. Git vs Github</div>
        <div className="gitVGithub-section flex gap-10 justify-center my-12">
          <img
            className={`${styles.imgTransition}`}
            src={gitGithubMeme}
            width={400}
            alt="git-v-Github-Meme"
          />
          <img
            className={`${styles.imgTransition}`}
            src={gitVGithub}
            width={600}
            alt="git-v-github-info"
          />
        </div>
      </div>
    </section>
  );
};
export default Theory;
