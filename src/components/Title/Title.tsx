import { ReactNode } from "react";
import s from "./Title.module.css";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => (
  <h2 className={s.title}>{children}</h2>
);
