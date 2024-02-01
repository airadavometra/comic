import WidthContainer from "@components/WidthContainer/WidthContainer";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import { Heart } from "@icons/Heart";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <WidthContainer className={s.textContainer}>
        <div>
          <span className={s.transparent}>
            Made with <Heart className={s.heart} /> by{" "}
          </span>
          <Link
            to="https://www.airadavometra.space/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            Daria
          </Link>
        </div>
        <span className={s.transparent}>2023</span>
      </WidthContainer>
    </footer>
  );
};
