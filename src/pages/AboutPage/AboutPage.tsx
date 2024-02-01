import s from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <main>
      <div className={s.pageContainer}>
        <div className={s.content}>
          <section className={s.section}>
            <h2 className={s.title}>Synopsis</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section className={s.section}>
            <h2 className={s.title}>Creator</h2>
            <div className={s.aboutCreator}>
              <div className={s.imagePlaceholder} />
              <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className={s.section}>
            <div className={s.chaptersTitle}>
              <h2 className={s.title}>The story so far...</h2>
              <span className={s.subtitle}>SPOILER ALERT!</span>
            </div>
            <ul className={s.chaptersList}>
              <li className={s.chapter}>
                <h3 className={s.subtitle}>Chapter 1</h3>
                <p className={s.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </li>
              <li className={s.chapter}>
                <h3 className={s.subtitle}>Chapter 2</h3>
                <p className={s.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div>Ads</div>
      </div>
    </main>
  );
};
