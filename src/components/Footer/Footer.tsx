import WidthContainer from "@components/WidthContainer/WidthContainer";
import s from "./Footer.module.css";
import { Heart } from "@icons/Heart";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <WidthContainer className={s.textContainer}>
        <div>
          <span className={s.transparent}>
            Made with <Heart className={s.heart} /> by{" "}
          </span>
          <LinkWithUnderline
            href="https://www.airadavometra.space/"
            className={s.link}
          >
            Daria
          </LinkWithUnderline>
        </div>
        <span className={s.transparent}>2023</span>
      </WidthContainer>
    </footer>
  );
};
