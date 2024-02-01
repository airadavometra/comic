import { ReactNode } from "react";
import s from "./Subtitle.module.css";

type SubtitleProps = {
  children: ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => (
  <h3 className={s.subtitle}>{children}</h3>
);
