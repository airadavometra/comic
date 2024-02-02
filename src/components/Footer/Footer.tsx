import WidthContainer from "@components/WidthContainer/WidthContainer";
import s from "./Footer.module.css";
import { Heart } from "@icons/Heart";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import classNames from "classnames";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.message}>
          <span className={s.transparent}>Made with</span>
          <Heart className={classNames(s.heart, s.transparent)} />
          <span className={s.transparent}>by</span>
          <LinkWithUnderline
            href="https://www.airadavometra.space/"
            className={s.link}
          >
            Daria
          </LinkWithUnderline>
        </div>
        <span className={s.transparent}>2024</span>
      </WidthContainer>
    </footer>
  );
};
