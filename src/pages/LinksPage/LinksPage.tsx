import { Title } from "@components/Title/Title";
import s from "./LinksPage.module.css";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Rss } from "@icons/Rss";
import { Arrow } from "@icons/Arrow";
import { Instagram } from "@icons/Instagram";
import { Youtube } from "@icons/Youtube";
import { Mail } from "@icons/Mail";
import classNames from "classnames";

export const LinksPage = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <section className={s.section}>
          <Title>RSS Feed</Title>
          <ul className={s.linksList}>
            <li className={s.linkContainer}>
              <Rss className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                RSS Link
              </LinkWithUnderline>
            </li>
          </ul>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Mirrors</Title>
            <Paragraph>
              Comic gets compensation for views on these platforms. If you use
              them, please subscribe!
            </Paragraph>
          </div>
          <ul className={s.linksList}>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                WebToon
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Tapas
              </LinkWithUnderline>
            </li>
          </ul>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Support my work</Title>
            <Paragraph>
              If you enjoy this comic and want to support me financially,
              there&apos;s lots of ways to help!
            </Paragraph>
          </div>
          <ul className={s.linksList}>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Tip Jar
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Patreon
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Gumroad
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Amazon
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Arrow className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Art prints
              </LinkWithUnderline>
            </li>
          </ul>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Stay tuned</Title>
            <Paragraph>
              On my socials I share announcements, comic related content and art
              tips. You don&apos;t wanna miss it!
            </Paragraph>
          </div>
          <ul className={s.linksList}>
            <li className={s.linkContainer}>
              <Instagram className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                Instagram
              </LinkWithUnderline>
            </li>
            <li className={s.linkContainer}>
              <Youtube className={s.logo} />
              <LinkWithUnderline href={""} className={s.link}>
                YouTube
              </LinkWithUnderline>
            </li>
          </ul>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Share you feedback</Title>
            <Paragraph>
              Have some ideas, questions or just want to share your thoughts and
              chat with me? Simply email me!
            </Paragraph>
          </div>
          <ul className={s.linksList}>
            <li className={s.linkContainer}>
              <Mail className={s.logo} />
              <span className={classNames(s.link, s.email)}>
                example@mail.com
              </span>
            </li>
          </ul>
        </section>
      </div>
      <div>Ads</div>
    </main>
  );
};
