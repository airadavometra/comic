import { ReactNode, useEffect, useState } from "react";
import s from "./Layout.module.css";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { NavigationItem } from "@/types/navigationItem";
import { useLocation } from "react-router-dom";
import MobileMenu from "@components/MobileMenu/MobileMenu";
import WidthContainer from "@components/WidthContainer/WidthContainer";

type LayoutProps = {
  children?: ReactNode;
};

const navigation: NavigationItem[] = [
  { id: 0, title: "Comic", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Links", path: "/links" },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<
    number | undefined
  >();

  useEffect(() => {
    const selectedMenuItem = navigation.find(
      (nav) => nav.path === location.pathname
    );
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    } else {
      setSelectedMenuItemId(undefined);
    }
    setMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("frozen");
  };

  return (
    <>
      <div id="layout" className={s.layout}>
        <Header
          navigation={navigation}
          selectedMenuItemId={selectedMenuItemId}
          isMobileMenuOpen={isMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />
        {isMenuOpen && <MobileMenu navigation={navigation} />}
        <WidthContainer className={s.content}>{children}</WidthContainer>
        <Footer />
      </div>
    </>
  );
};
