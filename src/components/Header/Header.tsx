import WidthContainer from "@components/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@components/VisuallyHidden/VisuallyHidden";
import classNames from "classnames";
import { NavigationItem } from "@/types/navigationItem";

type HeaderProps = {
  navigation: NavigationItem[];
  onOpenMenu(): void;
  onMenuItemClick: (newMenuItemId: number) => void;
};

export const Header = ({
  navigation,
  onOpenMenu,
  onMenuItemClick,
}: HeaderProps) => {
  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <Link className={s.logo} to={"/"}>
          LOGO
          <VisuallyHidden>Home</VisuallyHidden>
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <Link
                  to={path}
                  onClick={() => onMenuItemClick(id)}
                  className={classNames(s.link)}
                >
                  {title}
                </Link>
                <div aria-hidden="true" className={s.hidden}>
                  {title}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <button className={s.menuButton} onClick={onOpenMenu}>
          Menu
        </button>
      </WidthContainer>
    </header>
  );
};
