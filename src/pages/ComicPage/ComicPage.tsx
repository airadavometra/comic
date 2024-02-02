import { useEffect, useState } from "react";
import s from "./ComicPage.module.css";
import { OnePageView } from "./OnePageView";
import { FullChapterView } from "./FullChapterView";
import { ReadingMode } from "@/types/readingMode";

export const ComicPage = () => {
  const [readingMode, setReadingMode] = useState<ReadingMode>(() => {
    const saved = localStorage.getItem("readingMode");
    return saved === "fullchapter" ? "fullchapter" : "onepage";
  });

  const [chapter, setChapter] = useState<number>(() => {
    const saved = localStorage.getItem("chapter");
    return saved ? Number(saved) : 1;
  });

  const [page, setPage] = useState<number>(() => {
    const saved = localStorage.getItem("page");
    return saved ? Number(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("readingMode", readingMode);
  }, [readingMode]);

  useEffect(() => {
    localStorage.setItem("chapter", chapter.toString());
    // Do this only if reading mode is fullchapter
    localStorage.setItem("page", "1");
  }, [chapter]);

  useEffect(() => {
    // Add logic for the last/first page in chapter if it's onepage reading mode.
    // In this case we need to change chapter too.
    localStorage.setItem("page", page.toString());
  }, [page]);

  return (
    <main className={s.main}>
      <div className={s.controllers}></div>
      {readingMode === "onepage" ? <OnePageView /> : <FullChapterView />}
      <div>Ads</div>
    </main>
  );
};
