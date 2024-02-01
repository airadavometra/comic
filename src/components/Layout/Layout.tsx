import { ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";
import { NavigationItem } from "@/types/navigationItem";

type LayoutProps = {
  children: ReactNode;
};

const navigation: NavigationItem[] = [
  { id: 0, title: "Comic", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Links", path: "/links" },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="layout" className={s.layout}>
      <Header
        navigation={navigation}
        onOpenMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
        onMenuItemClick={function (newMenuItemId: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      {children}
      <Footer />
    </div>
  );
};
