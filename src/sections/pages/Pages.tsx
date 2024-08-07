import React from "react";
import * as styles from "../../styles";
import clickSettings from "../../assets/click-settings.jpeg";
import pagesSidebar from "../../assets/pages-sidebar.jpeg";
import deploySettings from "../../assets/deploy-settings.jpeg";

const Pages: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-7">
      <div className={styles.heading}>5. Deploying with Github-pages</div>

      <p className={styles.para}>
        Our website is only available on our local machines. Nobody else can see
        it, except for us and that too only on our machine. By "deploying", we
        are deploying our website for anyone on the internet to see and Github
        provides us with <em>Github pages</em> to directly push our website to
        the entire internet for everyone to see!
      </p>
      <div className={styles.subheading}>5.1. Steps to deploy</div>
      <div className="image-bit flex flex-col gap-10 w-full">
        <div className="first-image flex justify-between">
          <img
            className={`${styles.imgTransition} -skew-y-3 mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2`}
            src={clickSettings}
            alt="click-settings-image"
          />
          <div className="text-xl self-center font-bold">
            1. Go to your repository and open the settings tab
          </div>
        </div>

        <div className="second-image flex justify-between">
          <div className="text-xl self-center font-bold">
            2. Open the pages tab from the sidebar
          </div>
          <img
            className={`${styles.imgTransition} skew-y-3 mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2`}
            src={pagesSidebar}
            alt="pages-sidebar-image"
          />
        </div>

        <div className="third-image flex justify-between gap-16">
          <img
            className={`${styles.imgTransition} -skew-y-3 mt-5 mb-2 rounded-md drop-shadow-2xl w-1/2`}
            src={deploySettings}
            alt="deploy-settings-image"
          />
          <div className="text-xl self-center font-bold basis-1/2">
            3. Select <em>Deploy from a branch</em> with <em>main</em> and{" "}
            <em>root folder</em> options.
          </div>
        </div>

        <div className="text-xl self-center font-bold">
          4. Go to your repository click on the actions tab and look at your
          published website.
        </div>
      </div>
      <div className={styles.para}>
        <strong className="text-2xl text-sky-200 fancy-regular">
          Voila! We are done, you just published your first website to the
          entire internet (maybe not for some of you). It is available for the
          general public to view and use, not just on your local machine.
        </strong>
      </div>
    </section>
  );
};

export default Pages;
