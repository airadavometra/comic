import { Title } from "@components/Title/Title";
import s from "./LinksPage.module.css";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Rss } from "@icons/Rss";
import { Arrow } from "@icons/Arrow";
import { Instagram } from "@icons/Instagram";
import { Youtube } from "@icons/Youtube";
import { Mail } from "@icons/Mail";

export const LinksPage = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <section className={s.section}>
          <Title>RSS Feed</Title>
          <LinkWithUnderline href={""} className={s.link}>
            <Rss className={s.logo} />
            RSS Link
          </LinkWithUnderline>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Mirrors</Title>
            <Paragraph>
              Comic gets compensation for views on these platforms. If you use
              them, please subscribe!
            </Paragraph>
          </div>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            WebToon
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Tapas
          </LinkWithUnderline>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Support my work</Title>
            <Paragraph>
              If you enjoy this comic and want to support me financially,
              there&apos;s lots of ways to help!
            </Paragraph>
          </div>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Tip Jar
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Patreon
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Gumroad
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Amazon
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Arrow className={s.logo} />
            Art prints
          </LinkWithUnderline>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Stay tuned</Title>
            <Paragraph>
              On my socials I share announcements, comic related content and art
              tips. You don&apos;t wanna miss it!
            </Paragraph>
          </div>
          <LinkWithUnderline href={""} className={s.link}>
            <Instagram className={s.logo} />
            Instagram
          </LinkWithUnderline>
          <LinkWithUnderline href={""} className={s.link}>
            <Youtube className={s.logo} />
            YouTube
          </LinkWithUnderline>
        </section>
        <section className={s.section}>
          <div className={s.sectionTitle}>
            <Title>Share you feedback</Title>
            <Paragraph>
              Have some ideas, questions or just want to share your thoughts and
              chat with me? Simply email me!
            </Paragraph>
          </div>
          <LinkWithUnderline href={""} className={s.link}>
            <Mail className={s.logo} />
            Email
          </LinkWithUnderline>
        </section>
      </div>
      <div>Ads</div>
    </main>
  );
};
