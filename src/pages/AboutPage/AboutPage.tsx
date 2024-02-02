import { Title } from "@components/Title/Title";
import s from "./AboutPage.module.css";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Subtitle } from "@components/Subtitle/Subtitle";
import { comicInfo } from "@/data/comic";

export const AboutPage = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <section className={s.section}>
          <Title>Synopsis</Title>
          <Paragraph>{comicInfo.synopsis}</Paragraph>
        </section>
        <section className={s.section}>
          <Title>Creator</Title>
          <div className={s.aboutCreator}>
            <div className={s.imagePlaceholder} />
            <Paragraph>{comicInfo.creator.bio}</Paragraph>
          </div>
        </section>
        <section className={s.section}>
          <div className={s.chaptersTitle}>
            <Title>The story so far...</Title>
            <Subtitle>SPOILER ALERT!</Subtitle>
          </div>
          <ul className={s.chaptersList}>
            {comicInfo.chapters.map((chapter) => (
              <li className={s.chapter} key={chapter.id}>
                <Subtitle>{chapter.title}</Subtitle>
                <Paragraph>{chapter.description}</Paragraph>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>Ads</div>
    </main>
  );
};
