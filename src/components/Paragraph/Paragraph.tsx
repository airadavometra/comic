import { ReactNode } from "react";
import s from "./Paragraph.module.css";

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className={s.text}>{children}</p>
);
