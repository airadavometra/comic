import { Title } from "@components/Title/Title";
import s from "./AboutPage.module.css";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Subtitle } from "@components/Subtitle/Subtitle";

export const AboutPage = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <section className={s.section}>
          <Title>Synopsis</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </section>
        <section className={s.section}>
          <Title>Creator</Title>
          <div className={s.aboutCreator}>
            <div className={s.imagePlaceholder} />
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </section>
        <section className={s.section}>
          <div className={s.chaptersTitle}>
            <Title>The story so far...</Title>
            <Subtitle>SPOILER ALERT!</Subtitle>
          </div>
          <ul className={s.chaptersList}>
            <li className={s.chapter}>
              <Subtitle>Chapter 1</Subtitle>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </li>
            <li className={s.chapter}>
              <Subtitle>Chapter 2</Subtitle>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </li>
          </ul>
        </section>
      </div>
      <div>Ads</div>
    </main>
  );
};
