import React from "react";
import * as styles from "../../styles";
import * as snippets from "./snippets";
const Activity: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-4">
      <div className={styles.heading}>6. Fork & Final Activity</div>
      <p className="text-2xl text-sky-200 fancy-regular my-5">
        This is an activity that brings together all, if not most of the
        concepts that we have learnt. At the end of this you would have a cool
        looking portfolio, that will be deployed on the internet for everyone to
        see!
        <br className="mb-5" />
        But to start it off, you need to powerful Github utility: <em>fork</em>.
      </p>

      <div className="fork-bit">
        <div className={styles.subheading}>6.1. Fork Utility</div>
        <p className={styles.para}>
          Forking a repository on GitHub creates a personal copy of someone
          else's project in your own GitHub account. This allows you to freely
          experiment with changes without affecting the original repository.
        </p>

        <p className={styles.subheading}>
          6.2. Difference b/w forking and cloning
        </p>
        <p className={styles.para}>
          <strong>Fork: </strong>Fork is a <strong>Github utility</strong> that
          allows you to create a copy of someone else's repository. It creates a{" "}
          <strong>remote repository</strong>. That you can then{" "}
          <strong>clone and work with locally</strong>. You can make pull
          requests from your <strong>fork</strong>.
        </p>
        <p className={styles.para}>
          <strong>Clone: </strong>Clone is a <strong>Git command</strong> that
          also allows you to create a copy of someone else's repository.
          However, it creates a <strong>local repository</strong>. That you can
          then <strong>push and make it remote</strong>. You cannot make pull
          requests from here.
        </p>
      </div>

      <div className="activity-bit">
        <p className={styles.subheading}>6.3. Final Activity Checklist</p>
        <br className="my-4" />
        <div className={styles.infoBox}>
          Psst! You need to fork{" "}
          <a
            className="cursor-pointer mt-2 text-2xl text-sky-300 hover:text-sky-200"
            target="_blank"
            href="https://github.com/blacklytning/blacklytning.github.io"
            rel="noreferrer noopener"
          >
            this repository{" "}
          </a>
        </div>
        <br className="my-3" />

        <p className={styles.subsubheading}>6.3.1. Task List</p>
        <div className="actual-list flex flex-col gap-2">
          <div>
            <input className="h-5" type="checkbox" id="task1" name="task1" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task1">
              Fork the repo aforementioned repo
            </label>
          </div>

          <div>
            <input className="h-5" type="checkbox" id="task2" name="task2" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task2">
              Clone your fork
            </label>
          </div>

          <div>
            <input className="h-5" type="checkbox" id="task3" name="task3" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task3">
              Make the following changes
            </label>
          </div>

          <div style={{ marginLeft: "20px" }} className="flex flex-col gap-1">
            <div>
              <input
                className="h-5"
                type="checkbox"
                id="task2z"
                name="task2z"
              />
              <label className="pl-3 text-2xl fancy-regular" htmlFor="task2z">
                Change Title (on/near line 18 in <em>index.html</em>)
              </label>
            </div>

            <div>
              <input
                className="h-5"
                type="checkbox"
                id="task3a"
                name="task3a"
              />
              <label className="pl-3 text-2xl fancy-regular" htmlFor="task3a">
                Change Name (on/near line 125 in <em>index.html</em>)
              </label>
            </div>

            <div>
              <input
                className="h-5"
                type="checkbox"
                id="task3b"
                name="task3b"
              />
              <label className="pl-3 text-2xl fancy-regular" htmlFor="task3b">
                Change Image (on/near line 125 in <em>index.html</em>)
              </label>
            </div>

            <div>
              <input
                className="h-5"
                type="checkbox"
                id="task3c"
                name="task3c"
              />
              <label className="pl-3 text-2xl fancy-regular" htmlFor="task3c">
                Change Footer (on/near line 142 in <em>index.html</em>)
              </label>
            </div>

            <div>
              <input
                className="h-5"
                type="checkbox"
                id="task3d"
                name="task3d"
              />
              <label className="pl-3 text-2xl fancy-regular" htmlFor="task3d">
                Change links point them to your socials (on/near line 130 in{" "}
                <em>index.html</em>)
              </label>
            </div>
          </div>

          <div>
            <input type="checkbox" id="task4" name="task4" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task4">
              Add your changes
            </label>
          </div>
          <div>
            <input type="checkbox" id="task5" name="task5" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task5">
              Commit your changes with an appropriate message{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" id="task6" name="task6" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task6">
              Push your changes to your repo
            </label>
          </div>
          <div className="mb-5">
            <input type="checkbox" id="task7" name="task7" />
            <label className="pl-3 text-2xl fancy-regular" htmlFor="task7">
              Deploy it using Github Pages
            </label>
          </div>
        </div>

        <div className={styles.subsubheading}>6.1.2. Final Goodbye!</div>
        <p className="text-2xl text-sky-200 fancy-regular">
          Finally, no further tasks left we are done. Hope you learnt something,
          had fun but more importantly are excited about code and engineering in
          general! You father never was, is and will never be, but I am proud of
          you random person.
        </p>
      </div>
    </section>
  );
};

export default Activity;
