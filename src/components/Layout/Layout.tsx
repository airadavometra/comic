import { ReactNode, useEffect, useState } from "react";
import s from "./Layout.module.css";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { NavigationItem } from "@/types/navigationItem";
import { useLocation } from "react-router-dom";

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
    console.log(location);
  }, [location]);

  return (
    <div id="layout" className={s.layout}>
      <Header
        navigation={navigation}
        selectedMenuItemId={selectedMenuItemId}
        onOpenMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {children}
      <Footer />
    </div>
  );
};
