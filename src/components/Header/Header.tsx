import WidthContainer from "@components/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@components/VisuallyHidden/VisuallyHidden";
import classNames from "classnames";
import { NavigationItem } from "@/types/navigationItem";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";
import { Menu } from "@icons/Menu";
import { Close } from "@icons/Close";

type HeaderProps = {
  navigation: NavigationItem[];
  selectedMenuItemId?: number;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu(): void;
};

export const Header = ({
  navigation,
  selectedMenuItemId,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.banner}>New pages every Friday!</div>
      <WidthContainer className={s.widthContainer}>
        <Link className={s.logo} to={"/"}>
          LOGO
          <VisuallyHidden>Home</VisuallyHidden>
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <LinkWithUnderline
                  href={path}
                  className={classNames(s.link, {
                    [s.selected]: id === selectedMenuItemId,
                  })}
                >
                  {title}
                  <div aria-hidden="true" className={s.hidden}>
                    {title}
                  </div>
                </LinkWithUnderline>
              </li>
            ))}
          </ul>
        </nav>
        <button className={s.menuButton} onClick={onToggleMobileMenu}>
          {isMobileMenuOpen ? (
            <Close className={s.menu} />
          ) : (
            <Menu className={s.menu} />
          )}
          <VisuallyHidden>Menu</VisuallyHidden>
        </button>
      </WidthContainer>
    </header>
  );
};
