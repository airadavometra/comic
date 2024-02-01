import classNames from "classnames";
import { Link } from "react-router-dom";
import s from "./LinkWithUnderline.module.css";
import { WithClassName } from "@/types/withClassName";
import { ReactNode } from "react";

type LinkWithUnderlineProps = WithClassName & {
  href: string;
  children: ReactNode;
};

export const LinkWithUnderline = ({
  href,
  className,
  children,
}: LinkWithUnderlineProps) => {
  return (
    <Link
      to={href}
      className={classNames(s.link, className)}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
