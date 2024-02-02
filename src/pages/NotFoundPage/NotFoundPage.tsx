import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import s from "./NotFoundPage.module.css";
import { Arrow } from "@icons/Arrow";

export const NotFoundPage = () => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>404</h1>
      <span>Sorry, page you are looking for does not exist...</span>
      <div className={s.linkContainer}>
        <Arrow className={s.icon} />
        <LinkWithUnderline href={"/"}>Go back to main page</LinkWithUnderline>
      </div>
    </main>
  );
};
