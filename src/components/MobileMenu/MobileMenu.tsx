import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import s from "./MobileMenu.module.css";
import { LinkWithUnderline } from "@components/LinkWithUnderline/LinkWithUnderline";

type MobileMenuProps = {
  navigation: NavigationItem[];
};

const MobileMenu = ({ navigation }: MobileMenuProps) => {
  return (
    <div className={classNames(s.menuContainer)}>
      <nav className={s.menu}>
        <ul className={s.linksList}>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <LinkWithUnderline href={path} className={classNames(s.link)}>
                {title}
              </LinkWithUnderline>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
