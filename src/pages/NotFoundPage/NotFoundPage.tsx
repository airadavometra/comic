import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import s from "./NotFoundPage.module.css";
import { Title } from "@components/Title/Title";
import { Arrow } from "@icons/Arrow";

export const NotFoundPage = () => {
  return (
    <main className={s.main}>
      <Title>Sorry, page you are looking for does not exist...</Title>
      <div className={s.linkContainer}>
        <Arrow className={s.icon} />
        <LinkWithUnderline href={"/"} className={s.link}>
          Go back to main page
        </LinkWithUnderline>
      </div>
    </main>
  );
};
